# Site personnel — Jules Ginhac

Site vitrine one-page, développé en TypeScript avec Next.js (App Router).
Refonte 2026 — positionnement : **Président cofondateur d'Apogée Consult
& spécialiste IA**. Direction graphique proche
d'[apogee-consult.com](https://www.apogee-consult.com), adaptée à une
identité personnelle.

## Stack

- Next.js 15 · App Router · sortie `standalone`
- React 19 · TypeScript strict
- Tailwind CSS 3 + tokens CSS centralisés
- Zod (validation) + Server Action pour le formulaire
- Nodemailer (SMTP) pour l'envoi — configurable via `.env`
- Docker + Docker Compose (dev · prod locale · prod publique avec Caddy)

---

## Démarrage rapide

### Option 1 — Docker (recommandé, aucune install Node requise)

```bash
cp .env.example .env.local          # facultatif : renseigner CONTACT_EMAIL / SMTP_*
docker compose up                    # http://localhost:3000
```

Le code est monté dans le conteneur, le hot reload est actif.
Arrêt : `Ctrl+C` puis `docker compose down` pour nettoyer.

### Option 2 — Node local

```bash
npm install
cp .env.example .env.local
npm run dev                          # http://localhost:3000
```

### Scripts npm

| Script                    | Rôle                                            |
| ------------------------- | ----------------------------------------------- |
| `npm run dev`             | Serveur de dev Next (hot reload)                |
| `npm run build`           | Build de production                             |
| `npm run start`           | Sert le build local                             |
| `npm run typecheck`       | Vérification TypeScript                         |
| `npm run lint`            | ESLint (config Next)                            |
| `npm run docker:dev`      | Alias de `docker compose up`                    |
| `npm run docker:dev:down` | Alias de `docker compose down`                  |
| `npm run docker:prod:build` | Build de l'image de production              |
| `npm run docker:prod:up`    | Démarre le conteneur de prod (test local)   |
| `npm run docker:prod:logs`  | Suit les logs du conteneur de prod          |
| `npm run docker:prod:down`  | Arrête le conteneur de prod                 |
| `npm run docker:pub:up`     | Démarre app + Caddy (production publique)   |
| `npm run docker:pub:logs`   | Suit les logs de la stack publique          |
| `npm run docker:pub:down`   | Arrête la stack publique                    |
| `npm run docker:rebuild`  | Rebuild sans cache (après changement de deps)   |

---

## Tester la version de production en local

```bash
cp .env.example .env
# Renseigner au moins CONTACT_EMAIL et NEXT_PUBLIC_SITE_URL.
# (SMTP facultatif : sans SMTP, le formulaire renvoie une erreur explicite.)

npm run docker:prod:build
npm run docker:prod:up               # http://127.0.0.1:3000
npm run docker:prod:logs             # suivre les logs
npm run docker:prod:down             # arrêter
```

Ce mode publie **uniquement** sur `127.0.0.1:3000` (pas d'exposition
publique). Aucun domaine ni certificat n'est nécessaire ici.

---

## Mise en production (VPS Linux + Docker + Caddy)

### Prérequis serveur

- Un VPS Linux (Debian/Ubuntu recommandé) avec **Docker Engine ≥ 24** et
  **Docker Compose v2** (`docker compose`, pas `docker-compose`).
- Ports **80/tcp** et **443/tcp+udp** ouverts sur le pare-feu.
- Un domaine dont l'enregistrement **A** (et éventuellement **AAAA**)
  pointe déjà vers l'IP publique du VPS.

### Étapes

1. Cloner le dépôt sur le serveur puis créer `.env` :

   ```bash
   cp .env.example .env
   ```

   Renseigner **au minimum** :

   ```
   NEXT_PUBLIC_SITE_URL=https://votre-domaine.tld
   CONTACT_EMAIL=contact@votre-domaine.tld
   SMTP_HOST=…
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=…
   SMTP_PASSWORD=…
   SMTP_FROM="Site Jules <no-reply@votre-domaine.tld>"
   DOMAIN=votre-domaine.tld
   ACME_EMAIL=vous@votre-domaine.tld
   TAG=2026-09-30-01
   ```

2. Construire et lancer la stack publique :

   ```bash
   docker compose -f docker-compose.prod.yml -f docker-compose.caddy.yml build
   docker compose -f docker-compose.prod.yml -f docker-compose.caddy.yml up -d
   docker compose -f docker-compose.prod.yml -f docker-compose.caddy.yml logs -f
   ```

3. Caddy demande automatiquement les certificats Let's Encrypt au premier
   accès. Vérifier ensuite `https://votre-domaine.tld` puis
   `https://votre-domaine.tld/api/health`.

Seul Caddy publie les ports 80/443 ; le service `web` reste sur le
réseau Docker interne (`expose: 3000` uniquement).

### Ce que Caddy fait

- Redirige HTTP → HTTPS.
- Émission et renouvellement automatiques des certificats Let's Encrypt.
- Compression zstd/gzip, en-têtes de sécurité de base, cache immutable
  sur les assets `/_next/static/*`.
- Persistance des certificats dans les volumes `caddy_data` / `caddy_config`.

---

## Mise à jour · rollback

### Procédure

Ce n'est **pas** un déploiement zéro-downtime : le conteneur `web` est
brièvement remplacé pendant la mise à jour (Caddy renvoie 502 pendant
quelques secondes). Prévoir une fenêtre courte.

1. Sur le serveur, mettre à jour le code :

   ```bash
   git pull
   ```

2. Fixer un tag identifiable (utile pour rollback) dans `.env` :

   ```
   TAG=2026-10-01-01
   ```

3. Rebuild puis remplacement :

   ```bash
   docker compose -f docker-compose.prod.yml -f docker-compose.caddy.yml build
   docker compose -f docker-compose.prod.yml -f docker-compose.caddy.yml up -d
   ```

Docker Compose reconstruit uniquement le service `web` et le remplace.
Caddy reste debout, les certificats sont conservés.

### Rollback

L'image précédente reste dans le cache local sous son ancien tag tant
qu'elle n'est pas supprimée. Pour revenir en arrière :

```bash
TAG=<ancien-tag> docker compose -f docker-compose.prod.yml -f docker-compose.caddy.yml up -d --no-build
```

Lister les tags disponibles :

```bash
docker images site-perso
```

Nettoyer les vieilles images (à ne faire qu'après validation) :

```bash
docker image prune -a --filter "until=168h"    # > 7 jours
```

---

## Variables d'environnement

`.env.example` détaille chaque variable. Résumé :

| Nom                    | Où / quand ?         | Public ? | Rôle |
|------------------------|----------------------|----------|------|
| `NEXT_PUBLIC_SITE_URL` | **Build**            | Oui      | Metadata (canonical, OG, sitemap) |
| `CONTACT_EMAIL`        | Runtime              | Non      | Destination des messages formulaire |
| `SMTP_HOST/PORT/...`   | Runtime              | Non      | Envoi via Nodemailer |
| `DOMAIN`               | Runtime (Caddy)      | Non      | Domaine servi par Caddy |
| `ACME_EMAIL`           | Runtime (Caddy)      | Non      | Contact Let's Encrypt |
| `TAG`                  | Build & runtime      | —        | Tag Docker (rollback) |

- Les variables `NEXT_PUBLIC_*` sont **intégrées au bundle client** au
  moment du `next build` : ne jamais y mettre de secret, et rebuild
  l'image si leur valeur change.
- Les identifiants SMTP sont lus **au démarrage du conteneur**. Ils ne
  sont **jamais** passés comme argument de build ni intégrés au frontend.
- `.env` et `.env.local` sont ignorés par Git (`.gitignore`) et exclus de
  l'image (`.dockerignore`). Seul `.env.example` est partagé.

---

## Structure du dépôt

```
app/                # Layout, page d'accueil, sitemap, robots, /api/health, server action
components/         # Hero, Expertises, Projects, Experiences, Contact, header, footer
content/            # Données éditoriales typées (site, personal, expertises, …)
lib/                # Schéma Zod, rate-limit, envoi email
public/media/       # Portrait
public/assets/img/  # Visuels des expériences (conservés)
Dockerfile          # Image de production (multi-stage, standalone, non-root)
Dockerfile.dev      # Image de développement (hot reload)
docker-compose.yml            # Dev
docker-compose.prod.yml       # Prod locale (127.0.0.1:3000)
docker-compose.caddy.yml      # Override : Caddy + réseau interne
Caddyfile           # Reverse proxy HTTPS
_archive/           # Ancien site Vite + HTML statiques (non exposé)
```

---

## Éditer le contenu

Toutes les données sont en TypeScript, une seule source par sujet :

| Fichier                  | Rôle                                                |
| ------------------------ | --------------------------------------------------- |
| `content/site.ts`        | Titre, description, navigation, URL publique        |
| `content/personal.ts`    | Identité, positionnement, email, liens              |
| `content/expertises.ts`  | Les quatre piliers                                  |
| `content/experiences.ts` | Chronologie + formation + certification             |
| `content/projects.ts`    | Trois cas concrets                                  |

Modifier un fichier → rebuild : `npm run docker:prod:build`.

---

## Formulaire de contact

- Validation côté serveur avec Zod.
- Champ honeypot invisible → filtre les bots naïfs.
- Rate-limit mémoire : 3 envois par IP / 60 s.
- Envoi via SMTP configuré dans `.env`.
- Sans SMTP configuré, **aucun faux succès** : le formulaire affiche une
  erreur explicite et propose l'email en lien `mailto:`.

---

## Points restant à confirmer par vous

- Formulation Vicinity (résultats et « seul développeur ») publiable
  telle quelle ?
- Attribution collective des réalisations Apogée mentionnées dans le
  parcours — texte : « Réalisations collectives du cabinet — … ».
- Ajouter un téléphone ? (aujourd'hui volontairement omis)
- Ajouter des liens vers des livrables publics pour Atol / BYOME s'ils
  existent.
