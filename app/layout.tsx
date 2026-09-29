import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { site } from "@/content/site";
import { personal } from "@/content/personal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.shortRole}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Jules Ginhac",
    "Apogée Consult",
    "Président cofondateur",
    "Direction d'entreprise",
    "Développement commercial",
    "Management de projet",
    "Ingénieur IA",
    "IA générative",
    "RAG",
    "Lyon",
    "Consulting IA",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.shortRole}`,
    description: site.description,
    images: [
      {
        url: "/media/portrait.jpg",
        width: 800,
        height: 800,
        alt: `Portrait de ${site.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.shortRole}`,
    description: site.description,
    images: ["/media/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#044477",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: `${personal.currentRole} · ${personal.currentCompany}`,
  description: site.description,
  worksFor: {
    "@type": "Organization",
    name: personal.currentCompany,
    url: personal.links.company,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Polytech Lyon",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressCountry: "FR",
  },
  email: `mailto:${personal.email}`,
  url: site.url,
  sameAs: [
    personal.links.linkedin,
    personal.links.github,
    personal.links.company,
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
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans">
        {children}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
