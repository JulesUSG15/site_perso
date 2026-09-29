export interface TeamMember {
  name: string
  role: string
  description: string
  projects: string[]
  website?: string
  github?: string
  linkedin?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Maxime Antoine',
    role: 'Étudiant en ingénierie informatique à Polytech Lyon',
    description: 'Impliqué dans les projets suivants : Polycars, Automate cellulaire avec DAC, Processeur et Optimisation de parcours de véhicules.',
    projects: ['Polycars', 'DAC', 'Processor', 'Vehicle Optimization'],
    website: 'https://www.maxime-antoine.fr',
    github: 'https://github.com/maxime-antoine-dev',
    linkedin: 'https://www.linkedin.com/in/maxime-antoine-6a3977183/'
  },
  {
    name: 'Mathieu Ponton',
    role: 'Étudiant en ingénierie informatique à Polytech Lyon',
    description: 'Impliqué dans les projets suivants : Misomania, Polycars, BDanse et Optimisation de parcours de véhicules.',
    projects: ['Misomania', 'Polycars', 'BDanse', 'Vehicle Optimization'],
    website: 'https://ponton-mathi.eu',
    github: 'https://github.com/Claquettes',
    linkedin: 'https://www.linkedin.com/in/mathieu-ponton/'
  },
  {
    name: 'Nicolas Gallet',
    role: 'Étudiant en ingénierie informatique à Polytech Lyon',
    description: 'Impliqué dans les projets suivants : Polycars, Automate cellulaire avec DAC et Processeur.',
    projects: ['Polycars', 'DAC', 'Processor'],
    github: 'https://github.com/NicoutG',
    linkedin: 'https://www.linkedin.com/in/nicolas-gallet-a54534236/'
  },
  {
    name: 'Dorian Tonnis',
    role: 'Étudiant en ingénierie informatique à Polytech Lyon',
    description: 'Impliqué dans les projets suivants : IsiWeb4Shop et Processeur.',
    projects: ['IsiWeb', 'Processor'],
    website: 'https://dorian-tonnis.fr',
    github: 'https://github.com/Dorian-T',
    linkedin: 'https://www.linkedin.com/in/dorian-tonnis/'
  },
  {
    name: 'Antonin Sylvestre',
    role: 'Étudiant en ingénierie informatique à Polytech Lyon',
    description: 'Impliqué dans le projet suivant : Compilateur.',
    projects: ['Compiler'],
    github: 'https://github.com/antonin-slv',
    linkedin: 'https://www.linkedin.com/in/antonin-sylvestre/'
  },
  {
    name: 'Pablo Verchère',
    role: 'Étudiant en Ingénierie Mathématique et Data Science à Polytech Clermont',
    description: 'Impliqué dans le projet suivant : Optimisation de parcours de véhicules.',
    projects: ['Vehicle Optimization'],
    github: 'https://github.com/PabloVerchere',
    linkedin: 'https://www.linkedin.com/in/pablo-verchere/'
  }
]

