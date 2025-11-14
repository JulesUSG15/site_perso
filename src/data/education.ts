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
    degree: 'Ingénieur en Informatique',
    period: '2023 - Aujourd\'hui',
    description: [
      'Mathématiques, Statistiques et Probabilités',
      'IA et Data Science : Jupyter Notebook avec Python',
      'Programmation orientée objet : Java et C++',
      'Programmation web : PHP (Symfony), JavaScript, React, C#, HTML et CSS',
      'Bases de données : SQL'
    ],
    location: 'Villeurbanne, France'
  },
  {
    school: 'Polytech Lyon',
    degree: 'Classe préparatoire intégrée (PEIP)',
    period: '2021 - 2023',
    description: [
      'Mathématiques et Informatique',
      'Classement national moyen : 414/1870'
    ],
    location: 'Villeurbanne, France'
  },
  {
    school: 'Lycée Gustave Eiffel, Dijon',
    degree: 'Baccalauréat Général Maths, Physique-Chimie, Mention Bien',
    period: '2018 - 2020',
    description: [
      'Spécialisation en Mathématiques, Physique-Chimie et Sciences de l\'Ingénieur',
      'Classe européenne avec option Mathématiques en anglais (niveau B2)',
      'Option Mathématiques Expertes',
      'Brevet d\'Initiation Aéronautique avec mention'
    ],
    location: 'Dijon, France'
  }
]

