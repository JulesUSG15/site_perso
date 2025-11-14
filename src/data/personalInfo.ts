export interface PersonalInfo {
  name: string
  title: string
  age: number
  birthday: string
  location: string
  email: string
  emailPersonal: string
  phone: string
  website: string
  github: string
  linkedin: string
  description: string
  longDescription: string
  currentYear: string
  degree: string
  school: string
  freelance: boolean
}

export const personalInfo: PersonalInfo = {
  name: "Jules Ginhac",
  title: "Ingénieur en Intelligence Artificielle",
  age: 22,
  birthday: "28 octobre 2003",
  location: "Villeurbanne, France",
  email: "jules.ginhac@etu.univ-lyon.fr",
  emailPersonal: "jules@ginhac.com",
  phone: "+33781912526",
  website: "jules.ginhac.com",
  github: "https://github.com/JulesUSG15",
  linkedin: "https://www.linkedin.com/in/jules-ginhac-2b8a65236/",
  description: "Ingénieur en Intelligence Artificielle à Polytech Lyon, Président d'Apogée Consult SAS",
  longDescription: "Ingénieur en Intelligence Artificielle en 5ème année à Polytech Lyon, je suis spécialisé en développement d'IA générative avec RAG (Retrieval-Augmented Generation) et en IA prédictive. En tant que Président d'Apogée Consult SAS, je combine expertise technique en IA, chefferie de projet et management pour développer des solutions innovantes et diriger des équipes vers l'excellence.",
  currentYear: "2024-2025",
  degree: "Diplôme d'ingénieur en cours",
  school: "Polytech Lyon",
  freelance: true
}

