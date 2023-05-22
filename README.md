# Kasa

## Technologies

- JS
- CSS
- React

## Description

[Projet 6](https://openclassrooms.com/fr/paths/717/projects/1247/assignment/) réalisé dans le cadre du programme de formation Développeur Front-end JavaScript React chez OpenClassrooms.

> Créez une application web de location immobilière avec React

> ### Contexte :

Kasa est une entreprise spécialisée dans la location d’appartements entre particuliers depuis près de 10 ans.

Le site Kasa a été codé il y a près de 10 ans et l'entreprise souhaite faire une refonte totale de son site pour passer à une stack complète en JavaScript avec NodeJS côté Back-end et React côté Front-end.

Mon rôle a été de développer la partie front-end du site web, en utilisant les composants React, les routes React Router tout en respectant les maquettes Figma.

Lien des maquettes : https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?type=design&node-id=0-1&t=3oNtiCrfbaa6HVOq-0

> ### Compétences évaluées :
>
> - Configurer la navigation entre les pages de l'application avec React Router
> - Initialiser une application avec Create React App
> - Développer des éléments de l'interface d'un site web grâce à des composants React

## Outils et contraintes techniques :

### 🛠️ Outils standards:

- Create React App;
- React Router;
- L’utilisation de Sass est optionnelle. CSS est à utiliser par défaut;
- Pas de librairie React externe.

### ❗Contraintes techniques

- React :
  - Découpage en composants modulaires et réutilisables;
  - Un composant par fichier;
  - Structure logique des différents fichiers;
  - Utilisation des props entre les composants;
  - Utilisation du state dans les composants quand c'est nécessaire;
  - Gestion des événements;
  - Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.
  - Il est également recommandé, mais pas imposé, d’utiliser des composants fonctionnels plutôt que des composants classes.
- React Router :
  - Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement;
  - Il existe une page par route;
  - La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
  - La logique du routeur est réunie dans un seul fichier.
- Général : Le code ne doit pas produire d'erreur ou de warning dans la console.

### Contraintes fonctionnelles :

- Pour le défilement des photos dans la galerie (composant Gallery) :
  - Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image;
  - Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image.;
  - S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas;
  - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
- Collapse :
  - Par défaut, les Collapses sont fermés à l'initialisation de la page;
  - Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer;
  - Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

## Installation :

1. Cloner le repository:

- `git clone https://github.com/AbreuGeorgie/kasa`

2. Installer toutes les dépendances pour le front-end:

- `npm install` ou `yarn`

3. Lancer le front-end:

- `npm start` ou `yarn start`

Le front-end sera lancé à l'URL:
`http://localhost:3000/Kasa/`.

## Développé avec :

- [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte
- [React 18](https://react.dev/) - Bibliothèque JavaScript libre développée par Facebook
- [Create React App](https://create-react-app.dev/) - Boîte à outils créée par Facebook, qui est la référence pour initier un projet React
- [React Router V6](https://reactrouter.com/) - Bibliothèque de routage pour React
- [GitHub](https://github.com/) - Outil de gestion de versions

## Tests fonctionnels

- Tests à réaliser en version desktop et version mobile :
  - [x] cliquer sur "A propos", la page à propos doit s'afficher et le lien "A propos" doit être souligné tant qu'on est sur la page à propos;
    - [x] cliquer sur les titres "Fiabilité", "Respect", "Service" et "Sécurité", les collapses doivent se fermer. Une fois fermé si on clique dessus, les collapses doivent se réouvrir.
  - [x] cliquer sur "Accueil", le lien "Accueil" doit être souligné tant qu'on est sur la page d'accueil;
  - [x] cliquer sur l'image d'un appartement, la page de description de l'appartement cliqué doit s'ouvrir;
    - [x] Si le carousel d'image contient plus d'une photo, des fleches gauche et droite doivent s'afficher ainsi que le numéro de l'image:
      - [x] cliquer sur la flèche de gauche pour afficher la précédente, quand on arrive sur la première image, la dernière doit apparaître lors du clique.
      - [x] cliquer sur la flèche de droite pour afficher la suivante quand on arrive sur la dernière image, la première doit apparaître lors du clique.
    - [x] cliquer sur l'image d'un appartement, la page de description de l'appartement cliqué doit s'ouvrir;
    - [x] cliquer sur les titres "Description" et "Equipement", les collapses doivent se fermer. Une fois fermé si on clique dessus, les collapses doivent se réouvrir.

## Auteur :

**Georgie Abreu** : [**GitHub**](https://github.com/AbreuGeorgie/)
