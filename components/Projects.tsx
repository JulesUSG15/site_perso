import { projects } from "@/content/projects";

export function Projects() {
  if (projects.length === 0) return null;
  return (
    <section id="realisations" className="border-t border-line bg-surface/60 py-24">
      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Réalisations</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-night sm:text-4xl">
            Trois missions, du besoin métier à la mise en service.
          </h2>
          <p className="prose-lead mt-4">
            Trois cas issus de mes expériences individuelles. Les livraisons du
            portefeuille d&apos;Apogée Consult ne sont pas détaillées ici : je
            les évoque dans mon parcours et sur le site du cabinet.
          </p>
        </div>
        <ol className="mt-14 space-y-6">
          {projects.map((project) => (
            <li key={project.id} className="card p-0">
              <article className="p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-mono uppercase tracking-widest text-brand">
                    {project.organisation}
                  </span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line" />
                  <span className="font-mono uppercase tracking-widest text-muted">
                    {project.period}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-brand-night">
                  {project.title}
                </h3>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <dl className="space-y-4 text-sm text-ink">
                    <div>
                      <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">
                        Contexte
                      </dt>
                      <dd className="mt-1 leading-relaxed">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">
                        Mon rôle
                      </dt>
                      <dd className="mt-1 leading-relaxed">{project.role}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">
                        Solution
                      </dt>
                      <dd className="mt-1 leading-relaxed">{project.solution}</dd>
                    </div>
                  </dl>
                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">
                        Résultats
                      </p>
                      <ul className="mt-2 space-y-2 text-sm text-ink">
                        {project.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand"
                            />
                            <span className="leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[0.7rem] uppercase tracking-widest text-muted">
                        Techniques
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <li key={item} className="chip">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
