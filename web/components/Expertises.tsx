import { expertises } from "@/content/expertises";

export function Expertises() {
  return (
    <section id="expertises" className="border-t border-line bg-surface/60 py-24">
      <div className="container-tight">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Expertises</p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-night sm:text-4xl">
            Quatre piliers : diriger une activité et livrer des projets d&apos;IA.
          </h2>
          <p className="prose-lead mt-4">
            Direction, management, développement commercial et expertise
            technique sont mobilisés ensemble sur chaque projet — c&apos;est
            ce qui rend une solution d&apos;IA utilisable.
          </p>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {expertises.map((expertise, index) => (
            <li key={expertise.id} className="card group h-full">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-brand-night">
                {expertise.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {expertise.summary}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-brand-night">
                {expertise.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand"
                    />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
