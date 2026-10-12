export interface Experience {
  role: string;
  organisation: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
  collective?: string;
}

export const experiences: Experience[] = [
  {
    role: "Cofondateur & Président",
    organisation: "Apogée Consult",
    period: "Juillet 2025 → aujourd'hui",
    location: "Lyon",
    summary:
      "Société spécialisée dans les applications sur mesure et l'intégration de l'IA générative pour PME et ETI, cofondée avec Mathieu Ponton. Éditrice d'Aposign, plateforme de signature électronique pour TPE et PME.",
    highlights: [
      "Je dirige la société : stratégie, structuration, gouvernance et suivi de la performance.",
      "Je porte la stratégie commerciale : avant-vente, cadrage des besoins et contractualisation.",
      "Je pilote la stratégie produit, la chefferie de projet et la conception des architectures IA (RAG, agents LLM).",
      "J'articule les objectifs métier, les choix techniques et la réalisation des projets.",
    ],
    collective:
      "Réalisations livrées par le cabinet à ce jour : plateforme RAG documentaire pour un éditeur SaaS B2B, plateforme RAG métier et BI pour un groupe industriel, applications mobiles et portail client automatisé.",
  },
  {
    role: "Ingénieur d'affaires & Responsable du développement des outils IA",
    organisation: "Vicinity",
    period: "Mars 2026 → août 2026",
    location: "Stage de fin d'études",
    summary:
      "Double mission : développement commercial / recrutement d'un côté, conception et livraison d'une plateforme IA interne de l'autre.",
    highlights: [
      "Prospection, qualification des besoins clients et conduite de 8 à 10 entretiens candidats par semaine.",
      "Identification des ruptures d'information dans les processus commerciaux et de recrutement.",
      "Seul développeur d'une plateforme IA interne (mai → août 2026), en production depuis fin juillet.",
      "Chaîne OCR + LLM qui transforme les fiches papier en données structurées, avec normalisation métier et validation humaine — la saisie passe d'environ 5 minutes à moins d'une minute.",
      "Intégration bidirectionnelle avec BoondManager (API + OAuth 2.0) et trois assistants RAG spécialisés (droit du travail, communication, prospection) avec affichage systématique des sources.",
      "Automatisation par règles métier pour les marges et le traitement de la TVA, gestion des comptes et des habilitations côté backend.",
      "Formation de 10 collaborateurs à l'IA générative, démonstrations hebdomadaires et accompagnement du passage en production.",
    ],
  },
  {
    role: "Président, puis membres successifs du bureau",
    organisation: "Polyenco — Junior-Entreprise de Polytech Lyon",
    period: "Septembre 2023 → mars 2026",
    location: "Lyon",
    summary:
      "Progression vers la direction d'une structure : communication, business, gouvernance, puis présidence.",
    highlights: [
      "Président (févr. 2025 → mars 2026) : pilotage stratégique, management des pôles, partenariats, représentation auprès de l'école et du réseau des Junior-Entreprises, suivi des KPIs.",
      "Secrétaire général (sept. 2024 → févr. 2025) : gouvernance, respect des statuts, coordination bureau / conseil d'administration, démarches administratives.",
      "Chargé Business (mars → sept. 2024) : prospection multicanale, propositions commerciales, négociation, fidélisation post-mission.",
      "Chargé communications (sept. 2023 → mars 2024).",
    ],
  },
  {
    role: "Ingénieur IA générative",
    organisation: "Atol CD / AmeXio Group",
    period: "Septembre 2024 → janvier 2025",
    location: "Stage",
    summary:
      "Intégration de l'IA générative dans une solution de gestion électronique de documents.",
    highlights: [
      "Contribution à un projet R&D collectif : mise en place d'un workflow RAG pour la recherche en langage naturel et les réponses contextuelles avec sources.",
      "Chatbot exploitant des modèles open source (Llama, Mistral), génération de résumés et étiquetage documentaire.",
      "Comparaison RAG / fine-tuning sur corpus spécialisé, évaluation de la qualité des réponses.",
      "Optimisation GPU / VRAM, automatisation et intégration continue. Enjeux : confidentialité, traçabilité, pertinence, intégration au logiciel existant.",
    ],
  },
  {
    role: "Développement en intelligence artificielle",
    organisation: "BYOME LABS",
    period: "Juin 2024 → juillet 2024",
    summary:
      "Vision par ordinateur appliquée à l'analyse d'images de bandelettes de test.",
    highlights: [
      "Application Python d'analyse d'images de bandelettes.",
      "Premier CNN pour la normalisation d'image et de la balance des blancs.",
      "Second CNN pour prédire l'intensité de rouge des tests.",
    ],
  },
];

export interface EducationLine {
  degree: string;
  school: string;
  period: string;
  detail?: string;
  extras?: string[];
}

export const education: EducationLine = {
  degree: "Diplôme d'ingénieur en informatique",
  school: "Polytech Lyon",
  period: "2021 → septembre 2026",
  detail:
    "Spécialisation IA, data science et développement logiciel. Tuteur en mathématiques à Polytech Lyon (2022-2023).",
  extras: ["Certification The Mantu Manager Program — Business Acquisition"],
};
