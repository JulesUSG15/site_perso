export interface Project {
  id: string;
  title: string;
  organisation: string;
  period: string;
  problem: string;
  role: string;
  solution: string;
  outcomes: string[];
  stack: string[];
}

// Trois cas concrets issus des expériences. Vicinity, plus détaillé,
// figure en tête. Rien n'est extrapolé au-delà du brief.
export const projects: Project[] = [
  {
    id: "vicinity",
    title: "Une plateforme interne pour fluidifier commerce et recrutement",
    organisation: "Vicinity",
    period: "Mai → août 2026",
    problem:
      "Les fiches papier d'entretien et de prospection créaient des ruptures d'information : ressaisies manuelles, données perdues, temps commercial et RH consommé par la logistique.",
    role: "Seul développeur du projet, en poste d'ingénieur d'affaires : j'ai cadré le besoin, conçu la plateforme, développé la solution et accompagné les équipes lors du passage en production.",
    solution:
      "Chaîne OCR + LLM qui transforme les fiches en données structurées, avec normalisation métier et validation humaine. Intégration bidirectionnelle avec BoondManager (API + OAuth 2.0). Trois assistants RAG spécialisés — droit du travail, communication, prospection — affichant systématiquement leurs sources. Automatisation par règles métier pour les marges et le traitement de la TVA. Gestion des comptes et des habilitations côté backend.",
    outcomes: [
      "La saisie d'une fiche passe d'environ cinq minutes à moins d'une minute.",
      "La plateforme est en production depuis fin juillet 2026 et utilisée quotidiennement par les équipes.",
      "Dix collaborateurs ont été formés à l'IA générative — session de deux heures et démonstrations hebdomadaires.",
      "Les trois assistants documentaires sont ouverts avec affichage systématique des sources.",
    ],
    stack: ["Python", "OCR", "LLM", "RAG", "BoondManager API", "OAuth 2.0"],
  },
  {
    id: "atol-cd",
    title: "Recherche documentaire augmentée par l'IA sur une GED",
    organisation: "Atol CD / AmeXio Group",
    period: "Sept. 2024 → janv. 2025",
    problem:
      "Rendre exploitable une base documentaire volumineuse via la recherche en langage naturel, tout en garantissant confidentialité, traçabilité et pertinence dans un logiciel de gestion électronique de documents existant.",
    role: "Ingénieur IA générative au sein de l'équipe R&D — contribution à un projet collectif d'intégration IA.",
    solution:
      "Workflow RAG pour la recherche et les réponses contextuelles avec sources. Chatbot exploitant des modèles open source (Llama, Mistral). Génération de résumés, étiquetage documentaire et évaluation de la qualité des réponses. Exploration comparative RAG vs. fine-tuning sur un corpus spécialisé.",
    outcomes: [
      "Un démonstrateur RAG intégré au logiciel de GED de l'éditeur.",
      "Une comparaison structurée RAG / fine-tuning documentée pour l'équipe.",
      "Optimisations GPU / VRAM et intégration continue mises en place.",
    ],
    stack: ["Python", "LangChain", "Llama", "Mistral", "GPU", "CI/CD"],
  },
  {
    id: "byome",
    title: "Analyse d'images de bandelettes de test par deep learning",
    organisation: "BYOME LABS",
    period: "Juin → juillet 2024",
    problem:
      "Extraire une information colorimétrique fiable à partir d'images de bandelettes, malgré les variations d'éclairage et de balance des blancs.",
    role: "Développement IA : conception et entraînement des modèles en Python.",
    solution:
      "Deux réseaux de neurones convolutifs enchaînés — le premier normalise l'image et la balance des blancs, le second prédit l'intensité de rouge des tests.",
    outcomes: [
      "Pipeline de vision par ordinateur fonctionnel de bout en bout.",
      "Preuve de faisabilité sur un cas concret au-delà du périmètre IA générative.",
    ],
    stack: ["Python", "CNN", "OpenCV"],
  },
];
