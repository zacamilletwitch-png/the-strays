# THE STRAYS — Registre 1890

Livre numérique interactif (HTML / CSS / JavaScript, sans installation ni bibliothèque).

## Ouvrir le livre
- **Le plus simple :** double-cliquer sur `index.html` (Chrome, Edge ou Firefox récents).
- **Recommandé (sauvegarde la plus fiable) :** avec Node.js installé, lancer `node serve.js` dans ce dossier puis ouvrir http://localhost:8890
- Les polices anciennes viennent de Google Fonts : une connexion Internet est nécessaire pour les afficher (sinon des polices de remplacement sont utilisées).

## Lecture
Flèches ← →, clic sur les coins des pages, glissement au doigt sur mobile, bouton **Sommaire**, numéro de page, **Plein écran**.

## Édition (bouton « Édition »)
- **Clic** : sélectionner un élément · **glisser** : déplacer · poignées : redimensionner (Maj = proportions) et faire pivoter (Maj = par 15°).
- **Double-clic** sur un texte : écrire. Entrée = nouveau paragraphe. Barre du haut : police, taille, couleur (sur la sélection ou le bloc), gras/italique/souligné, type de bloc (titre, citation…), alignement, style (or gravé, journal, lettre, affiche…).
- **Double-clic** sur une photo (ou « Remplacer… ») : importer votre image. Montage : sépia, coins collés, carte-cabinet, médaillon.
- Ajouter : titre, paragraphe, note manuscrite, coupure de journal, lettre, affiche, photo, ornements (cartes, jetons, cachet, carte, emblème…).
- Pages : ajouter, dupliquer, supprimer, déplacer, fond (ivoire, jauni, parchemin, ligné, garde, cuir, carton ou image perso), titre au sommaire. Le panneau de gauche se réorganise par glisser-déposer.
- Clavier : Suppr, Ctrl+Z / Ctrl+Y, Ctrl+D (dupliquer), flèches (déplacer finement, Maj = ×10), Échap (quitter l'écriture).

## Sauvegarde
- Automatique dans le navigateur (IndexedDB), à chaque modification. Elle est liée au navigateur **et** à l'adresse utilisée (fichier ou localhost) : utilisez toujours la même.
- **Projet ▸ Exporter le projet (.json)** : copie complète (textes, mise en page, images). Faites-en régulièrement : c'est votre vraie sauvegarde, et c'est ce fichier qu'on partage entre joueurs.
- **Projet ▸ Importer** : recharge un projet exporté.
- **Projet ▸ Exporter en PDF** : ouvre l'impression → choisir « Enregistrer au format PDF », marges « Aucune », cocher « Graphiques d'arrière-plan ».
- **Projet ▸ Réinitialiser** : revient au livre d'origine.

## Fichiers
`index.html` · `css/` (styles) · `js/art.js` (illustrations vectorielles) · `js/content1-4.js` (texte d'origine) · `js/app.js` (moteur) · `js/editor.js` (édition) · `serve.js` (petit serveur local facultatif).

## 2e édition — nouveautés
- Couverture en cuir noir, titre gravé à froid, chien noir au collier de fer brisé ; emblème sans nombre de symboles.
- Narration d'un archiviste anonyme, témoignages et pièces d'archives, drames familiaux des cinq membres (marqués « Proposition narrative — à valider »).
- Noms de code KING · WILD · VIPER · MONEY · ACE, double page de cartes de membres, chapitre « La tradition du feu », règle « Never leave a Stray behind », ambition d'empire en quatre étapes.
- Édition : bouton **Carte membre** (carte + portrait qui se déplacent ensemble ; « Dissocier » pour les séparer), bouton **Archive**, styles « Gravé dans le cuir », « Voix de l'archiviste », « Document d'archive », « Carte de membre ».
- Toute illustration (chien, emblème, feu de camp…) peut être remplacée par votre image : sélectionner ▸ « Remplacer… ».
- Niveau de chaque page dans le sommaire (Chapitre / Sous-partie) réglable dans la barre « Page ».
- Au premier chargement de cette édition, une version précédente déjà enregistrée est conservée : **Projet ▸ Restaurer la version précédente**.

## 3e édition — lore définitif 1882–1890
- Chronologie officielle : fondation 1882 (Billy renié et déshérité à 15 ans), Nell 1883, Ruby 1884 (refuge définitif 1887), jumeaux 1885, départ volontaire pour New Austin en 1890.
- Nouveaux chapitres : Les enfants de Blackwater, L'héritier renié, L'enfant oubliée, La cicatrice de Viper, Les héritiers du mensonge, Huit années sans foyer, Les nuits de Blackwater, Souvenirs communs, Le rêve de Billy Mercer, La fin de leur adolescence, la double page « New Austin, 1890 », La parole de King, Recrutement et trahison, Le registre de la famille, La caisse commune.
- Édition : **+ Membre** (barre Page) ajoute les trois pages de fiche d'un nouveau Stray ; fonds « Nuit (pleine image) » ; styles « Carnet de comptes » et « Texte clair sur image ».
- Au premier chargement de cette édition, la version enregistrée précédente est conservée : Projet ▸ Restaurer la version précédente.
