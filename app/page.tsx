import { Contact } from "@/components/Contact";
import { Experiences } from "@/components/Experiences";
import { Expertises } from "@/components/Expertises";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenu">
        <Hero />
        <Expertises />
        <Projects />
        <Experiences />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
