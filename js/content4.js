/* =====================================================================
   THE STRAYS — Contenu d'origine, 3e édition (4/5)
   Troisième partie : le serment, les noms de code, les cinq Strays
   ===================================================================== */
(function () {
  const { T, I, A, P, head, sub, nar, prop, push } = window.SB;

  /* Page « faille » : faiblesse officielle, origine, manifestations, jeu */
  const faille = (code, name, quote, origin, signs, play, note) => P('', [
    ...sub(code + ' — Sa faille'),
    T(52, 106, 456, 100, '<p class="sc red" style="font-size:12px;letter-spacing:.2em;margin:0">Faiblesse officielle — ' + name + '</p><p style="font-family:\'IM Fell English\',serif;font-style:italic;font-size:15px;margin:0">« ' + quote + ' »</p>', { v: 'card' }),
    T(52, 216, 456, 210, '<h3>Origine</h3>' + origin, { st: { fs: 13.5 } }),
    T(52, 432, 220, 220, '<h3>Ce qui se passe</h3><ul>' + signs.map(s => '<li>' + s + '</li>').join('') + '</ul>', { st: { fs: 13 } }),
    T(288, 432, 220, 220, '<h3>En jeu</h3><ul>' + play.map(s => '<li>' + s + '</li>').join('') + '</ul>', { st: { fs: 13 } }),
    T(52, 664, 456, 80, '<p style="font-size:12.5px"><i>' + note + '</i></p>', { v: 'archive' })
  ]);
  const idCard = (rows) => `<h3>Signalement</h3><table>${rows.map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</table>`;

  /* ---------- LE SERMENT DES STRAYS ---------- */
  push(P('Troisième partie — Le serment des Strays', [
    ...head('Troisième partie', 'Le serment des Strays'),
    nar(180, 90, `<p>Les Strays n'ont ni bannière ni tatouage. Ils ont un feu, une phrase, et une poignée de main. Ceux qui l'ont vécu en parlent peu, et toujours à voix basse.</p>`),
    I(52, 280, 456, 258, 'art:campfire', { frame: 'photo' }),
    T(52, 548, 456, 40, `<p class="center small muted" style="font-style:italic">Gravure d'après une description — la nuit d'une intégration.</p>`),
    T(52, 596, 456, 150, `<p>Lorsqu'un nouveau membre est accepté, les Strays se réunissent la nuit, loin de la ville, autour d'un feu de camp. Les chevaux restent attachés à l'écart. Personne ne parle d'affaires, ni d'argent. Tous sont debout quand Billy se lève.</p>`)
  ], { lvl: 1 }));
  push(P('', [
    ...sub('Le serment'),
    T(52, 112, 456, 70, `<p>Billy rappelle au nouveau venu la seule règle qui ne se discute jamais :</p>`),
    T(52, 176, 456, 60, `<p class="center" style="font-family:'IM Fell English SC',serif;font-size:24px;color:#7d2418">« Ne jamais abandonner un Stray. »</p>`),
    T(52, 244, 456, 50, `<p>Le nouveau membre répond, devant tous :</p>`),
    T(70, 290, 420, 70, `<blockquote class="center" style="font-size:19px;margin:0;color:#2b1d12">« Tant que j'serai debout, aucun des nôtres ne restera derrière. »</blockquote>`),
    T(52, 366, 456, 40, `<p>Et Billy conclut :</p>`),
    T(70, 402, 420, 60, `<blockquote class="center" style="font-size:19px;margin:0;color:#2b1d12">« Alors t'es plus seul. T'es des nôtres. »</blockquote>`),
    A(180, 474, 200, 18, 'divider', {}),
    T(52, 504, 456, 140, `<p>Il n'y a rien d'autre. Pas de sang, pas de papier signé. Mais aucun Stray n'a jamais pris ces mots à la légère : ce soir-là, on cesse d'être un chien errant pour devenir l'un des leurs. Les cinq fondateurs n'ont jamais prononcé ce serment entre eux — il est né de leurs années communes, pour ceux qui viendraient après.</p>`),
    T(52, 652, 456, 90, `<p style="font-size:13.5px">${prop()} Les gestes qui accompagnent le serment et l'origine exacte du rituel restent à définir par les joueurs.</p>`, { v: 'card' })
  ], { lvl: 2 }));

  /* ---------- NOMS DE CODE (double page) ---------- */
  const card = (x, y, g, pip, code, name, role, desc, sig, portrait) => [
    T(x, y, 140, 330, `<p class="pip">${pip} ${pip}</p><h1>${code}</h1><div style="height:132px"></div><h3>${name}</h3><p><i>${role}</i></p><p>${desc}</p><p class="sig">${sig}</p>`, { v: 'oldcard', g }),
    I(x + 16, y + 64, 108, 128, portrait, { frame: 'photo', g })
  ];
  push(P('Les noms de code', [
    ...sub('Les noms de code'),
    T(52, 104, 456, 40, `<p class="center small muted" style="font-style:italic">Cartes retrouvées glissées entre les pages, chacune signée par son porteur — ou presque.</p>`),
    ...card(52, 158, 'gK', '♚', 'KING', 'William Mercer', 'Le chef', 'A renoncé à un héritage pour bâtir son propre royaume.', 'W. Mercer', 'portrait:billy'),
    ...card(210, 158, 'gW', '♥', 'WILD', 'Nellie Whitmore', "L'arnaqueuse", "Personne ne l'a jamais attendue. Désormais, on la remarque.", 'Nel ✗', 'portrait:nell'),
    ...card(368, 158, 'gV', '♣', 'VIPER', 'Ruby Hargrove', 'La rebelle', 'Une cicatrice, et une morsure pour qui menace les siens.', 'R. Hargrove', 'portrait:ruby'),
    T(52, 520, 456, 200, `<p style="font-size:14.5px">Entre eux, ils s'appellent par leur prénom — Billy, Nell, Rue, Scarlett, Silas. Mais dehors, devant un shérif ou un inconnu, ce sont ces noms-là qui circulent. Et ce sont eux que les Strays espèrent un jour voir imprimés.</p>
      <p style="font-size:13.5px">${prop('Cartes modifiables')} Double-cliquez pour changer le texte ; une carte et son portrait se déplacent ensemble.</p>`)
  ], { lvl: 1 }));
  push(P('', [
    ...sub('Les noms de code — suite'),
    ...card(52, 158, 'gM', '♦', 'MONEY', 'Scarlett Blackwood', 'La voleuse', 'Ce qui brille lui appartient. Le reste se négocie.', 'Scarlett B.', 'portrait:scarlett'),
    ...card(210, 158, 'gA', '♠', 'ACE', 'Silas Blackwood', 'Le joueur', 'Ne quitte jamais une table en perdant. Jamais.', 'S. Blackwood', 'portrait:silas'),
    T(368, 158, 140, 330, `<p class="pip">? ?</p><h1 style="color:#8a7a62">· · ·</h1><div style="height:132px;border:1px dashed rgba(70,40,20,.4);margin:0 8px"></div><h3>Siège vacant</h3><p><i>Le prochain Stray</i></p><p>Une place reste ouverte autour du feu.</p><p class="sig">&nbsp;</p>`, { v: 'oldcard', r: 2, g: 'gN' }),
    T(52, 520, 456, 200, `<p style="font-size:14.5px">La bande n'a pas vocation à rester à cinq. Toute nouvelle recrue reçoit sa carte le soir de son serment.</p>
      <p style="font-size:13.5px">En mode édition : <b>« Carte membre »</b> ajoute une carte avec portrait ; <b>« + Membre »</b> ajoute les trois pages de fiche d'un nouveau Stray.</p>`)
  ]));

  /* ---------- KING ---------- */
  push(P('William « King » Mercer', [
    ...head('Le chef · KING', 'William « King » Mercer'),
    I(52, 182, 236, 330, 'portrait:billy', { frame: 'cabinet', cap: 'W. MERCER — BLACKWATER', r: -1.5 }),
    T(304, 186, 204, 340, idCard([['Nom de code', '<b>KING</b>'], ['Âge', '23 ans (né en 1867)'], ['Origine', 'Fils renié d\'Edward et Margaret Mercer'], ['Rôle', 'Fondateur (1882) et chef incontesté'], ['Traits', 'Charismatique, joueur, protecteur, téméraire']]), { v: 'card', st: { fs: 13 } }),
    T(52, 534, 456, 70, `<blockquote class="center" style="font-size:17px;margin:0">« On est peut-être des chiens errants, mais aucun d'nous finira seul. »</blockquote>`),
    T(52, 616, 456, 124, `<p>On l'appelait Billy dans les ruelles. Les Strays l'appellent King, à moitié pour se moquer du fils de riche, à moitié parce que c'est vrai. Il écoute tout le monde ; il a toujours le dernier mot.</p>`)
  ], { lvl: 2 }));
  push(P('', [
    ...sub('King — Parmi les Strays'),
    T(52, 112, 456, 500, `<p class="dropcap">Depuis 1882, Billy n'a jamais cessé d'être le centre de gravité de la bande. C'est lui qui a recueilli Nell à douze ans, offert un refuge à Ruby, ouvert la porte aux jumeaux. Pour certains il est un grand frère, pour d'autres presque un père, pour tous un ami — et leur chef.</p>
      <p>Il plaisante, provoque, perd aux cartes contre Silas et fait semblant de ne pas voir les caprices de Scarlett. Mais quand une décision engage la famille, la discussion s'arrête quand il a parlé.</p>
      <p>Son autorité ne repose pas sur la peur. Elle repose sur huit années de nuits froides partagées, de repas divisés en cinq, de fois où il est venu chercher l'un d'eux sans qu'on le lui demande.</p>
      <p>Son ambition est immense, et pas toujours honorable. Mais au fond, elle n'a qu'un objet : que sa famille n'ait plus jamais à survivre.</p>`),
    T(52, 624, 456, 116, `<p style="font-size:13.5px">Voir <i>L'héritier renié</i> et <i>Le rêve de Billy Mercer</i>. Aucun membre de la famille Mercer n'interviendra en jeu sans accord RP.</p>`, { v: 'card' })
  ]));
  push(P('', [
    ...sub('King — Caractère & ambitions'),
    T(52, 112, 220, 200, `<h3>Personnalité</h3><p>Charismatique, joueur, protecteur, téméraire — et parfois autoritaire. Il entraîne les autres autant par l'humour que par l'assurance.</p>`, { st: { fs: 14 } }),
    T(288, 112, 220, 200, `<h3>Objectif</h3><p>Faire des Strays une organisation puissante et redoutée, et offrir à sa famille richesse, sécurité et un vrai foyer.</p>`, { st: { fs: 14 } }),
    T(52, 300, 456, 180, `<h3>Contradictions</h3><ul>
      <li>Il rejette le monde des riches, tout en rêvant de leur puissance.</li>
      <li>Il prétend chercher la liberté, mais a besoin de contrôler les risques pris par sa bande.</li>
      <li>Il veut protéger ses proches, tout en les entraînant vers des crimes de plus en plus graves.</li></ul>`, { st: { fs: 14 } }),
    T(52, 492, 456, 156, `<h3>Faiblesses</h3><ul>
      <li>Se sent responsable de chacun des membres.</li>
      <li>Peut prendre des risques excessifs.</li>
      <li>Supporte difficilement de perdre le contrôle.</li>
      <li>Le nom Mercer pourrait le rattraper.</li></ul>`, { v: 'card', st: { fs: 14 } }),
    T(52, 660, 456, 80, `<p style="font-size:14px"><span class="sc red">Ce qui le lie aux Strays —</span> <i>il a perdu une famille en la refusant ; il ne laissera personne lui prendre celle qu'il a choisie.</i></p>`)
  ]));

  push(faille('King', 'claustrophobie',
    'Claustrophobe, Billy panique lorsqu\'il est enfermé dans un espace étroit sans possibilité de sortir.',
    '<p>Enfant, Billy vivait dans l\'immense demeure des Mercer. Edward Mercer, homme autoritaire, supportait mal que son fils lui désobéisse. Le jour où il le surprit à aider en secret des enfants pauvres, il le fit enfermer pendant des heures dans une petite réserve sans fenêtre, au fond des dépendances. Billy appela, frappa contre la porte. Personne ne vint lui ouvrir. Depuis, il supporte très mal les espaces confinés dont il ne contrôle pas la sortie.</p>',
    ['Supportable tant qu\'il sait pouvoir sortir librement.', 'Enfermé sans issue : panique, oppression dans la poitrine, souffle court.', 'Perte de son sang-froid et de sa capacité à réfléchir calmement.'],
    ['Enfermement, capture, cellule, cave ou coffre verrouillé.', 'Un adversaire qui connaît sa faiblesse peut s\'en servir.', 'Un contraste fort avec le chef maître de lui-même que voient les autres.'],
    'Faiblesse officielle, à jouer réellement : elle ne disparaît pas quand elle devient gênante, mais ne l\'empêche pas d\'agir hors de ces situations.'));

  /* ---------- WILD ---------- */
  push(P('Nellie « Wild » Whitmore', [
    ...head("L'arnaqueuse · WILD", 'Nellie « Wild » Whitmore'),
    I(52, 182, 236, 330, 'portrait:nell', { frame: 'cabinet', cap: 'N. WHITMORE — 1890', r: 1.5 }),
    T(304, 186, 204, 340, idCard([['Nom de code', '<b>WILD</b>'], ['Âge', '19 ans (née en 1871)'], ['Origine', 'Parents alcooliques et négligents'], ['Chez les Strays', 'Depuis 1883 (12 ans)'], ['Rôle', 'Arnaqueuse et manipulatrice'], ['Instruction', 'Lit et écrit difficilement']]), { v: 'card', st: { fs: 13 } }),
    T(52, 534, 456, 70, `<blockquote class="center" style="font-size:17px;margin:0">« Un jour, ils imprimeront mon nom en gros. Et quelqu'un me le lira. »</blockquote>`),
    T(52, 616, 456, 124, `<p>Nell joue les jeunes filles innocentes pour mieux escroquer ses victimes ou tromper les autorités. Les Strays l'ont surnommée Wild : impossible à tenir, impossible à prévoir — et redoutable, jusqu'à ce que les coups partent.</p>`)
  ], { lvl: 2 }));
  push(P('', [
    ...sub('Wild — Parmi les Strays'),
    T(52, 112, 456, 470, `<p class="dropcap">Nell est la plus jeune des cinq, et la première à les avoir rejoints après Billy. Elle a grandi sous ses yeux : il connaît son impulsivité, son besoin d'être vue, et ces lettres qu'elle signe d'une croix quand on la presse.</p>
      <p>Elle est le bruit de la bande. Elle provoque Billy, parie contre Silas, complote avec Scarlett, fait rire Ruby. Elle observe tout : un regard, un bijou mal caché, une hésitation. C'est elle qui repère les pigeons et invente l'histoire en trois secondes.</p>
      <p>Les livres de comptes et les papiers officiels, en revanche, elle les laisse aux autres — et déteste qu'on le lui fasse remarquer. Son manque d'instruction n'a rien à voir avec son intelligence : Nell a appris la rue, pas l'école.</p>
      <p>Les Strays sont les premiers à s'être inquiétés de son absence. Elle ne l'a jamais oublié.</p>`),
    T(52, 594, 456, 146, `<p style="font-size:13.5px">Voir <i>L'enfant oubliée</i>. ${prop()} Le degré exact de ses difficultés de lecture et d'écriture reste à ajuster par la joueuse.</p>`, { v: 'card' })
  ]));
  push(P('', [
    ...sub('Wild — Caractère & ambitions'),
    T(52, 112, 456, 128, `<h3>Personnalité</h3><p style="font-size:14px">Insolente, drôle, provocatrice, séductrice, impulsive, parfois immature. Brillante dans l'observation, le mensonge et l'improvisation. Maladroite quand elle éprouve de vrais sentiments ; paniquée face à la violence réelle.</p>`),
    T(52, 246, 456, 140, `<h3>Contradictions</h3><ul style="font-size:14px">
      <li>Elle rêve d'être une criminelle célèbre sans mesurer encore le poids de la violence.</li>
      <li>Elle se moque de l'autorité, mais respecte profondément Billy.</li>
      <li>Elle paraît sûre d'elle, mais redoute de décevoir les Strays.</li></ul>`),
    T(52, 396, 220, 196, `<h3>Faiblesses</h3><ul style="font-size:13.5px"><li>Impulsive.</li><li>Immature face aux situations graves.</li><li>Craint la violence réelle.</li><li>Lacunes scolaires : lecture et écriture.</li></ul>`, { v: 'card' }),
    T(288, 396, 220, 196, `<h3>Objectif</h3><p style="font-size:13.5px">Devenir la plus grande bandit de l'Ouest : son nom dans les journaux, son visage sur les affiches.</p><h3>Limite morale</h3><p style="font-size:13.5px">Elle ne trahira jamais volontairement les Strays.</p>`, { v: 'card' }),
    T(52, 604, 456, 136, `<h3>Évolution envisagée</h3><p style="font-size:14px">Une descente progressive dans la criminalité, capable de transformer une petite arnaqueuse joueuse en véritable hors-la-loi dangereuse — et de lui faire payer ce prix.</p>`)
  ]));

  push(faille('Wild', 'phobie du sang',
    'Nell souffre d\'une phobie du sang. À sa vue, elle peut être prise de nausées, de vertiges ou s\'évanouir.',
    '<p>Vers huit ans, laissée seule comme souvent, Nell trouva son père étendu au sol après une violente dispute entre ses parents. Il s\'était gravement blessé ; le sang s\'était répandu tout autour de lui. Incapable de comprendre ce qu\'elle voyait, elle resta figée devant la scène avant de courir chercher de l\'aide. Son père survécut. Elle, n\'a jamais pu oublier.</p>',
    ['Parler de violence, provoquer, jouer les dures : aucun problème.', 'Face à beaucoup de sang : nausées, vertiges, sueurs froides.', 'Dans les cas les plus intenses : perte de connaissance.'],
    ['Grande difficulté à soigner ou assister un blessé grave.', 'Fusillade, rixe sanglante, blessure d\'un Stray.', 'Un paradoxe pour celle qui rêve d\'être une hors-la-loi célèbre.'],
    'Faiblesse officielle, à jouer réellement. Elle ne rend pas Nell incapable d\'agir en permanence : elle surgit face au sang, pas à la simple idée de la violence.'));

  /* ---------- VIPER ---------- */
  push(P('Ruby « Viper » Hargrove', [
    ...head('La rebelle · VIPER', 'Ruby « Viper » Hargrove'),
    I(52, 182, 236, 330, 'portrait:ruby', { frame: 'cabinet', cap: 'R. HARGROVE — 1890', r: -1 }),
    T(304, 186, 204, 340, idCard([['Nom de code', '<b>VIPER</b>'], ['Âge', '20 ans (née en 1870)'], ['Origine', 'Père violent, foyer pauvre'], ['Chez les Strays', 'Depuis 1884 ; pour de bon en 1887'], ['Signe particulier', 'Grande cicatrice traversant le visage'], ['Rôle', 'Rebelle et protectrice']]), { v: 'card', st: { fs: 13 } }),
    T(52, 534, 456, 70, `<blockquote class="center" style="font-size:17px;margin:0">« J'ai pas besoin qu'on m'sauve. J'ai besoin qu'on m'suive. »</blockquote>`),
    T(52, 616, 456, 124, `<p>On ne l'approche pas sans y être invité. Viper ne frappe pas la première — mais quand elle frappe, c'est vite, et là où ça fait mal. Elle ne reçoit d'ordres de personne, sauf de Billy.</p>`)
  ], { lvl: 2 }));
  push(P('', [
    ...sub('Viper — Parmi les Strays'),
    T(52, 112, 456, 470, `<p class="dropcap">Ruby est arrivée chez les Strays en suivant Nell, et c'est encore Nell qu'elle surveille du coin de l'œil quand une affaire tourne mal. Leur amitié est la plus ancienne de la bande ; elle précède les Strays eux-mêmes.</p>
      <p>Elle est la plus dure des cinq, et la plus fidèle. Elle discute tout, refuse qu'on la protège, supporte mal qu'on la plaigne. Avec Billy, c'est autre chose : elle lui fait confiance comme à personne, même si elle serait incapable de le lui dire.</p>
      <p>Sa cicatrice, elle ne la cache pas. Elle n'en parle pas non plus. Ceux qui s'y attardent du regard apprennent vite à ne plus le faire.</p>
      <p>Elle ignore où se trouve son père, et ce qu'il est devenu. Sa famille, désormais, ce sont les Strays.</p>`),
    T(52, 594, 456, 90, `<p style="font-size:13.5px">Voir <i>La cicatrice de Viper</i>. Aucun élément ne fixe le sort ou la localisation de son père.</p>`, { v: 'card' }),
    T(110, 690, 340, 60, `Elle a encore refusé qu'on recouse son bras. Elle l'a fait elle-même. Mal. — B.`, { v: 'pinned', r: -2, st: { fs: 12 } })
  ]));
  push(P('', [
    ...sub('Viper — Caractère & ambitions'),
    T(52, 112, 456, 116, `<h3>Personnalité</h3><p style="font-size:14px">Fière, courageuse, indépendante, provocatrice, protectrice — et parfois cruelle. Extrêmement fidèle à ceux qu'elle aime, sans jamais l'avouer.</p>`),
    T(52, 234, 456, 150, `<h3>Contradictions</h3><ul style="font-size:14px">
      <li>Elle veut être indépendante, mais tient profondément à sa famille choisie.</li>
      <li>Elle déteste paraître vulnérable, mais souffre de la peur de l'abandon.</li>
      <li>Elle refuse les ordres de tous, sauf de Billy.</li></ul>`),
    T(52, 396, 220, 200, `<h3>Faiblesses</h3><ul style="font-size:13.5px"><li>Orgueil.</li><li>Difficulté à reconnaître ses erreurs.</li><li>Refus de demander de l'aide.</li><li>Peur de perdre ceux qui comptent.</li></ul>`, { v: 'card' }),
    T(288, 396, 220, 200, `<h3>Objectif</h3><p style="font-size:13.5px">Devenir la femme la plus forte, indépendante et respectée de l'Ouest. Prouver qu'aucun homme ne décidera plus jamais de sa vie.</p>`, { v: 'card' }),
    T(52, 616, 456, 124, `<p style="font-size:14px"><span class="sc red">Ce qui la lie aux Strays —</span> <i>ils sont les premiers à l'avoir protégée sans rien exiger. Elle ne laissera personne leur faire de mal.</i></p>`)
  ]));

  push(faille('Viper', 'phobie des lames',
    'Ruby souffre d\'une phobie des lames. La vue d\'un couteau dirigé vers elle peut la faire paniquer.',
    '<p>Vers treize ou quatorze ans, lors d\'une de ses colères, son père la frappa au visage avec un objet tranchant. La blessure a cicatrisé, mais la peur est restée. Ruby peut voir un couteau posé sur une table, couper du pain ou utiliser une lame au quotidien. Ce qu\'elle ne supporte pas, c\'est une lame pointée vers elle pour la menacer : alors, tout revient.</p>',
    ['Figement, recul instinctif, tremblements.', 'Perte momentanée de ses moyens.', 'Réaction plus forte encore si la lame approche de son visage.'],
    ['Menace au couteau, prise d\'otage, interrogatoire.', 'Elle peut toujours se défendre dans bien des situations.', 'Une vulnérabilité précise, liée à sa cicatrice.'],
    'Faiblesse officielle, à jouer réellement. Elle ne touche que les lames dirigées contre elle, jamais les objets tranchants du quotidien.'));

  /* ---------- MONEY ---------- */
  push(P('Scarlett « Money » Blackwood', [
    ...head('La voleuse · MONEY', 'Scarlett « Money » Blackwood'),
    I(52, 182, 236, 330, 'portrait:scarlett', { frame: 'cabinet', cap: 'S. BLACKWOOD — 1890', r: 1 }),
    T(304, 186, 204, 340, idCard([['Nom de code', '<b>MONEY</b>'], ['Âge', '20 ans (née en 1870)'], ['Origine', "Famille d'escrocs, reniée en 1885"], ['Chez les Strays', 'Depuis 1885 (15 ans)'], ['Rôle', 'Voleuse, séductrice, excellente tireuse'], ['Traits', 'Capricieuse, extravagante, possessive']]), { v: 'card', st: { fs: 13 } }),
    T(52, 534, 456, 70, `<blockquote class="center" style="font-size:17px;margin:0">« Ce qui brille m'appartient. Le reste, je te le laisse, Silas. »</blockquote>`),
    T(52, 616, 456, 124, `<p>Scarlett aime les diamants, les bijoux, les vêtements raffinés — et par-dessus tout, posséder ce que les autres désirent. Les Strays l'appellent Money ; elle a décidé de le prendre comme un compliment.</p>`)
  ], { lvl: 2 }));
  push(P('', [
    ...sub('Money — Parmi les Strays'),
    T(52, 112, 456, 470, `<p class="dropcap">Scarlett est arrivée chez les Strays avec des goûts de reine et pas un sou. Cinq ans plus tard, rien n'a changé — sinon qu'elle a appris à partager. Un peu.</p>
      <p>C'est elle qui a appris aux autres à reconnaître un vrai bijou, à séduire pour approcher, à tirer juste. Elle réclame toujours une plus grosse part, propose toujours un coup plus risqué, et cède toujours quand Billy dit non — après avoir boudé pour la forme.</p>
      <p>Avec Nell, elle forme un duo d'arnaqueuses redoutable ; avec Ruby, elle se dispute à propos de tout ce qui brille ; avec Silas, elle compte les points depuis leur naissance.</p>
      <p>Chez les Strays, pour la première fois, on l'aime sans rien lui demander en échange. Elle ne sait pas toujours quoi en faire.</p>`),
    A(70, 612, 90, 75, 'diamond', {}),
    T(190, 600, 312, 140, `<p style="font-size:13.5px">Voir <i>Les héritiers du mensonge</i>. Excellente au revolver, sans être invincible en RP.</p>`, { v: 'card' })
  ]));
  push(P('', [
    ...sub('Money — Caractère & ambitions'),
    T(52, 112, 456, 136, `<h3>Personnalité</h3><p style="font-size:14px">Séductrice, capricieuse, extravagante, ambitieuse et possessive. Elle considère les vols comme des défis et aime prendre des risques pour obtenir ce qu'elle convoite.</p>`),
    T(52, 254, 456, 116, `<h3>Objectif</h3><p style="font-size:14px">Devenir l'une des personnes les plus fortunées de l'Ouest : une collection de bijoux, une immense fortune, une vie de luxe obtenue par ses propres moyens.</p>`),
    T(52, 384, 260, 210, `<h3>Faiblesses</h3><ul style="font-size:13.5px"><li>Caprices.</li><li>Attachement excessif aux biens matériels.</li><li>Compétition permanente avec Silas.</li><li>Difficulté à accepter qu'on lui refuse quelque chose.</li></ul>`, { v: 'card' }),
    A(336, 404, 170, 80, 'revolver', { r: -8 }),
    T(330, 496, 180, 100, `Six coups. Elle compte toujours. Silas, jamais.`, { v: 'hand', r: -3, st: { fs: 12 } }),
    T(52, 616, 456, 124, `<p style="font-size:14px"><span class="sc red">Ce qui la lie aux Strays —</span> <i>sa mère a gardé le plus beau bijou qu'elle ait volé. Billy, lui, ne lui a jamais rien pris.</i></p>`)
  ]));

  push(faille('Money', 'dépendance à l\'alcool',
    'Dépendante à l\'alcool, Scarlett subit tremblements et troubles de concentration en cas de manque. Trop ivre, elle perd ses filtres et révèle des secrets.',
    '<p>Élevée entre les saloons et les tables de jeu de ses parents, Scarlett a vu l\'alcool couler très tôt. À l\'adolescence, elle commença à boire pour imiter les adultes, puis pour se donner de l\'assurance. Avec les années, l\'habitude devint de plus en plus difficile à contrôler. Celle qui aime tout maîtriser — son image, ses mots, les situations — a là sa plus grande faille.</p>',
    ['En manque : tremblements, nervosité, difficulté à se concentrer.', 'Sa précision au tir peut en souffrir.', 'Trop ivre : elle devient bavarde et désinhibée, révèle sentiments et secrets.'],
    ['Quelqu\'un qui connaît sa dépendance peut la faire boire pour la faire parler.', 'Un long voyage ou une planque sans alcool peut la rendre moins fiable.', 'Elle ne répond pas forcément à tout : elle garde simplement moins bien ses secrets.'],
    'Faiblesse officielle, à jouer réellement et avec sérieux : ni comique systématique, ni « sérum de vérité » magique.'));

  /* ---------- ACE ---------- */
  push(P('Silas « Ace » Blackwood', [
    ...head('Le joueur · ACE', 'Silas « Ace » Blackwood'),
    I(52, 182, 236, 330, 'portrait:silas', { frame: 'cabinet', cap: 'S. BLACKWOOD — 1890', r: -1.5 }),
    T(304, 186, 204, 340, idCard([['Nom de code', '<b>ACE</b>'], ['Âge', '20 ans (né en 1870)'], ['Origine', "Famille d'escrocs, reniée en 1885"], ['Chez les Strays', 'Depuis 1885 (15 ans)'], ['Rôle', 'Voleur, joueur, excellent tireur'], ['Traits', 'Charmeur, arrogant, mauvais perdant']]), { v: 'card', st: { fs: 13 } }),
    T(52, 534, 456, 70, `<blockquote class="center" style="font-size:17px;margin:0">« Je parie que non. Combien tu mets ? »</blockquote>`),
    T(52, 616, 456, 124, `<p>Silas considère presque chaque conversation comme un duel qu'il doit remporter, et sa sœur comme le seul adversaire qui compte. Ace : la carte qui gagne la main. Il n'en accepte pas d'autre.</p>`)
  ], { lvl: 2 }));
  push(P('', [
    ...sub('Ace — Parmi les Strays'),
    T(52, 112, 456, 470, `<p class="dropcap">Silas a perdu sa première partie contre Billy, en 1885. Il a passé les cinq années suivantes à essayer de prendre sa revanche aux cartes — sans jamais, pas une fois, contester sa place de chef. Battre Billy au poker est un jeu. Le suivre est une évidence.</p>
      <p>Il est le provocateur de la bande, avec Nell : paris absurdes, défis stupides, disputes qui finissent en éclats de rire — ou en table renversée. Avec Ruby, il pousse jusqu'à la limite, et sait s'arrêter quand elle devient sérieuse.</p>
      <p>Chez les Blackwood, celui qui perdait portait toute la faute. Chez les Strays, quand une affaire tourne mal, on ne désigne pas de coupable : on ramène tout le monde. Il n'y croit pas encore tout à fait.</p>`),
    A(70, 612, 120, 80, 'dice', {}),
    T(210, 600, 292, 140, `<p style="font-size:13.5px">Voir <i>Les héritiers du mensonge</i>. Excellent tireur, sans être invincible en RP.</p>`, { v: 'card' })
  ]));
  push(P('', [
    ...sub('Ace — Caractère & ambitions'),
    T(52, 112, 456, 136, `<h3>Personnalité</h3><p style="font-size:14px">Charmeur, arrogant, compétitif, joueur et extrêmement mauvais perdant. Silas aime les paris, les cartes, les armes coûteuses et les possessions de valeur.</p>`),
    T(52, 254, 456, 116, `<h3>Objectif</h3><p style="font-size:14px">Devenir l'un des hommes les plus fortunés de l'Ouest : assez d'argent pour ne jamais dépendre de personne — et, surtout, davantage que Scarlett.</p>`),
    T(52, 384, 260, 200, `<h3>Faiblesses</h3><ul style="font-size:13.5px"><li>Arrogance.</li><li>Mauvaise gestion de la défaite.</li><li>Goût excessif du jeu.</li><li>Tendance à sous-estimer ses adversaires.</li></ul>`, { v: 'card' }),
    A(350, 402, 64, 64, 'chip', {}), A(400, 432, 64, 64, 'chip', { col: '#22303a' }), A(375, 462, 64, 64, 'chip', { col: '#2b1d12' }),
    A(330, 520, 80, 112, 'ace', { r: 10 }),
    T(52, 640, 456, 100, `<p style="font-size:14px"><span class="sc red">Ce qui le lie aux Strays —</span> <i>on ne lui a jamais fait porter seul une défaite commune.</i></p>`)
  ]));
  push(faille('Ace', 'dépendance à l\'alcool',
    'Dépendant à l\'alcool, Silas subit tremblements et troubles de concentration en cas de manque. Trop ivre, il perd ses filtres et révèle des secrets.',
    '<p>Son père, Victor Blackwood, l\'emmenait observer des parties de poker où les joueurs passaient des nuits à boire et à miser. Silas a associé l\'alcool à l\'assurance, à la fête, aux joueurs qu\'il admirait. Adolescent, il prit l\'habitude de boire pendant ses parties de cartes. Ce qui n\'était qu\'un jeu est devenu une dépendance.</p>',
    ['En manque : tremblements, irritabilité, difficulté à se concentrer.', 'Ses parties de poker, son tir et ses décisions en pâtissent.', 'Trop ivre : vantard, imprudent, il parle trop pour impressionner.'],
    ['Il peut dévoiler des informations compromettantes pour toute la bande.', 'Un adversaire peut l\'inviter à boire pour le faire parler.', 'Il ne dit pas tout, mais garde beaucoup moins bien ses secrets.'],
    'Faiblesse officielle, à jouer réellement. Elle peut le mettre en danger, lui et les autres Strays.'));
})();
