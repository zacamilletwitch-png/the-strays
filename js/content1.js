/* =====================================================================
   THE STRAYS — Contenu d'origine, 3e édition (1/5)
   Couverture, garde, avertissement de l'archiviste, sommaire, présentation
   Ce contenu n'est que la version initiale : tout est modifiable dans
   l'application, et vos changements sont sauvegardés séparément.
   ===================================================================== */
window.STRAYS = { pages: [], edition: 3 };
window.SB = (function () {
  const T = (x, y, w, h, html, o = {}) => ({ type: 'text', x, y, w, h, html, r: o.r || 0, v: o.v || '', st: o.st || {}, o: o.op || 1, g: o.g || '' });
  const I = (x, y, w, h, src, o = {}) => ({ type: 'image', x, y, w, h, src, r: o.r || 0, frame: o.frame || 'photo', sepia: o.sepia !== false, cap: o.cap || '', o: o.op || 1, g: o.g || '', col: o.col || '' });
  const A = (x, y, w, h, art, o = {}) => ({ type: 'art', x, y, w, h, art, col: o.col || 'ink', r: o.r || 0, o: o.op || 1, g: o.g || '' });
  const TOC = (x, y, w, h, start, count) => ({ type: 'toc', x, y, w, h, start, count, r: 0, o: 1, st: { fs: 13.5 } });
  const P = (title, els, o = {}) => ({ title: title || '', lvl: o.lvl || (title ? 2 : 0), bg: o.bg || 'ivory', noFolio: !!o.noFolio, els });
  /* En-tête de chapitre */
  const head = (kicker, title, y = 52, fs = (/<br>/.test(title) || title.replace(/<[^>]+>/g, '').length > 22) ? 27 : 31) => [
    T(52, y, 456, 22, `<p class="center sc red" style="letter-spacing:.25em;font-size:13px">${kicker}</p>`),
    T(40, y + 24, 480, 62, `<h1 class="center" style="font-size:${fs}px">${title}</h1>`),
    A(150, y + 88, 260, 20, 'divider', { col: 'ink' })
  ];
  /* En-tête de page de suite */
  const sub = (title, y = 52) => [
    T(52, y, 456, 40, `<h2 class="center">${title}</h2>`),
    A(180, y + 40, 200, 16, 'divider', { col: 'ink' })
  ];
  /* Voix de l'archiviste */
  const nar = (y, h, html) => T(70, y, 420, h, html, { v: 'narrator' });
  const prop = (txt) => `<span class="prop">${txt || 'Proposition narrative — à valider'}</span>`;
  const push = (...p) => window.STRAYS.pages.push(...p);
  return { T, I, A, TOC, P, head, sub, nar, prop, push };
})();

(function () {
  const { T, I, A, TOC, P, head, sub, prop, push } = window.SB;

  /* ---------- COUVERTURE ---------- */
  push(P('Couverture', [
    A(0, 0, 560, 800, 'stitch', { col: 'gold', op: .55 }),
    A(46, 46, 86, 86, 'corner', { col: 'gold', op: .7 }),
    A(428, 46, 86, 86, 'corner', { col: 'gold', r: 90, op: .7 }),
    A(428, 668, 86, 86, 'corner', { col: 'gold', r: 180, op: .7 }),
    A(46, 668, 86, 86, 'corner', { col: 'gold', r: 270, op: .7 }),
    T(60, 112, 440, 26, 'Registre · Archives de la bande', { v: 'gold', st: { al: 'center', fs: 12, ls: '.45em', ff: "'Cinzel', serif" }, op: .85 }),
    T(30, 140, 500, 90, 'THE STRAYS', { v: 'deboss', st: { al: 'center', fs: 62, fw: 700, ls: '.07em', ff: "'Cinzel', serif", lh: 1.2 } }),
    A(170, 232, 220, 18, 'divider', { col: 'gold', op: .7 }),
    T(60, 254, 440, 28, '« No home. No masters. Only us. »', { v: 'gold', st: { al: 'center', fs: 16, ff: "'IM Fell English', serif", fi: 'italic' }, op: .85 }),
    A(165, 296, 230, 276, 'dog', { col: 'gold' }),
    T(60, 600, 440, 44, '1890', { v: 'deboss', st: { al: 'center', fs: 30, ls: '.4em', ff: "'Cinzel', serif", fw: 600 } }),
    A(230, 648, 100, 14, 'chain', { col: 'gold', op: .6 }),
    T(60, 680, 440, 24, 'Blackwater · West Elizabeth', { v: 'gold', st: { al: 'center', fs: 11, ls: '.45em', ff: "'Cinzel', serif" }, op: .75 }),
    A(484, 334, 90, 130, 'clasp', {})
  ], { bg: 'leather', lvl: 1 }));

  /* ---------- GARDE ---------- */
  push(P('', [
    T(150, 296, 260, 176, `<p class="center sc" style="font-size:12px;letter-spacing:.3em;color:#7d2418">Ex-libris</p>
      <p class="center" style="font-family:'La Belle Aurore',cursive;font-size:24px;line-height:1.2;margin:.2em 0">Ce registre appartient aux Strays</p>
      <p class="center" style="font-size:12.5px;font-style:italic">Quiconque le trouve est prié de le rendre — ou de l'oublier.</p>`, { v: 'card', st: { c: '#2b1d12' } }),
    T(150, 484, 260, 50, `<p class="center small" style="color:#e9dcc0;font-style:italic;opacity:.75">Versé aux archives sous la cote B-1890-S.</p>`)
  ], { bg: 'endpaper' }));

  /* ---------- PAGE DE TITRE ---------- */
  push(P('', [
    A(40, 40, 480, 720, 'frame', { col: 'ink', op: .7 }),
    T(60, 100, 440, 30, `<p class="center sc" style="letter-spacing:.4em;font-size:13px">Archives · MDCCCLXXXII – MDCCCXC</p>`),
    T(40, 140, 480, 80, `<h1 class="center" style="font-size:54px;letter-spacing:.1em;font-weight:700">THE STRAYS</h1>`),
    T(60, 226, 440, 34, `<p class="center" style="font-family:'IM Fell English',serif;font-style:italic;font-size:21px">« No home. No masters. Only us. »</p>`),
    A(200, 282, 160, 160, 'emblem', { col: 'ink' }),
    T(80, 466, 400, 120, `<p class="center" style="font-size:16px;margin-bottom:.3em">Comment cinq enfants blessés par leurs familles</p>
      <p class="center" style="font-size:16px">devinrent une famille de hors-la-loi.</p>
      <p class="center muted" style="font-size:13px;font-style:italic;margin-top:1em">Pièces réunies et annotées par un archiviste anonyme.<br>Dossier de présentation & bible de jeu — Lawless Street V2</p>`),
    A(180, 606, 200, 18, 'divider', { col: 'ink' }),
    T(80, 636, 400, 40, `<p class="center" style="font-family:'Cinzel',serif;font-size:17px;letter-spacing:.2em">Blackwater · 1882 – 1890</p>`),
    T(150, 690, 260, 26, `<p class="center sc red" style="font-size:12px;letter-spacing:.3em">Never leave a Stray behind</p>`)
  ], { lvl: 1 }));

  /* ---------- AVERTISSEMENT ---------- */
  push(P("Avertissement de l'archiviste", [
    ...head('Avant de lire', "Avertissement de l'archiviste"),
    T(60, 186, 440, 470, `<p class="dropcap" style="font-family:'IM Fell English',serif;font-size:16px">Je n'ai jamais chevauché avec les Strays. Je ne les ai pas jugés, ni poursuivis. J'ai seulement rassemblé ce qu'ils ont laissé derrière eux.</p>
      <p style="font-family:'IM Fell English',serif;font-size:16px">Ce registre réunit des récits recueillis à Blackwater, des lettres, quelques procès-verbaux sans importance, un carnet de comptes, et ces portraits que l'on fait tirer une fois dans sa vie, quand on a de quoi payer le photographe.</p>
      <p style="font-family:'IM Fell English',serif;font-size:16px">C'est l'histoire de cinq enfants dont personne ne voulait vraiment, et qui ont grandi ensemble pendant huit ans, sans toit fixe, dans les granges et les ruelles d'une ville qui préférait ne pas les voir.</p>
      <p style="font-family:'IM Fell English',serif;font-size:16px">Le registre s'arrête en 1890, sur la route de New Austin. Ce qui viendra ensuite n'appartient encore à personne.</p>`),
    T(300, 662, 200, 40, `— L'archiviste`, { v: 'hand', r: -2, st: { fs: 14 } }),
    T(70, 668, 170, 44, `Cote B-1890-S`, { v: 'stamp', r: -6, st: { fs: 15 } })
  ], { lvl: 1 }));

  /* ---------- SOMMAIRE ---------- */
  push(P('', [
    ...head('Table des matières', 'Sommaire'),
    TOC(60, 166, 440, 598, 0, 20)
  ], { lvl: 1 }));
  push(P('', [
    ...sub('Sommaire — suite'),
    TOC(60, 112, 440, 646, 20, 99)
  ]));

  /* ---------- PRÉSENTATION ---------- */
  push(P('Présentation du projet', [
    ...head('Hors fiction — pour le staff', 'Présentation du projet'),
    T(52, 168, 456, 246, `<p class="dropcap">Les <span class="sc">Strays</span> sont nés dans les rues de Blackwater en 1882. En 1890, leurs cinq membres se connaissent depuis plus de cinq ans : ils ont grandi ensemble, sans foyer fixe, et forment déjà une véritable famille de hors-la-loi.</p>
      <p>Ils arrivent à New Austin par choix, pour commencer à <b>bâtir un empire criminel</b>. Connus de quelques commerçants et du shérif de Blackwater, ils restent inconnus partout ailleurs. Leur ascension commence avec le jeu.</p>`),
    T(52, 418, 456, 292, `<h3>Fiche du projet</h3><table>
      <tr><td>Serveur</td><td>Lawless Street V2 — Red Dead Redemption 2 RP</td></tr>
      <tr><td>Année</td><td>1890</td></tr>
      <tr><td>Origine</td><td>Blackwater, West Elizabeth (1882 – 1890)</td></tr>
      <tr><td>Zone de jeu</td><td>New Austin</td></tr>
      <tr><td>Chef</td><td>William « King » Mercer, respecté de tous</td></tr>
      <tr><td>Membres</td><td>King · Wild (Nell Whitmore) · Viper (Ruby Hargrove) · Money (Scarlett Blackwood) · Ace (Silas Blackwood)</td></tr>
      <tr><td>Règle absolue</td><td><b>Never leave a Stray behind.</b></td></tr>
      </table>`, { v: 'card', st: { fs: 13.5 } }),
    T(52, 716, 456, 40, `<p class="center" style="font-style:italic;font-size:13px">Cinq enfants blessés devenus une famille — et prêts à construire leur propre avenir.</p>`)
  ], { lvl: 1 }));

  /* ---------- NOTE D'INTENTION ---------- */
  push(P("Note d'intention au staff", [
    ...head('Hors fiction — pour le staff', "Note d'intention"),
    T(52, 168, 456, 450, `<p>Ce dossier sert à présenter le projet lors de la candidature whitelist, puis de référence commune aux joueurs.</p>
      <h3>Ce que nous voulons jouer</h3>
      <ul><li>Une <b>famille choisie</b> qui se connaît depuis des années, menée par un chef respecté de tous.</li>
      <li>Une bande déjà surveillée à Blackwater, mais <b>inconnue à New Austin</b>, sans exploit passé.</li>
      <li>Une ambition d'empire criminel, abordée étape par étape, sans garantie de succès.</li>
      <li>Des personnages faillibles, marqués par leur enfance.</li></ul>
      <h3>Ce que nous nous interdisons</h3>
      <ul><li>Imposer des événements majeurs au lore du serveur.</li>
      <li>Faire intervenir un parent ou un ennemi du passé sans accord RP préalable.</li>
      <li>Présenter nos talents comme une invincibilité.</li></ul>`),
    T(52, 624, 456, 120, `<p>${prop('Proposition narrative — à valider')}</p>
      <p style="font-size:13.5px;margin-top:.4em">Ce cachet signale les détails inventés pour enrichir le récit (anecdotes, témoignages, documents). Ils restent modifiables jusqu'à validation par les joueurs.</p>`, { v: 'card' })
  ]));

  /* ---------- CARTE ---------- */
  push(P('Carte de Blackwater et de la région', [
    ...sub('Blackwater & les territoires du Sud'),
    A(40, 116, 480, 403, 'map', {}),
    T(52, 534, 456, 120, `<p style="font-size:14.5px">Relevé à main levée, retrouvé plié en quatre dans le registre. Les Strays connaissaient Blackwater par cœur : ses quais, ses granges vides et ses arrière-salles. Au-delà, le pays devenait rumeur. Quelqu'un a tracé au crayon rouge la route du Sud.</p>`),
    T(300, 664, 210, 80, `Les distances sont fausses, mais l'envie est vraie. — W.`, { v: 'hand', r: -3, st: { fs: 12.5 } }),
    A(60, 664, 60, 70, 'thumb', { r: 20 })
  ], { lvl: 1 }));
})();
