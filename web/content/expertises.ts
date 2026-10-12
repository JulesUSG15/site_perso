export interface Expertise {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
}

// Quatre piliers. Ils décrivent ce que je sais faire, pas ce que j'ai
// fait — le parcours et les réalisations s'en chargent.
export const expertises: Expertise[] = [
  {
    id: "direction",
    title: "Direction & développement d'entreprise",
    summary:
      "Diriger une société de services : cadrer une trajectoire, structurer une équipe, tenir les engagements.",
    bullets: [
      "Cadrage stratégique et arbitrages de priorité",
      "Gouvernance, comitologie et suivi de la performance",
      "Structuration de l'offre et positionnement",
    ],
  },
  {
    id: "management",
    title: "Management & pilotage de projet",
    summary:
      "Coordonner des équipes et des livraisons complexes : rythme, priorités, qualité, engagement tenu.",
    bullets: [
      "Chefferie de projet du cadrage à la mise en production",
      "Animation transversale entre équipes techniques et décisionnelles",
      "Arbitrages coût / valeur / risque en cours de projet",
    ],
  },
  {
    id: "commercial",
    title: "Développement commercial & relation client",
    summary:
      "Transformer un besoin flou en engagement clair et tenable, du premier échange au suivi post-livraison.",
    bullets: [
      "Prospection multicanale, qualification et avant-vente",
      "Propositions, négociation et contractualisation",
      "Fidélisation et développement de comptes",
    ],
  },
  {
    id: "ia",
    title: "Expertise IA générative, RAG & data",
    summary:
      "Concevoir des solutions IA qui tiennent en production : traçables, évaluées, alignées sur un usage métier.",
    bullets: [
      "Architectures RAG métier, agents LLM, chaînes OCR + LLM",
      "Deep learning appliqué (vision, NLP) et fine-tuning ciblé",
      "Mise en production : APIs, sécurité, monitoring, adoption",
    ],
  },
];
