import { site } from "@/content/site";
import { personal } from "@/content/personal";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-tight flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-brand-night">{site.name}</p>
          <p className="text-sm text-muted">
            {personal.currentRole} · {personal.currentCompany} — {personal.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <a
            href={personal.links.linkedin}
            className="transition-colors hover:text-brand-night"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            href={personal.links.github}
            className="transition-colors hover:text-brand-night"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            href={personal.links.company}
            className="transition-colors hover:text-brand-night"
            target="_blank"
            rel="noreferrer noopener"
          >
            Apogée Consult
          </a>
          <span aria-hidden="true">·</span>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
}
