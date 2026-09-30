import { entityLinks, entityPattern } from "@/lib/entities";

// Rend un texte en transformant chaque mention d'une entité du réseau en lien.
export function RichText({ children }: { children: string }) {
  const parts = children.split(entityPattern);
  return (
    <>
      {parts.map((part, index) =>
        entityLinks[part] ? (
          <a
            key={index}
            href={entityLinks[part]}
            target="_blank"
            rel="noopener"
            className="font-medium underline decoration-brand/40 hover:text-brand hover:decoration-brand"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}
