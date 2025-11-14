# Portfolio - Jules Ginhac

Site web personnel moderne développé avec React, TypeScript et Vite.

## 🚀 Technologies

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool moderne
- **Framer Motion** - Animations fluides
- **React Router** - Navigation
- **CSS Modules** - Styles modulaires

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🎨 Fonctionnalités

- ✨ Design moderne et responsive
- 🌙 Mode sombre/clair
- 🎭 Animations fluides avec Framer Motion
- 📱 Optimisé mobile
- ⚡ Performance optimale avec Vite
- 🔍 SEO friendly
- ♿ Accessible

## 📁 Structure du projet

```
src/
├── components/       # Composants réutilisables
│   ├── Layout/      # Header, Footer, Layout
│   ├── UI/          # Composants UI de base
│   ├── Portfolio/   # Composants portfolio
│   ├── Skills/      # Composants compétences
│   ├── Education/   # Composants éducation
│   ├── Experience/  # Composants expérience
│   ├── Team/        # Composants équipe
│   └── Contact/     # Composants contact
├── contexts/        # Contextes React (Theme)
├── data/           # Données (projets, infos personnelles, etc.)
├── pages/          # Pages principales
└── App.tsx         # Composant principal
```

## 🎯 Pages

- **/** - Page d'accueil avec présentation et projets en vedette
- **/about** - À propos, compétences, formation et expérience
- **/portfolio** - Tous les projets avec filtres
- **/portfolio/:id** - Détail d'un projet
- **/contact** - Informations de contact

## 🛠️ Développement

Le projet utilise Vite pour un développement rapide avec HMR (Hot Module Replacement).

### Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée un build de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 📝 Mise à jour des données

Les données sont centralisées dans le dossier `src/data/` :

- `personalInfo.ts` - Informations personnelles
- `projects.ts` - Liste des projets
- `skills.ts` - Compétences
- `education.ts` - Formation
- `experience.ts` - Expérience professionnelle
- `team.ts` - Membres de l'équipe

## 🎨 Personnalisation

Le design system est défini dans `src/index.css` avec des variables CSS pour :
- Couleurs (light/dark mode)
- Espacements
- Typographie
- Ombres
- Transitions

## 📄 Licence

Ce projet est personnel.
