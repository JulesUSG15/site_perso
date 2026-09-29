import { personal } from "@/content/personal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-white py-24">
      <div className="container-tight">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="section-eyebrow">Contact</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-night sm:text-4xl">
              Un besoin métier, une collaboration, un projet IA ?
            </h2>
            <p className="prose-lead mt-4">
              Écrivez-moi pour cadrer un besoin, discuter d&apos;une
              collaboration ou évaluer un projet d&apos;IA générative. Réponse
              sous 24&nbsp;h ouvrées.
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${personal.email}`}
                    className="break-all text-base font-medium text-brand-night hover:text-brand"
                  >
                    {personal.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  Basé à
                </dt>
                <dd className="mt-1 text-base font-medium text-brand-night">
                  {personal.location}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  Réseaux
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  <a
                    href={personal.links.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="chip hover:border-brand hover:text-brand"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personal.links.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="chip hover:border-brand hover:text-brand"
                  >
                    GitHub
                  </a>
                  <a
                    href={personal.links.company}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="chip hover:border-brand hover:text-brand"
                  >
                    Apogée Consult
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="min-w-0 rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
