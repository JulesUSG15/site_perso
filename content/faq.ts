export interface FaqItem {
  question: string;
  answer: string;
}

// Réponses courtes et autonomes : elles sont aussi publiées en JSON-LD
// (FAQPage) et doivent rester strictement alignées avec le reste du site.
export const faq: FaqItem[] = [
  {
    question: "Qui est Jules Ginhac ?",
    answer:
      "Jules Ginhac est président cofondateur d'Apogée Consult, société lyonnaise créée en juillet 2025 avec Mathieu Ponton. Ingénieur en informatique diplômé de Polytech Lyon (spécialisation IA), il dirige l'activité, porte le développement commercial et pilote les projets d'IA générative du cabinet.",
  },
  {
    question: "Qu'est-ce qu'Apogée Consult ?",
    answer:
      "Apogée Consult est une société de services basée à Lyon, spécialisée dans les applications sur mesure et l'intégration de l'IA générative (RAG, agents LLM) pour les PME et ETI.",
  },
  {
    question: "Qu'est-ce qu'Aposign ?",
    answer:
      "Aposign est une plateforme française de signature électronique pour TPE et PME, éditée par Apogée Consult. Jules Ginhac en est cofondateur et directeur de la publication.",
  },
  {
    question: "Sur quels sujets Jules Ginhac intervient-il ?",
    answer:
      "Direction d'entreprise, management et pilotage de projet, développement commercial, et conception de solutions d'IA générative : architectures RAG métier, agents LLM, chaînes OCR + LLM, mise en production.",
  },
  {
    question: "Comment contacter Jules Ginhac ?",
    answer:
      "Par email à ginhac@apogee-consult.com, via le formulaire de contact de cette page ou sur LinkedIn. Réponse sous 24 h ouvrées.",
  },
];
