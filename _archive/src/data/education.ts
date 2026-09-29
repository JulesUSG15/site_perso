export interface Education {
  school: string
  degree: string
  period: string
  description: string[]
  location?: string
}

export const education: Education[] = [
  {
    school: 'Polytech Lyon',
    degree: 'Diplôme d\'ingénieur en Informatique',
    period: '2021 - Aujourd\'hui (5ème année)',
    description: [
      'Spécialité Informatique (2023 - aujourd\'hui)',
      '• Rang moyen sur la 3ème et 4ème année : 4/40',
      '• Spécialisation en Intelligence Artificielle, Data Science et développement logiciel',
      '• Formation approfondie en IA générative, RAG, machine learning et deep learning',
      '• Programmation : Python, Java, C++, PHP, JavaScript, TypeScript',
      '• Frameworks : React, Symfony, Laravel, PyTorch, TensorFlow, LangChain',
      '• Bases de données : SQL, PostgreSQL, MongoDB',
      '',
      'Prépa intégrée (2021 - 2023)',
      '• Spécialité Mathématiques et Informatique',
      '• Rang moyen national : 414/1870'
    ],
    location: 'Villeurbanne, France'
  },
  {
    school: 'Lycée Gustave Eiffel, Dijon',
    degree: 'Baccalauréat Général - Mention Bien',
    period: '2020',
    description: [
      'Spécialités : Mathématiques, Physique-Chimie et Sciences de l\'Ingénieur',
      'Classe européenne avec option Mathématiques en anglais (niveau B2)',
      'Option Mathématiques Expertes',
      'Brevet d\'Initiation Aéronautique avec mention'
    ],
    location: 'Dijon, France'
  }
]

