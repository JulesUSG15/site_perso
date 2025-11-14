export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: number // 0-100
}

export const skills: SkillCategory[] = [
  {
    name: 'Programmation Orientée Objet',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 80 },
      { name: 'Java', level: 80 },
      { name: 'C#', level: 60 }
    ]
  },
  {
    name: 'Programmation Web',
    skills: [
      { name: 'PHP', level: 80 },
      { name: 'JavaScript', level: 70 },
      { name: 'TypeScript', level: 70 },
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 90 }
    ]
  },
  {
    name: 'Data Science & IA',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Jupyter Notebook', level: 85 },
      { name: 'Machine Learning', level: 75 },
      { name: 'Deep Learning', level: 70 },
      { name: 'SQL', level: 75 }
    ]
  },
  {
    name: 'Frameworks & Outils',
    skills: [
      { name: 'React', level: 75 },
      { name: 'Symfony', level: 70 },
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 60 }
    ]
  }
]

