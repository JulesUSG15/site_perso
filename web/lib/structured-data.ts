import { faq } from "@/content/faq";
import { personal } from "@/content/personal";
import { site } from "@/content/site";

const ids = {
  person: `${site.url}/#person`,
  website: `${site.url}/#website`,
  page: `${site.url}/#profilepage`,
  company: `${personal.links.company}/#organization`,
  aposign: `${personal.links.aposign}/#organization`,
  cofounder: `${personal.links.cofounder}/#person`,
};

// Graphe schema.org unique, rendu côté serveur (visible des crawlers qui
// n'exécutent pas de JavaScript). Les @id relient les trois sites du réseau.
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": ids.person,
      name: personal.name,
      givenName: "Jules",
      familyName: "Ginhac",
      alternateName: personal.alternateName,
      url: site.url,
      image: `${site.url}/media/portrait.jpg`,
      description: site.description,
      jobTitle: personal.currentRole,
      worksFor: { "@id": ids.company },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Polytech Lyon",
        url: "https://polytech.univ-lyon1.fr",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressCountry: "FR",
      },
      email: personal.email,
      colleague: { "@id": ids.cofounder },
      mainEntityOfPage: { "@id": ids.page },
      sameAs: [
        personal.wikidata.person,
        personal.links.linkedin,
        personal.links.github,
        personal.links.profile,
      ],
      knowsAbout: [
        "Direction d'entreprise",
        "Management de projet",
        "Développement commercial",
        "IA générative",
        "RAG",
        "Deep Learning",
      ],
    },
    {
      "@type": "Organization",
      "@id": ids.company,
      name: personal.currentCompany,
      url: personal.links.company,
      sameAs: [personal.wikidata.company],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressCountry: "FR",
      },
      founder: [{ "@id": ids.person }, { "@id": ids.cofounder }],
      subOrganization: { "@id": ids.aposign },
    },
    {
      "@type": "Organization",
      "@id": ids.aposign,
      name: "Aposign",
      url: personal.links.aposign,
      parentOrganization: { "@id": ids.company },
      founder: [{ "@id": ids.person }, { "@id": ids.cofounder }],
    },
    {
      "@type": "Person",
      "@id": ids.cofounder,
      name: personal.cofounder.name,
      url: personal.links.cofounder,
      jobTitle: personal.cofounder.role,
      sameAs: [personal.wikidata.cofounder],
      worksFor: { "@id": ids.company },
      colleague: { "@id": ids.person },
    },
    {
      "@type": "WebSite",
      "@id": ids.website,
      url: site.url,
      name: site.name,
      inLanguage: "fr-FR",
      publisher: { "@id": ids.person },
    },
    {
      "@type": "ProfilePage",
      "@id": ids.page,
      url: site.url,
      name: `${site.name} — ${site.shortRole}`,
      inLanguage: "fr-FR",
      dateModified: site.lastUpdated,
      isPartOf: { "@id": ids.website },
      mainEntity: { "@id": ids.person },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      inLanguage: "fr-FR",
      isPartOf: { "@id": ids.website },
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

// "<" échappé pour qu'aucune valeur ne puisse fermer la balise <script>.
export const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);
