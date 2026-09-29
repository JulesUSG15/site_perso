# Site personnel — Jules Ginhac

Site vitrine one-page, développé en TypeScript avec Next.js (App Router).
Refonte 2026 — positionnement : **Président cofondateur d'Apogée Consult
& spécialiste IA**. Direction graphique proche
d'[apogee-consult.com](https://www.apogee-consult.com), adaptée à une
identité personnelle.

## Stack

- Next.js 15 · App Router
- React 19 · TypeScript strict
- Tailwind CSS 3 + tokens CSS centralisés
- Zod (validation) + Server Action pour le formulaire
- Nodemailer (SMTP) pour l'envoi — configurable via `.env`

## Lancement local

```bash
npm install
cp .env.example .env.local   # renseigner les valeurs si besoin
npm run dev                  # http://localhost:3000
```

Autres scripts :

```bash
npm run build       # build de production
npm run start       # sert le build
npm run typecheck   # vérification TypeScript
npm run lint        # ESLint (config Next)
```

## Structure

```
app/                # Layout, page d'accueil, sitemap, robots, server action
components/         # Hero, Expertises, Projects, Experiences, Contact, header, footer
content/            # Données éditoriales typées (site, personal, expertises, …)
lib/                # Schéma Zod, rate-limit, envoi email
public/media/       # Portrait
public/assets/img/  # Visuels des expériences (conservés)
_archive/           # Ancien site Vite + HTML statiques (non exposé)
```

## Éditer le contenu

Toutes les données sont en TypeScript, une seule source par sujet :

| Fichier                  | Rôle                                                |
| ------------------------ | --------------------------------------------------- |
| `content/site.ts`        | Titre, description, navigation, URL publique        |
| `content/personal.ts`    | Identité, positionnement, email, liens              |
| `content/expertises.ts`  | Les quatre piliers                                  |
| `content/experiences.ts` | Chronologie + formation + certification             |
| `content/projects.ts`    | Trois cas concrets                                  |

Modifier un fichier → mise à jour au prochain rebuild.

## Sections du site

1. **Introduction** — nom, positionnement dirigeant + IA, appel à l'action,
   citation, portrait.
2. **Expertises** — quatre piliers : direction & développement d'entreprise,
   management & pilotage, développement commercial & relation client,
   expertise IA générative & RAG.
3. **Réalisations** — trois cas concrets tirés des missions.
4. **Parcours** — chronologie synthétique : Apogée Consult, Vicinity,
   Polyenco, Atol CD, BYOME LABS, puis formation Polytech Lyon +
   certification Mantu.
5. **Contact** — email professionnel, ville, liens, formulaire.

## Formulaire de contact

- Validation côté serveur avec Zod (longueurs, format email).
- Champ honeypot (`website`) invisible → filtre les bots naïfs.
- Rate-limit mémoire : 3 envois par IP / 60 s.
- Envoi via SMTP configuré dans `.env.local` (voir `.env.example`).
- Si le SMTP n'est **pas** configuré, le formulaire **n'affiche jamais un
  faux succès** : il propose un lien `mailto:` explicite comme alternative.

Les secrets ne doivent jamais être commit. `.env.example` est le seul
fichier partagé.

## SEO / partage

- `metadata` App Router : title/description/keywords adaptés.
- `sitemap.ts`, `robots.ts`, canonical.
- JSON-LD `Person` : rôles, expertise, entreprise, alma mater, liens
  sociaux.
- Open Graph et Twitter card avec portrait `/media/portrait.jpg`.
