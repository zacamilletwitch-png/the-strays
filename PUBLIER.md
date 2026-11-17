# Mettre The Strays en ligne avec GitHub Pages

Le même dossier sert à deux choses :
- **Chez vous** (double-clic sur `index.html`, ou `node serve.js` puis http://localhost:8890) : le livre s'ouvre **en mode édition**, avec vos modifications enregistrées dans votre navigateur.
- **En ligne** (sur github.io) : le livre est chargé depuis `book.json` et s'affiche **en lecture seule**. Il n'y a ni bouton « Édition » ni barre d'outils. Les visiteurs peuvent seulement lire, tourner les pages, ouvrir le sommaire et passer en plein écran.

Seul le propriétaire du dépôt GitHub (vous) peut changer ce qui est en ligne.

---

## 1. Première mise en ligne (une seule fois, environ 10 minutes)

1. Créez un compte gratuit sur **github.com** (ou connectez-vous).
2. En haut à droite, cliquez sur **« + » ▸ New repository**.
   - Repository name : `the-strays`
   - Cochez **Public** : c'est nécessaire pour GitHub Pages gratuit.
   - Cliquez sur **Create repository**.
3. Sur la page du dépôt vide, cliquez sur le lien **« uploading an existing file »**.
4. Ouvrez le dossier **Documents ▸ The Strays** et **glissez-y** :
   `index.html`, `book.json`, `.nojekyll`, et les dossiers `css` et `js`.
   Vous pouvez aussi ajouter `LISEZMOI.md`, `PUBLIER.md` et `serve.js`, mais ils ne sont pas indispensables.
   N'envoyez **pas** le dossier `.claude`.
5. En bas, cliquez sur **Commit changes**.
6. Allez dans **Settings ▸ Pages** :
   - Source : **Deploy from a branch**
   - Branch : **main**, dossier **/ (root)**, puis **Save**.
7. Attendez une à deux minutes, puis rechargez la page **Settings ▸ Pages**. L'adresse du site s'affiche, du type :
   **https://VOTRE-PSEUDO.github.io/the-strays/**

C'est ce lien que vous partagez.

> Si `.nojekyll` n'apparaît pas dans l'explorateur Windows, ce n'est pas grave : le site fonctionne sans lui.

---

## Votre site

**https://zacamilletwitch-png.github.io/the-strays/**
Dépôt : https://github.com/zacamilletwitch-png/the-strays

## 2. Mettre le site à jour — méthode rapide (2 clics)

1. Modifiez le livre chez vous (mode **Édition**).
2. Cliquez sur **Projet ▸ Publier sur le site (book.json)**. Le fichier est téléchargé dans **Téléchargements**.
3. Dans le dossier **Documents ▸ The Strays**, double-cliquez sur **`publier.bat`**.
   Il prend le `book.json` le plus récent de Téléchargements et l'envoie sur GitHub.
4. Le site est à jour une à deux minutes plus tard.

## 2 bis. Méthode manuelle (sans publier.bat)

1. Ouvrez le livre chez vous, modifiez-le comme d'habitude (mode **Édition**).
2. Cliquez sur **Projet ▸ Publier sur le site (book.json)**. Un fichier `book.json` est téléchargé.
3. Sur github.com, ouvrez votre dépôt `the-strays`, puis **Add file ▸ Upload files**.
4. Glissez le `book.json` téléchargé (il remplace l'ancien), puis cliquez sur **Commit changes**.
5. Une à deux minutes plus tard, le site affiche la nouvelle version. Les visiteurs la voient en rechargeant la page.

---

## À savoir

- **Tout ce qui est dans le livre devient public**, y compris les photos que vous y importez. Le dépôt GitHub est public lui aussi : on peut voir les fichiers, mais personne d'autre que vous ne peut les modifier.
- Vos modifications sont enregistrées **dans le navigateur où vous éditez**. Éditez toujours au même endroit (même navigateur, même façon d'ouvrir le livre) et gardez une copie avec **Projet ▸ Exporter le projet**.
- Si un jour les fichiers du livre lui-même changent (dossiers `css` ou `js`, `index.html`), renvoyez-les sur GitHub de la même façon.
