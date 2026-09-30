export const site = {
  name: "Jules Ginhac",
  role: "Président cofondateur d'Apogée Consult · Spécialiste IA",
  shortRole: "Président cofondateur & spécialiste IA",
  tagline:
    "Je dirige Apogée Consult et pilote des projets d'intelligence artificielle qui s'alignent sur des enjeux métier concrets.",
  description:
    "Jules Ginhac, président cofondateur d'Apogée Consult à Lyon : direction d'entreprise, développement commercial, pilotage de projets et IA générative (RAG).",
  // Date de dernière mise à jour du contenu (sitemap + JSON-LD). À changer
  // à la main quand le contenu évolue, pas à chaque build.
  lastUpdated: "2026-09-30",
  city: "Lyon, France",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jules.ginhac.com",
  navigation: [
    { label: "Expertises", href: "#expertises" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Parcours", href: "#parcours" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type SiteConfig = typeof site;
