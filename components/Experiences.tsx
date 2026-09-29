import { education, experiences } from "@/content/experiences";

export function Experiences() {
  return (
    <section id="parcours" className="border-t border-line bg-white py-24">
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="section-eyebrow">Parcours</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-night sm:text-4xl">
              Un parcours resserré autour de la direction, des projets et de l&apos;IA.
            </h2>
            <p className="prose-lead mt-4">
              Les responsabilités actuelles chez Apogée Consult, le stage de
              fin d&apos;études chez Vicinity et la présidence de Polyenco
              constituent le socle.
            </p>
          </div>
          <ol className="relative space-y-10 border-l border-line pl-8 min-w-0">
            {experiences.map((experience) => (
              <li key={experience.organisation} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[37px] top-2 flex h-3 w-3 items-center justify-center"
                >
                  <span className="h-3 w-3 rounded-full border-2 border-brand bg-white" />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-brand">
                  {experience.period}
                  {experience.location ? ` · ${experience.location}` : ""}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-brand-night">
                  {experience.role}
                </h3>
                <p className="text-sm text-muted">{experience.organisation}</p>
                {experience.summary ? (
                  <p className="mt-2 text-sm italic text-muted">
                    {experience.summary}
                  </p>
                ) : null}
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand"
                      />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
                {experience.collective ? (
                  <p className="mt-4 rounded-xl border border-line bg-surface/70 px-4 py-3 text-sm text-muted">
                    <span className="font-medium text-brand-night">
                      Réalisations collectives du cabinet
                    </span>{" "}
                    — {experience.collective}
                  </p>
                ) : null}
              </li>
            ))}
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-2 flex h-3 w-3 items-center justify-center"
              >
                <span className="h-3 w-3 rounded-full border-2 border-line bg-white" />
              </span>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {education.period} · Formation
              </p>
              <h3 className="mt-2 text-lg font-semibold text-brand-night">
                {education.degree}
              </h3>
              <p className="text-sm text-muted">{education.school}</p>
              {education.detail ? (
                <p className="mt-2 text-sm text-ink">{education.detail}</p>
              ) : null}
              {education.extras && education.extras.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {education.extras.map((extra) => (
                    <li key={extra} className="chip">
                      {extra}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
