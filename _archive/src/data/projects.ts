export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  category: 'ai' | 'web' | 'app'
  images: string[]
  videos?: string[]
  year: string
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 'misomania',
    title: 'Miso Mania',
    description: 'Jeu de plateforme 2D avec éditeur de niveaux et système de partage',
    longDescription: 'Miso Mania est un jeu de plateforme 2D qui combine les mécaniques de plateforme et de die and retry. Le jeu inclut un éditeur de niveaux, un système de partage de niveaux et un classement. Développé avec la bibliothèque SDL2 et C++.',
    technologies: ['C++', 'SDL2'],
    category: 'app',
    images: ['/assets/img/miso1.gif', '/assets/img/miso2.gif', '/assets/img/miso3.gif', '/assets/img/miso4.png', '/assets/img/miso5.png', '/assets/img/miso6.png'],
    year: '2023'
  },
  {
    id: 'dac',
    title: 'Automate Cellulaire avec DAC',
    description: 'Simulation d\'automate cellulaire développé en Java',
    technologies: ['Java', 'DAC'],
    category: 'app',
    images: [],
    videos: ['/assets/img/majorite8.mp4'],
    year: '2023'
  },
  {
    id: 'gtsrb',
    title: 'Deep Learning sur le dataset GTSRB',
    description: 'Classification de panneaux de signalisation avec deep learning',
    technologies: ['Python', 'Jupyter Notebook', 'Deep Learning'],
    category: 'ai',
    images: ['/assets/img/GTSRB.png', '/assets/img/GTSRB2.png', '/assets/img/GTSRB3.png', '/assets/img/GTSRB4.png'],
    year: '2023'
  },
  {
    id: 'mnist',
    title: 'Deep Learning sur le dataset MNIST',
    description: 'Reconnaissance de chiffres manuscrits avec réseaux de neurones',
    technologies: ['Python', 'Jupyter Notebook', 'Deep Learning'],
    category: 'ai',
    images: ['/assets/img/MNIST.png', '/assets/img/MNIST1.png', '/assets/img/MNIST2.png', '/assets/img/MNIST3.png', '/assets/img/MNIST4.png'],
    year: '2023'
  },
  {
    id: 'polycars',
    title: 'Polycars',
    description: 'Application web de comparaison et de listing de voitures',
    technologies: ['PHP Symfony', 'React TypeScript', 'Python'],
    category: 'web',
    images: ['/assets/img/Polycars.png', '/assets/img/Polycars2.png', '/assets/img/Polycars3.png', '/assets/img/Polycars4.png', '/assets/img/Polycars5.png'],
    year: '2023'
  },
  {
    id: 'wine',
    title: 'Prédiction de Qualité de Vin',
    description: 'Analyse et prédiction de la qualité de vin avec machine learning',
    technologies: ['Python', 'Jupyter Notebook', 'Machine Learning'],
    category: 'ai',
    images: ['/assets/img/vin.jpg'],
    year: '2023'
  },
  {
    id: 'compiler',
    title: 'Compilateur',
    description: 'Développement d\'un compilateur en Java',
    technologies: ['Java'],
    category: 'app',
    images: ['/assets/img/compil.png'],
    year: '2023'
  },
  {
    id: 'isiweb',
    title: 'IsiWeb4Shop',
    description: 'Application e-commerce développée avec PHP et Twig',
    technologies: ['PHP', 'Twig', 'HTML', 'CSS'],
    category: 'web',
    images: ['/assets/img/IsiWEB1.png', '/assets/img/IsiWeb2.png', '/assets/img/IsiWeb3.png', '/assets/img/IsiWeb4.png'],
    year: '2023'
  },
  {
    id: 'processor',
    title: 'Processeur',
    description: 'Conception et simulation d\'un processeur',
    technologies: ['Python', 'Logisim'],
    category: 'app',
    images: ['/assets/img/Logisim.png'],
    year: '2023'
  },
  {
    id: 'persoweb',
    title: 'Site Web Personnel',
    description: 'Première version de mon site web personnel',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    category: 'web',
    images: ['/assets/img/persoweb1.png', '/assets/img/persoweb2.png', '/assets/img/persoweb3.png', '/assets/img/persoweb4.png'],
    year: '2023'
  },
  {
    id: 'vehicle-optimization',
    title: 'Optimisation de Parcours de Véhicules',
    description: 'Optimisation de routes pour véhicules avec algorithmes',
    technologies: ['Python'],
    category: 'ai',
    images: ['/assets/img/info.gif', '/assets/img/info4.png', '/assets/img/info41.png', '/assets/img/info411.png'],
    year: '2023'
  },
  {
    id: 'snake',
    title: 'Snake',
    description: 'Implémentation du jeu classique Snake en Java',
    technologies: ['Java'],
    category: 'app',
    images: ['/assets/img/snake.gif'],
    year: '2023'
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    description: 'Générateur et solveur de grilles Sudoku',
    technologies: ['C#'],
    category: 'app',
    images: ['/assets/img/Sudoku.gif'],
    year: '2023'
  },
  {
    id: '2048',
    title: '2048',
    description: 'Implémentation du jeu 2048',
    technologies: ['PHP', 'HTML', 'CSS'],
    category: 'web',
    images: ['/assets/img/Corner-Test.gif'],
    year: '2023'
  },
  {
    id: 'bdanse',
    title: 'BDanse',
    description: 'Application web pour la gestion de cours de danse',
    technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
    category: 'web',
    images: ['/assets/img/bdanse.png', '/assets/img/bdw1.png', '/assets/img/bdw2.png', '/assets/img/bdw3.png'],
    year: '2023'
  }
]

