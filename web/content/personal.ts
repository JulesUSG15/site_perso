export const personal = {
  name: "Jules Ginhac",
  currentRole: "Président cofondateur",
  currentCompany: "Apogée Consult",
  alternateName: "Ginhac Jules",
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
    aposign: "https://aposign.fr",
    cofounder: "https://ponton-mathi.eu",
  },
  // Fiches Wikidata : elles relient les trois entités dans les graphes de
  // connaissances (sameAs dans le JSON-LD, liste d'identifiants dans llms.txt).
  wikidata: {
    person: "https://www.wikidata.org/wiki/Q141603611",
    company: "https://www.wikidata.org/wiki/Q139770210",
    cofounder: "https://www.wikidata.org/wiki/Q139770179",
  },
  cofounder: {
    name: "Mathieu Ponton",
    role: "Cofondateur & ingénieur logiciel",
  },
} as const;

export type PersonalInfo = typeof personal;
