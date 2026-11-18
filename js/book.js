/* =====================================================================
   THE STRAYS — Dossier de présentation, 5e édition (20 pages)
   Lawless Street V2 — candidature de groupe.
   Pagination : p.1 couverture seule ; p.2 face au contre-plat ;
   puis doubles pages 3-4, 5-6 … 19-20 (index pair à gauche).
   Tout reste modifiable dans l'application.
   ===================================================================== */
window.STRAYS = { pages: [], edition: 5 };
window.SB = (function () {
  const T = (x, y, w, h, html, o = {}) => ({ type: 'text', x, y, w, h, html, r: o.r || 0, v: o.v || '', st: o.st || {}, o: o.op || 1, g: o.g || '' });
  const I = (x, y, w, h, src, o = {}) => ({ type: 'image', x, y, w, h, src, r: o.r || 0, frame: o.frame || 'photo', sepia: o.sepia !== false, cap: o.cap || '', o: o.op || 1, g: o.g || '', col: o.col || '' });
  const A = (x, y, w, h, art, o = {}) => ({ type: 'art', x, y, w, h, art, col: o.col || 'ink', r: o.r || 0, o: o.op || 1, g: o.g || '' });
  const P = (title, els, o = {}) => ({ title: title || '', lvl: o.lvl || (title ? 2 : 0), bg: o.bg || 'ivory', noFolio: !!o.noFolio, els });
  const head = (kicker, title, y = 48, fs = 30) => [
    T(52, y, 456, 22, `<p class="center sc red" style="letter-spacing:.25em;font-size:13px">${kicker}</p>`),
    T(40, y + 24, 480, 52, `<h1 class="center" style="font-size:${fs}px">${title}</h1>`),
    A(150, y + 80, 260, 20, 'divider', { col: 'ink' })
  ];
  const sub = (title, y = 48) => [
    T(52, y, 456, 40, `<h2 class="center">${title}</h2>`),
    A(180, y + 40, 200, 16, 'divider', { col: 'ink' })
  ];
  const push = (...p) => window.STRAYS.pages.push(...p);

  /* Double page d'un membre : [gauche, droite] */
  const member = (d) => [
    P(d.title, [
      ...head(d.kicker, d.name, 44, d.nameFs || 28),
      I(52, 148, 240, 332, d.portrait, { frame: 'cabinet', cap: d.cap, r: -1.5 }),
      T(308, 150, 200, 204, `<h3>Signalement</h3><table>
        <tr><td>Code</td><td><b>${d.code}</b></td></tr>
        <tr><td>Âge</td><td>${d.age}</td></tr>
        <tr><td>Origine</td><td>${d.origin}</td></tr>
        <tr><td>Arrivée</td><td>${d.joined}</td></tr></table>`, { v: 'card', st: { fs: 13.5 } }),
      T(340, 360, 136, 130, `<p class="pip">${d.pip} ${d.pip}</p><h1>${d.code}</h1><p class="sig">${d.sig}</p>`, { v: 'oldcard', r: 3, st: { al: 'center' } }),
      T(52, 494, 456, 50, `<blockquote class="center" style="font-size:16.5px;margin:0">${d.quote}</blockquote>`),
      T(52, 548, 456, 216, `<p class="kick">Présentation</p><p>${d.intro}</p><p class="kick">Histoire familiale</p><p>${d.family}</p>`, { st: { fs: 15, lh: 1.45 } })
    ], { lvl: 1 }),
    P('', [
      ...sub(d.code + ' — Caractère, faille & place'),
      ...d.traits.map(([t, g], k) => T(52 + k * 156, 112, 144, 114, `<div class="trait"><h4>${t}</h4><p>${g}</p></div>`, { v: 'card' })),
      T(52, 236, 456, 200, `<p class="kick">Faiblesse — ${d.weak}</p><p>${d.weakOrigin}</p><p style="margin:0"><span class="sc red">En jeu —</span> <i>${d.weakPlay}</i></p>`, { v: 'archive', st: { fs: 14, lh: 1.45 } }),
      T(52, 448, 220, 124, `<h3>Objectif</h3><p>${d.goal}</p>`, { st: { fs: 15.5 } }),
      T(288, 448, 220, 124, `<h3>Rôle</h3><p>${d.role}</p>`, { st: { fs: 15.5 } }),
      A(180, 578, 200, 16, 'divider', { col: 'ink' }),
      T(52, 600, 456, 164, `<h3>Parmi les Strays</h3><p>${d.rel}</p>`, { st: { fs: 15.5, lh: 1.5 } })
    ])
  ];
  return { T, I, A, P, head, sub, push, member };
})();

(function () {
  const { T, I, A, P, head, sub, push, member } = window.SB;

  /* ---------- PAGE 1 — COUVERTURE ---------- */
  push(P('Couverture', [
    A(0, 0, 560, 800, 'stitch', { col: 'gold', op: .55 }),
    A(46, 46, 86, 86, 'corner', { col: 'gold', op: .7 }),
    A(428, 46, 86, 86, 'corner', { col: 'gold', r: 90, op: .7 }),
    A(428, 668, 86, 86, 'corner', { col: 'gold', r: 180, op: .7 }),
    A(46, 668, 86, 86, 'corner', { col: 'gold', r: 270, op: .7 }),
    T(60, 112, 440, 26, 'Registre · Archives de la bande', { v: 'gold', st: { al: 'center', fs: 12, ls: '.45em', ff: "'Cinzel', serif" }, op: .85 }),
    T(30, 140, 500, 90, 'THE STRAYS', { v: 'deboss', st: { al: 'center', fs: 62, fw: 700, ls: '.07em', ff: "'Cinzel', serif", lh: 1.2 } }),
    A(170, 232, 220, 18, 'divider', { col: 'gold', op: .7 }),
    T(60, 254, 440, 28, '« Never Leave a Stray Behind. »', { v: 'gold', st: { al: 'center', fs: 17, ff: "'IM Fell English', serif", fi: 'italic' }, op: .9 }),
    A(165, 296, 230, 276, 'dog', { col: 'gold' }),
    T(60, 600, 440, 44, '1890', { v: 'deboss', st: { al: 'center', fs: 30, ls: '.4em', ff: "'Cinzel', serif", fw: 600 } }),
    A(230, 648, 100, 14, 'chain', { col: 'gold', op: .6 }),
    T(60, 680, 440, 24, 'Blackwater · West Elizabeth', { v: 'gold', st: { al: 'center', fs: 11, ls: '.45em', ff: "'Cinzel', serif" }, op: .75 }),
    A(484, 334, 90, 130, 'clasp', {})
  ], { bg: 'leather', lvl: 1 }));

  /* ---------- PAGE 2 — PRÉSENTATION DU GROUPE ---------- */
  push(P('Présentation du groupe', [
    ...head('Lawless Street V2 · Présentation du groupe', 'Les Strays', 40, 34),
    I(52, 138, 456, 188, 'art:riders', { frame: 'photo', r: -.6 }),
    T(52, 332, 456, 22, `<p class="center small muted" style="font-style:italic;font-size:12.5px;margin:0">Cinq silhouettes sur la route — d'après une gravure, 1890.</p>`),
    T(52, 360, 456, 172, `<p class="dropcap">Les Strays ne sont pas nés d'une ambition criminelle, mais de cinq enfances marquées par l'abandon, la violence et le manque d'affection. Fondée en 1882 par William Mercer, la bande est peu à peu devenue une véritable famille.</p>
      <p>Depuis des années, ils vivent ensemble à Blackwater, partageant leurs maigres ressources, leurs disputes, leurs rires et leurs rêves. En 1890, ils ne veulent plus seulement survivre : ils veulent construire leur propre avenir — quitte à devenir les hors-la-loi que l'Ouest apprendra un jour à craindre.</p>`, { st: { fs: 14.5, lh: 1.5 } }),
    T(52, 540, 456, 218, `<table>
      <tr><td>Nom</td><td><b>The Strays</b> — fondés en 1882</td></tr>
      <tr><td>Origine</td><td>Blackwater, West Elizabeth</td></tr>
      <tr><td>Membres</td><td>Cinq, réunis entre 1882 et 1885</td></tr>
      <tr><td>Chef</td><td>William « Billy » Mercer</td></tr>
      <tr><td>Situation</td><td>Encore à Blackwater, 1890</td></tr>
      <tr><td>Destination</td><td>Rhodes, Lemoyne (envisagée)</td></tr>
      <tr><td>Ambition</td><td>Construire un empire criminel</td></tr></table>`, { v: 'card', st: { fs: 14, lh: 1.35 } })
  ], { lvl: 1 }));

  /* ---------- PAGES 3-4 — HISTOIRE ---------- */
  push(P('Histoire des Strays', [
    ...head('1882 – 1890', 'Histoire des Strays'),
    T(52, 156, 456, 300, `<h3>Le commencement</h3>
      <p class="dropcap">En 1882, William Mercer, quinze ans, est renié et déshérité par sa famille aristocratique de Blackwater. Il commence à rassembler autour de lui des jeunes que personne n'attend.</p>
      <p>Les autres le rejoignent un à un. Ensemble, ils grandissent dans des granges abandonnées, des bâtiments désaffectés et des campements de fortune, et survivent de petites escroqueries, de vols et de combines.</p>
      <p>Connue de quelques commerçants et surveillée par les autorités locales, la bande n'a pourtant aucune réputation notable au-delà de Blackwater.</p>`, { st: { fs: 15.5, lh: 1.5 } }),
    T(52, 470, 300, 290, `<p class="kick">Chronologie</p><div class="tl">
      <div><b>1882</b>Billy, renié à 15 ans, fonde les Strays.</div>
      <div><b>1883</b>Nell rejoint peu à peu le groupe.</div>
      <div><b>1884</b>Ruby s'en rapproche grâce à Nell.</div>
      <div><b>1885</b>Une partie de poker truquée : Scarlett et Silas rencontrent Billy et rejoignent la bande. Nell quitte ses parents.</div></div>`, { st: { fs: 14, lh: 1.4 } }),
    A(372, 486, 130, 74, 'dice', { r: -8 }),
    A(392, 568, 80, 112, 'ace', { r: 9 }),
    T(340, 704, 180, 54, `Huit ans. Pas un toit. — B.`, { v: 'hand', r: -3, st: { fs: 12.5 } })
  ], { lvl: 1 }));
  push(P('', [
    ...sub('La situation actuelle — 1890'),
    T(52, 112, 456, 230, `<p>Les cinq Strays se trouvent toujours à <b>Blackwater</b>. Au début de l'aventure, ils comptent y rester quelques jours avant de quitter West Elizabeth pour <b>Rhodes, en Lemoyne</b>.</p>
      <p>Leur premier objectif : trouver où s'installer et établir un quartier général, puis développer peu à peu leurs activités illégales. <b>Ils n'ont encore aucun QG à Rhodes et n'y contrôlent aucun territoire.</b> Le voyage et l'installation seront joués en RP.</p>`, { st: { fs: 14.5, lh: 1.5 } }),
    A(52, 292, 320, 269, 'mapEast', {}),
    T(388, 300, 120, 260, `<div class="tl">
      <div><b>1887</b>Ruby fuit son foyer et trouve refuge auprès de Billy.</div>
      <div><b>1890</b>Les cinq décident de partir pour Rhodes.</div></div>`, { st: { fs: 14, lh: 1.4 } }),
    T(52, 590, 456, 110, `<p class="center" style="font-family:'IM Fell English',serif;font-style:italic;font-size:17px;margin:0 0 .4em">Blackwater les a vus grandir. Rhodes dira ce qu'ils sont devenus.</p>
      <p class="center small muted" style="font-size:13px;margin:0">Aucun succès n'est garanti : ils peuvent réussir, échouer ou se diviser — le jeu décidera.</p>`),
    T(370, 712, 150, 54, `Quelque part par là. — W.`, { v: 'hand', r: -3, st: { fs: 12.5 } })
  ]));

  /* ---------- PAGES 5-14 — LES CINQ STRAYS ---------- */
  push(...member({
    title: 'King — William « Billy » Mercer', kicker: 'Le chef · KING', name: 'William « Billy » Mercer', code: 'KING',
    pip: '♚', sig: 'W. Mercer',
    portrait: 'portrait:billy', cap: 'W. MERCER — BLACKWATER',
    age: '23 ans (né en 1867)', origin: 'Blackwater, famille aristocratique', joined: 'Fondateur, 1882',
    quote: "« On est peut-être des chiens errants, mais aucun d'nous finira seul. »",
    intro: "Fondateur et chef incontesté des Strays. Charismatique et joueur, il est devenu le repère de plusieurs jeunes abandonnés.",
    family: "Né dans une famille extrêmement riche, il grandit auprès d'un père autoritaire qui exploite les familles pauvres. À quinze ans, il refuse ces valeurs : son père le renie et le déshérite.",
    traits: [['Charismatique', 'On le suit sans qu\'il ait à le demander.'], ['Protecteur', 'Il revient toujours chercher les siens.'], ['Joueur', 'Cartes, paris, bluff : il aime le risque.']],
    weak: 'claustrophobie',
    weakOrigin: "Enfant, son père l'a puni en l'enfermant des heures dans une petite réserve sans fenêtre. Depuis, Billy panique lorsqu'il se retrouve enfermé dans un espace étroit sans issue : souffle court, oppression, perte de son sang-froid.",
    weakPlay: "cellule, cave, coffre ou pièce verrouillée. Un adversaire qui le sait peut s'en servir.",
    goal: "Bâtir un empire criminel pour offrir aux Strays la richesse, la sécurité et la stabilité qu'ils n'ont jamais connues.",
    role: "Chef et décisionnaire final. Il écoute chacun, mais garde toujours le dernier mot.",
    rel: "Grand frère pour certains, presque un père pour d'autres, chef pour tous : les Strays le respectent profondément et reconnaissent son autorité. Il laisse Silas le défier aux cartes et Scarlett négocier — mais quand il tranche, la discussion s'arrête."
  }));
  push(...member({
    title: 'Wild — Nellie « Nell » Whitmore', kicker: "L'arnaqueuse · WILD", name: 'Nellie « Nell » Whitmore', code: 'WILD',
    pip: '♥', sig: 'Nel ✗',
    portrait: 'portrait:nell', cap: 'N. WHITMORE — 1890',
    age: '19 ans (née en 1871)', origin: 'Blackwater, famille rom', joined: '1883, à douze ans',
    quote: "« Un jour, ils imprimeront mon nom en gros. Et quelqu'un me le lira. »",
    intro: "Elle lit difficilement et écrit très mal, mais possède une intelligence pratique redoutable. Elle quitte définitivement ses parents à quatorze ans.",
    family: "Ses parents, alcooliques et négligents, la laissent seule des heures dès l'âge de trois ans. Sans véritable éducation, elle apprend à survivre par elle-même.",
    traits: [['Insolente', 'Une réplique pour chaque shérif.'], ['Maligne', 'Ce qu\'on ne lui a pas appris, elle l\'a deviné.'], ['Impulsive', 'Elle agit d\'abord, réfléchit parfois.']],
    weak: 'phobie du sang',
    weakOrigin: "Enfant, Nell a découvert son père gravement blessé après une dispute familiale. Depuis, la vue d'une grande quantité de sang peut lui causer nausées, vertiges, voire un évanouissement. Parler de violence, en revanche, ne lui fait rien.",
    weakPlay: "fusillade, rixe sanglante, Stray blessé : soigner ou assister lui est très difficile.",
    goal: "Devenir une hors-la-loi célèbre dans tout l'Ouest.",
    role: "Escroqueries, manipulation et diversion.",
    rel: "Elle considère Billy comme un grand frère et Ruby, son amie d'enfance, comme sa sœur de cœur. Avec Scarlett, elle monte les escroqueries les plus audacieuses de la bande ; avec Silas, elle rivalise de provocations."
  }));
  push(...member({
    title: 'Viper — Ruby « Rue » Hargrove', kicker: 'La rebelle · VIPER', name: 'Ruby « Rue » Hargrove', code: 'VIPER',
    pip: '♣', sig: 'R. Hargrove',
    portrait: 'portrait:ruby', cap: 'R. HARGROVE — 1890',
    age: '20 ans (née en 1870)', origin: 'Blackwater, famille pauvre', joined: '1884, grâce à Nell',
    quote: "« J'ai pas besoin qu'on m'sauve. J'ai besoin qu'on m'suive. »",
    intro: "Meilleure amie de Nell depuis l'enfance, elle se rapproche des Strays en 1884. En 1887, elle fuit définitivement son foyer et trouve refuge auprès de Billy.",
    family: "Elle grandit auprès d'un père violent. Vers treize ou quatorze ans, il la frappe avec un objet tranchant et lui laisse une grande cicatrice au visage.",
    traits: [['Fière', 'Elle ne baisse jamais les yeux.'], ['Rebelle', 'Elle n\'obéit qu\'à ceux qu\'elle respecte.'], ['Protectrice', 'Malheur à qui touche aux siens.']],
    weak: 'phobie des lames',
    weakOrigin: "Depuis l'agression de son père, une lame dirigée vers elle — surtout près du visage — peut provoquer une panique : figement, recul, tremblements. Un couteau posé sur une table ou un usage ordinaire ne la dérangent pas.",
    weakPlay: "menace au couteau, prise d'otage, interrogatoire : elle peut perdre ses moyens.",
    goal: "Devenir une femme puissante, indépendante et respectée.",
    role: "Protection du groupe et actions de terrain.",
    rel: "Ruby respecte profondément Billy, même si elle exprime rarement sa reconnaissance. Elle veille sur Nell plus que sur quiconque. L'orgueil de Silas l'agace souvent ; avec Scarlett, les choses sont simples et franches."
  }));
  push(...member({
    title: 'Money — Scarlett Blackwood', kicker: 'La voleuse · MONEY', name: 'Scarlett Blackwood', code: 'MONEY',
    pip: '♦', sig: 'Scarlett B.',
    portrait: 'portrait:scarlett', cap: 'S. BLACKWOOD — 1890', nameFs: 30,
    age: '20 ans (née en 1870)', origin: "Famille d'escrocs et de joueurs", joined: '1885, avec Silas',
    quote: "« Ce qui brille m'appartient. Le reste, je te le laisse, Silas. »",
    intro: "Jumelle de Silas, elle rencontre Billy en 1885 lors d'une partie de poker truquée, puis choisit les Strays plutôt que sa famille de sang.",
    family: "Elle grandit dans une famille d'escrocs et de joueurs, entre saloons et tables de jeu. Très jeune, elle apprend à voler, à tricher et à manier les armes.",
    traits: [['Séductrice', 'Un sourire vaut parfois une arme.'], ['Extravagante', 'Bijoux, plumes et coups d\'éclat.'], ['Capricieuse', 'Elle réclame, négocie, boude.']],
    weak: "dépendance à l'alcool",
    weakOrigin: "Habituée très jeune aux saloons, elle a peu à peu développé une dépendance. En manque : tremblements et difficultés de concentration, jusque dans son tir. Trop ivre, elle perd ses filtres et peut révéler sentiments et secrets.",
    weakPlay: "on peut la faire boire pour la faire parler ; un long voyage sans alcool la rend moins fiable.",
    goal: "Devenir l'une des femmes les plus riches de l'Ouest.",
    role: "Escroqueries, vols et combat.",
    rel: "Elle respecte Billy, malgré ses caprices et son goût pour l'argent. Avec Silas, tout est rivalité — et loyauté absolue. Avec Nell, elle forme le duo d'arnaqueuses de la bande."
  }));
  push(...member({
    title: 'Ace — Silas Blackwood', kicker: 'Le joueur · ACE', name: 'Silas Blackwood', code: 'ACE',
    pip: '♠', sig: 'S. Blackwood',
    portrait: 'portrait:silas', cap: 'S. BLACKWOOD — 1890', nameFs: 30,
    age: '20 ans (né en 1870)', origin: "Famille d'escrocs et de joueurs", joined: '1885, avec Scarlett',
    quote: "« Je parie que non. Combien tu mets ? »",
    intro: "Frère jumeau de Scarlett, il rejoint les Strays avec elle en 1885, après la fameuse partie de poker truquée face à Billy.",
    family: "Il grandit dans le monde des escroqueries et des jeux d'argent. Très jeune, il apprend à tricher aux cartes, à manipuler ses adversaires et à manier les armes.",
    traits: [['Charmeur', 'Il gagne la table avant la partie.'], ['Arrogant', 'Il ne doute jamais de sa main.'], ['Compétitif', 'Surtout face à Scarlett.']],
    weak: "dépendance à l'alcool",
    weakOrigin: "Habitué depuis l'adolescence aux soirées de poker où l'alcool coule à flots, il a développé une dépendance. En manque : tremblements et troubles de concentration. Trop ivre, il devient vantard, indiscret, et peut révéler des informations compromettantes.",
    weakPlay: "ivre, il peut mettre toute la bande en danger ; en manque, ses parties en pâtissent.",
    goal: "Devenir l'un des hommes les plus riches de l'Ouest — idéalement plus riche que Scarlett.",
    role: "Jeux d'argent, escroqueries et combat.",
    rel: "Il aime défier Billy aux cartes et aux paris, mais reconnaît pleinement son autorité : c'est un jeu entre eux, jamais une rivalité de chef. Scarlett est sa rivale de toujours — et la première qu'il défendrait."
  }));

  /* ---------- PAGES 15-16 — FONCTIONNEMENT & VALEURS ---------- */
  push(P('Fonctionnement et valeurs', [
    ...head('La famille', 'Fonctionnement et valeurs', 48, 27),
    T(52, 150, 456, 120, `<h3>Le commandement</h3><p>Billy est le chef reconnu et respecté de tous. Il écoute les membres, mais garde toujours le dernier mot sur les décisions importantes.</p>`, { st: { fs: 14.5 } }),
    T(52, 282, 456, 112, `<p class="center sc red" style="font-size:13px;letter-spacing:.25em;margin:0 0 .3em">La règle fondamentale</p>
      <p class="center" style="font-family:'Cinzel',serif;font-size:24px;letter-spacing:.06em;margin:0;color:#2b1d12">NEVER LEAVE A STRAY BEHIND</p>
      <p class="center" style="font-style:italic;font-size:14px;margin:0">Ne jamais abandonner un Stray.</p>`, { v: 'card' }),
    T(52, 408, 456, 180, `<h3>Le recrutement</h3><p>Les Strays veulent accueillir progressivement de nouveaux membres, de préférence des personnes ayant connu des difficultés semblables aux leurs. L'acceptation doit être <b>unanime</b> ; Billy officialise ensuite l'intégration.</p>`, { st: { fs: 14.5 } }),
    T(52, 596, 456, 160, `<h3>Les ressources</h3><p>Chaque membre conserve son argent personnel. Le groupe tient aussi une <b>caisse commune</b>, pour les besoins de la famille et ses projets.</p>`, { st: { fs: 14.5 } }),
    A(400, 690, 70, 70, 'seal', { r: 12 })
  ], { lvl: 1 }));
  push(P('', [
    ...sub('Le rituel du feu'),
    I(52, 104, 456, 214, 'art:campfire', { frame: 'photo' }),
    T(52, 340, 456, 66, `<p style="font-size:15px;margin:0">Le soir d'une intégration, les membres se réunissent autour d'un feu de camp, loin de la ville. Le nouveau Stray promet :</p>`),
    T(70, 416, 420, 66, `<blockquote class="center" style="font-size:19px;margin:0;color:#2b1d12">« Tant que j'serai debout, aucun des nôtres ne restera derrière. »</blockquote>`),
    T(52, 486, 456, 30, `<p style="font-size:14.5px;margin:0">Billy répond :</p>`),
    T(70, 516, 420, 46, `<blockquote class="center" style="font-size:19px;margin:0;color:#2b1d12">« Alors t'es plus seul. T'es des nôtres. »</blockquote>`),
    A(180, 572, 200, 16, 'divider', {}),
    T(52, 604, 456, 128, `<h3>La trahison</h3><p>Trahir un Stray peut avoir de lourdes conséquences. Elles ne sont pas fixées à l'avance : elles seront déterminées en RP, selon la faute et les circonstances.</p>`, { v: 'archive', st: { fs: 14 } })
  ]));

  /* ---------- PAGES 17-18 — OBJECTIFS & APPORTS ---------- */
  push(P('Objectifs et apports au serveur', [
    ...head('Hors fiction — pour le staff', 'Notre projet'),
    T(52, 150, 456, 132, `<p class="dropcap">Nous souhaitons proposer un <b>RP criminel évolutif</b>, fondé sur une famille de hors-la-loi qui partage une histoire commune. Notre ambition : construire progressivement un empire criminel, <b>sans commencer avec une organisation déjà puissante</b>.</p>`, { st: { fs: 15.5, lh: 1.5 } }),
    T(52, 292, 456, 272, `<h3>Nos premiers objectifs</h3><div class="tl">
      <div><b>I</b>Rester quelques jours à Blackwater.</div>
      <div><b>II</b>Préparer notre départ vers Rhodes.</div>
      <div><b>III</b>Trouver un futur quartier général.</div>
      <div><b>IV</b>Développer nos premières activités illégales.</div>
      <div><b>V</b>Construire notre réputation.</div>
      <div><b>VI</b>Nouer des alliances et des rivalités.</div>
      <div><b>VII</b>Accueillir peu à peu de nouveaux membres.</div></div>`, { v: 'card', st: { fs: 15, lh: 1.4 } }),
    T(70, 584, 420, 96, `<p>Notre objectif n'est pas d'enchaîner les fusillades ou les braquages, mais de créer des scènes variées, cohérentes et intéressantes pour tous les joueurs impliqués.</p>`, { v: 'narrator', st: { fs: 15.5 } }),
    A(290, 682, 200, 92, 'revolver', { r: -6, op: .8 }),
    A(70, 690, 70, 77, 'horseshoe', { r: -14, op: .85 })
  ], { lvl: 1 }));
  const gift = (x, y, t, txt) => T(x, y, 220, 164, `<p class="kick" style="margin-bottom:.35em">${t}</p><p style="margin:0">${txt}</p>`, { v: 'card', st: { fs: 14.5, lh: 1.42 } });
  push(P('', [
    ...sub('Ce que nous voulons apporter'),
    gift(52, 110, 'Un RP illégal progressif', 'Des activités criminelles variées, préparées, et suivies de vraies conséquences.'),
    gift(288, 110, "Les forces de l'ordre", "Des occasions d'enquêtes, d'interrogatoires, d'arrestations et de procès."),
    gift(52, 288, 'Les civils', 'Escroqueries, rencontres, négociations, conflits et scènes sociales.'),
    gift(288, 288, 'Les autres factions', 'Alliances, rivalités, échanges et tensions avec les autres organisations.'),
    gift(52, 466, 'Un RP familial et humain', "La vie quotidienne d'une bande soudée : disputes, complicité, évolution."),
    gift(288, 466, 'Des personnages imparfaits', 'Chacun a une faiblesse exploitable et assume les conséquences de ses actes.'),
    A(180, 646, 200, 16, 'divider', {}),
    T(60, 670, 440, 90, `<p class="center" style="font-family:'IM Fell English',serif;font-style:italic;font-size:17px;margin:0">Nous privilégions le fair-play, le développement des personnages et le respect des règles du serveur.</p>`)
  ]));

  /* ---------- PAGES 19-20 — DEMANDES AU STAFF & CONCLUSION ---------- */
  push(P('Accompagnement souhaité pour le lancement', [
    ...head('Hors fiction — pour le staff', 'Accompagnement souhaité<br>pour le lancement', 40, 22),
    T(52, 150, 456, 70, `<p style="font-size:15px;font-style:italic;margin:0">Nous sollicitons un accompagnement modeste pour commencer notre activité illégale dans de bonnes conditions. <b>Ces demandes ne sont pas des exigences.</b></p>`),
    T(52, 230, 220, 178, `<h3>Quartier général</h3><p>Un futur QG dans la région de Rhodes. Nous laissons le staff proposer un emplacement adapté : bâtiment modeste, propriété isolée ou tout autre lieu cohérent.</p>`, { v: 'card', st: { fs: 14.5, lh: 1.4 } }),
    T(288, 230, 220, 178, `<h3>Armement</h3><p>Le minimum nécessaire pour débuter. Le staff décide de l'équipement éventuellement accordé. Ni armes rares, ni armement puissant.</p>`, { v: 'card', st: { fs: 14.5, lh: 1.4 } }),
    T(52, 420, 220, 178, `<h3>Chevaux</h3><p>Des montures simples pour les déplacements du groupe, selon les modalités proposées par le staff.</p>`, { v: 'card', st: { fs: 14.5, lh: 1.4 } }),
    T(288, 420, 220, 178, `<h3>Argent</h3><p>Une petite somme de départ pour l'essentiel, montant à définir avec le staff. Nous ne voulons pas commencer riches : nos ressources se gagneront en RP.</p>`, { v: 'card', st: { fs: 14.5, lh: 1.4 } }),
    T(52, 630, 256, 56, `À l'appréciation du staff`, { v: 'stamp', r: -5, st: { fs: 16 } }),
    A(318, 612, 190, 127, 'envelope', { r: 4, op: .9 }),
    T(64, 704, 250, 58, `Rien n'est acquis. Tout se gagnera en jeu. — B.`, { v: 'hand', r: -2, st: { fs: 12.5 } })
  ], { lvl: 1 }));
  push(P('Conclusion', [
    T(52, 64, 456, 190, `<h3>Notre démarche</h3><p>Nous sommes conscients de l'importance de l'équilibrage du serveur. Nous sommes prêts à adapter nos demandes et à obtenir certaines ressources à travers des scènes RP. Nous souhaitons simplement une base cohérente pour lancer notre projet.</p>`, { st: { fs: 14.5, lh: 1.5 } }),
    A(150, 250, 260, 20, 'divider', {}),
    T(60, 284, 440, 170, `<p class="center" style="font-family:'IM Fell English',serif;font-style:italic;font-size:19px;line-height:1.5;margin:0">« Les Strays ne cherchent pas à arriver dans l'Ouest avec un empire déjà construit.<br>Ils arrivent avec une histoire, une famille et une ambition.<br>Le reste, ils devront le gagner. »</p>`),
    A(200, 466, 160, 160, 'emblem', { col: 'ink' }),
    T(52, 640, 456, 44, `<p class="center" style="font-family:'Cinzel',serif;font-size:22px;letter-spacing:.12em;margin:0;color:#7d2418">NEVER LEAVE A STRAY BEHIND</p>`),
    T(52, 690, 456, 30, `<p class="center sc" style="font-size:13px;letter-spacing:.3em;margin:0">Blackwater · 1882 – 1890 · Cap sur Rhodes</p>`),
    T(350, 724, 160, 40, `— B. M.`, { v: 'hand', r: -3, st: { fs: 14 } })
  ], { lvl: 2 }));
})();
