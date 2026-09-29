import Image from "next/image";
import { personal } from "@/content/personal";

export function Hero() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-brand-fade"
      />
      <div className="container-tight relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-16">
          <div className="min-w-0 animate-fade-up">
            <p className="section-eyebrow">Cofondateur · Lyon</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-brand-night sm:text-6xl lg:text-[4rem]">
              Jules Ginhac
            </h1>
            <p className="mt-4 text-lg font-medium text-brand sm:text-xl">
              Président cofondateur d&apos;Apogée Consult &{" "}
              <span className="whitespace-nowrap">spécialiste IA</span>.
            </p>
            <p className="prose-lead mt-6">{personal.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn btn-primary">
                Me contacter
              </a>
              <a href="#parcours" className="btn btn-ghost">
                Voir mon parcours
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8 text-sm">
              <div className="min-w-0">
                <dt className="text-xs font-mono uppercase tracking-widest text-muted">
                  Rôle
                </dt>
                <dd className="mt-2 font-medium text-brand-night">
                  Président cofondateur
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="text-xs font-mono uppercase tracking-widest text-muted">
                  Cabinet
                </dt>
                <dd className="mt-2 font-medium text-brand-night">
                  <a
                    href={personal.links.company}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-brand"
                  >
                    Apogée Consult
                  </a>
                </dd>
              </div>
              <div className="min-w-0">
                <dt className="text-xs font-mono uppercase tracking-widest text-muted">
                  Base
                </dt>
                <dd className="mt-2 font-medium text-brand-night">Lyon</dd>
              </div>
            </dl>
          </div>
          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto max-w-[300px] sm:max-w-[320px]">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-accent/25 via-white/0 to-brand/20 blur-lg"
              />
              <div className="relative overflow-hidden rounded-[24px] border border-line bg-white shadow-brand">
                <Image
                  src="/media/portrait.jpg"
                  alt={`Portrait de ${personal.name}`}
                  width={640}
                  height={640}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 rounded-2xl border border-line bg-white/85 p-4 text-sm text-muted shadow-card">
                <p className="italic leading-relaxed text-brand-night">
                  « {personal.quote} »
                </p>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
