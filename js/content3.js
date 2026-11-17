/* =====================================================================
   THE STRAYS — Contenu d'origine, 4e édition (3/5)
   Deuxième partie : Huit années sans foyer — jusqu'au départ pour Rhodes
   ===================================================================== */
(function () {
  const { T, I, A, P, head, sub, nar, prop, push } = window.SB;
  const body = (y, h, html, fs) => T(52, y, 456, h, html, fs ? { st: { fs } } : {});
  const row = (y, t) => `<tr><td style="width:22%;font-family:'Cinzel',serif;font-size:14px;color:#7d2418">${y}</td><td>${t}</td></tr>`;
  const memo = (y, h, title, html) => T(52, y, 456, h, `<h3>${title}</h3>${html}`, { st: { fs: 14.5 } });
  const big = (t, it) => `<p style="font-family:'IM Fell English',serif;font-size:18px;line-height:1.55${it ? ';font-style:italic' : ''}">${t}</p>`;

  /* ---------- HUIT ANNÉES SANS FOYER ---------- */
  push(P('Deuxième partie — Huit années sans foyer', [
    ...head('Deuxième partie · 1882 – 1890', 'Huit années sans foyer'),
    nar(186, 90, `<p>On a souvent écrit que les bandes naissent d'un crime. Celle-ci est née d'une habitude : celle de ne laisser personne dormir seul dehors.</p>`),
    body(286, 456, `<p>Les premières années, les Strays ne sont qu'une poignée de gamins réunis autour d'un garçon de quinze ans qui a tout perdu. Billy n'a pas d'argent, pas de toit, pas de plan. Il a seulement la certitude qu'ensemble, ils ont moins froid.</p>
      <p>Nell arrive en 1883, Ruby en 1884, les jumeaux en 1885. D'autres enfants vont et viennent, restent une saison, puis disparaissent dans la ville. Ces cinq-là restent. Année après année, ils deviennent le cœur de la bande.</p>
      <p>Ils grandissent ensemble : les premières bagarres gagnées, les premières combines réussies, les premières fois où l'un d'eux ne rentre pas et où les autres retournent la ville pour le retrouver. Ils apprennent à se battre dans la rue, sans maître et sans méthode, en prenant des coups et en en rendant.</p>`)
  ], { lvl: 1 }));
  push(P('', [
    ...sub('Huit années sans foyer — suite'),
    body(112, 480, `<p>Ils vivent de petits vols, d'escroqueries et de tout ce que la ville laisse traîner. Scarlett et Silas leur enseignent les cartes, les poches et les bijoux ; Nell, l'art de détourner un regard ; Ruby, celui de ne jamais reculer ; Billy, celui de tenir ensemble.</p>
      <p>Ce n'est pas une adolescence heureuse, au sens où l'entendent les familles de la hauteur. Ils ont faim souvent, froid presque toujours, et la peur de la prison ne les quitte jamais tout à fait. Chacun porte aussi, en silence, ce que son enfance lui a laissé.</p>
      <p>Mais ils découvrent quelque chose qu'aucun d'eux n'avait connu : appartenir à quelqu'un. Se disputer pour une couverture et la partager quand même. Savoir que, quoi qu'il arrive, quelqu'un viendra.</p>
      <p>En 1890, ils se connaissent depuis plus de cinq ans. Ils ne sont plus des enfants. Ils sont une famille.</p>`),
    T(52, 612, 456, 130, `<p class="center" style="font-family:'IM Fell English',serif;font-style:italic;font-size:17px">« On était pas une bande. On était juste les seuls à s'attendre. »</p>
      <p class="center small muted">— propos attribué à Nell Whitmore ${prop('Proposition')}</p>`)
  ]));

  /* ---------- LES NUITS DE BLACKWATER ---------- */
  push(P('Les nuits de Blackwater', [
    ...head('Deuxième partie', 'Les nuits de Blackwater'),
    body(186, 330, `<p>Les Strays n'ont jamais eu de maison. Ils ont eu des cachettes : une grange abandonnée à la sortie de la ville, l'étage d'un entrepôt désaffecté près des quais, des abris de planches, des campements improvisés au bord de l'eau. Ils en changent souvent, dès qu'un propriétaire ou un adjoint du shérif s'approche d'un peu trop près.</p>
      <p>Tout se partage : les repas, les couvertures, les vêtements, les quelques dollars mis de côté. On dort serrés. On mange ce qu'il y a.</p>
      <p>Le soir, il y a le feu. On y joue aux cartes, on s'y dispute pour des riens, on s'y lance des défis absurdes, on s'y moque les uns des autres avec une tendresse qu'aucun d'eux n'avouerait. Et, parfois, on s'y tait pour écouter Billy parler de ce qu'ils feront plus tard.</p>`),
    A(110, 528, 340, 264, 'barn', {}),
    T(330, 700, 180, 50, `La grange du vieux Pike. Hiver 1886.`, { v: 'hand', r: -4, st: { fs: 11.5 } })
  ], { lvl: 1 }));

  /* ---------- SOUVENIRS ---------- */
  push(P('Souvenirs communs', [
    ...sub('Souvenirs communs'),
    T(52, 104, 456, 40, `<p class="center small muted" style="font-style:italic">Anecdotes rapportées par plusieurs sources. ${prop('Propositions modifiables')}</p>`),
    memo(150, 200, "La nuit où l'on partagea tout", `<p>Un hiver, le froid fut tel que l'eau gela dans les seaux de la grange. Ils mirent en commun toutes les couvertures — sept, dont deux trouées — et dormirent les cinq ensemble, serrés comme des chiots. Silas jura toute la nuit que Nell lui volait la place. Au matin, personne n'avait perdu un orteil.</p>`),
    A(180, 362, 200, 16, 'divider', {}),
    memo(392, 190, 'Le festin de rien', `<p>Un soir où il ne restait que trois pommes de terre, un oignon et un morceau de lard, Ruby décréta qu'on ferait un ragoût. Scarlett y ajouta, avec grand sérieux, une pincée de « sel de luxe » volé chez l'épicier. Ils en parlèrent pendant des années comme du meilleur repas de leur vie.</p>`),
    A(380, 600, 120, 80, 'stain', { op: .8 }),
    T(70, 620, 280, 100, `Ruby dit que c'était pas du ragoût. Ruby a tort. — S.`, { v: 'hand', r: -3, st: { fs: 12 } })
  ], { lvl: 2 }));
  push(P('', [
    ...sub('Souvenirs communs — suite'),
    memo(112, 196, 'La partie qui finit mal', `<p>Une partie de poker entre Strays, autour du feu, pour des allumettes. Silas perdit trois mains de suite contre Nell, accusa Scarlett de l'avoir aidée, Scarlett accusa Silas de mentir, et la table finit renversée. Billy ramassa les cartes et déclara que les allumettes revenaient à la caisse commune.</p>`),
    memo(318, 196, "L'arnaque du chien perdu", `<p>Nell et Scarlett avaient monté une escroquerie : une fillette éplorée, un chien perdu, une récompense promise. Le chien — emprunté — s'enfuit au beau milieu de la scène et revint droit vers le marchand, qui était son véritable propriétaire. Ils en rirent pendant des semaines.</p>`),
    memo(524, 220, "Le premier soir où Billy parla de l'avenir", `<p>Autour du feu, Billy leur dit qu'un jour, ils ne dormiraient plus dans des granges. Qu'ils auraient une maison à eux, de quoi manger, de quoi ne plus avoir peur. Personne ne le crut vraiment. Mais personne ne se moqua de lui non plus.</p>`)
  ]));

  /* ---------- RÉPUTATION ---------- */
  push(P('La réputation des Strays à Blackwater', [
    ...sub("Ce que Blackwater savait d'eux"),
    T(60, 112, 440, 210, `<h3>Registre du bureau du shérif — note de service</h3>
      <p>Une petite bande de jeunes gens se faisant appeler « les Strays » est signalée pour vols à l'étalage, parties truquées et escroqueries mineures sur les quais. Le meneur serait le fils déshérité d'une famille connue. À surveiller. Aucune affaire grave à ce jour.</p>`, { v: 'archive', r: -1 }),
    T(80, 340, 400, 170, `<h3>Témoignage — un épicier de Front Street</h3>
      <p>« Les Strays ? Tout le monde les connaît, ici. On compte ses pommes quand ils passent. Mais je ne les ai jamais vus lever la main sur personne d'honnête. »</p>`, { v: 'archive', r: 1.2 }),
    body(530, 210, `<p style="font-size:14px">En 1890, les Strays sont donc <b>connus à Blackwater</b> : surveillés par les autorités locales, repérés par quelques commerçants. Mais leur nom ne dépasse pas la ville. Ils n'ont commis aucun grand braquage, ne possèdent aucun territoire, et n'ont jamais fait la une d'un journal. ${prop('Pièces fictives')}</p>`)
  ], { lvl: 2 }));

  /* ---------- CHRONOLOGIE ---------- */
  push(P('Chronologie 1867 – 1890', [
    ...head('Repères', 'Chronologie<br><span style="font-size:22px">1867 – 1884</span>'),
    T(52, 190, 456, 556, `<table style="font-size:13.5px">
      ${row(1867, '<b>Naissance de William Mercer</b>, fils d\'Edward et Margaret Mercer.')}
      ${row(1870, '<b>Naissance de Ruby Hargrove</b>, et des jumeaux <b>Scarlett et Silas Blackwood</b>, enfants de Victor Blackwood.')}
      ${row(1871, '<b>Naissance de Nellie Whitmore</b>.')}
      ${row('v. 1874', 'Nell, trois ans, commence à être laissée seule des heures entières.')}
      ${row('v. 1878', 'Ruby et Nell se rencontrent : la boue, un coup de poing, deux pommes. ' + prop('Date proposée'))}
      ${row('v. 1879', 'Nell, huit ans, trouve son père gravement blessé, en sang. Naissance de sa phobie du sang.')}
      ${row('v. 1880', 'Billy est enfermé des heures dans une réserve sans fenêtre par son père. Naissance de sa claustrophobie. ' + prop('Date proposée'))}
      ${row(1882, '<b>Billy, quinze ans, est renié et déshérité.</b> <b>Naissance des Strays</b>.')}
      ${row(1883, '<b>Nell</b>, douze ans, rejoint Billy. Vers 1883-1884, Ruby est blessée au visage par son père.')}
      ${row(1884, '<b>Ruby</b>, quatorze ans, se rapproche des Strays grâce à Nell.')}
      </table>`)
  ], { lvl: 1 }));
  push(P('', [
    ...sub('Chronologie — 1885 – 1890'),
    T(52, 116, 456, 540, `<table style="font-size:13.5px">
      ${row('v. 1884 – 1885', 'Les jumeaux, adolescents, commencent à boire dans les saloons où les emmène leur père.')}
      ${row(1885, '<b>Scarlett et Silas</b>, quinze ans, rencontrent Billy à une table de poker truquée et rejoignent les Strays. Ils rompent avec leurs parents.')}
      ${row(1885, '<b>Nell</b>, quatorze ans, quitte définitivement ses parents, sans les prévenir.')}
      ${row(1887, '<b>Ruby</b>, dix-sept ans, fuit définitivement le foyer paternel et rejoint les Strays pour de bon.')}
      ${row('1887 – 1889', 'La bande est surveillée à Blackwater. Billy parle de plus en plus de « construire quelque chose ».')}
      ${row(1890, '<b>Décision de quitter West Elizabeth</b> pour <b>Rhodes, en Lemoyne</b>. Les Strays passent encore quelques jours à Blackwater pour préparer le départ : <b>début du RP</b>.')}
      </table>`),
    T(52, 664, 456, 80, `<p style="font-size:13.5px"><b>Âges en 1890 :</b> King 23 ans · Viper, Money et Ace 20 ans · Wild 19 ans.</p>`, { v: 'card' })
  ]));

  /* ---------- LE RÊVE DE BILLY MERCER ---------- */
  push(P('Le rêve de Billy Mercer', [
    ...head('Deuxième partie', 'Le rêve de Billy Mercer'),
    body(186, 400, `<p class="dropcap">Billy veut faire des Strays une organisation criminelle puissante, connue et redoutée. Il le dit sans détour, et il en a le goût : le risque, la réputation, le pouvoir de ne plus jamais plier devant un Edward Mercer.</p>
      <p>Mais ceux qui l'ont connu assurent que la gloire n'est pas le fond de l'affaire. Ce qu'il veut, c'est que sa famille cesse de survivre. Qu'elle ne dorme plus dans des granges abandonnées, ne compte plus les pommes de terre, ne vive plus à la merci du premier adjoint venu.</p>
      <p>Il rêve de quelque chose qui leur appartienne vraiment : un foyer, des ressources, une indépendance totale. Et il sait que ce rêve ne se construira pas honnêtement.</p>`),
    T(52, 600, 456, 140, `<p style="font-size:14px"><i>L'archiviste note que Billy Mercer n'a rien d'un saint. Pour atteindre ce but, il prendra des risques, et commettra des actes que la morale réprouve. Il le sait, et il l'accepte.</i></p>`, { v: 'narrator' })
  ], { lvl: 2 }));

  /* ---------- LA DÉCISION DE PARTIR ---------- */
  push(P('La décision de partir', [
    ...sub('La décision de partir'),
    body(112, 200, `<p>Au printemps de 1890, Billy réunit les autres autour du feu et leur annonce qu'ils vont quitter West Elizabeth. Ils ne fuient ni un coup raté ni la corde : Blackwater les connaît trop, et elle est trop petite pour ce qu'ils veulent bâtir. Leur destination : <b>Rhodes, dans l'État de Lemoyne</b>, où personne ne connaît leur nom.</p>`),
    T(52, 318, 456, 92, `<h3>King</h3><p>Bâtir un empire, et offrir enfin à sa famille un foyer qui leur appartienne.</p>`, { v: 'card', st: { fs: 14 } }),
    T(52, 418, 220, 116, `<h3>Wild</h3><p>Que tout l'Ouest connaisse son nom.</p>`, { v: 'card', st: { fs: 14 } }),
    T(288, 418, 220, 116, `<h3>Viper</h3><p>Ne plus jamais dépendre de personne.</p>`, { v: 'card', st: { fs: 14 } }),
    T(52, 542, 456, 92, `<h3>Money & Ace</h3><p>La fortune. Et, bien sûr, que l'autre en ait moins.</p>`, { v: 'card', st: { fs: 14 } }),
    A(150, 646, 260, 110, 'riders', { col: 'ink', op: .5 })
  ], { lvl: 2 }));

  /* ---------- LA FIN DE LEUR ADOLESCENCE ---------- */
  push(P('La fin de leur adolescence', [
    A(40, 40, 480, 720, 'frame', { col: 'ink', op: .55 }),
    T(80, 160, 400, 480, `${big('Pendant des années, ils avaient partagé le peu qu\'ils possédaient.')}
      ${big('Un morceau de pain, une couverture trouée, quelques dollars volés et des nuits entières à rêver d\'une vie meilleure.')}
      ${big('Ils n\'avaient jamais eu de véritable maison.')}
      ${big('Mais ils avaient fini par comprendre qu\'un foyer n\'était pas forcément un endroit.')}
      ${big('En 1890, William Mercer leur promit qu\'un jour, ils n\'auraient plus à survivre.')}
      ${big('Il était temps pour les chiens errants de conquérir leur propre territoire.', 1)}`),
    A(180, 664, 200, 18, 'divider', {}),
    A(232, 694, 96, 14, 'chain', { op: .6 })
  ], { lvl: 2 }));

  /* ---------- LES DERNIERS JOURS À BLACKWATER ---------- */
  push(P('Les derniers jours à Blackwater', [
    ...head('Deuxième partie · 1890', 'Les derniers jours à Blackwater'),
    nar(186, 76, `<p>Les archives ne disent rien de ces quelques jours. C'est sans doute qu'il n'y avait rien à en dire, sinon qu'ils furent les derniers.</p>`),
    body(272, 330, `<p>Le départ n'est pas immédiat. Il faut réunir les affaires, trouver des chevaux convenables, rassembler ce que contient la caisse commune, solder les dernières dettes et les dernières rancunes. Il faut aussi dire au revoir — à une ville qui ne les a jamais aimés, mais qui les a vus grandir.</p>
      <p>Les soirées, elles, ressemblent à toutes les autres : un feu, des cartes, des disputes, des rires. Peut-être un peu plus longues. Peut-être un peu plus silencieuses, vers la fin.</p>
      <p>C'est là que commence leur histoire en jeu : à Blackwater, quelques jours avant la route.</p>`),
    T(52, 616, 456, 124, `<h3>À jouer à Blackwater</h3><p style="font-size:13.5px">Préparatifs, achats, adieux, dernières petites affaires — et tout ce qui pourrait retarder le départ. Les événements de ces jours-là restent entièrement ouverts au RP.</p>`, { v: 'card' })
  ], { lvl: 2 }));

  /* ---------- NOUVELLE CONCLUSION ---------- */
  push(P('Vers Lemoyne', [
    A(40, 40, 480, 720, 'frame', { col: 'ink', op: .55 }),
    T(76, 82, 408, 640, `${big('Blackwater les avait vus grandir.')}
      ${big('Dans ses rues, ils avaient connu la faim, le froid, les bagarres et les nuits sans lendemain.')}
      ${big('Ils y avaient aussi trouvé quelque chose qu\'aucun d\'eux n\'avait véritablement connu auparavant : une famille.')}
      ${big('Mais William Mercer ne voulait plus les voir survivre de quelques dollars volés et de promesses murmurées autour d\'un feu.')}
      ${big('Il voulait leur offrir davantage.')}
      ${big('Un foyer. Une fortune. Un avenir qui n\'appartiendrait qu\'à eux.')}
      ${big('Il leur restait encore quelques jours à Blackwater.')}
      ${big('Puis viendrait la route vers Lemoyne.')}
      ${big('Et quelque part, du côté de Rhodes, les chiens errants espéraient enfin trouver un endroit qu\'ils pourraient appeler leur territoire.', 1)}`, { st: { fs: 16 } })
  ], { lvl: 2 }));

  /* ---------- THE STRAYS — RHODES, 1890 (double page) ---------- */
  push(P('The Strays — Rhodes, 1890', [
    I(0, 0, 560, 800, 'art:rhodesL', { frame: 'plain', sepia: false }),
    T(40, 250, 480, 90, `<h1 class="center" style="font-size:56px;letter-spacing:.12em;font-weight:700">THE STRAYS</h1>`, { v: 'light' }),
    A(180, 344, 200, 18, 'divider', { col: 'gold', op: .8 })
  ], { lvl: 1, bg: 'night', noFolio: true }));
  push(P('', [
    I(0, 0, 560, 800, 'art:rhodesR', { frame: 'plain', sepia: false }),
    T(40, 250, 480, 90, `<h1 class="center" style="font-size:46px;letter-spacing:.12em;font-weight:700">RHODES, 1890</h1>`, { v: 'light' }),
    T(60, 360, 440, 40, `<p class="center" style="font-family:'Cinzel',serif;font-size:14px;letter-spacing:.2em">No masters. No chains. No one left behind.</p>`, { v: 'light' })
  ], { bg: 'night', noFolio: true }));
})();
