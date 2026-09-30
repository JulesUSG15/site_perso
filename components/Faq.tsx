import { faq } from "@/content/faq";
import { RichText } from "./RichText";

export function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-surface/60 py-24">
      <div className="container-tight">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="section-eyebrow">En bref</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-brand-night sm:text-4xl">
              Questions fréquentes
            </h2>
          </div>
          <dl className="min-w-0 space-y-8">
            {faq.map((item) => (
              <div key={item.question}>
                <dt className="text-lg font-semibold text-brand-night">
                  {item.question}
                </dt>
                <dd className="prose-lead mt-2 !text-ink"><RichText>{item.answer}</RichText></dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
