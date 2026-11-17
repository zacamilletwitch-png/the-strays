/* =====================================================================
   THE STRAYS — Contenu d'origine, 3e édition (5/5)
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
    T(52, 476, 456, 190, `<h3>Réputation en 1890</h3><p style="font-size:14.5px">Surveillés à Blackwater, connus de quelques commerçants, <b>inconnus à New Austin</b>. Ni grand braquage, ni territoire, ni empire. Leur ascension se construira exclusivement en jeu.</p>`),
    T(380, 676, 120, 46, `Inconnus au Sud`, { v: 'stamp', r: -8, st: { fs: 15 } })
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

  /* ---------- LA CAISSE COMMUNE ---------- */
  const ledger = (n) => `<table><tr><th>Date</th><th>Libellé</th><th>Entrée</th><th>Sortie</th><th>Solde</th></tr>${'<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>'.repeat(n)}</table>`;
  push(P('La caisse commune', [
    T(60, 46, 440, 40, `<h2 class="center">La caisse commune</h2>`),
    T(60, 88, 440, 46, `<p class="center small muted" style="font-style:italic">Carnet de comptes — New Austin, 1890. Tenu par … · Visé par W. M.</p>`),
    T(52, 140, 456, 600, ledger(22), { v: 'ledger' })
  ], { lvl: 2, bg: 'aged' }));
  push(P('', [
    T(52, 50, 456, 690, ledger(26), { v: 'ledger' }),
    T(52, 748, 230, 24, `Dupliquer la page pour un nouveau feuillet.`, { v: 'hand', r: -1, st: { fs: 10 } })
  ], { bg: 'aged' }));

  /* ---------- ACTIVITÉS ---------- */
  push(P('Activités envisagées', [
    ...sub('Activités envisagées'),
    T(52, 112, 456, 60, `<p style="font-size:14px;font-style:italic">Pistes de jeu, pas un palmarès : aucune de ces activités n'est présentée comme déjà accomplie à New Austin.</p>`),
    T(52, 180, 220, 280, `<ul style="font-size:14.5px"><li>Escroqueries et arnaques.</li><li>Vols et cambriolages.</li><li>Parties de poker truquées.</li><li>Contrebande et recel, selon les possibilités du serveur.</li></ul>`),
    T(288, 180, 220, 280, `<ul style="font-size:14.5px"><li>Braquages, quand leur évolution RP le permettra.</li><li>Rivalités avec d'autres groupes criminels.</li><li>Relations complexes avec les autorités.</li><li>Recherche d'informations et d'opportunités illégales.</li></ul>`),
    A(60, 470, 80, 112, 'ace', { r: -8 }), A(124, 480, 64, 64, 'chip', {}),
    T(220, 470, 280, 240, `<h1>WANTED</h1><h2>Personne… encore</h2><p>Cette affiche attend son premier nom.<br>Récompense : à définir.</p>`, { v: 'poster', r: 2 })
  ], { lvl: 2 }));

  /* ---------- L'EMPIRE ---------- */
  const step = (y, n, t, html) => T(52, y, 456, 230, `<p class="sc red" style="letter-spacing:.2em;font-size:13px;margin:0">Étape ${n}</p><h3 style="font-size:1.25em;color:#2b1d12;font-style:normal;font-family:'IM Fell English SC',serif">${t}</h3>${html}`, { st: { fs: 14 } });
  push(P("Le projet d'empire", [
    ...head('Cinquième partie', "Le projet d'empire"),
    nar(180, 70, `<p>Rien de ce qui suit n'est arrivé. Ce sont des intentions, notées par des gens qui n'avaient encore presque rien — sinon les uns les autres.</p>`),
    step(262, 'I', 'Survivre', `<p>Trouver un refuge à New Austin, gagner de quoi tenir, établir les premiers contacts, comprendre qui tient quoi. Ne pas se faire arrêter trop vite.</p>`),
    step(500, 'II', 'Se faire un nom', `<p>Développer les activités criminelles, remplir la caisse commune, faire circuler le nom des Strays — et commencer à attirer l'attention.</p>`)
  ], { lvl: 1 }));
  push(P('', [
    ...sub("Le projet d'empire — suite"),
    step(112, 'III', 'Étendre leur influence', `<p>Nouer des alliances, assumer des rivalités, augmenter les ressources, développer un réseau. Accueillir de nouveaux Strays.</p>`),
    step(352, 'IV', 'Bâtir un empire', `<p>Tenter de devenir une organisation criminelle puissante, riche et redoutée — et offrir enfin à la famille le foyer dont Billy parle depuis 1882.</p>`),
    T(70, 600, 420, 140, `<p class="center" style="font-family:'IM Fell English SC',serif;font-size:19px">Aucun succès n'est garanti.</p><p class="center" style="font-style:italic;font-size:14px">Ce sont des ambitions, pas des faits. Ils peuvent réussir, échouer, se diviser ou disparaître : le jeu décidera.</p>`)
  ]));

  /* ---------- FAIBLESSES ---------- */
  push(P('Faiblesses et conflits internes', [
    ...head('Sixième partie', 'Faiblesses & failles'),
    body(186, 80, `<p style="font-size:14.5px">Ce qui fait la force des Strays — leurs blessures et leurs ambitions — est aussi ce qui peut les mettre en danger.</p>`),
    T(52, 270, 456, 470, `<table style="font-size:14px">
      <tr><td>King</td><td>Le besoin de contrôle, les risques excessifs, le nom Mercer.</td></tr>
      <tr><td>Wild</td><td>L'impulsivité, la peur de la violence, l'envie d'être remarquée à tout prix.</td></tr>
      <tr><td>Viper</td><td>L'orgueil, le refus de l'aide, la peur de l'abandon.</td></tr>
      <tr><td>Money</td><td>Les caprices, la possession, l'incapacité à entendre « non ».</td></tr>
      <tr><td>Ace</td><td>L'arrogance, le jeu, la défaite impossible à avaler.</td></tr>
      <tr><td>La famille</td><td>Une ambition d'empire et une règle de loyauté : tôt ou tard, l'une mettra l'autre à l'épreuve.</td></tr></table>`)
  ], { lvl: 1 }));

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
      <tr><td>____ 1890</td><td>Arrivée des Strays à New Austin.</td></tr>
      ${'<tr><td>&nbsp;</td><td>&nbsp;</td></tr>'.repeat(10)}</table>`)
  ], { lvl: 2 }));
  push(P('Pages pour les futurs événements', [
    ...sub('À écrire'),
    T(52, 116, 456, 600, `<p style="font-style:italic;color:#5a4330">Page laissée libre pour la suite de l'histoire.</p>`)
  ], { lvl: 2, bg: 'aged' }));
  push(P('', [T(52, 60, 456, 680, `<p style="font-style:italic;color:#5a4330">&nbsp;</p>`)], { bg: 'aged' }));
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
    T(60, 556, 440, 40, `<p class="center" style="font-family:'Cinzel',serif;letter-spacing:.3em;font-size:13px">No home. No masters. Only us.</p>`),
    T(240, 640, 250, 60, `King · Wild · Viper · Money · Ace · …`, { v: 'hand', r: -3, st: { fs: 13 } })
  ], { lvl: 1 }));

  /* ---------- QUATRIÈME DE COUVERTURE ---------- */
  push(P('', [
    A(0, 0, 560, 800, 'stitch', { col: 'gold', op: .55 }),
    A(220, 320, 120, 120, 'emblem', { col: 'gold', op: .7 }),
    T(80, 460, 400, 30, `<p class="center">MDCCCXC</p>`, { v: 'deboss', st: { ff: "'Cinzel', serif", fs: 14, ls: '.5em' } })
  ], { bg: 'leather' }));
})();
