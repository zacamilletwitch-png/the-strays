/* =====================================================================
   THE STRAYS — Contenu d'origine, 4e édition (5/5)
   Quatrième partie : la parole de King, les liens, la famille,
   le registre des membres, la caisse commune, l'empire, les pages libres
   ===================================================================== */
(function () {
  const { T, I, A, P, head, sub, nar, prop, push } = window.SB;
  const body = (y, h, html, fs) => T(52, y, 456, h, html, fs ? { st: { fs } } : {});
  const duo = (y, title, tag, text, note) => T(52, y, 456, 300,
    `<h3 style="font-size:1.3em">${title}</h3><p class="sc muted" style="font-size:13px;margin-top:-.2em">${tag}</p>${text}<p style="margin-top:.5em"><span class="sc red">Point de friction —</span> <i>${note}</i></p>`,
    { st: { fs: 14.5 } });

  /* ---------- LA PAROLE DE KING ---------- */
  push(P('Quatrième partie — La parole de King', [
    ...head('Quatrième partie', 'La parole de King'),
    nar(180, 80, `<p>Toutes les sources concordent sur un point, et c'est assez rare pour être noté : aucun Strays n'a jamais disputé sa place à William Mercer.</p>`),
    body(270, 330, `<p>Billy n'est pas seulement le fondateur de la bande. En 1890, il en est toujours le chef, et chacun le reconnaît comme tel. Pour Nell, il est un grand frère ; pour Ruby, le seul homme dont elle accepte un ordre ; pour les jumeaux, l'ami qui les a sortis de chez eux. Pour tous, il est celui qui les a réunis et protégés pendant huit ans.</p>
      <p>On le taquine, on le contredit, on parie contre lui. Il consulte volontiers. Mais quand une décision importante doit être prise, on l'écoute — et il a le dernier mot.</p>
      <p>Son autorité ne doit rien à la terreur. Elle tient au respect, à la loyauté, et à une longue suite de nuits où il a été là.</p>`),
    T(52, 612, 456, 120, `<p style="font-size:13.5px">Les caprices de Scarlett, l'esprit de compétition de Silas, la rébellion de Ruby et les provocations de Nell sont réels. <b>Aucun d'eux ne cherche à prendre la place de Billy.</b></p>`, { v: 'card' })
  ], { lvl: 1 }));

  /* ---------- RELATIONS ---------- */
  push(P('Les liens entre les membres', [
    ...head('Quatrième partie', 'Ce qui nous lie'),
    T(52, 176, 456, 76, `<p style="font-size:14.5px">Dix liens, forgés par des années d'adolescence commune. Les tensions décrites ici sont des frottements de famille, pas des conflits permanents.</p>`),
    A(80, 262, 400, 350, 'pentagon', {}),
    T(230, 246, 100, 24, `<p class="center sc">King</p>`),
    T(444, 380, 80, 24, `<p class="sc">Wild</p>`),
    T(388, 572, 90, 24, `<p class="sc">Viper</p>`),
    T(80, 572, 104, 24, `<p class="sc" style="text-align:right">Money</p>`),
    T(36, 380, 84, 24, `<p class="sc" style="text-align:right">Ace</p>`),
    T(52, 640, 456, 90, `<p class="center" style="font-style:italic;font-size:14.5px">Le schéma s'agrandira avec la famille.</p>`)
  ], { lvl: 2 }));
  push(P('', [
    duo(60, 'King & Wild', 'Billy et Nell — le grand frère et la petite peste',
      `<p>Billy a vu Nell grandir depuis ses douze ans. Il connaît ses difficultés à lire, son impulsivité, son besoin d'attention. Elle le provoque et le taquine sans cesse, mais il est son repère le plus solide, et elle le respecte profondément.</p>`,
      `Nell veut être prise au sérieux ; Billy la voit parfois encore comme la gamine de douze ans.`),
    A(180, 372, 200, 16, 'divider', {}),
    duo(400, 'King & Viper', 'Billy et Ruby — la confiance gagnée',
      `<p>Billy a été l'un des premiers à lui offrir une protection sans rien exiger en retour, et à respecter son choix pendant trois ans. Ruby lui fait profondément confiance. Elle montre rarement sa vulnérabilité, mais elle sait qu'elle peut compter sur lui.</p>`,
      `Billy veut la protéger ; Ruby veut prouver qu'elle n'en a pas besoin.`)
  ]));
  push(P('', [
    duo(60, 'King & Money', 'Billy et Scarlett — le chef et la princesse',
      `<p>Billy connaît par cœur le goût de Scarlett pour l'argent, le luxe et les caprices. Elle négocie, réclame, boude, propose des coups extravagants — et respecte son autorité quand il tranche.</p>`,
      `Scarlett pourrait faire passer un bijou avant la prudence d'une opération.`),
    A(180, 372, 200, 16, 'divider', {}),
    duo(400, 'King & Ace', 'Billy et Silas — le défi permanent',
      `<p>Silas adore les paris et n'a jamais renoncé à battre Billy aux cartes. Il plaisante, provoque, met ses idées à l'épreuve. Mais il reconnaît pleinement son autorité : c'est un jeu entre eux, jamais une rivalité de chef.</p>`,
      `Silas pourrait engager de l'argent ou des risques sans en parler d'abord à Billy.`)
  ]));
  push(P('', [
    duo(60, 'Wild & Viper', 'Nell et Ruby — les plus anciennes',
      `<p>Meilleures amies depuis l'enfance, bien avant les Strays — depuis la boue et les deux pommes. C'est le lien le plus ancien du groupe. Ruby est particulièrement protectrice envers Nell ; Nell apporte de la légèreté dans la vie de Ruby.</p>`,
      `Ruby trouve que Nell ne prend jamais le danger assez au sérieux.`),
    A(180, 372, 200, 16, 'divider', {}),
    duo(400, 'Wild & Money', 'Nell et Scarlett — le duo d\'arnaqueuses',
      `<p>Elles partagent un goût pour la manipulation et la provocation. Ensemble, elles ont monté les meilleures — et les plus ridicules — escroqueries de la bande.</p>`,
      `Elles se disputent parfois l'attention d'une salle entière.`)
  ]));
  push(P('', [
    duo(60, 'Wild & Ace', 'Nell et Silas — les provocateurs',
      `<p>Ils se taquinent, se lancent des défis et font des paris absurdes depuis cinq ans. Silas lui doit toujours de l'argent ; il nie tout.</p>`,
      `Aucun des deux ne sait s'arrêter avant que ça dégénère.`),
    A(180, 340, 200, 16, 'divider', {}),
    duo(364, 'Viper & Money', 'Ruby et Scarlett — la simplicité contre le luxe',
      `<p>Leurs caractères s'opposent, surtout à propos de l'argent et des apparences. Mais huit hivers communs leur ont appris à se respecter, et à admirer la détermination de l'autre.</p>`,
      `Deux femmes fières qui détestent céder.`)
  ]));
  push(P('', [
    duo(60, 'Viper & Ace', "Ruby et Silas — la force contre l'orgueil",
      `<p>Ils se provoquent régulièrement, mais se connaissent assez pour savoir quand redevenir sérieux. Dans l'action, ils se font confiance.</p>`,
      `Silas supporte mal que Ruby le surpasse dans un domaine.`),
    A(180, 340, 200, 16, 'divider', {}),
    duo(364, 'Money & Ace', 'Scarlett et Silas — les jumeaux',
      `<p>Inséparables. Ils ont quitté leurs parents ensemble, par choix, pour rejoindre les Strays. Toujours en compétition — argent, paris, bijoux, armes — mais d'une loyauté fraternelle absolue.</p>`,
      `Leur rivalité peut parfois déborder sur une opération.`),
    T(52, 670, 456, 76, `<p style="font-size:13.5px"><b>Règle des jumeaux :</b> ils peuvent tout se dire et se déchirer, mais ne supportent pas qu'un étranger menace l'autre.</p>`, { v: 'card' })
  ]));

  /* ---------- UNE FAMILLE CHOISIE ---------- */
  push(P('Une famille choisie', [
    ...head('Quatrième partie', 'Une famille choisie'),
    body(186, 160, `<p>Les Strays sont avant tout une <b>famille choisie</b>. Ils ne prétendent pas être des héros : ils volent pour s'enrichir, se faire un nom et vivre selon leurs propres règles. Ils se disputent, sont en désaccord, poursuivent chacun leurs ambitions — mais ils refusent d'abandonner volontairement l'un des leurs.</p>`),
    T(52, 356, 456, 270, `<h3>Fonctionnement</h3><ul style="font-size:14px">
      <li><b>Billy est le chef incontesté.</b> Il consulte, il écoute ; il a le dernier mot.</li>
      <li><b>L'argent :</b> chacun garde son argent personnel. Une <b>caisse commune</b> finance les dépenses collectives, l'équipement, les déplacements et le développement des activités. Billy supervise les décisions importantes à son sujet.</li>
      <li>Les bénéfices des opérations communes sont partagés selon les accords établis.</li>
      <li>Les conflits internes sont inévitables ; la survie de la famille passe avant.</li></ul>`, { v: 'card' }),
    T(40, 646, 480, 56, `<p class="center" style="font-family:'Cinzel',serif;font-size:22px;letter-spacing:.08em;color:#7d2418;font-weight:700">NEVER LEAVE A STRAY BEHIND</p>`),
    T(52, 700, 456, 40, `<p class="center small muted"><i>La règle absolue. Elle ne se vote pas.</i></p>`)
  ], { lvl: 2 }));

  /* ---------- RECRUTEMENT & TRAHISON ---------- */
  push(P('Recrutement et trahison', [
    ...sub('Recrutement & trahison'),
    body(112, 300, `<h3>Devenir un Stray</h3><p style="font-size:14.5px">Les Strays veulent s'agrandir, peu à peu. Ils se tournent de préférence vers des jeunes qui ont connu ce qu'eux-mêmes ont connu : le rejet, l'abandon, la pauvreté, une famille qui fait mal. Ce n'est pas une condition, c'est une affinité.</p>
      <p style="font-size:14.5px">Pour entrer, il faut l'<b>accord unanime</b> des membres. Un seul refus suffit à fermer la porte. Une fois l'accord obtenu, Billy officialise lui-même l'entrée du nouveau membre, autour du feu, par le serment.</p>`),
    A(180, 420, 200, 16, 'divider', {}),
    body(450, 290, `<h3>La trahison</h3><p style="font-size:14.5px">Trahir volontairement un Stray est la faute la plus grave que l'on puisse commettre : c'est briser la confiance d'une famille. Les conséquences peuvent être très lourdes.</p>
      <p style="font-size:14.5px">Mais aucune sanction n'est écrite d'avance. Ni exclusion automatique, ni vengeance, ni exécution : Billy et les autres décideront selon les circonstances, en jeu.</p>`)
  ], { lvl: 2 }));

  /* ---------- LE CODE ---------- */
  push(P('Le code des chiens errants', [
    ...sub('Le code des chiens errants'),
    T(80, 108, 400, 344, `<p class="center sc" style="letter-spacing:.2em">Le code</p>
      <p class="center" style="font-size:14px;margin:0"><i>de la main de W. M.</i></p><ol style="font-family:'La Belle Aurore',cursive;font-size:18px;line-height:1.4;padding-left:1.4em;margin-top:.6em">
      <li>On n'abandonne jamais un Stray.</li><li>Ce qui se dit entre nous reste entre nous.</li><li>Personne n'entre sans l'accord de tous.</li><li>On se dispute en famille, jamais devant les autres.</li><li>Le dernier mot revient à King.</li></ol>`, { v: 'letter', r: -1 }),
    T(52, 476, 456, 190, `<h3>Réputation en 1890</h3><p style="font-size:14.5px">Surveillés à Blackwater, connus de quelques commerçants, <b>inconnus à Rhodes</b>. Ni grand braquage, ni territoire, ni quartier général, ni empire. Leur ascension se construira exclusivement en jeu.</p>`),
    T(380, 676, 120, 46, `Inconnus à Rhodes`, { v: 'stamp', r: -8, st: { fs: 15 } })
  ], { lvl: 2 }));

  /* ---------- LE REGISTRE DE LA FAMILLE ---------- */
  const fam = (c, n, d, p) => `<tr><td>${c}</td><td>${n}</td><td>${d}</td><td>${p}</td></tr>`;
  push(P('Le registre de la famille', [
    ...head('Quatrième partie', 'Le registre de la famille'),
    T(52, 180, 456, 470, `<table style="font-size:13.5px"><tr><td><b>Code</b></td><td><b>Nom</b></td><td><b>Entrée</b></td><td><b>Serment</b></td></tr>
      ${fam('KING', 'William Mercer', '1882', 'Fondateur')}
      ${fam('WILD', 'Nellie Whitmore', '1883', '—')}
      ${fam('VIPER', 'Ruby Hargrove', '1884', '—')}
      ${fam('MONEY', 'Scarlett Blackwood', '1885', '—')}
      ${fam('ACE', 'Silas Blackwood', '1885', '—')}
      ${fam('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;')}${fam('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;')}${fam('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;')}
      ${fam('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;')}${fam('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;')}${fam('&nbsp;', '&nbsp;', '&nbsp;', '&nbsp;')}</table>`),
    T(52, 660, 456, 90, `<p style="font-size:13px"><b>Ajouter un membre :</b> en mode édition, inscrivez-le ici, puis utilisez « + Membre » (trois pages de fiche) et « Carte membre » (sa carte de nom de code).</p>`, { v: 'card' })
  ], { lvl: 2 }));

  /* ---------- ACTIVITÉS ---------- */
  push(P('Activités envisagées', [
    ...sub('Activités envisagées'),
    T(52, 112, 456, 60, `<p style="font-size:14px;font-style:italic">Pistes de jeu, pas un palmarès : aucune de ces activités n'est présentée comme déjà accomplie à Rhodes.</p>`),
    T(52, 180, 220, 280, `<ul style="font-size:14.5px"><li>Escroqueries et arnaques.</li><li>Vols et cambriolages.</li><li>Parties de poker truquées.</li><li>Contrebande et recel, selon les possibilités du serveur.</li></ul>`),
    T(288, 180, 220, 280, `<ul style="font-size:14.5px"><li>Braquages, quand leur évolution RP le permettra.</li><li>Rivalités avec d'autres groupes criminels.</li><li>Relations complexes avec les autorités.</li><li>Recherche d'informations et d'opportunités illégales.</li></ul>`),
    A(60, 470, 80, 112, 'ace', { r: -8 }), A(124, 480, 64, 64, 'chip', {}),
    T(220, 470, 280, 240, `<h1>WANTED</h1><h2>Personne… encore</h2><p>Cette affiche attend son premier nom.<br>Récompense : à définir.</p>`, { v: 'poster', r: 2 })
  ], { lvl: 2 }));

  /* ---------- LA CAISSE COMMUNE ---------- */
  const ledger = (n) => `<table><tr><th>Date</th><th>Libellé</th><th>Entrée</th><th>Sortie</th><th>Solde</th></tr>${'<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'.repeat(n)}</table>`;
  push(P('La caisse commune', [
    T(60, 46, 440, 40, `<h2 class="center">La caisse commune</h2>`),
    T(60, 88, 440, 46, `<p class="center small muted" style="font-style:italic">Carnet de comptes — Blackwater, puis Rhodes, 1890. Tenu par … · Visé par W. M.</p>`),
    T(52, 140, 456, 600, ledger(22), { v: 'ledger' })
  ], { lvl: 2, bg: 'aged' }));
  push(P('', [
    T(52, 50, 456, 690, ledger(26), { v: 'ledger' }),
    T(52, 748, 230, 24, `Dupliquer la page pour un nouveau feuillet.`, { v: 'hand', r: -1, st: { fs: 10 } })
  ], { bg: 'aged' }));

  /* ---------- L'EMPIRE ---------- */
  const step = (y, n, t, html) => T(52, y, 456, 230, `<p class="sc red" style="letter-spacing:.2em;font-size:13px;margin:0">Étape ${n}</p><h3 style="font-size:1.25em;color:#2b1d12;font-style:normal;font-family:'IM Fell English SC',serif">${t}</h3>${html}`, { st: { fs: 14 } });
  push(P("De Blackwater à l'empire", [
    ...head('Cinquième partie', "De Blackwater à l'empire"),
    nar(180, 70, `<p>Rien de ce qui suit n'est arrivé. Ce sont des intentions, notées par des gens qui n'avaient encore presque rien — sinon les uns les autres.</p>`),
    step(262, 'I', 'Les derniers jours à Blackwater', `<p>Préparer le départ : rassembler les affaires, les chevaux et la caisse commune, régler les dernières occupations, profiter des dernières soirées dans la ville où ils ont grandi.</p>`),
    step(500, 'II', 'Le voyage vers Lemoyne', `<p>Quitter Blackwater et rejoindre Rhodes. La route, ses imprévus et ses rencontres seront joués en RP — rien n'est écrit d'avance.</p>`)
  ], { lvl: 1 }));
  push(P('', [
    ...sub("De Blackwater à l'empire — suite"),
    step(112, 'III', 'Trouver un foyer', `<p>Chercher à Rhodes ou dans ses environs un quartier général où vivre, se réunir et préparer leurs activités : propriété isolée, bâtisse abandonnée ou tout autre lieu découvert en jeu. <b>Rien n'est encore choisi.</b></p>`),
    step(352, 'IV', 'Construire leur empire', `<p>Depuis Rhodes, développer peu à peu leur influence criminelle, leurs ressources, leurs alliances et leur réputation — et offrir enfin à la famille le foyer dont Billy parle depuis 1882.</p>`),
    T(70, 600, 420, 140, `<p class="center" style="font-family:'IM Fell English SC',serif;font-size:19px">Aucun succès n'est garanti.</p><p class="center" style="font-style:italic;font-size:14px">Au début du jeu, les Strays sont encore à Blackwater. Ils ne contrôlent rien à Rhodes. Ils peuvent réussir, échouer, se diviser ou disparaître : le jeu décidera.</p>`)
  ]));

  /* ---------- DE BLACKWATER À RHODES ---------- */
  push(P('De Blackwater à Rhodes — 1890', [
    T(40, 46, 480, 50, `<h2 class="center">De Blackwater à Rhodes — 1890</h2>`),
    A(180, 92, 200, 16, 'divider', {}),
    A(40, 128, 480, 403, 'mapEast', {}),
    T(52, 548, 456, 110, `<p style="font-size:14px">Carte de la route projetée, tracée de mémoire et d'après ce qu'en disaient les voyageurs. Les distances sont approximatives ; le chemin réellement suivi sera celui du jeu.</p>`),
    T(300, 668, 200, 70, `Quelque part par là. On verra bien. — W.`, { v: 'hand', r: -3, st: { fs: 12 } })
  ], { lvl: 1, bg: 'aged' }));
  push(P('', [
    T(52, 46, 456, 50, `<h2 class="center">Journal d'installation</h2>`),
    A(180, 92, 200, 16, 'divider', {}),
    T(52, 120, 456, 330, `<table style="font-size:13.5px">
      <tr><td>Départ de Blackwater</td><td>____ 1890</td></tr>
      <tr><td>Arrivée à Rhodes</td><td>____ 1890</td></tr>
      <tr><td>Premier campement</td><td>…</td></tr>
      <tr><td>Quartier général</td><td><i>À déterminer en jeu</i></td></tr>
      <tr><td>Type de lieu</td><td>…</td></tr>
      <tr><td>Ressources</td><td>…</td></tr>
      <tr><td>Premiers contacts</td><td>…</td></tr>
      <tr><td>Premiers ennuis</td><td>…</td></tr></table>`, { v: 'card' }),
    I(70, 470, 220, 160, 'placeholder', { frame: 'corners', r: -2 }),
    T(310, 476, 190, 170, `Le jour où on aura un toit à nous, je veux une photo. — N.`, { v: 'pinned', r: 2 }),
    T(52, 660, 456, 80, `<p style="font-size:13px">${prop('Page à remplir en jeu')} Aucun lieu n'est fixé à l'avance : complétez ce journal au fil du RP.</p>`)
  ], { bg: 'aged' }));

  /* ---------- LES FAILLES DES CHIENS ERRANTS ---------- */
  const fl = (y, code, what, txt) => T(52, y, 456, 150, `<h3>${code} — ${what}</h3><p>${txt}</p>`, { v: 'card', st: { fs: 13.5 } });
  push(P('Les failles des chiens errants', [
    ...head('Sixième partie', 'Les failles des chiens errants'),
    nar(180, 70, `<p>On les croyait taillés pour la route et la poudre. Chacun portait pourtant, sous l'assurance, une faiblesse que leur enfance avait creusée.</p>`),
    fl(260, 'King', 'claustrophobie', "Enfermé sans issue, l'homme qui ne perd jamais son sang-froid suffoque et panique — souvenir de la réserve où son père l'avait verrouillé."),
    fl(420, 'Wild', 'phobie du sang', "Elle parle de violence avec aplomb, mais la vue d'une grande quantité de sang lui donne nausées et vertiges, jusqu'à l'évanouissement."),
    fl(580, 'Viper', 'phobie des lames', "Un couteau sur une table ne lui fait rien. Une lame pointée vers elle — vers son visage surtout — la fige et la ramène à sa cicatrice.")
  ], { lvl: 1 }));
  push(P('', [
    ...sub('Les failles — suite'),
    fl(108, 'Money', "dépendance à l'alcool", "En manque, ses mains tremblent et son tir s'en ressent. Ivre, elle perd ses filtres : sentiments et secrets lui échappent."),
    fl(268, 'Ace', "dépendance à l'alcool", "En manque, il devient irritable et imprécis. Ivre, il se vante, prend des risques et parle trop pour impressionner."),
    T(52, 432, 456, 230, `<h3>Règles de jeu</h3><ul style="font-size:13.5px">
      <li>Ces faiblesses sont <b>officielles</b> et se jouent avec leurs conséquences.</li>
      <li>Elles ne disparaissent pas quand elles deviennent gênantes.</li>
      <li>Elles ne rendent personne incapable d'agir en permanence.</li>
      <li>Elles s'ajoutent aux caractères ; elles ne les remplacent pas.</li>
      <li>Ni caricature ni comique systématique : ce sont des blessures.</li></ul>`),
    T(52, 672, 456, 70, `<p style="font-size:13.5px"><span class="sc red">La famille —</span> <i>une ambition d'empire et une règle de loyauté : tôt ou tard, l'une mettra l'autre à l'épreuve.</i></p>`)
  ]));
  push(P('La bouteille des Blackwood', [
    ...sub('La bouteille des Blackwood'),
    T(52, 108, 456, 410, `<p class="dropcap">Scarlett et Silas partagent cette dépendance parce qu'ils ont partagé tout le reste. Ils ont découvert l'alcool au même endroit, dans les saloons où les traînait Victor Blackwood, entre les tables de poker et les verres qu'on laissait à portée des enfants. Leurs habitudes ont grandi avec eux, d'année en année.</p>
      <p>Il arrive qu'ils s'encouragent l'un l'autre : un verre de plus pour ne pas perdre la face, une bouteille pour fêter un gain, une autre pour oublier une perte. Leur rivalité, qui les pousse à tout, les pousse aussi à boire.</p>
      <p>L'alcool ne les change pourtant pas de la même façon. <b>Scarlett</b> devient bavarde, et laisse échapper des sentiments ou des secrets qu'elle cache d'ordinaire avec soin. <b>Silas</b> devient vantard et imprudent, et dévoile ce qu'il sait pour impressionner son auditoire.</p>`, { st: { fs: 14.5 } }),
    T(52, 532, 456, 110, `<p style="font-size:13.5px">Cette faiblesse commune doit rester jouable sans devenir comique. Elle peut avoir de vraies conséquences : sur leurs relations, sur les autres Strays, et sur leurs affaires.</p>`, { v: 'archive' }),
    A(380, 650, 120, 80, 'stain', { op: .8 })
  ], { lvl: 2 }));

  /* ---------- PISTES D'INTRIGUE ---------- */
  push(P("Pistes d'intrigue", [
    ...head('Septième partie', "Pistes d'intrigue"),
    T(52, 186, 456, 170, `<h3>Le poids du nom Mercer</h3><p style="font-size:14.5px">Edward et Margaret Mercer existent toujours, quelque part à Blackwater. Le passé de Billy pourrait le rattraper. <i>Aucun personnage extérieur n'interviendra sans accord RP.</i></p>`),
    T(52, 366, 456, 150, `<h3>La célébrité à tout prix</h3><p style="font-size:14.5px">À force de vouloir être vue, Nell pourrait perdre son innocence — et découvrir ce que coûte un nom sur une affiche qu'elle peine à lire.</p>`),
    T(52, 526, 456, 150, `<h3>L'indépendance de Ruby</h3><p style="font-size:14.5px">Ruby pourrait se retrouver dans une situation où elle n'aurait d'autre choix que d'accepter l'aide d'autrui.</p>`),
    T(52, 692, 456, 50, `<p class="center">${prop('Propositions — aucune n\'est obligatoire')}</p>`)
  ], { lvl: 2 }));
  push(P('', [
    ...sub("Pistes d'intrigue — suite"),
    T(52, 112, 456, 140, `<h3>Le prix d'un diamant</h3><p style="font-size:14.5px">Scarlett pourrait faire passer son désir de possession avant la prudence.</p>`),
    T(52, 252, 456, 140, `<h3>Le pari de trop</h3><p style="font-size:14.5px">Silas pourrait mettre en jeu son argent, sa réputation ou celle du groupe plutôt que d'accepter une défaite.</p>`),
    T(52, 410, 456, 300, `<h3 class="center" style="font-size:1.4em">La famille contre l'ambition</h3><p class="center" style="font-size:15px">L'intrigue centrale des Strays tient en une seule question :</p>
      <p class="center" style="font-family:'IM Fell English',serif;font-size:21px;line-height:1.35;margin-top:.6em">Jusqu'où sont-ils prêts à aller pour bâtir leur empire sans perdre leur famille ?</p>`, { v: 'card' })
  ]));

  /* ---------- PAGES LIBRES ---------- */
  push(P('Notes libres', [
    T(80, 50, 420, 50, `<h2>Notes</h2>`),
    T(80, 120, 420, 600, `<p style="font-family:'Homemade Apple',cursive;font-size:14px;line-height:32px;color:#2c3a55">…</p>`, { st: { lh: 2.28 } })
  ], { bg: 'lined', lvl: 1 }));
  push(P('Album — photographies prises en jeu', [
    ...sub('Album'),
    I(60, 120, 200, 150, 'placeholder', { frame: 'corners', r: -3 }),
    I(300, 130, 200, 150, 'placeholder', { frame: 'corners', r: 2 }),
    I(60, 330, 200, 150, 'placeholder', { frame: 'corners', r: 1.5 }),
    I(300, 320, 200, 150, 'placeholder', { frame: 'corners', r: -2 }),
    I(180, 530, 200, 150, 'placeholder', { frame: 'corners', r: 1 }),
    T(80, 690, 400, 50, `<p class="center" style="font-family:'Homemade Apple',cursive;font-size:12px;color:#2c3a55">En mode édition : double-clic sur un cadre pour y placer une photo.</p>`)
  ], { lvl: 2 }));
  push(P('Affiches de recherche', [
    ...sub('Affiches de recherche'),
    T(60, 120, 205, 290, `<h1 style="font-size:2em">WANTED</h1><h2>Nom à venir</h2><p>Signalement :<br>…</p><p>Récompense :<br>… $</p>`, { v: 'poster', r: -2 }),
    T(295, 130, 205, 290, `<h1 style="font-size:2em">WANTED</h1><h2>Nom à venir</h2><p>Signalement :<br>…</p><p>Récompense :<br>… $</p>`, { v: 'poster', r: 2.5 }),
    T(80, 450, 400, 120, `<p style="font-size:14px;font-style:italic" class="center">Espace réservé aux premiers avis de recherche publiés en jeu — ceux que Nell se fera lire à voix haute.</p>`)
  ], { lvl: 2 }));
  push(P('Événements marquants', [
    ...sub('Événements marquants'),
    T(52, 116, 456, 600, `<table style="font-size:14px">
      <tr><td>Date</td><td><i>Événement — lieu — membres présents</i></td></tr>
      <tr><td>____ 1890</td><td>Derniers jours à Blackwater.</td></tr>
      <tr><td>____ 1890</td><td>Départ pour Lemoyne.</td></tr>
      <tr><td>____ 1890</td><td>Arrivée à Rhodes.</td></tr>
      ${'<tr><td>&nbsp;</td><td>&nbsp;</td></tr>'.repeat(8)}</table>`)
  ], { lvl: 2 }));
  push(P('Pages pour les futurs événements', [
    ...sub('À écrire'),
    T(52, 116, 456, 600, `<p style="font-style:italic;color:#5a4330">Page laissée libre pour la suite de l'histoire.</p>`)
  ], { lvl: 2, bg: 'aged' }));
  push(P('', [
    T(52, 60, 456, 680, `<p style="font-style:italic;color:#5a4330">&nbsp;</p>`),
    A(380, 620, 130, 130, 'stain', {})
  ], { bg: 'aged' }));

  /* ---------- DERNIÈRE PAGE ---------- */
  push(P('Dernière page', [
    A(40, 40, 480, 720, 'frame', { col: 'ink', op: .6 }),
    A(210, 150, 140, 140, 'emblem', {}),
    T(60, 320, 440, 120, `<p class="center" style="font-family:'IM Fell English',serif;font-size:25px;font-style:italic;line-height:1.3">« On est peut-être des chiens errants, mais aucun d'nous finira seul. »</p>`),
    A(180, 460, 200, 18, 'divider', {}),
    T(40, 494, 480, 50, `<p class="center" style="font-family:'Cinzel',serif;font-size:21px;letter-spacing:.08em;color:#7d2418;font-weight:700">NEVER LEAVE A STRAY BEHIND</p>`),
    T(60, 556, 440, 40, `<p class="center" style="font-family:'Cinzel',serif;letter-spacing:.3em;font-size:13px">No masters. No chains. No one left behind.</p>`),
    T(240, 640, 250, 60, `King · Wild · Viper · Money · Ace · …`, { v: 'hand', r: -3, st: { fs: 13 } })
  ], { lvl: 1 }));

  /* ---------- QUATRIÈME DE COUVERTURE ---------- */
  push(P('', [
    A(0, 0, 560, 800, 'stitch', { col: 'gold', op: .55 }),
    A(220, 320, 120, 120, 'emblem', { col: 'gold', op: .7 }),
    T(80, 460, 400, 30, `<p class="center">MDCCCXC</p>`, { v: 'deboss', st: { ff: "'Cinzel', serif", fs: 14, ls: '.5em' } })
  ], { bg: 'leather' }));
})();
