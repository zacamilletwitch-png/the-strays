/* =====================================================================
   THE STRAYS — Moteur : rendu, navigation, animation, sauvegarde
   ===================================================================== */
(function () {
  const W = 560, H = 800;
  const $ = (s, r = document) => r.querySelector(s);
  const app = $('#app'), book = $('#book'), wrap = $('#bookWrap'), stage = $('#stage');
  const slotL = $('#slotL'), slotR = $('#slotR');
  const S = { book: null, spread: 0, mode: 'read', single: false, busy: false, sel: null, undo: [], redo: [] };
  const uid = () => Math.random().toString(36).slice(2, 10);

  /* ------------------------------------------------------------------
     Stockage local (IndexedDB : supporte les images lourdes)
     ------------------------------------------------------------------ */
  const DB = {
    db: null,
    open() {
      return new Promise((res) => {
        try {
          const rq = indexedDB.open('the-strays-book', 1);
          rq.onupgradeneeded = () => rq.result.createObjectStore('kv');
          rq.onsuccess = () => { this.db = rq.result; res(true); };
          rq.onerror = () => res(false);
        } catch (e) { res(false); }
      });
    },
    get(k) {
      return new Promise((res) => {
        if (!this.db) return res(null);
        const rq = this.db.transaction('kv').objectStore('kv').get(k);
        rq.onsuccess = () => res(rq.result || null); rq.onerror = () => res(null);
      });
    },
    put(k, v) {
      return new Promise((res, rej) => {
        if (!this.db) return rej(new Error('Stockage indisponible'));
        const tx = this.db.transaction('kv', 'readwrite');
        tx.objectStore('kv').put(v, k);
        tx.oncomplete = () => res(true); tx.onerror = () => rej(tx.error);
      });
    }
  };

  function defaultBook() {
    const pages = JSON.parse(JSON.stringify(window.STRAYS.pages));
    pages.forEach(p => { p.id = uid(); p.els.forEach((e, i) => { e.id = uid(); e.z = i + 1; }); });
    return { app: 'the-strays', version: 1, edition: window.STRAYS.edition || 1, pages };
  }
  function normalize(b) {
    if (!b || !Array.isArray(b.pages)) throw new Error('Projet invalide');
    b.pages.forEach(p => {
      p.id = p.id || uid(); p.els = p.els || []; p.bg = p.bg || 'ivory';
      p.els.forEach((e, i) => { e.id = e.id || uid(); e.z = e.z || i + 1; e.st = e.st || {}; if (e.o == null) e.o = 1; if (e.r == null) e.r = 0; delete e.lock; });
    });
    return b;
  }

  let saveTimer = null;
  const saveState = $('#saveState');
  function scheduleSave() {
    if (S.public) return;
    S.dirty = true;
    saveState.textContent = 'Modifications…';
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveNow, 700);
  }
  async function saveNow() {
    if (S.public) return;
    try {
      await DB.put('book', S.book);
      saveState.textContent = 'Enregistré ✓'; S.dirty = false;
    } catch (e) {
      saveState.textContent = '⚠ Non enregistré';
      toast('Sauvegarde locale impossible : exportez le projet pour ne rien perdre.');
    }
  }
  function commit() {                 /* appeler AVANT une modification */
    S.undo.push(JSON.stringify(S.book));
    if (S.undo.length > 40) S.undo.shift();
    S.redo = [];
  }
  function changed(rerender = true) { scheduleSave(); if (rerender) renderSpread(); refreshLists(); }
  function undo() { if (!S.undo.length) return toast('Rien à annuler'); S.redo.push(JSON.stringify(S.book)); S.book = JSON.parse(S.undo.pop()); S.sel = null; clampSpread(); changed(); }
  function redo() { if (!S.redo.length) return; S.undo.push(JSON.stringify(S.book)); S.book = JSON.parse(S.redo.pop()); S.sel = null; clampSpread(); changed(); }

  /* ------------------------------------------------------------------
     Rendu
     ------------------------------------------------------------------ */
  function styleOf(st) {
    if (!st) return '';
    let s = '';
    if (st.ff) s += `font-family:${st.ff};`;
    if (st.fs) s += `font-size:${st.fs}px;`;
    if (st.c) s += `color:${st.c};`;
    if (st.al) s += `text-align:${st.al};`;
    if (st.lh) s += `line-height:${st.lh};`;
    if (st.ls) s += `letter-spacing:${st.ls};`;
    if (st.fw) s += `font-weight:${st.fw};`;
    if (st.fi) s += `font-style:${st.fi};`;
    return s;
  }
  function tocEntries() {
    return S.book.pages.map((p, i) => ({ t: p.title, lvl: p.lvl || 2, i })).filter(x => x.t && x.i > 0);
  }
  function placeholderSvg() {
    return `<svg viewBox="0 0 300 220" preserveAspectRatio="xMidYMid slice"><rect width="300" height="220" fill="url(#sepiaVig)"/><rect width="300" height="220" filter="url(#grain)" opacity=".9"/><text x="150" y="118" text-anchor="middle" font-family="IM Fell English, serif" font-style="italic" font-size="17" fill="#3b2a1a" opacity=".7">photographie à venir</text></svg>`;
  }
  function elHTML(e) {
    if (e.type === 'text') return `<div class="el-c" style="${styleOf(e.st)}">${e.html}</div>`;
    if (e.type === 'art') return `<div class="el-c">${window.ART.render(e.art, e.col)}</div>`;
    if (e.type === 'toc') {
      const items = tocEntries().slice(e.start || 0, (e.start || 0) + (e.count || 99));
      return `<div class="el-c" style="${styleOf(e.st)}"><ul class="toc-list">${items.map(x => `<li class="lvl${x.lvl}" data-goto="${x.i}"><span class="t">${esc(x.t)}</span><span class="d"></span><span class="n">${x.i}</span></li>`).join('')}</ul></div>`;
    }
    if (e.type === 'image') {
      let inner;
      if (e.src && e.src.startsWith('art:')) inner = window.ART.render(e.src.slice(4), e.col) + '<div class="ph-hint">Illustration remplaçable</div>';
      else if (e.src && e.src.startsWith('portrait:')) inner = window.ART.portrait(e.src.slice(9)) + '<div class="ph-hint">Portrait à remplacer</div>';
      else if (!e.src || e.src === 'placeholder') inner = placeholderSvg() + '<div class="ph-hint">Photo à importer</div>';
      else inner = `<img src="${e.src}" alt="" draggable="false">`;
      const corners = e.frame === 'corners' ? '<i class="pc tl"></i><i class="pc tr"></i><i class="pc bl"></i><i class="pc br"></i>' : '';
      return `<div class="el-c" data-caption="${esc(e.cap || '')}">${inner}${corners}</div>`;
    }
    return '';
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function renderEl(e, edit) {
    const d = document.createElement('div');
    d.className = 'el' + (e.v ? ' v-' + e.v : '') + (e.type === 'image' ? ` f-${e.frame || 'photo'}${e.sepia ? ' sepia' : ''}` : '') + (e.lock ? ' locked' : '');
    d.dataset.id = e.id; d.dataset.type = e.type;
    d.style.cssText = `left:${e.x}px;top:${e.y}px;width:${e.w}px;height:${e.h}px;transform:rotate(${e.r || 0}deg);opacity:${e.o ?? 1};z-index:${e.z || 1}`;
    d.innerHTML = elHTML(e) + (edit ? '<i class="h se"></i><i class="h sw"></i><i class="h ne"></i><i class="h e"></i><i class="h s"></i><i class="h rot"></i>' : '');
    if (S.sel === e.id && edit) d.classList.add('sel');
    return d;
  }
  function renderPage(p, idx, edit) {
    const d = document.createElement('div');
    d.className = 'page bg-' + (p.bg || 'ivory');
    d.dataset.idx = idx; d.dataset.pid = p.id;
    if (p.bg === 'custom' && p.bgImg) d.style.backgroundImage = `url(${p.bgImg})`;
    p.els.forEach(e => d.appendChild(renderEl(e, edit)));
    if (idx > 0 && p.bg !== 'leather' && p.bg !== 'endpaper' && !p.noFolio) {
      const f = document.createElement('div'); f.className = 'folio'; f.textContent = idx; d.appendChild(f);
    }
    return d;
  }
  function emptyPage() { const d = document.createElement('div'); d.className = 'page page-empty'; return d; }

  /* ------------------------------------------------------------------
     Planches (doubles pages)
     ------------------------------------------------------------------ */
  const N = () => S.book.pages.length;
  function spreadCount() { return S.single ? N() : 1 + Math.ceil((N() - 1) / 2); }
  function pagesOf(s) {
    if (S.single) return [null, s];
    if (s === 0) return [null, 0];
    const a = 2 * s - 1, b = 2 * s;
    return [a < N() ? a : null, b < N() ? b : null];
  }
  function spreadOf(i) { return S.single ? i : Math.floor((i + 1) / 2); }
  function clampSpread() { S.spread = Math.max(0, Math.min(S.spread, spreadCount() - 1)); }
  function fill(slot, i) {
    slot.innerHTML = '';
    slot.appendChild(i == null ? emptyPage() : renderPage(S.book.pages[i], i, S.mode === 'edit'));
  }
  function setClosed(l, r) {
    book.classList.toggle('closed-front', !S.single && l == null && r != null);
    book.classList.toggle('closed-back', !S.single && r == null && l != null);
  }
  function renderSpread() {
    clampSpread();
    const [l, r] = pagesOf(S.spread);
    fill(slotL, l); fill(slotR, r); setClosed(l, r);
    $('#cornerL').classList.toggle('off', S.spread === 0);
    $('#cornerR').classList.toggle('off', S.spread >= spreadCount() - 1);
    const shown = r ?? l ?? 0;
    $('#pageInput').value = l != null && r == null ? l : (S.single ? r : (l ?? r));
    $('#pageCount').textContent = N() - 1;
    try { localStorage.setItem('strays-spread', String(shown)); } catch (e) {}
    document.dispatchEvent(new CustomEvent('spread-rendered'));
  }

  /* Animation de la feuille */
  function flip(dir) {
    if (S.busy) return;
    const target = S.spread + dir;
    if (target < 0 || target >= spreadCount()) return;
    if (document.activeElement && document.activeElement.isContentEditable) document.activeElement.blur();
    const [a, b] = pagesOf(S.spread), [c, d] = pagesOf(target);
    const edit = S.mode === 'edit';
    const dur = edit ? 520 : 950;
    S.busy = true;
    const fl = document.createElement('div');
    const mk = (i, cls, side) => {
      const f = document.createElement('div'); f.className = 'face ' + cls;
      const sl = document.createElement('div'); sl.className = 'slot ' + side; sl.style.left = '0';
      sl.appendChild(i == null ? emptyPage() : renderPage(S.book.pages[i], i, false));
      const sh = document.createElement('div'); sh.className = 'shade';
      f.append(sl, sh); return f;
    };
    let from, to;
    if (S.single) {
      fl.className = 'flipper fwd';
      if (dir > 0) { fl.append(mk(b, 'front', 'right'), mk(null, 'back', 'left')); fill(slotR, d); from = 0; to = -180; }
      else { fl.append(mk(d, 'front', 'right'), mk(null, 'back', 'left')); from = -180; to = 0; }
    } else if (dir > 0) {
      fl.className = 'flipper fwd';
      fl.append(mk(b, 'front', 'right'), mk(c, 'back', 'left'));
      fill(slotR, d); from = 0; to = -180;
    } else {
      fl.className = 'flipper bwd';
      fl.append(mk(a, 'front', 'left'), mk(d, 'back', 'right'));
      fill(slotL, c); from = 0; to = 180;
    }
    book.appendChild(fl);
    setClosed(c, d);
    const ease = 'cubic-bezier(.45,.08,.3,1)';
    const anim = fl.animate([
      { transform: `rotateY(${from}deg)` },
      { transform: `rotateY(${(from + to) / 2}deg) translateZ(14px)`, offset: .5 },
      { transform: `rotateY(${to}deg)` }
    ], { duration: dur, easing: ease, fill: 'forwards' });
    fl.querySelectorAll('.shade').forEach((s, k) => s.animate(
      k === 0 ? [{ opacity: 0 }, { opacity: 1, offset: .5 }, { opacity: 1 }] : [{ opacity: 1 }, { opacity: .8, offset: .5 }, { opacity: 0 }],
      { duration: dur, easing: ease, fill: 'forwards' }));
    anim.onfinish = () => { S.spread = target; renderSpread(); fl.remove(); S.busy = false; };
  }
  function goToPage(i) {
    i = Math.max(0, Math.min(N() - 1, i | 0));
    const s = spreadOf(i);
    if (s === S.spread) return;
    if (Math.abs(s - S.spread) === 1) return flip(s - S.spread);
    book.animate([{ opacity: 1 }, { opacity: .2 }], { duration: 160, fill: 'forwards' }).onfinish = () => {
      S.spread = s; renderSpread();
      book.animate([{ opacity: .2 }, { opacity: 1 }], { duration: 260, fill: 'forwards' });
    };
  }

  /* ------------------------------------------------------------------
     Mise à l'échelle
     ------------------------------------------------------------------ */
  function fit() {
    const r = stage.getBoundingClientRect();
    const single = r.width < 760 || r.width / r.height < 0.95;
    if (single !== S.single) {
      const cur = pagesOf(S.spread); const keep = cur[1] ?? cur[0] ?? 0;
      S.single = single; app.classList.toggle('single', single);
      S.spread = spreadOf(keep); renderSpread();
    }
    const bw = S.single ? W : 2 * W;
    const padB = S.mode === 'read' ? 64 : 56;
    const sc = Math.min((r.width - 40) / (bw + 30), (r.height - padB - 20) / H);
    wrap.style.width = bw + 'px'; wrap.style.height = H + 'px';
    wrap.style.transform = `scale(${sc}) translate(${-bw / 2}px, ${-H / 2 - (padB / 2 - 10) / sc}px)`;
    S.scale = sc;
    const br = book.getBoundingClientRect();
    $('#cornerR').style.cssText = `left:${br.left - r.left + br.width - 90}px;top:${br.top - r.top + br.height - 90}px`;
    $('#cornerL').style.cssText = `left:${br.left - r.left}px;top:${br.top - r.top + br.height - 90}px`;
  }

  /* ------------------------------------------------------------------
     Sommaire tiroir, listes, divers
     ------------------------------------------------------------------ */
  function refreshLists() {
    $('#tocList').innerHTML = tocEntries().map(x => `<li class="lvl${x.lvl}" data-goto="${x.i}"><span>${esc(x.t)}</span><span class="n">${x.i}</span></li>`).join('');
    document.dispatchEvent(new CustomEvent('pages-changed'));
  }
  let toastT;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 3200); }

  function setMode(m) {
    if (S.public && m === 'edit') return;      /* site publié : lecture seule */
    S.mode = m; S.sel = null;
    app.classList.toggle('mode-edit', m === 'edit'); app.classList.toggle('mode-read', m === 'read');
    renderSpread(); setTimeout(fit, 30);
    document.dispatchEvent(new CustomEvent('mode-changed'));
  }

  /* Impression / PDF */
  async function printBook() {
    const root = $('#printRoot'); root.innerHTML = '';
    S.book.pages.forEach((p, i) => { const pp = document.createElement('div'); pp.className = 'pp'; pp.appendChild(renderPage(p, i, false)); root.appendChild(pp); });
    try { await document.fonts.ready; } catch (e) {}
    await Promise.all([...root.querySelectorAll('img')].map(im => im.complete ? 0 : new Promise(r => { im.onload = im.onerror = r; })));
    setTimeout(() => { window.print(); setTimeout(() => root.innerHTML = '', 500); }, 150);
  }

  /* ------------------------------------------------------------------
     Événements de navigation
     ------------------------------------------------------------------ */
  $('#navPrev').onclick = () => flip(-1);
  $('#navNext').onclick = () => flip(1);
  $('#cornerL').onclick = () => flip(-1);
  $('#cornerR').onclick = () => flip(1);
  $('#pageInput').onchange = (e) => goToPage(+e.target.value);
  $('#btnToc').onclick = () => { $('#tocDrawer').hidden = false; };
  $('#tocDrawer').addEventListener('click', (e) => {
    const li = e.target.closest('[data-goto]');
    if (li) { $('#tocDrawer').hidden = true; goToPage(+li.dataset.goto); }
    else if (e.target.matches('[data-close]') || e.target.id === 'tocDrawer') $('#tocDrawer').hidden = true;
  });
  book.addEventListener('click', (e) => {
    if (S.mode !== 'read') return;
    const li = e.target.closest('[data-goto]');
    if (li) goToPage(+li.dataset.goto);
  });
  $('#btnFull').onclick = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.().catch(() => toast('Plein écran refusé par le navigateur'));
  };
  $('#btnEdit').onclick = () => setMode('edit');
  $('#btnRead').onclick = () => setMode('read');

  document.addEventListener('keydown', (e) => {
    const t = e.target;
    if (t.isContentEditable || /INPUT|SELECT|TEXTAREA/.test(t.tagName)) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { flip(1); e.preventDefault(); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { flip(-1); e.preventDefault(); }
    else if (e.key === 'Home') goToPage(0);
    else if (e.key === 'End') goToPage(N() - 1);
    else if (e.key === 'Escape') $('#tocDrawer').hidden = true;
  });
  /* Glissement tactile */
  let tx = null;
  stage.addEventListener('touchstart', (e) => { tx = S.mode === 'read' ? e.touches[0].clientX : null; }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    if (tx == null) return; const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) flip(dx < 0 ? 1 : -1); tx = null;
  });
  /* Barre de lecture discrète */
  let idleT;
  document.addEventListener('mousemove', () => {
    $('#readBar').classList.remove('idle'); clearTimeout(idleT);
    idleT = setTimeout(() => { if (S.mode === 'read') $('#readBar').classList.add('idle'); }, 2800);
  });
  window.addEventListener('resize', fit);
  document.addEventListener('fullscreenchange', () => setTimeout(fit, 60));

  /* ------------------------------------------------------------------
     API pour l'éditeur
     ------------------------------------------------------------------ */
  window.APP = {
    S, W, H, uid, $, commit, changed, undo, redo, renderSpread, renderPage, renderEl, elHTML, pagesOf, spreadOf, goToPage, flip,
    toast, fit, setMode, printBook, defaultBook, normalize, saveNow, scheduleSave, refreshLists, DB,
    setBook(b) { S.book = normalize(b); S.undo = []; S.redo = []; S.sel = null; S.spread = 0; changed(); },
    find(id) {
      for (let i = 0; i < S.book.pages.length; i++) {
        const el = S.book.pages[i].els.find(e => e.id === id);
        if (el) return { page: S.book.pages[i], el, i };
      }
      return null;
    }
  };

  /* Démarrage */
  (async function init() {
    /* Site publié : sur une adresse en ligne (pas file:// ni localhost), si book.json existe,
       le livre est chargé depuis ce fichier et présenté en lecture seule. */
    const local = location.protocol === 'file:' || /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
    if (!local) {
      try {
        const r = await fetch('book.json?v=' + Date.now(), { cache: 'no-store' });
        if (r.ok) {
          S.public = true; app.classList.add('public');
          S.book = normalize(await r.json());
          let start = 0; try { start = +localStorage.getItem('strays-spread') || 0; } catch (e) {}
          fit(); S.spread = spreadOf(Math.min(start, N() - 1));
          renderSpread(); refreshLists(); fit();
          try { await document.fonts.ready; renderSpread(); } catch (e) {}
          document.dispatchEvent(new CustomEvent('app-ready'));
          return;
        }
      } catch (e) {}
    }
    await DB.open();
    let stored = await DB.get('book');
    const ed = window.STRAYS.edition || 1;
    let upgraded = false;
    if (stored && (stored.edition || 1) < ed) {
      /* Nouvelle édition du livre : l'ancienne version est mise de côté, jamais effacée */
      try { await DB.put('book-backup', stored); } catch (e) {}
      stored = null; upgraded = true;
    }
    try { S.book = stored ? normalize(stored) : defaultBook(); } catch (e) { S.book = defaultBook(); }
    if (upgraded) { try { localStorage.removeItem('strays-spread'); } catch (e) {} saveNow(); }
    if (!DB.db) toast('Stockage local indisponible : pensez à exporter votre projet.');
    else if (upgraded) setTimeout(() => toast('Nouvelle édition chargée. Votre version précédente est conservée : Projet ▸ Restaurer la version précédente.'), 900);
    let start = 0; try { start = +localStorage.getItem('strays-spread') || 0; } catch (e) {}
    fit();
    S.spread = spreadOf(Math.min(start, N() - 1));
    renderSpread(); refreshLists(); fit();
    saveState.textContent = stored ? 'Enregistré ✓' : 'Livre d\'origine';
    try { await document.fonts.ready; renderSpread(); } catch (e) {}
    document.dispatchEvent(new CustomEvent('app-ready'));
  })();
})();
