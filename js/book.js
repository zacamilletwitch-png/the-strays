/* =====================================================================
   THE STRAYS — Chroniques des chiens errants, 6e édition
   Registre d'archives, 1890. Livre de départ de 20 pages, extensible :
   chroniques datées, pages de souvenirs, lettres, coupures, fiches…
   Pagination : p.1 couverture seule ; p.2 face au contre-plat ;
   puis doubles pages 3-4, 5-6 … (index pair à gauche).
   Tout reste modifiable dans l'application.
   ===================================================================== */
window.STRAYS = { pages: [], edition: 6 };
window.SB = (function () {
  const T = (x, y, w, h, html, o = {}) => ({ type: 'text', x, y, w, h, html, r: o.r || 0, v: o.v || '', st: o.st || {}, o: o.op || 1, g: o.g || '' });
  const I = (x, y, w, h, src, o = {}) => {
    const e = { type: 'image', x, y, w, h, src, r: o.r || 0, frame: o.frame || 'photo', sepia: o.sepia !== false, tone: o.tone || (o.sepia === false ? 'color' : 'sepia'), cap: o.cap || '', date: o.date || '', o: o.op || 1, g: o.g || '', col: o.col || '' };
    if (o.slot) e.slot = o.slot;
    return e;
  };
  const A = (x, y, w, h, art, o = {}) => ({ type: 'art', x, y, w, h, art, col: o.col || 'ink', r: o.r || 0, o: o.op || 1, g: o.g || '' });
  const P = (title, els, o = {}) => {
    const p = { title: title || '', lvl: o.lvl || (title ? 2 : 0), bg: o.bg || 'ivory', noFolio: !!o.noFolio, els };
    if (o.kind) p.kind = o.kind;
    return p;
  };
  const head = (kicker, title, y = 48, fs = 30) => [
    T(52, y, 456, 22, `<p class="center sc red" style="letter-spacing:.25em;font-size:13px">${kicker}</p>`),
    T(40, y + 24, 480, 52, `<h1 class="center" style="font-size:${fs}px">${title}</h1>`),
    A(150, y + 80, 260, 20, 'divider', { col: 'ink' })
  ];
  const sub = (title, y = 48) => [
    T(52, y, 456, 40, `<h2 class="center">${title}</h2>`),
    A(180, y + 40, 200, 16, 'divider', { col: 'ink' })
  ];
  const nar = (x, y, w, h, html, fs = 15.5) => T(x, y, w, h, html, { v: 'narrator', st: { fs } });
  const push = (...p) => window.STRAYS.pages.push(...p);

  /* ---------- Double page d'un membre : [gauche, droite] ---------- */
  const member = (d) => [
    P(d.title, [
      ...head(d.kicker, d.name, 44, d.nameFs || 28),
      I(52, 148, 240, 332, d.portrait, { frame: 'cabinet', cap: d.cap, r: -1.5, slot: d.slot }),
      T(308, 150, 200, 226, `<h3>Signalement</h3><table>
        <tr><td>Code</td><td><b>${d.code}</b></td></tr>
        <tr><td>Âge</td><td>${d.age}</td></tr>
        <tr><td>Origine</td><td>${d.origin}</td></tr>
        <tr><td>Chez les Strays</td><td>${d.joined}</td></tr></table>`, { v: 'card', st: { fs: 13.5 } }),
      T(340, 384, 136, 126, `<p class="pip">${d.pip} ${d.pip}</p><h1>${d.code}</h1><p class="sig">${d.sig}</p>`, { v: 'oldcard', r: 3, st: { al: 'center' } }),
      T(52, 514, 456, 40, `<blockquote class="center" style="font-size:16px;margin:0">${d.quote}</blockquote>`),
      T(52, 558, 456, 206, `<p class="kick">Origines</p><p>${d.intro}</p><p class="kick">Passé familial</p><p>${d.family}</p>`, { st: { fs: 15, lh: 1.45 } })
    ], { lvl: 1, kind: 'member' }),
    P('', [
      ...sub(d.code + ' — Caractère, faille & ambition'),
      ...d.traits.map(([t, g], k) => T(52 + k * 156, 112, 144, 114, `<div class="trait"><h4>${t}</h4><p>${g}</p></div>`, { v: 'card' })),
      T(52, 236, 456, 200, `<p class="kick">Sa faille — ${d.weak}</p><p>${d.weakOrigin}</p><p style="margin:0"><span class="sc red">Quand elle le rattrape —</span> <i>${d.weakSigns}</i></p>`, { v: 'archive', st: { fs: 14, lh: 1.45 } }),
      T(52, 448, 220, 124, `<h3>Ambition</h3><p>${d.goal}</p>`, { st: { fs: 15.5 } }),
      T(288, 448, 220, 124, `<h3>Talents</h3><p>${d.talents}</p>`, { st: { fs: 15.5 } }),
      A(180, 578, 200, 16, 'divider', { col: 'ink' }),
      T(52, 600, d.relW || 456, 164, `<h3>Place dans la famille</h3><p>${d.rel}</p>`, { st: { fs: d.relFs || 15.5, lh: 1.5 } }),
      ...(d.extra || [])
    ], { kind: 'member' })
  ];

  /* ---------- Modèles de pages ajoutées (mode édition) ---------- */
  const dateLine = (y) => T(330, y, 178, 30, `le ____ / ____ / 1890`, { v: 'hand', st: { fs: 14, al: 'right' } });
  const tpl = {
    /* Chronique datée : date, titre, récit, souvenir, signature */
    chronicle(first) {
      const top = first ? [
        ...head('Journal des Strays', 'Chroniques des chiens errants', 40, 23),
        nar(70, 146, 420, 54, `<p>Ce qui suit fut consigné au jour le jour, d'une main ou d'une autre, à mesure que la route s'ouvrait devant eux.</p>`, 14.5)
      ] : [T(52, 40, 456, 22, `<p class="center sc red" style="letter-spacing:.25em;font-size:12.5px">Chroniques des chiens errants</p>`)];
      const y = first ? 208 : 70;
      return [P(first ? 'Chroniques des chiens errants' : 'Chronique — sans titre', [
        ...top,
        dateLine(y),
        T(52, y + 32, 456, 46, `<h2 style="margin:0">Titre de la chronique</h2>`),
        A(52, y + 80, 200, 16, 'divider', { col: 'ink' }),
        T(52, y + 104, 456, (first ? 548 : 548) - (y + 104), `<p class="dropcap">Le récit commence ici. Double-cliquez pour écrire ce qui s'est passé ce jour-là : qui était présent, ce qu'ils ont risqué, ce qu'ils ont gagné ou perdu.</p><p>Le texte peut être aussi long que nécessaire ; s'il déborde, ajoutez une page « Suite de la chronique ».</p>`, { st: { fs: 15.5, lh: 1.55 } }),
        I(60, 566, 220, 156, 'placeholder', { frame: 'corners', r: -2, cap: 'Souvenir' }),
        A(392, 572, 96, 96, 'stain', { op: .35 }),
        T(300, 686, 208, 60, `— Signé : ……`, { v: 'hand', r: -2, st: { fs: 13.5 } })
      ], { lvl: first ? 1 : 2, bg: 'journal', kind: 'chronicle' })];
    },
    /* Suite d'une chronique trop longue */
    chronicleCont() {
      return [P('', [
        T(52, 40, 456, 22, `<p class="center sc red" style="letter-spacing:.25em;font-size:12.5px">Chroniques des chiens errants — suite</p>`),
        T(52, 80, 456, 620, `<p>La suite du récit…</p>`, { st: { fs: 15.5, lh: 1.55 } }),
        T(330, 712, 178, 40, `— ……`, { v: 'hand', r: -2, st: { fs: 13.5 } })
      ], { bg: 'journal', kind: 'chronicle' })];
    },
    /* Pages de souvenirs : big | two | four | text | collage */
    album(layout = 'four', first) {
      const header = first ? [
        ...head('Album de famille', 'Souvenirs de famille', 40, 28),
      ] : [T(52, 40, 456, 22, `<p class="center sc red" style="letter-spacing:.25em;font-size:12.5px">Souvenirs de famille</p>`)];
      const y0 = first ? 140 : 76;
      const ph = (x, y, w, h, r, cap, frame = 'corners') => I(x, y, w, h, 'placeholder', { frame, r, cap, date: '' });
      const L = {
        big: [ph(64, y0 + 10, 432, 500, -1, 'Légende de la photographie'), T(290, 690, 220, 60, `Un jour qu'on n'oubliera pas.`, { v: 'hand', r: -3, st: { fs: 13 } })],
        two: [ph(52, y0 + 40, 216, 300, -2.5, 'Légende'), ph(292, y0 + 70, 216, 300, 2, 'Légende'), T(110, 600, 340, 80, `Deux souvenirs, une même soirée.`, { v: 'hand', r: -1.5, st: { fs: 13, al: 'center' } })],
        four: [ph(64, y0 + 14, 200, 240, -2, 'Légende'), ph(296, y0 + 24, 200, 240, 1.8, 'Légende'), ph(70, y0 + 300, 200, 240, 1.4, 'Légende'), ph(300, y0 + 308, 200, 240, -1.6, 'Légende')],
        text: [ph(52, y0 + 6, 456, 300, -1, 'Légende', 'photo'), T(52, y0 + 340, 456, 740 - (y0 + 340), `<p>Ce que raconte cette photographie : qui l'a prise, où, et ce que personne n'a voulu dire devant l'objectif.</p>`, { st: { fs: 15.5, lh: 1.55 } })],
        collage: [ph(60, y0 + 20, 250, 190, -6, 'Légende'), ph(250, y0 + 120, 230, 290, 5, 'Légende', 'photo'), ph(70, y0 + 300, 210, 160, 3, 'Légende'),
          T(300, 600, 200, 120, `Collez ici tout ce qui compte : photos, billets, tickets…`, { v: 'pinned', r: 3 }), A(84, 650, 64, 64, 'chip', { r: 14 })]
      };
      return [P(first ? 'Souvenirs de famille' : '', [...header, ...(L[layout] || L.four)], { lvl: 1, bg: 'aged', kind: 'album' })];
    },
    freeText() {
      return [P('Nouvelle page', [...sub('Titre de la page'), T(52, 116, 456, 620, `<p class="dropcap">Double-cliquez pour écrire…</p>`, { st: { fs: 15.5, lh: 1.55 } })])];
    },
    letter() {
      return [P('Lettre', [
        T(70, 70, 420, 540, `<p style="text-align:right">Blackwater, le ____ 1890</p><p>Mon cher …,</p><p>…</p><p>…</p><p style="text-align:right">— Signature</p>`, { v: 'letter', r: .6 }),
        A(300, 620, 200, 133, 'envelope', { r: -4 }),
        A(110, 650, 70, 70, 'seal', { r: 10 })
      ], { bg: 'aged', kind: 'letter' })];
    },
    newspaper() {
      return [P('Coupure de journal', [
        T(80, 60, 400, 500, `<h2>NOM DU JOURNAL</h2><h3>Titre de l'article — date</h3><p>Texte de l'article…</p><p>…</p>`, { v: 'news', r: -1.2, st: { fs: 14 } }),
        T(300, 574, 200, 170, `<h3>Brève</h3><p>Une courte nouvelle…</p>`, { v: 'news', r: 3, st: { fs: 13 } }),
        T(70, 600, 200, 110, `Gardé pour…`, { v: 'pinned', r: -3 })
      ], { bg: 'board', kind: 'newspaper' })];
    },
    blank() { return [P('', [], { kind: 'blank' })]; },
    memberBlank() {
      return member({
        title: 'CODE — Prénom Nom', kicker: 'Rôle · CODE', name: 'Prénom « Surnom » Nom', code: 'CODE', pip: '★', sig: 'Signature',
        portrait: 'placeholder', cap: 'NOM — 1890', age: '… ans (né·e en …)', origin: '…', joined: '…',
        quote: '« Sa réplique. »', intro: 'Ses origines en quelques lignes.', family: 'Son passé familial.',
        traits: [['Trait 1', '…'], ['Trait 2', '…'], ['Trait 3', '…']],
        weak: '…', weakOrigin: 'Origine de sa faille.', weakSigns: 'ce qui se passe alors.',
        goal: 'Son ambition.', talents: 'Ses talents.', rel: 'Sa place parmi les Strays.'
      });
    }
  };

  /* ---------- Reprise des images d'une ancienne version ----------
     Les portraits et photos importés par l'utilisateur (dataURL) sont
     reportés dans la nouvelle édition, case par case (champ « slot »). */
  function carry(oldBook, newBook) {
    if (!oldBook || !Array.isArray(oldBook.pages)) return 0;
    const txt = (p) => p.els.map(e => e.html || '').join(' ');
    const finders = {
      king: p => /^King\b/.test(p.title || ''), wild: p => /^Wild\b/.test(p.title || ''), viper: p => /^Viper\b/.test(p.title || ''),
      money: p => /^Money\b/.test(p.title || ''), ace: p => /^Ace\b/.test(p.title || ''),
      group: p => /Présentation du groupe|Les chiens errants/.test(p.title || ''),
      camp: p => /Le rituel du feu|Ni maîtres, ni chaînes/.test(txt(p) + ' ' + (p.title || ''))
    };
    let n = 0;
    newBook.pages.forEach(np => np.els.forEach(e => {
      if (!e.slot || !finders[e.slot]) return;
      const op = oldBook.pages.find(finders[e.slot]); if (!op) return;
      const oi = op.els.find(x => x.type === 'image' && x.src && x.src.startsWith('data:')); if (!oi) return;
      e.src = oi.src; e.tone = oi.tone || (oi.sepia === false ? 'color' : 'sepia'); e.sepia = e.tone === 'sepia';
      ['fx', 'fy', 'fz'].forEach(k => { if (oi[k] != null) e[k] = oi[k]; });
      n++;
    }));
    return n;
  }

  return { T, I, A, P, head, sub, nar, push, member, tpl, carry };
})();

(function () {
  const { T, I, A, P, head, sub, nar, push, member, tpl } = window.SB;

  /* ---------- PAGE 1 — COUVERTURE ---------- */
  push(P('Couverture', [
    A(0, 0, 560, 800, 'stitch', { col: 'gold', op: .55 }),
    A(46, 46, 86, 86, 'corner', { col: 'gold', op: .7 }),
    A(428, 46, 86, 86, 'corner', { col: 'gold', r: 90, op: .7 }),
    A(428, 668, 86, 86, 'corner', { col: 'gold', r: 180, op: .7 }),
    A(46, 668, 86, 86, 'corner', { col: 'gold', r: 270, op: .7 }),
    T(30, 120, 500, 90, 'THE STRAYS', { v: 'deboss', st: { al: 'center', fs: 62, fw: 700, ls: '.07em', ff: "'Cinzel', serif", lh: 1.2 } }),
    T(60, 206, 440, 30, 'Chroniques des chiens errants', { v: 'gold', st: { al: 'center', fs: 19, ff: "'IM Fell English', serif", fi: 'italic' }, op: .92 }),
    A(170, 244, 220, 18, 'divider', { col: 'gold', op: .7 }),
    A(165, 286, 230, 276, 'dog', { col: 'gold' }),
    T(60, 588, 440, 44, '1890', { v: 'deboss', st: { al: 'center', fs: 30, ls: '.4em', ff: "'Cinzel', serif", fw: 600 } }),
    A(230, 638, 100, 14, 'chain', { col: 'gold', op: .6 }),
    T(60, 668, 440, 26, 'Never Leave a Stray Behind', { v: 'gold', st: { al: 'center', fs: 12, ls: '.38em', ff: "'Cinzel', serif" }, op: .8 }),
    A(484, 334, 90, 130, 'clasp', {})
  ], { bg: 'leather', lvl: 1 }));

  /* ---------- PAGE 2 — LES CHIENS ERRANTS ---------- */
  push(P('Les chiens errants', [
    ...head('Blackwater · 1890', 'Les chiens errants', 40, 32),
    I(52, 138, 456, 224, 'art:riders', { frame: 'photo', r: -.6, slot: 'group' }),
    T(52, 384, 456, 330, `<p class="dropcap">Il existe, dans les rues de Blackwater, une petite bande de jeunes gens que certains ont pris l'habitude d'appeler les <span class="sc">Strays</span>.</p>
      <p>Ils ne partagent ni le même sang, ni le même nom. Pourtant, depuis plusieurs années, ils vivent comme une famille.</p>
      <p>Tous ont grandi avec leurs propres blessures. Certains ont connu la violence, d'autres l'abandon ou la trahison. Ils se sont trouvés dans les rues de Blackwater, là où personne ne semblait véritablement les attendre.</p>
      <p>Aujourd'hui, ils sont cinq. Cinq chiens errants qui ont décidé qu'aucun des leurs ne serait jamais laissé derrière.</p>`, { st: { fs: 16.5, lh: 1.55 } }),
    T(320, 712, 190, 54, `Never leave a Stray behind.`, { v: 'hand', r: -3, st: { fs: 12.5 } })
  ], { lvl: 1 }));

  /* ---------- PAGES 3-4 — LES ENFANTS DE BLACKWATER ---------- */
  const yr = (y, h, years, title, html) => T(52, y, 456, h, `<p class="kick" style="margin:0 0 .15em"><span style="font-family:'Cinzel',serif;font-size:16px;letter-spacing:.08em">${years}</span> — ${title}</p>${html}`, { st: { fs: 15, lh: 1.5 } });
  push(P('Les enfants de Blackwater', [
    ...head('1882 – 1890', 'Les enfants de Blackwater'),
    nar(70, 148, 420, 72, `<p>À Blackwater, certains les considéraient comme de simples vauriens. D'autres avaient appris à se méfier de ces cinq jeunes gens qui semblaient ne jamais se quitter.</p>`, 15),
    yr(236, 112, '1882', 'Les origines', `<p>William Mercer, quinze ans, rompt avec sa riche famille et commence à rassembler autour de lui des jeunes abandonnés. Il leur offre ce qu'il n'a jamais vraiment reçu chez lui : une place où appartenir.</p>`),
    yr(358, 130, '1883 – 1885', 'La famille s\'agrandit', `<p>Nell commence à fréquenter le groupe. Ruby se rapproche peu à peu des Strays. Scarlett et Silas Blackwood rencontrent Billy lors d'une partie de poker truquée — et ne repartent plus.</p>`),
    A(52, 500, 290, 244, 'map', {}),
    T(356, 520, 156, 92, `Tout ce qu'on connaissait tenait sur cette feuille. — W.`, { v: 'hand', r: -3, st: { fs: 12.5 } }),
    A(392, 630, 80, 112, 'ace', { r: 9 })
  ], { lvl: 1 }));
  push(P('', [
    ...sub('1886 – 1890'),
    yr(110, 214, '1886 – 1889', 'Les années de rue', `<p>Les Strays grandissent ensemble. Ils changent souvent de cachette, dorment dans des granges, des bâtiments abandonnés ou des campements de fortune, et vivent de petites escroqueries, de vols et de combines.</p><p>Ils connaissent les disputes, les bagarres, les nuits froides et les repas partagés autour du feu. Les autorités de Blackwater les remarquent parfois ; leur réputation, elle, reste à faire.</p>`),
    yr(334, 268, '1890', 'Un nouveau départ', `<p>Les Strays vivent toujours près de Blackwater, dans un campement récemment installé, comme ils en ont l'habitude. Un soir, William leur a parlé d'une ambition nouvelle : ne plus être une bande de petites frappes, mais de véritables hors-la-loi, avec leur fortune et leur propre territoire.</p><p>Ils envisagent de partir vers l'Est, entre Rhodes et Saint-Denis, pour s'y établir durablement. Le voyage n'a pas encore eu lieu.</p>`),
    T(52, 612, 456, 80, `<div class="tlh"><span><b>1882</b>♚</span><span><b>1883</b>♥</span><span><b>1884</b>♣</span><span><b>1885</b>♦ ♠</span><span><b>1890</b>✦</span></div>`),
    nar(70, 700, 420, 56, `<p>Le reste de leur histoire demeurait à écrire.</p>`, 15)
  ]));

  /* ---------- PAGES 5-14 — LES CINQ STRAYS ---------- */
  push(...member({
    slot: 'king', title: 'King — William « Billy » Mercer', kicker: 'Le chef · KING', name: 'William « Billy » Mercer', code: 'KING',
    pip: '♚', sig: 'W. Mercer', portrait: 'portrait:billy', cap: 'W. MERCER — BLACKWATER',
    age: '23 ans (né en 1867)', origin: 'Blackwater, famille aristocratique', joined: 'Fondateur, 1882',
    quote: "« On est peut-être des chiens errants, mais aucun d'nous finira seul. »",
    intro: "Fondateur et chef des Strays. Charismatique, joueur et protecteur, il est profondément respecté par chacun d'eux : il écoute les autres, mais le dernier mot lui appartient toujours.",
    family: "Il grandit auprès d'un père autoritaire qui exploite les familles pauvres. À quinze ans, il refuse ces valeurs ; on le renie et on le déshérite. Il rassemble alors autour de lui des jeunes que personne n'attend.",
    traits: [['Charismatique', "On le suit sans qu'il ait à le demander."], ['Protecteur', 'Il revient toujours chercher les siens.'], ['Joueur', 'Cartes, paris, bluff : il aime le risque.']],
    weak: 'claustrophobie',
    weakOrigin: "Enfant, son père l'a puni en l'enfermant des heures dans une petite réserve sans fenêtre. Billy a frappé contre la porte. Personne n'est venu ouvrir.",
    weakSigns: "enfermé dans un espace étroit et sans issue, le souffle lui manque, la panique monte, et l'homme si sûr de lui perd tout sang-froid.",
    goal: "Bâtir un empire criminel pour offrir à sa famille la richesse et la sécurité qu'elle n'a jamais connues.",
    talents: 'Mener, décider, bluffer. Trouver les mots qui rassemblent.',
    rel: "Grand frère pour certains, presque un père pour d'autres, chef pour tous. Il laisse Silas le défier aux cartes et Scarlett marchander — mais quand il tranche, la discussion s'arrête."
  }));
  push(...member({
    slot: 'wild', title: 'Wild — Nellie « Nell » Whitmore', kicker: "L'arnaqueuse · WILD", name: 'Nellie « Nell » Whitmore', code: 'WILD',
    pip: '♥', sig: 'Nel ✗', portrait: 'portrait:nell', cap: 'N. WHITMORE — 1890',
    age: '19 ans (née en 1871)', origin: 'Blackwater, famille rom', joined: 'Vers 1883',
    quote: "« Un jour, ils imprimeront mon nom en gros. Et quelqu'un me le lira. »",
    intro: "Insolente, maligne et impulsive, elle excelle dans le mensonge et l'escroquerie. Elle lit difficilement et écrit très mal, mais possède une intelligence de rue que personne ne lui a apprise.",
    family: "Ses parents, alcooliques et négligents, la laissaient seule des heures dès son plus jeune âge. Elle a grandi sans véritable éducation, en apprenant à survivre par elle-même.",
    traits: [['Insolente', 'Une réplique pour chaque shérif.'], ['Maligne', "Ce qu'on ne lui a pas appris, elle l'a deviné."], ['Impulsive', "Elle agit d'abord, réfléchit parfois."]],
    weak: 'la peur du sang',
    weakOrigin: "Enfant, elle a découvert son père gravement blessé après une dispute, étendu dans son propre sang.",
    weakSigns: "devant une grande quantité de sang : nausées, vertiges, parfois l'évanouissement. Parler de violence, en revanche, ne lui fait rien.",
    goal: "Devenir la plus célèbre hors-la-loi de l'Ouest.",
    talents: 'Escroqueries, mensonges et diversions.',
    relW: 300, relFs: 14.5,
    rel: "Billy est le grand frère qu'elle n'a pas eu ; Ruby, son amie d'enfance, sa sœur de cœur. Seule de la bande, elle croit que la Lune est une vieille dame — Mémé Lune — à qui elle parle et dont elle lit les phases comme des présages.",
    extra: [
      A(388, 596, 92, 92, 'moon', { r: -8 }),
      T(356, 690, 156, 72, `Mémé Lune é ronde se soir. Sa porte chanse. — Nel`, { v: 'hand', r: -4, st: { fs: 12 } })
    ]
  }));
  push(...member({
    slot: 'viper', title: 'Viper — Ruby « Rue » Hargrove', kicker: 'La rebelle · VIPER', name: 'Ruby « Rue » Hargrove', code: 'VIPER',
    pip: '♣', sig: 'R. Hargrove', portrait: 'portrait:ruby', cap: 'R. HARGROVE — 1890',
    age: '20 ans (née en 1870)', origin: 'Blackwater, famille pauvre', joined: 'Vers 1884, grâce à Nell',
    quote: "« J'ai pas besoin qu'on m'sauve. J'ai besoin qu'on m'suive. »",
    intro: "Fière, rebelle et protectrice, elle déteste montrer ses faiblesses. Un jour, elle a fui son foyer pour de bon et trouvé refuge auprès de Billy.",
    family: "Elle grandit auprès d'un père violent. Vers treize ou quatorze ans, il la frappe avec un objet tranchant et lui laisse une grande cicatrice au visage.",
    traits: [['Fière', 'Elle ne baisse jamais les yeux.'], ['Rebelle', "Elle n'obéit qu'à ceux qu'elle respecte."], ['Protectrice', 'Malheur à qui touche aux siens.']],
    weak: 'la peur des lames',
    weakOrigin: "Depuis l'agression de son père, la peur est restée accrochée à la cicatrice.",
    weakSigns: "un couteau pointé vers elle, surtout près du visage, peut la figer de panique. Une lame posée sur une table, en revanche, ne lui fait rien.",
    goal: 'Devenir une femme indépendante, puissante et respectée.',
    talents: 'Protéger les siens, tenir tête, frapper la première.',
    rel: "Nell est sa sœur, plus que quiconque. Elle respecte profondément Billy, même si elle le lui dit rarement. L'orgueil de Silas l'agace souvent ; avec Scarlett, les choses restent simples et franches."
  }));
  push(...member({
    slot: 'money', title: 'Money — Scarlett Blackwood', kicker: 'La voleuse · MONEY', name: 'Scarlett Blackwood', code: 'MONEY', nameFs: 30,
    pip: '♦', sig: 'Scarlett B.', portrait: 'portrait:scarlett', cap: 'S. BLACKWOOD — 1890',
    age: '20 ans (née en 1870)', origin: "Famille d'escrocs et de joueurs", joined: 'Vers 1885, avec Silas',
    quote: "« Ce qui brille m'appartient. Le reste, je te le laisse, Silas. »",
    intro: "Séductrice, extravagante et capricieuse, elle adore l'argent, les bijoux et le luxe. Avec son jumeau, elle a quitté sa famille de sang pour rejoindre les Strays.",
    family: "Elle grandit dans une famille d'escrocs et de joueurs. Très jeune, elle apprend à voler, à tricher et à manier les armes.",
    traits: [['Séductrice', 'Un sourire vaut parfois une arme.'], ['Extravagante', "Bijoux, plumes et coups d'éclat."], ['Capricieuse', 'Elle réclame, négocie, boude.']],
    weak: "l'alcool",
    weakOrigin: "Habituée aux saloons depuis l'adolescence, elle a laissé l'habitude devenir un besoin.",
    weakSigns: "en manque, ses mains tremblent et son esprit s'embrume ; trop ivre, elle perd ses filtres et laisse échapper des secrets.",
    goal: "Devenir l'une des femmes les plus riches de l'Ouest.",
    talents: "Vols, escroqueries, charme — et une arme qu'elle sait tenir.",
    rel: "Elle respecte Billy, malgré ses caprices et son goût de l'argent. Avec Silas, tout est rivalité — et loyauté absolue. Avec Nell, elle forme le duo d'arnaqueuses de la bande."
  }));
  push(...member({
    slot: 'ace', title: 'Ace — Silas Blackwood', kicker: 'Le joueur · ACE', name: 'Silas Blackwood', code: 'ACE', nameFs: 30,
    pip: '♠', sig: 'S. Blackwood', portrait: 'portrait:silas', cap: 'S. BLACKWOOD — 1890',
    age: '20 ans (né en 1870)', origin: "Famille d'escrocs et de joueurs", joined: 'Vers 1885, avec Scarlett',
    quote: '« Je parie que non. Combien tu mets ? »',
    intro: "Excellent tireur, charmeur et arrogant, il adore les paris et déteste perdre. Entre sa sœur et lui, la rivalité ne cesse jamais — mais les jumeaux restent inséparables.",
    family: "Frère jumeau de Scarlett, il grandit dans le monde des jeux d'argent et des escroqueries, où l'on apprend tôt à tricher aux cartes et à lire ses adversaires.",
    traits: [['Charmeur', 'Il gagne la table avant la partie.'], ['Arrogant', 'Il ne doute jamais de sa main.'], ['Compétitif', 'Surtout face à Scarlett.']],
    weak: "l'alcool",
    weakOrigin: "Les nuits de poker de son adolescence lui ont appris à boire comme on mise : sans compter.",
    weakSigns: "en manque, ses mains tremblent et sa concentration s'effrite ; trop ivre, il devient indiscret et peut trahir des informations compromettantes.",
    goal: "Devenir l'un des hommes les plus riches de l'Ouest — de préférence plus riche que Scarlett.",
    talents: 'Le jeu, le bluff et la gâchette.',
    rel: "Il aime défier Billy aux cartes et aux paris, mais ne conteste jamais son autorité. Scarlett est sa rivale de toujours — et la première qu'il défendrait."
  }));

  /* ---------- PAGES 15-16 — NI MAÎTRES, NI CHAÎNES ---------- */
  push(P('Ni maîtres, ni chaînes', [
    ...head('La famille', 'Ni maîtres, ni chaînes'),
    T(52, 150, 456, 96, `<h3>Leur chef</h3><p>William Mercer est reconnu et respecté comme le chef des Strays. Il écoute ses compagnons, mais les décisions finales lui appartiennent.</p>`, { st: { fs: 15 } }),
    T(52, 254, 456, 112, `<p class="center sc red" style="font-size:13px;letter-spacing:.25em;margin:0 0 .3em">Leur seule règle sacrée</p>
      <p class="center" style="font-family:'Cinzel',serif;font-size:23px;letter-spacing:.06em;margin:0;color:#2b1d12">NEVER LEAVE A STRAY BEHIND</p>
      <p class="center" style="font-style:italic;font-size:14.5px;margin:0">Ne jamais abandonner un Stray.</p>`, { v: 'card' }),
    T(52, 378, 456, 98, `<h3>Le recrutement</h3><p>Pour rejoindre les Strays, il faut être accepté par tous, sans exception. Billy officialise ensuite l'intégration.</p>`, { st: { fs: 15 } }),
    T(52, 484, 456, 120, `<h3>Le rituel du feu</h3><p>Lorsqu'un nouveau membre est accepté, la bande se réunit autour d'un feu de camp. Le nouveau venu jure de ne jamais abandonner les siens :</p>`, { st: { fs: 15 } }),
    T(70, 606, 420, 56, `<blockquote class="center" style="font-size:17.5px;margin:0;color:#2b1d12">« Tant que j'serai debout, aucun des nôtres ne restera derrière. »</blockquote>`),
    T(52, 668, 456, 28, `<p style="font-size:15px;margin:0">Et Billy lui souhaite la bienvenue :</p>`),
    T(70, 698, 420, 40, `<blockquote class="center" style="font-size:17.5px;margin:0;color:#2b1d12">« Alors t'es plus seul. T'es des nôtres. »</blockquote>`)
  ], { lvl: 1 }));
  push(P('', [
    I(52, 52, 456, 290, 'art:campfire', { frame: 'photo', r: .5, slot: 'camp' }),
    T(52, 352, 456, 24, `<p class="center small muted" style="font-style:italic;font-size:12.5px;margin:0">Le campement, à la tombée de la nuit.</p>`),
    T(52, 388, 456, 190, `<h3>Leur quotidien</h3><p>Les Strays sont une famille bruyante. Ils se disputent, plaisantent, jouent aux cartes, partagent leurs repas et passent leurs soirées autour du feu. Chacun garde son argent, mais tous entretiennent une <b>caisse commune</b>, pour les jours sans et pour les projets de la famille.</p>`, { st: { fs: 15, lh: 1.5 } }),
    A(180, 520, 200, 16, 'divider', {}),
    nar(70, 548, 420, 110, `<p>Ils ne possédaient ni terre, ni fortune, ni véritable foyer. Mais ils avaient quelque chose que beaucoup d'hommes riches n'avaient jamais connu : une famille.</p>`, 16),
    A(96, 668, 110, 74, 'dice', { r: -8 }),
    A(380, 650, 64, 64, 'chip', { r: 12 }),
    A(250, 676, 80, 112, 'queen', { r: 6, op: .9 })
  ]));

  /* ---------- PAGES 17-18 — AU-DELÀ DE BLACKWATER ---------- */
  push(P('Au-delà de Blackwater', [
    ...head("L'appel de l'Est", 'Au-delà de Blackwater'),
    T(60, 156, 440, 400, `<p class="dropcap">Pendant des années, Blackwater avait été leur monde. Ils en connaissaient les rues, les saloons, les ruelles sombres et les endroits où se cacher lorsque les ennuis arrivaient.</p>
      <p>Mais William Mercer commençait à trouver cet horizon trop étroit. Il ne voulait plus voir les siens survivre de quelques dollars dérobés ou de combines sans lendemain.</p>
      <p>Il rêvait d'un foyer qui leur appartiendrait véritablement. D'argent, de pouvoir, et d'une réputation capable de faire trembler ceux qui les avaient autrefois méprisés.</p>`, { st: { fs: 17.5, lh: 1.6, ff: "'IM Fell English', serif" } }),
    A(150, 548, 260, 202, 'barn', { op: .85 }),
    T(60, 744, 440, 24, `<p class="center small muted" style="font-style:italic;font-size:12.5px;margin:0">Une des granges qui leur servirent de toit.</p>`)
  ], { lvl: 1 }));
  push(P('', [
    A(52, 48, 456, 383, 'mapRumor', {}),
    T(52, 446, 456, 250, `<p>Alors, un soir, il leur parla de l'Est. De Rhodes, de Saint-Denis, et de ces terres où ils pourraient peut-être devenir bien plus qu'une petite bande de vauriens.</p>
      <p>Pour l'heure, les Strays étaient encore à Blackwater. Ils avaient quelques affaires à régler, quelques dollars à gagner, et une route entière devant eux.</p>
      <p class="center" style="font-style:italic;margin-top:.6em">Le reste de leur histoire demeurait à écrire.</p>`, { st: { fs: 16, lh: 1.55, ff: "'IM Fell English', serif" } }),
    T(330, 704, 180, 54, `Un jour, on aura notre coin à nous. — B.`, { v: 'hand', r: -3, st: { fs: 12.5 } })
  ]));

  /* ---------- PAGE 19 — JOURNAL ; PAGE 20 — ALBUM ---------- */
  push(...tpl.chronicle(true));
  push(...tpl.album('four', true));
})();
