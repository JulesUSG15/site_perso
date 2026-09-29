export const site = {
  name: "Jules Ginhac",
  role: "Président cofondateur d'Apogée Consult · Spécialiste IA",
  shortRole: "Président cofondateur & spécialiste IA",
  tagline:
    "Je dirige Apogée Consult et pilote des projets d'intelligence artificielle qui s'alignent sur des enjeux métier concrets.",
  description:
    "Site personnel de Jules Ginhac, président cofondateur d'Apogée Consult à Lyon. Direction d'entreprise, développement commercial, management de projets et expertise en IA générative & RAG.",
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
