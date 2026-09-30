import { faq } from "@/content/faq";
import { personal } from "@/content/personal";
import { linkifyMarkdown } from "@/lib/entities";
import { site } from "@/content/site";

// Fichier d'orientation pour les moteurs IA (convention llms.txt).
// Généré à partir du contenu du site pour rester cohérent avec lui.
export const dynamic = "force-static";

export function GET(): Response {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Liens canoniques",
    "",
    `- [Site personnel](${site.url}) : parcours, expertises, réalisations, contact`,
    `- [Apogée Consult](${personal.links.company}) : société de services (applications sur mesure, IA générative) dont ${site.name} est président cofondateur`,
    `- [Fiche sur Apogée Consult](${personal.links.profile})`,
    `- [Aposign](${personal.links.aposign}) : plateforme de signature électronique éditée par Apogée Consult`,
    `- [${personal.cofounder.name}](${personal.links.cofounder}) : cofondateur d'Apogée Consult`,
    `- [LinkedIn](${personal.links.linkedin})`,
    `- [GitHub](${personal.links.github})`,
    "",
    "## Identifiants Wikidata",
    "",
    `- ${site.name} : ${personal.wikidata.person}`,
    `- ${personal.currentCompany} : ${personal.wikidata.company}`,
    `- ${personal.cofounder.name} : ${personal.wikidata.cofounder}`,
    "",
    "## Questions fréquentes",
    "",
    ...faq.flatMap((item) => [`### ${item.question}`, "", linkifyMarkdown(item.answer), ""]),
    `Dernière mise à jour : ${site.lastUpdated}`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
