/* =====================================================================
   THE STRAYS — Éditeur : sélection, déplacement, texte, pages, projet
   ===================================================================== */
(function () {
  const A = window.APP, S = A.S, $ = A.$;
  const book = $('#book'), selBar = $('#selBar');
  const isEdit = () => S.mode === 'edit';
  let targetPage = 1;            /* page concernée par les opérations */
  let editSnap = null;           /* instantané avant édition de texte */
  let savedRange = null;

  /* ---------------- Utilitaires ---------------- */
  const cur = () => (S.sel ? A.find(S.sel) : null);
  const elNode = (id) => book.querySelector(`.slot .el[data-id="${id}"]`);
  const pageEls = (i) => S.book.pages[i].els;
  const maxZ = (i) => pageEls(i).reduce((m, e) => Math.max(m, e.z || 1), 0);
  function visiblePages() { const [l, r] = A.pagesOf(S.spread); return [l, r].filter(x => x != null && x >= 0); }
  function syncTarget() {
    const v = visiblePages();
    if (!v.includes(targetPage)) targetPage = v[v.length - 1] ?? 0;
    fillPageTarget();
  }
  function select(id) {
    S.sel = id;
    book.querySelectorAll('.slot .el.sel').forEach(n => n.classList.remove('sel'));
    if (id) { const n = elNode(id); n && n.classList.add('sel'); const f = A.find(id); if (f) targetPage = f.i; }
    updateSelBar(); fillPageTarget();
  }
  function stopEditing() {
    const ed = book.querySelector('.el.editing');
    if (!ed) return;
    const f = A.find(ed.dataset.id), c = ed.querySelector('.el-c');
    c.contentEditable = 'false'; ed.classList.remove('editing');
    if (f && c.innerHTML !== f.el.html) {
      if (editSnap) { S.undo.push(editSnap); S.redo = []; }
      f.el.html = c.innerHTML; A.scheduleSave();
    }
    editSnap = null; savedRange = null;
  }
  /* Image -> dataURL redimensionné (évite de saturer le stockage) */
  function readImage(file, max = 1600) {
    return new Promise((res, rej) => {
      const fr = new FileReader();
      fr.onerror = () => rej(fr.error);
      fr.onload = () => {
        const img = new Image();
        img.onerror = () => rej(new Error('Image illisible'));
        img.onload = () => {
          const k = Math.min(1, max / Math.max(img.width, img.height));
          if (k === 1 && file.size < 900000) return res({ src: fr.result, w: img.width, h: img.height });
          const cv = document.createElement('canvas');
          cv.width = Math.round(img.width * k); cv.height = Math.round(img.height * k);
          cv.getContext('2d').drawImage(img, 0, 0, cv.width, cv.height);
          const png = file.type === 'image/png';
          res({ src: cv.toDataURL(png ? 'image/png' : 'image/jpeg', .86), w: cv.width, h: cv.height });
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }
  function pickFile(input) {
    return new Promise((res) => { input.value = ''; input.onchange = () => res(input.files[0] || null); input.click(); });
  }

  /* ---------------- Barre de sélection ---------------- */
  function updateSelBar() {
    const f = cur();
    selBar.classList.remove('has-text', 'has-img', 'has-any');
    if (!f) { $('#selLabel').textContent = 'Aucun élément sélectionné — double-cliquez sur un texte pour l\'écrire'; return; }
    const e = f.el;
    selBar.classList.add('has-any');
    const names = { text: 'Texte', image: 'Photographie', art: 'Ornement', toc: 'Sommaire automatique' };
    $('#selLabel').textContent = names[e.type] + ' · p. ' + f.i;
    if (e.type === 'text' || e.type === 'toc') {
      selBar.classList.add('has-text');
      $('#fFamily').value = e.st.ff || ''; $('#fSize').value = e.st.fs || '';
      $('#fVariant').value = e.v || ''; $('#fBlock').value = '';
    }
    if (e.type === 'art') { selBar.classList.add('has-text', 'has-img'); $('#fVariant').value = ''; }
    if (e.type === 'image') { selBar.classList.add('has-img'); $('#fFrame').value = e.frame || 'photo'; $('#fSepia').checked = !!e.sepia; }
    $('#fRot').value = Math.round(e.r || 0); $('#fOp').value = Math.round((e.o ?? 1) * 100);
    $('#btnUngroup').disabled = !e.g;
  }
  function mutate(fn, rerender = true) {
    const f = cur(); if (!f) return;
    A.commit(); fn(f.el, f); A.changed(rerender);
    if (rerender) select(f.el.id); else updateSelBar();
  }

  /* ---------------- Souris : sélection, déplacement, poignées ---------------- */
  book.addEventListener('pointerdown', (ev) => {
    if (!isEdit() || ev.button !== 0) return;
    const elN = ev.target.closest('.slot .el');
    const pageN = ev.target.closest('.slot .page');
    if (pageN && pageN.dataset.idx != null) { targetPage = +pageN.dataset.idx; fillPageTarget(); }
    if (!elN) { stopEditing(); select(null); return; }
    if (elN.classList.contains('editing')) return;              /* laisser le curseur texte */
    stopEditing();
    const f = A.find(elN.dataset.id); if (!f) return;
    select(f.el.id);
    if (f.el.lock) return;
    ev.preventDefault();
    const h = ev.target.closest('.h');
    const mode = h ? [...h.classList].find(c => c !== 'h') : 'move';
    const e = f.el, o = { x: e.x, y: e.y, w: e.w, h: e.h, r: e.r || 0 };
    const mates = e.g ? f.page.els.filter(x => x !== e && x.g === e.g).map(x => ({ x, ox: x.x, oy: x.y, n: elNode(x.id) })) : [];
    const sx = ev.clientX, sy = ev.clientY, k = S.scale || 1;
    const node = elN; let moved = false; const snap = JSON.stringify(S.book);
    const rect = node.getBoundingClientRect(); const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
    node.setPointerCapture(ev.pointerId);
    const onMove = (m) => {
      const dx = (m.clientX - sx) / k, dy = (m.clientY - sy) / k;
      if (!moved && Math.abs(dx) + Math.abs(dy) < 2) return;
      moved = true;
      if (mode === 'move') {
        e.x = Math.round(o.x + dx); e.y = Math.round(o.y + dy);
        mates.forEach(m => { m.x.x = Math.round(m.ox + dx); m.x.y = Math.round(m.oy + dy); if (m.n) { m.n.style.left = m.x.x + 'px'; m.n.style.top = m.x.y + 'px'; } });
      }
      else if (mode === 'rot') {
        let a = Math.atan2(m.clientY - cy, m.clientX - cx) * 180 / Math.PI + 90;
        if (m.shiftKey) a = Math.round(a / 15) * 15;
        e.r = Math.round(a * 10) / 10;
      } else {
        const keepRatio = m.shiftKey && e.type !== 'text';
        if (mode.includes('e')) e.w = Math.max(16, Math.round(o.w + dx));
        if (mode === 'sw') { e.w = Math.max(16, Math.round(o.w - dx)); e.x = Math.round(o.x + o.w - e.w); }
        if (mode === 'se' || mode === 'sw' || mode === 's') e.h = Math.max(12, Math.round(o.h + dy));
        if (mode === 'ne') { e.h = Math.max(12, Math.round(o.h - dy)); e.y = Math.round(o.y + o.h - e.h); }
        if (keepRatio && mode !== 'e' && mode !== 's') e.h = Math.round(e.w * o.h / o.w);
      }
      node.style.left = e.x + 'px'; node.style.top = e.y + 'px'; node.style.width = e.w + 'px'; node.style.height = e.h + 'px';
      node.style.transform = `rotate(${e.r || 0}deg)`;
    };
    const onUp = () => {
      node.removeEventListener('pointermove', onMove); node.removeEventListener('pointerup', onUp); node.removeEventListener('pointercancel', onUp);
      if (moved) { S.undo.push(snap); S.redo = []; A.scheduleSave(); updateSelBar(); }
    };
    node.addEventListener('pointermove', onMove); node.addEventListener('pointerup', onUp); node.addEventListener('pointercancel', onUp);
  });

  /* Double-clic : écrire dans un bloc de texte / remplacer une image */
  book.addEventListener('dblclick', (ev) => {
    if (!isEdit()) return;
    const elN = ev.target.closest('.slot .el'); if (!elN) return;
    const f = A.find(elN.dataset.id); if (!f) return;
    if (f.el.type === 'image') return replaceImage();
    if (f.el.type !== 'text') return;
    const c = elN.querySelector('.el-c');
    editSnap = JSON.stringify(S.book);
    elN.classList.add('editing'); c.contentEditable = 'true'; c.focus();
    if (document.caretRangeFromPoint) {
      const r = document.caretRangeFromPoint(ev.clientX, ev.clientY);
      if (r) { const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    }
  });
  book.addEventListener('focusout', (ev) => {
    const rt = ev.relatedTarget;
    if (rt && rt.closest && rt.closest('#toolbar')) return;    /* garder l'édition pendant le formatage */
    setTimeout(() => { if (!book.contains(document.activeElement) || !document.activeElement.isContentEditable) stopEditing(); }, 0);
  });
  document.addEventListener('selectionchange', () => {
    const s = getSelection(); if (!s.rangeCount) return;
    const n = s.anchorNode && (s.anchorNode.nodeType === 1 ? s.anchorNode : s.anchorNode.parentElement);
    if (n && n.closest && n.closest('.el.editing')) savedRange = s.getRangeAt(0).cloneRange();
  });
  function restoreRange() {
    const ed = book.querySelector('.el.editing .el-c');
    if (!ed) return null;
    ed.focus();
    if (savedRange) { const s = getSelection(); s.removeAllRanges(); s.addRange(savedRange); }
    return ed;
  }
  /* Coller du texte brut (évite d'importer les styles du web) */
  book.addEventListener('paste', (ev) => {
    if (!ev.target.closest('.el.editing')) return;
    ev.preventDefault();
    const t = (ev.clipboardData || window.clipboardData).getData('text/plain');
    document.execCommand('insertText', false, t);
  });

  /* ---------------- Formatage ---------------- */
  $('#toolbar').addEventListener('mousedown', (ev) => { if (ev.target.closest('button')) ev.preventDefault(); });
  document.querySelectorAll('[data-cmd]').forEach(b => b.onclick = () => {
    const ed = restoreRange();
    if (ed) { document.execCommand(b.dataset.cmd); return; }
    const f = cur(); if (!f || f.el.type !== 'text') return;
    mutate(e => {
      if (b.dataset.cmd === 'bold') e.st.fw = e.st.fw ? '' : 700;
      else if (b.dataset.cmd === 'italic') e.st.fi = e.st.fi ? '' : 'italic';
      else A.toast('Double-cliquez dans le texte puis sélectionnez les mots à souligner.');
    });
  });
  document.querySelectorAll('[data-align]').forEach(b => b.onclick = () => {
    const ed = restoreRange();
    if (ed) { document.execCommand('justify' + { left: 'Left', center: 'Center', right: 'Right', justify: 'Full' }[b.dataset.align]); return; }
    mutate(e => { e.st.al = b.dataset.align; });
  });
  $('#fBlock').onchange = (ev) => {
    const v = ev.target.value; ev.target.value = '';
    const ed = restoreRange();
    if (!ed) return A.toast('Double-cliquez d\'abord dans un texte, puis choisissez le type de bloc.');
    document.execCommand('formatBlock', false, v);
  };
  $('#fColor').oninput = (ev) => {
    const ed = restoreRange();
    if (ed && savedRange && !savedRange.collapsed) { document.execCommand('styleWithCSS', false, true); document.execCommand('foreColor', false, ev.target.value); return; }
    const f = cur(); if (!f) return;
    if (f.el.type === 'art') mutate(e => { e.col = ev.target.value; });
    else mutate(e => { e.st.c = ev.target.value; });
  };
  $('#fFamily').onchange = (ev) => { stopEditing(); mutate(e => { e.st.ff = ev.target.value; }); };
  $('#fSize').onchange = (ev) => { stopEditing(); mutate(e => { e.st.fs = +ev.target.value || ''; }); };
  $('#fVariant').onchange = (ev) => {
    stopEditing();
    const f = cur(); if (!f) return;
    if (f.el.type === 'art') { const v = ev.target.value; mutate(e => { e.col = v === 'gold' ? 'gold' : v === 'stamp' ? 'red' : 'ink'; }); return; }
    mutate(e => { e.v = ev.target.value; });
  };
  $('#fRot').onchange = (ev) => mutate(e => { e.r = +ev.target.value || 0; });
  $('#fOp').oninput = (ev) => { const f = cur(); if (!f) return; const n = elNode(f.el.id); if (n) n.style.opacity = ev.target.value / 100; };
  $('#fOp').onchange = (ev) => mutate(e => { e.o = ev.target.value / 100; }, false);
  $('#fFrame').onchange = (ev) => mutate(e => { e.frame = ev.target.value; });
  $('#fSepia').onchange = (ev) => mutate(e => { e.sepia = ev.target.checked; });
  $('#btnFront').onclick = () => mutate((e, f) => { e.z = maxZ(f.i) + 1; });
  $('#btnBack').onclick = () => mutate((e, f) => { pageEls(f.i).forEach(x => x.z = (x.z || 1) + 1); e.z = 1; });
  $('#btnUngroup').onclick = () => { const f = cur(); if (!f || !f.el.g) return; mutate(e => { e.g = ''; }); A.toast('Élément détaché de son groupe'); };
  $('#btnDupEl').onclick = () => duplicateEl();
  $('#btnDelEl').onclick = () => deleteEl();
  $('#btnReplace').onclick = () => replaceImage();

  function duplicateEl() {
    const f = cur(); if (!f) return;
    A.commit();
    const c = JSON.parse(JSON.stringify(f.el)); c.id = A.uid(); c.x += 18; c.y += 18; c.z = maxZ(f.i) + 1; delete c.lock; c.g = '';
    f.page.els.push(c); A.changed(); select(c.id);
  }
  function deleteEl() {
    const f = cur(); if (!f) return;
    A.commit(); f.page.els = f.page.els.filter(e => e !== f.el); S.sel = null; A.changed(); updateSelBar();
  }
  async function replaceImage() {
    const f = cur(); if (!f || (f.el.type !== 'image' && f.el.type !== 'art')) return;
    const file = await pickFile($('#fileImage')); if (!file) return;
    try { const im = await readImage(file); mutate(e => { if (e.type === 'art') { e.type = 'image'; e.frame = 'plain'; e.sepia = false; delete e.art; } e.src = im.src; }); A.toast('Image remplacée'); }
    catch (err) { A.toast('Impossible de lire cette image.'); }
  }

  /* ---------------- Ajout d'éléments ---------------- */
  const onLeather = () => ['leather', 'endpaper'].includes(S.book.pages[targetPage]?.bg);
  function addEl(e) {
    const i = targetPage; if (S.book.pages[i] == null) return;
    A.commit();
    e.id = A.uid(); e.z = maxZ(i) + 1; e.r = e.r || 0; e.o = 1; e.st = e.st || {};
    S.book.pages[i].els.push(e); A.changed(); select(e.id);
    A.toast('Élément ajouté en page ' + i + (e.type === 'text' ? ' — double-cliquez pour écrire' : ''));
  }
  const presets = {
    title: () => ({ type: 'text', x: 60, y: 70, w: 440, h: 60, html: '<h2 class="center">Nouveau titre</h2>', v: onLeather() ? 'gold' : '' }),
    para: () => ({ type: 'text', x: 60, y: 300, w: 440, h: 140, html: '<p>Écrivez ici. Appuyez sur Entrée pour créer un nouveau paragraphe.</p>', v: '' }),
    note: () => ({ type: 'text', x: 300, y: 560, w: 200, h: 90, html: 'Une annotation au crayon…', v: 'hand', r: -3 }),
    news: () => ({ type: 'text', x: 120, y: 240, w: 300, h: 260, html: '<h2>Titre du journal</h2><h3>Sous-titre</h3><p>Texte de l\'article…</p>', v: 'news', r: -1.5 }),
    letter: () => ({ type: 'text', x: 90, y: 200, w: 380, h: 280, html: 'Mon cher…<br><br>…<br><br><span style="float:right">— Signature</span>', v: 'letter', r: 1 }),
    poster: () => ({ type: 'text', x: 150, y: 160, w: 260, h: 380, html: '<h1>WANTED</h1><h2>Mort ou vif</h2><p>Nom :</p><p>Récompense : … $</p>', v: 'poster' }),
    archive: () => ({ type: 'text', x: 80, y: 220, w: 400, h: 200, html: '<h3>Témoignage — source</h3><p>« … »</p><p style="text-align:right"><i>Recueilli à …</i></p>', v: 'archive', r: -1 })
  };
  document.querySelectorAll('[data-add]').forEach(b => b.onclick = async (ev) => {
    stopEditing();
    const k = b.dataset.add;
    if (presets[k]) return addEl(presets[k]());
    if (k === 'member') {
      const g = 'g' + A.uid(), x = 210, y = 200;
      addEl({ type: 'text', x, y, w: 140, h: 330, v: 'oldcard', g, html: '<p class="pip">♣ ♣</p><h1>CODE</h1><div style="height:132px"></div><h3>Prénom Nom</h3><p><i>Rôle</i></p><p>Une phrase sur ce membre.</p><p class="sig">Signature</p>' });
      addEl({ type: 'image', x: x + 16, y: y + 64, w: 108, h: 128, src: 'placeholder', frame: 'photo', sepia: true, cap: '', g });
      A.toast('Carte ajoutée — double-cliquez sur le texte ou le portrait pour les modifier');
      return;
    }
    if (k === 'image') {
      const file = await pickFile($('#fileImage')); if (!file) return;
      try {
        const im = await readImage(file);
        const w = 280, h = Math.round(w * im.h / im.w);
        addEl({ type: 'image', x: 140, y: Math.max(40, 400 - h / 2), w, h: Math.min(h, 700), src: im.src, frame: 'photo', sepia: true, cap: '' });
      } catch (err) { A.toast('Impossible de lire cette image.'); }
    }
    if (k === 'deco') toggleMenu($('#decoMenu'), b);
  });
  /* Menu des ornements */
  (function buildDeco() {
    const m = $('#decoMenu');
    m.innerHTML = Object.entries(window.ART.lib).map(([k, a]) =>
      `<button class="deco-btn" data-art="${k}"><div class="pv">${window.ART.render(k, 'ink')}</div><span>${a.label}</span></button>`).join('');
    m.onclick = (ev) => {
      const b = ev.target.closest('[data-art]'); if (!b) return;
      const a = window.ART.lib[b.dataset.art]; m.hidden = true;
      const w = Math.min(a.w, 460), h = Math.round(a.h * w / a.w);
      addEl({ type: 'art', art: b.dataset.art, x: Math.round(280 - w / 2), y: Math.round(400 - h / 2), w, h, col: onLeather() ? 'gold' : 'ink' });
    };
  })();
  function toggleMenu(menu, anchor) {
    const open = menu.hidden;
    document.querySelectorAll('.popmenu').forEach(p => p.hidden = true);
    if (!open) return;
    menu.hidden = false;
    const r = anchor.getBoundingClientRect();
    menu.style.top = r.bottom + 4 + 'px';
    menu.style.left = Math.max(6, Math.min(r.left, innerWidth - menu.offsetWidth - 8)) + 'px';
  }
  document.addEventListener('pointerdown', (ev) => {
    if (!ev.target.closest('.popmenu') && !ev.target.closest('[data-add="deco"]') && !ev.target.closest('#btnProject'))
      document.querySelectorAll('.popmenu').forEach(p => p.hidden = true);
  });

  /* ---------------- Pages ---------------- */
  function fillPageTarget() {
    const sel = $('#pageTarget'); if (!S.book) return;
    sel.innerHTML = S.book.pages.map((p, i) => `<option value="${i}">p. ${i + 1}${p.title ? ' — ' + p.title.slice(0, 22) : ''}</option>`).join('');
    sel.value = targetPage;
    const p = S.book.pages[targetPage]; if (!p) return;
    $('#pageBg').value = p.bg || 'ivory';
    if (document.activeElement !== $('#pageTitle')) $('#pageTitle').value = p.title || '';
    $('#pageLvl').value = String(p.lvl === 1 ? 1 : 2);
    document.querySelectorAll('#pageList li').forEach(li => li.classList.toggle('cur', +li.dataset.i === targetPage));
  }
  $('#pageTarget').onchange = (ev) => { targetPage = +ev.target.value; A.goToPage(targetPage); fillPageTarget(); };
  $('#pageLvl').onchange = (ev) => { const p = S.book.pages[targetPage]; if (!p) return; A.commit(); p.lvl = +ev.target.value; A.changed(); };
  $('#pageTitle').onchange = (ev) => {
    const p = S.book.pages[targetPage]; if (!p) return;
    A.commit(); p.title = ev.target.value.trim(); if (p.title && !p.lvl) p.lvl = 2; A.changed();
  };
  $('#pageBg').onchange = async (ev) => {
    const p = S.book.pages[targetPage]; if (!p) return;
    const v = ev.target.value;
    if (v === 'custom') {
      const file = await pickFile($('#fileBg'));
      if (!file) { fillPageTarget(); return; }
      try { const im = await readImage(file, 1800); A.commit(); p.bg = 'custom'; p.bgImg = im.src; A.changed(); }
      catch (e) { A.toast('Image illisible'); }
      return;
    }
    A.commit(); p.bg = v; A.changed();
  };
  function newPage() {
    return { id: A.uid(), title: '', lvl: 2, bg: 'ivory', els: [
      { id: A.uid(), type: 'text', x: 52, y: 60, w: 456, h: 50, html: '<h2 class="center">Nouvelle page</h2>', z: 1, r: 0, o: 1, st: {}, v: '' },
      { id: A.uid(), type: 'art', x: 180, y: 112, w: 200, h: 16, art: 'divider', col: 'ink', z: 2, r: 0, o: 1, st: {} },
      { id: A.uid(), type: 'text', x: 52, y: 150, w: 456, h: 560, html: '<p>Double-cliquez pour écrire…</p>', z: 3, r: 0, o: 1, st: {}, v: '' }
    ] };
  }
  function cloneWithIds(p) { const c = JSON.parse(JSON.stringify(p)); c.id = A.uid(); c.els.forEach(e => e.id = A.uid()); return c; }
  function movePage(from, to) {
    const ps = S.book.pages; if (to < 0 || to >= ps.length || from === to) return;
    A.commit(); const [p] = ps.splice(from, 1); ps.splice(to, 0, p);
    targetPage = to; S.spread = A.spreadOf(to); A.changed();
  }
  document.querySelectorAll('[data-page]').forEach(b => b.onclick = () => {
    stopEditing();
    const i = targetPage, ps = S.book.pages, k = b.dataset.page;
    if (k === 'add') { A.commit(); ps.splice(i + 1, 0, newPage()); targetPage = i + 1; S.spread = A.spreadOf(i + 1); A.changed(); A.toast('Page ' + (i + 2) + ' ajoutée'); }
    if (k === 'member') {
      A.commit();
      const tpl = window.SB.member({
        title: 'CODE — Prénom Nom', kicker: 'Rôle · CODE', name: 'Prénom « Surnom » Nom', code: 'CODE', pip: '★', sig: 'Signature',
        portrait: 'placeholder', cap: 'NOM — 1890', age: '… ans (né·e en …)', origin: '…', joined: '…',
        quote: '« Sa réplique. »', intro: 'Présentation en quelques lignes.', family: 'Histoire familiale résumée.',
        traits: [['Trait 1', '…'], ['Trait 2', '…'], ['Trait 3', '…']],
        weak: '…', weakOrigin: 'Origine de la faiblesse.', weakPlay: 'situations où elle se joue.',
        goal: 'Objectif personnel.', role: 'Rôle dans le groupe.', rel: 'Relation avec Billy et les autres Strays.'
      });
      const pages = JSON.parse(JSON.stringify(tpl));
      pages.forEach(p => { p.id = A.uid(); p.els.forEach((e, n) => { e.id = A.uid(); e.z = n + 1; }); });
      /* la fiche doit former une vraie double page : page gauche sur un index pair */
      let at = i + 1; if (at % 2 === 1) at++; at = Math.min(at, ps.length);
      ps.splice(at, 0, ...pages); targetPage = at; S.spread = A.spreadOf(at); A.changed();
      A.toast('Double page de fiche ajoutée (pages ' + (at + 1) + '–' + (at + 2) + ')');
    }
    if (k === 'dup') { A.commit(); ps.splice(i + 1, 0, cloneWithIds(ps[i])); targetPage = i + 1; S.spread = A.spreadOf(i + 1); A.changed(); A.toast('Page dupliquée'); }
    if (k === 'left') movePage(i, i - 1);
    if (k === 'right') movePage(i, i + 1);
    if (k === 'del') {
      if (ps.length <= 1) return;
      if (!confirm(`Supprimer la page ${i}${ps[i].title ? ' « ' + ps[i].title + ' »' : ''} ?\n(Annulable avec Ctrl+Z tant que la session est ouverte.)`)) return;
      A.commit(); ps.splice(i, 1); targetPage = Math.min(i, ps.length - 1); S.sel = null; A.changed(); updateSelBar();
    }
  });

  /* Panneau des pages + glisser-déposer */
  function buildPageList() {
    const ol = $('#pageList'); if (!S.book) return;
    const sw = { ivory: '#efe4cc', aged: '#e3cfa6', parch: '#cdb183', lined: '#e9e2cf', endpaper: '#3a5258', leather: '#2a1a10', board: '#a88a62', custom: '#777' };
    ol.innerHTML = S.book.pages.map((p, i) => {
      const t = p.title || (p.els.find(e => e.type === 'text')?.html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 30) || '(vide)';
      return `<li draggable="true" data-i="${i}"><span class="num">${i}</span><span class="sw" style="background:${sw[p.bg] || '#ccc'}"></span><span class="nm">${t}</span></li>`;
    }).join('');
    fillPageTarget();
  }
  let dragFrom = null;
  $('#pageList').addEventListener('click', (ev) => { const li = ev.target.closest('li'); if (!li) return; targetPage = +li.dataset.i; A.goToPage(targetPage); fillPageTarget(); });
  $('#pageList').addEventListener('dragstart', (ev) => { const li = ev.target.closest('li'); dragFrom = +li.dataset.i; ev.dataTransfer.effectAllowed = 'move'; });
  $('#pageList').addEventListener('dragover', (ev) => { ev.preventDefault(); document.querySelectorAll('#pageList li').forEach(l => l.classList.remove('drag-over')); ev.target.closest('li')?.classList.add('drag-over'); });
  $('#pageList').addEventListener('drop', (ev) => {
    ev.preventDefault(); const li = ev.target.closest('li'); if (!li || dragFrom == null) return;
    let to = +li.dataset.i; if (to > dragFrom) to -= 0; movePage(dragFrom, to); dragFrom = null;
  });

  /* ---------------- Projet : export / import / PDF / réinitialisation ---------------- */
  $('#btnProject').onclick = (ev) => toggleMenu($('#projectMenu'), ev.currentTarget);
  $('#projectMenu').onclick = async (ev) => {
    const k = ev.target.closest('[data-proj]')?.dataset.proj; if (!k) return;
    $('#projectMenu').hidden = true; stopEditing();
    if (k === 'publish') {
      const data = JSON.stringify({ ...S.book, publishedAt: new Date().toISOString() });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
      a.download = 'book.json';
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      alert(['Fichier « book.json » téléchargé.', '', 'Pour mettre le site à jour :',
        '1. Ouvrez votre dépôt sur github.com',
        '2. « Add file » ▸ « Upload files »',
        '3. Glissez ce book.json (il remplace l’ancien) puis « Commit changes »', '',
        'Le site se met à jour en une à deux minutes.'].join('\n'));
      return;
    }
    if (k === 'export') {
      const data = JSON.stringify({ ...S.book, exportedAt: new Date().toISOString() });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
      a.download = 'the-strays-projet-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      A.toast('Projet exporté (textes, mise en page et images inclus)');
    }
    if (k === 'import') {
      const file = await pickFile($('#fileProject')); if (!file) return;
      try {
        const b = JSON.parse(await file.text());
        A.normalize(b);
        if (!confirm(`Remplacer le livre actuel par « ${file.name} » (${b.pages.length} pages) ?`)) return;
        A.setBook(b); await A.saveNow(); A.toast('Projet importé');
      } catch (e) { A.toast('Fichier de projet invalide.'); }
    }
    if (k === 'pdf') { A.toast('Choisissez « Enregistrer au format PDF », marges : aucune, graphiques d\'arrière-plan : activés.'); setTimeout(A.printBook, 600); }
    if (k === 'restore') {
      const b = await A.DB.get('book-backup');
      if (!b) return A.toast('Aucune version précédente conservée.');
      if (!confirm('Remplacer le livre actuel par la version précédente conservée ? (Conseil : exportez d’abord le livre actuel.)')) return;
      A.setBook(Object.assign(b, { edition: (window.STRAYS.edition || 1) })); await A.saveNow(); A.toast('Version précédente restaurée');
      return;
    }
    if (k === 'reset') {
      if (!confirm('Revenir au livre d\'origine ? Toutes vos modifications seront remplacées.\nConseil : exportez d\'abord votre projet.')) return;
      A.setBook(A.defaultBook()); await A.saveNow(); A.toast('Livre d\'origine restauré');
    }
  };
  $('#btnUndo').onclick = () => { stopEditing(); A.undo(); };
  $('#btnRedo').onclick = () => { stopEditing(); A.redo(); };

  /* ---------------- Clavier (édition) ---------------- */
  document.addEventListener('keydown', (ev) => {
    if (!isEdit()) return;
    const typing = ev.target.isContentEditable || /INPUT|SELECT|TEXTAREA/.test(ev.target.tagName);
    const mod = ev.ctrlKey || ev.metaKey;
    if (ev.key === 'Escape' && book.querySelector('.el.editing')) { stopEditing(); ev.preventDefault(); return; }
    if (typing) return;
    if (mod && ev.key.toLowerCase() === 'z') { ev.preventDefault(); ev.stopImmediatePropagation(); ev.shiftKey ? A.redo() : A.undo(); return; }
    if (mod && ev.key.toLowerCase() === 'y') { ev.preventDefault(); ev.stopImmediatePropagation(); A.redo(); return; }
    if (mod && ev.key.toLowerCase() === 'd') { ev.preventDefault(); duplicateEl(); return; }
    const f = cur(); if (!f) return;
    if (ev.key === 'Delete' || ev.key === 'Backspace') { ev.preventDefault(); deleteEl(); return; }
    const step = ev.shiftKey ? 10 : 1;
    const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[ev.key];
    if (d && !f.el.lock) {
      ev.preventDefault(); ev.stopImmediatePropagation();
      if (!ev.repeat) A.commit();
      f.el.x += d[0]; f.el.y += d[1];
      const n = elNode(f.el.id); if (n) { n.style.left = f.el.x + 'px'; n.style.top = f.el.y + 'px'; }
      A.scheduleSave();
    }
  }, true);

  /* ---------------- Synchronisation ---------------- */
  document.addEventListener('spread-rendered', () => { if (S.sel && !elNode(S.sel)) { /* sélection sur une autre planche */ } syncTarget(); });
  document.addEventListener('pages-changed', buildPageList);
  document.addEventListener('mode-changed', () => { stopEditing(); updateSelBar(); buildPageList(); setTimeout(A.fit, 50); });
  document.addEventListener('app-ready', () => { buildPageList(); updateSelBar(); });
  window.addEventListener('beforeunload', () => { stopEditing(); if (S.dirty) A.saveNow(); });
})();
