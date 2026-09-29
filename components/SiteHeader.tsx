import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/85 backdrop-blur">
      <div className="container-tight flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 font-semibold tracking-tight text-brand-night"
          aria-label={`${site.name} — accueil`}
        >
          <span className="text-lg">Jules Ginhac</span>
          <span className="hidden text-xs font-mono text-muted transition-colors group-hover:text-brand md:inline">
            /président & spécialiste IA
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm text-muted">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-brand-night"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <details className="relative md:hidden">
            <summary
              className="btn btn-ghost cursor-pointer select-none list-none px-4 py-2 text-sm marker:hidden"
              aria-label="Ouvrir le menu"
            >
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-line bg-white p-2 shadow-card">
              <ul className="space-y-1 text-sm">
                {site.navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-brand-night hover:bg-surface"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <a href="#contact" className="btn btn-primary text-sm">
            Me contacter
          </a>
        </div>
      </div>
    </header>
  );
}
