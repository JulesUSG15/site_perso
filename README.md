# Site personnel — Jules Ginhac

Site vitrine **entièrement statique**, React / TypeScript / Next.js 15.
Le design, les expériences, les projets, la FAQ, les données structurées SEO,
les liens Wikidata et les cartes de partage sont conservés. Le contact se fait
par email et LinkedIn ; aucun formulaire, SMTP, API ou serveur Node ne tourne en production.

## Développement et vérifications

Depuis la racine du dépôt (Node.js et npm nécessaires uniquement pour développer/compiler) :

```bash
npm ci
npm run dev
```

Le serveur de développement reste sur http://localhost:3000 avec rechargement automatique.
Pour vérifier la version statique :

```bash
npm run build
npm start
```

`npm start` sert uniquement les fichiers de `web/out/` sur http://127.0.0.1:3000.
Ce serveur de prévisualisation ne reproduit pas les redirections Apache.

```bash
npm run lint
npm run typecheck
npm run check:static
npm run test:deploy
```

La compilation vérifie les liens locaux, les fichiers SEO, les identifiants Wikidata,
les images de partage et l'absence de fichiers serveur/secrets dans l'export.

## Structure et contenu

- `web/app/`, `web/components/`, `web/content/`, `web/lib/` : application et contenu.
- `web/public/` : médias sources et `.htaccess` Apache, versionnés.
- `web/out/` : export généré, autonome et prêt à héberger.
- `public/` à la racine : **destination de publication Apache**, générée et ignorée par Git.
- `.deploy-backups/` : sauvegardes des publications précédentes, hors du dossier public.

Ne modifiez pas le contenu dans le dossier `public/` à la racine : modifiez les
sources dans `web/`, puis reconstruisez. Ne copiez jamais `web/out` dans `web/public`.
Les futurs `git pull` ne modifient pas la publication ; seul le premier passage à
cette structure déplace les anciens médias versionnés vers `web/public`.

Les textes se trouvent dans `web/content/`. Les liens Wikidata restent dans
`web/content/personal.ts`. Le graphe JSON-LD est produit à partir des mêmes données
que le contenu visible. Mettez à jour `site.lastUpdated` lors d'une évolution éditoriale.

## Configuration

L'URL publique par défaut est https://jules.ginhac.com. Pour une autre URL,
créez `web/.env.local` avec seulement :

```dotenv
NEXT_PUBLIC_SITE_URL=https://votre-domaine.tld
```

L'adresse de contact est définie dans `web/content/personal.ts`.
Les anciens `.env` / `.env.local` à la racine ne sont plus chargés par Next.
Aucun identifiant SMTP n'est nécessaire ; aucun fichier d'environnement ne doit
être placé dans un dossier public. La compilation télécharge les polices Google ;
les fichiers de polices sont ensuite servis localement par le site statique.

## Publication sur cerbere — sans sudo

Apache est déjà configuré pour `/home/jules/site_perso/public/`, avec
`AllowOverride All` et `mod_rewrite`. Aucun proxy, module headers, Docker ou service
utilisateur n'est nécessaire. Le HTTPS et le DNS existants restent en place.

Après avoir publié les changements de ce dépôt sur GitHub :

```bash
cd ~/site_perso
git status --short
# Si des changements locaux sont affichés, les conserver avant de continuer.
git pull --ff-only origin main
npm ci --no-audit --no-fund
npm run deploy:static
```

Exécutez les commandes séparément et arrêtez-vous en cas d'erreur.
`deploy:static` compile puis vérifie l'export **avant de toucher au site publié**.
Le script copie uniquement `web/out/`, prépare les permissions de lecture pour
Apache (dossiers 755, fichiers 644), sauvegarde l'ancien `public/` puis le remplace.
Il refuse un dossier `public` qui serait un lien symbolique et les déploiements concurrents.
Le remplacement comporte deux renommages : une très brève interruption est possible.
Les dossiers parents doivent rester traversables par Apache, comme pour l'ancien site.

Le `.htaccess` publié gère l'accueil, la page 404, les redirections des anciennes
pages `.html` et le type PNG des images Open Graph / icônes générées. Il n'utilise
ni `ProxyPass`, ni `RequestHeader`, ni les modules absents sur cerbere.

### Vérification publique

```bash
curl -I https://jules.ginhac.com/
curl -I https://jules.ginhac.com/opengraph-image
curl -I https://jules.ginhac.com/robots.txt
curl -I https://jules.ginhac.com/sitemap.xml
curl -I https://jules.ginhac.com/llms.txt
curl -I https://jules.ginhac.com/about.html
```

Attendu : 200 pour les cinq premiers, `Content-Type: image/png` pour l'image,
301 vers `/` pour l'ancienne page. Vérifiez aussi l'affichage mobile et le lien email.
L'ancien `/api/health` est supprimé : une URL inconnue répond désormais 404.

**Après validation du site public**, arrêter l'ancien service Node :

```bash
systemctl --user disable --now site-perso.service
```

Il n'est plus nécessaire de laisser une session SSH ouverte ou d'activer Linger.

### Mises à jour et retour arrière

Pour les mises à jour : mêmes commandes `git pull`, `npm ci`, `npm run deploy:static`.
La compilation ne touche pas le site en ligne en cas d'échec.
Le script affiche le chemin exact de la sauvegarde précédente. Pour revenir à celle-ci,
remplacer `NOM_SAUVEGARDE` ci-dessous par son nom réel, puis exécuter :

```bash
node --input-type=module - <<'JS'
import { access, rename } from 'node:fs/promises';
const previous = '.deploy-backups/NOM_SAUVEGARDE';
await access(previous + '/index.html');
const displaced = '.deploy-backups/avant-retour-' + Date.now();
await rename('public', displaced);
try { await rename(previous, 'public'); }
catch (error) { await rename(displaced, 'public'); throw error; }
JS
```

Ne supprimez les anciennes sauvegardes qu'après vérification. La première sauvegarde
peut ne contenir que les fichiers de l'ancien site ; ne la considérez pas comme un
export statique valide sans la vérifier.

## Docker facultatif

Docker reste disponible pour le développement (`docker compose up`) et pour héberger
le même export ailleurs. L'image de production sert des fichiers avec Nginx non-root,
sans Node.js ni SMTP. Les ports publics et Caddy ne sont **pas utilisés sur cerbere**.

```bash
docker compose -f docker-compose.prod.yml up --build -d
# http://127.0.0.1:3000
```

Pour un serveur dédié disposant de ports 80/443 libres, les fichiers Caddy restent
utilisables : renseigner DOMAIN, ACME_EMAIL et TAG dans un `.env` à la racine, puis
utiliser ensemble `docker-compose.prod.yml` et `docker-compose.caddy.yml`.
Les redirections et types MIME sont aussi prévus dans `nginx.conf`.

## Limites assumées

- Le lien email ouvre le logiciel de messagerie du visiteur ; l'adresse reste visible.
- Les images sont servies directement, sans endpoint d'optimisation Next à la volée.
- Les données et images SEO sont générées à la compilation ; reconstruire pour les changer.
- Aucune garantie de positionnement Google ou d'exploitation de `llms.txt` n'est ajoutée.
