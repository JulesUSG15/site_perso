import { personal } from "@/content/personal";

// Entités du réseau (Apogée Consult, Aposign, Mathieu Ponton) : chaque
// mention dans un texte du site devient un lien vers leur site canonique.
export const entityLinks: Record<string, string> = {
  "Apogée Consult": personal.links.company,
  Aposign: personal.links.aposign,
  [personal.cofounder.name]: personal.links.cofounder,
};

export const entityPattern = new RegExp(
  `(${Object.keys(entityLinks).join("|")})`,
  "g",
);

// Même principe pour les sorties Markdown (llms.txt).
export function linkifyMarkdown(text: string): string {
  return text.replace(entityPattern, (name) => `[${name}](${entityLinks[name]})`);
}
