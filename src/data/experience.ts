export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
  location?: string
}

export const experiences: Experience[] = [
  {
    title: 'Président',
    company: 'Apogée Consult SAS',
    period: '2024 - Aujourd\'hui',
    description: [
      'Apogée Consult SAS est une société de services spécialisée en développement informatique et Intelligence Artificielle.',
      'En tant que Président, je dirige les opérations, développe la stratégie d\'entreprise et supervise les projets de développement et d\'IA.'
    ],
    location: 'Lyon, France'
  },
  {
    title: 'Responsable Communication',
    company: 'Poly Engineering Consulting',
    period: '2023 - Aujourd\'hui',
    description: [
      'Poly Engineering Consulting est la junior entreprise de l\'Université Lyon 1 et de l\'école d\'ingénieurs Polytech Lyon.',
      'Je suis en charge de la communication interne et externe, ainsi que des événements.'
    ],
    location: 'Lyon, France'
  },
  {
    title: 'Tuteur en Mathématiques',
    company: 'Polytech Lyon',
    period: '2022 - 2023',
    description: [
      'Aide en mathématiques pour les étudiants de 1ère année en classe préparatoire à Polytech Lyon.'
    ],
    location: 'Villeurbanne, France'
  },
  {
    title: 'Employé de service de restauration',
    company: 'Campanile de Beaune',
    period: 'Juillet 2022 et 2023',
    description: [
      'Serveur au Campanile de Beaune pendant 1 mois en juillet 2022 et 2023'
    ],
    location: 'Beaune, France'
  }
]

