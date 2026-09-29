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
      '',
      'Partie technique en IA',
      '• Développement de solutions d\'IA générative avec RAG, IA prédictive',
      '• Architecture de systèmes intelligents',
      '',
      'Partie commerciale',
      '• Développement client, prospection et négociation de contrats',
      '• Gestion de la relation client',
      '',
      'Chefferie de projet',
      '• Pilotage de projets de développement',
      '• Coordination des équipes techniques et suivi des livraisons',
      '',
      'Gestion financière',
      '• Suivi budgétaire, gestion de trésorerie',
      '• Prise de décisions stratégiques financières'
    ],
    location: 'Lyon, France'
  },
  {
    title: 'Président puis Secrétaire général, Chargé Business, Chargé communications',
    company: 'Poly Engineering Consulting (Polyenco)',
    period: 'Sept. 2023 - Aujourd\'hui',
    description: [
      'Poly Engineering Consulting (Polyenco) est la Junior-Initiative de l\'Université Claude Bernard Lyon 1 et de Polytech Lyon.',
      '',
      'Président (Févr. 2025 - Aujourd\'hui)',
      '• Pilotage stratégique et bon fonctionnement de la Junior',
      '• Représentation auprès de la direction de l\'école et du réseau des Junior-Entreprises',
      '• Management des différents pôles et prise de décisions clés',
      '• Gestion des partenariats et surveillance des indicateurs de performance',
      '',
      'Secrétaire général (Sept. 2024 - Févr. 2025)',
      '• Organisation et respect des règles de la Junior (Statuts, Règlement Intérieur)',
      '• Suivi administratif et rédaction des comptes rendus (CA, AG)',
      '• Gestion des démarches auprès de la Préfecture',
      '',
      'Chargé Business (Mars 2024 - Sept. 2024)',
      '• Relation client de la prospection à la fidélisation post-étude',
      '• Développement de l\'activité commerciale et prospection multi-canal',
      '• Rédaction des propositions commerciales et négociation des contrats',
      '',
      'Chargé communications (Sept. 2023 - Mars 2024)',
      '• Communication interne et externe de la Junior-Entreprise',
      '• Organisation d\'événements'
    ],
    location: 'Lyon, France'
  },
]

