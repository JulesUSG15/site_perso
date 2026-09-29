import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container-tight flex flex-col items-start gap-4 py-32">
        <p className="section-eyebrow">Erreur 404</p>
        <h1 className="text-3xl font-semibold tracking-tight text-brand-night sm:text-4xl">
          Cette page n&apos;existe pas.
        </h1>
        <p className="prose-lead">
          Le contenu que vous cherchez a peut-être été déplacé ou n&apos;existe
          plus. Revenez à la page d&apos;accueil pour repartir sur de bonnes
          bases.
        </p>
        <Link href="/" className="btn btn-primary mt-4">
          Retour à l&apos;accueil
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
