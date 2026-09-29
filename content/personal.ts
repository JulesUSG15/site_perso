export const personal = {
  name: "Jules Ginhac",
  currentRole: "Président cofondateur",
  currentCompany: "Apogée Consult",
  positioning:
    "Président cofondateur d'Apogée Consult & spécialiste IA",
  intro:
    "Je dirige Apogée Consult et accompagne les entreprises dans le cadrage et la réalisation de leurs projets numériques et d'intelligence artificielle. Mon rôle associe développement commercial, management, pilotage de projets et conception de solutions IA intégrées aux usages métier.",
  quote:
    "Une IA n'a de valeur que si elle s'aligne sur un cas d'usage métier réel.",
  location: "Lyon, France",
  // Adresse professionnelle communiquée sur LinkedIn / Apogée Consult.
  email: "ginhac@apogee-consult.com",
  links: {
    linkedin: "https://www.linkedin.com/in/jules-ginhac/",
    github: "https://github.com/JulesUSG15",
    company: "https://www.apogee-consult.com",
    profile: "https://www.apogee-consult.com/a-propos/jules-ginhac",
  },
} as const;

export type PersonalInfo = typeof personal;
