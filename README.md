# Craft Wiki

Craft Wiki is the documentation site for ArtCraft Studio and the Craft Apps, published at [craft.wiki](https://craft.wiki). The site is generated as static HTML and edited in GitHub or through a self-hosted Sveltia CMS interface.

Many app guides are currently scaffolds. Their content should be reviewed and expanded before being treated as complete product documentation.

## How it fits together

1. Contributors edit Markdown files in this repository, either directly or through the visual editor.
2. Astro and Starlight turn those files into a static site in `dist/`. The build also bundles the Sveltia editor into the site.
3. A push to `main` runs a GitHub Actions workflow that calls a Cloudflare deploy hook.
4. Cloudflare Workers Builds checks out the repository, runs the build, and deploys the generated files as static assets. The Worker serves the public site and editor; it does not need a server-side app or database.

The [Cloudflare hook workflow](.github/workflows/deploy.yml) succeeding means Cloudflare accepted the hook request. Check the Worker's build history separately to confirm that the build and deployment succeeded.

## Repository layout

```text
astro.config.mjs              Starlight configuration and app sidebar groups
src/content.config.ts         Starlight content collection and schema
src/content/docs/index.mdx    Home page, hero copy, and app cards
src/content/docs/apps/        Markdown pages, one folder per app
src/data/apps.mjs             App names, slugs, icon extensions, and guide links
src/components/               Custom header, sidebar, page title, and theme
src/styles/custom.css         Wiki theme and layout
public/assets/apps/           App icons used by the site
public/assets/uploads/        Images uploaded through the editor, when present
public/edit/index.html        Editor sign-in guidance
public/admin/index.html       Sveltia CMS entry point
public/admin/config.yml       GitHub backend and app collections
scripts/prepare-cms.mjs       Copies the installed CMS bundle into public assets
wrangler.jsonc                Cloudflare Worker static-asset configuration
.github/workflows/deploy.yml   GitHub Actions deploy-hook trigger
```

`dist/`, `.astro/`, `node_modules/`, and `public/admin/vendor/` are generated and are not committed. The editor bundle is installed from the pinned npm dependency and copied into `public/admin/vendor/` by the build; the deployed editor does not depend on a CMS CDN.

## Local development and builds

Use Node.js 22.23.4 or newer and npm 9.6.5 or newer. The repository's `.nvmrc` selects Node 22; ensure the installed Node 22 release meets Astro's minimum version.

```bash
npm ci
npm run dev
```

Astro prints the local development URL. To prepare the editor bundle before using `/admin/` locally, run `node scripts/prepare-cms.mjs` after installing dependencies, or run a production build first:

```bash
npm run build
npm run preview
```

`npm run build` copies the Sveltia bundle, then runs `astro build`. Starlight renders the content collection to `dist/`, builds a Pagefind search index, and emits a sitemap. `npm run preview` serves that generated output locally. The custom sidebar's search field filters app names; it is separate from the Pagefind index.

## Documentation content

App guides are Markdown files under `src/content/docs/apps/<app-slug>/`. Their paths determine their URLs. For example, `src/content/docs/apps/photocraft/getting-started.md` is published at `/apps/photocraft/getting-started/`.

Each app currently has five pages:

- `overview.md`
- `getting-started.md`
- `install-update.md`
- `workflows.md`
- `troubleshooting.md`

Pages start with YAML frontmatter for Starlight. The visual editor exposes the title, optional description, and Markdown body:

```markdown
---
title: Getting started
description: Getting started with PhotoCraft.
---

Write the guide here.
```

Use Markdown headings, links, lists, images, and code blocks for the content. Images uploaded through the editor are committed under `public/assets/uploads/` and served from `/assets/uploads/`. The existing app icons live under `public/assets/apps/`.

Starlight uses the `docsLoader()` and `docsSchema()` in `src/content.config.ts` to load and validate content. A malformed frontmatter field or unsupported schema value can fail the build. Check the Astro build output when adding metadata or MDX components.

### Adding or reorganizing an app

The navigation and home page have a small amount of explicit configuration. To add an app:

1. Create its Markdown pages under `src/content/docs/apps/<slug>/` and add its icon to `public/assets/apps/`.
2. Add its slug, display name, and any non-default icon extension to `src/data/apps.mjs`. `WikiSidebar.astro` uses this list to render the icon and expandable group.
3. Add a matching app group in `astro.config.mjs` and a collection in `public/admin/config.yml` so Starlight and Sveltia can find its pages.
4. Add an icon card to `src/content/docs/index.mdx` and update its app count.
5. Run `npm run build` and check the home page, app links, and `/admin/`.

The custom sidebar uses the `guides` list in `src/data/apps.mjs` for its links. If guide filenames or the set of guides change, update that list too. Starlight's autogenerated sidebar configuration does not by itself add links to the custom sidebar.

## Visual editor

The header's **Edit wiki** link opens `/edit/`, which explains sign-in and links to `/admin/`. Sveltia CMS is a browser-based visual editor for the app collections in `public/admin/config.yml`. Choose an app, select a page, edit its title, description, and body, then save. The editor uses GitHub as its backend and the configured branch is `main`.

### GitHub access and token

The editor currently uses **token authentication only**. Each editor needs a GitHub account with write access to `storytold/craft-wiki`. For a fine-grained personal access token:

1. In GitHub, create a fine-grained personal access token owned by the appropriate account or organization.
2. Under repository access, choose **Only select repositories** and select **`storytold/craft-wiki`**. No other repository is required.
3. Set repository permission **Contents** to **Read and write**. GitHub adds read-only Metadata access automatically. The organization may need to approve the token.
4. Open `/admin/`, choose **Sign in with token**, and provide the token in the editor. Do not commit tokens to the repository.

Sveltia stores its sign-in token in the browser's local storage and communicates directly with GitHub. See [Sveltia's GitHub backend documentation](https://sveltiacms.app/en/docs/backends/github) for current token and authentication details.

The current configuration uses the simple workflow: saving an entry commits directly to `main`. **It does not open a pull request or give someone repository access.** Contributors without write access can fork the public repository and open a GitHub pull request. If the branch is protected against direct writes, users who cannot push will not be able to save through this simple workflow. A pull-request-based editorial or open-authoring workflow would require a separate configuration change and appropriate permissions.

GitHub OAuth is not currently configured: the editor's sign-in method is explicitly restricted to tokens to avoid the default Netlify OAuth endpoint. For a conventional GitHub sign-in button, deploy and configure a [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) Worker, register a GitHub OAuth application, and update the CMS backend configuration. Keep the OAuth client secret in Cloudflare, not in this repository.

### What can be edited visually

The app guide collections under `src/content/docs/apps/` are available in Sveltia. The homepage's MDX layout, app cards, app list, and theme are maintained in the repository code rather than in the visual editor. `/admin/` is a content editor, not an inline page-layout editor.

## Layout and theme

The site uses Astro Starlight with custom components configured in `astro.config.mjs`:

- `WikiHeader.astro` renders the Craft Wiki brand and navigation, including the edit link.
- `WikiSidebar.astro` renders the searchable app list, each app's icon, and expandable guide links. The current app is expanded on its pages.
- `WikiPageTitle.astro` hides the default Starlight page title on the custom home page and retains it on guide pages.
- `WikiThemeProvider.astro` selects the dark theme.

`src/styles/custom.css` styles the layout and uses the Archivo, Instrument Serif, Inter, and Geist Mono font families to match the main ArtCraft site. Font files are npm dependencies and are bundled during the build. The homepage markup and its hero copy live in `src/content/docs/index.mdx`.

## Cloudflare deployment

The current site uses **Cloudflare Workers static assets**. `wrangler.jsonc` names the Worker `craft-wiki` and points its assets directory at `./dist`. The Cloudflare build settings should use:

- **Production branch:** `main`
- **Root directory:** repository root (leave blank)
- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Preview command:** `npx wrangler preview`

The Worker name in Cloudflare must match the name in `wrangler.jsonc`. `craft.wiki` must be configured as a custom domain on the Worker in Cloudflare. The repository does not create or manage the Cloudflare account, domain, or Git connection.

For the current hook-based deployment, the repository Actions variable `CLOUDFLARE_DEPLOY_HOOK` contains the Cloudflare build hook URL. `.github/workflows/deploy.yml` calls it on pushes to `main`; it can also be run using **Actions → Trigger Cloudflare deploy → Run workflow**. It needs no repository checkout or GitHub write permissions. If the hook changes, update the variable in **GitHub repository → Settings → Secrets and variables → Actions → Variables**.

If Cloudflare's own Git integration also triggers production builds on every push, the hook workflow can cause an additional build. Choose the trigger arrangement that matches the Cloudflare project settings.

### Troubleshooting deployments

- If the workflow fails immediately, check that `CLOUDFLARE_DEPLOY_HOOK` exists and that the hook is active.
- If the hook succeeds but the site is unchanged, inspect **Workers & Pages → craft-wiki → Deployments → View Build History**. Confirm the build used the intended `main` commit and completed successfully.
- If the old site remains visible, check the Worker/domain routing and the currently deployed version. The GitHub Actions result alone does not confirm which Cloudflare version is live.
- If `/admin/` fails to load, check that the build copied `public/admin/vendor/` and that `dist/admin/index.html`, `dist/admin/config.yml`, and the CMS bundle exist.
- If editor sign-in fails, confirm repository write access, token scope and any organization approval. If saving fails after a successful login, check branch protection and the build history.

## TileDocs

The current site is built with Starlight and Sveltia CMS. It is not generated from a TileDocs project. The visual editor saves the Markdown files in this repository; there is no TileDocs export step in the current build.
