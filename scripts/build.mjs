import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';

const apps = [
  ['artcraft-studio', 'ArtCraft Studio', 'png'], ['photocraft', 'PhotoCraft'],
  ['vectorcraft', 'VectorCraft'], ['filmcraft', 'FilmCraft'], ['lightcraft', 'LightCraft'],
  ['pdfcraft', 'PdfCraft'], ['effectcraft', 'EffectCraft'], ['designcraft', 'DesignCraft'],
  ['figcraft', 'FigCraft'], ['texturecraft', 'TextureCraft'], ['materialcraft', 'MaterialCraft'],
  ['wordcraft', 'WordCraft'], ['soundcraft', 'SoundCraft'], ['deckcraft', 'DeckCraft'],
  ['cadcraft', 'CADCraft'], ['gridcraft', 'GridCraft'], ['craft-anything', 'Craft Anything'],
];
const guides = [
  ['overview', 'Overview'], ['getting-started', 'Getting started'],
  ['install-update', 'Install and update'], ['workflows', 'Workflows'],
  ['troubleshooting', 'Troubleshooting'],
];
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const appUrl = (slug, guide = 'overview') => `/apps/${slug}/${guide}/`;
const iconUrl = ([slug, , ext = 'webp']) => `/assets/apps/${slug}.${ext}`;
const productUrl = (slug) => slug === 'artcraft-studio' ? 'https://getartcraft.com/studio' : `https://getartcraft.com/apps/${slug}`;

function nav(activeSlug, activeGuide) {
  return apps.map((app) => {
    const [slug, name] = app;
    const links = guides.map(([guide, label]) => `<a href="${appUrl(slug, guide)}"${slug === activeSlug && guide === activeGuide ? ' aria-current="page"' : ''}>${escape(label)}</a>`).join('');
    return `<details class="app-group" data-name="${escape(name.toLowerCase())}"${slug === activeSlug ? ' open' : ''}><summary><img src="${iconUrl(app)}" alt=""><span>${escape(name)}</span><span class="chevron" aria-hidden="true">⌄</span></summary><div class="guide-links">${links}</div></details>`;
  }).join('');
}
function layout(title, body, activeSlug = '', activeGuide = '') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)} · Craft Wiki</title><meta name="description" content="Documentation for ArtCraft and the Craft Apps."><link rel="stylesheet" href="/style.css"><script src="/wiki.js" defer></script></head><body><header class="topbar"><a class="brand" href="/">Craft <span>Wiki</span></a><div class="topbar-right"><a href="https://getartcraft.com">ArtCraft ↗</a><a href="https://github.com/storytold/craft-wiki">GitHub ↗</a></div></header><div class="shell"><aside class="sidebar"><label class="search-label" for="app-search">Find an app</label><input id="app-search" type="search" placeholder="Search apps…" autocomplete="off"><nav aria-label="App documentation"><a class="home-link" href="/"${!activeSlug ? ' aria-current="page"' : ''}>All documentation</a><p class="sidebar-label">APPS</p>${nav(activeSlug, activeGuide)}<p class="no-results" hidden>No apps found.</p></nav></aside><main id="main">${body}</main></div><footer>Craft Wiki <span>·</span> Made for the ArtCraft community</footer></body></html>`;
}
function home() {
  const cards = apps.map((app, index) => `<a class="card" href="${appUrl(app[0])}"><span class="card-index">${String(index + 1).padStart(2, '0')}</span><img src="${iconUrl(app)}" alt=""><span class="card-name">${escape(app[1])}</span><span class="card-arrow" aria-hidden="true">↗</span><span class="card-caption">Browse documentation</span></a>`).join('');
  return `<div class="content"><p class="eyebrow">ARTCRAFT / KNOWLEDGE BASE</p><h1>Make something<br><em>worth sharing.</em></h1><p class="intro">Find your way around ArtCraft and the Craft Apps. Choose an app to explore its guides, workflows, and support resources.</p><div class="section-heading"><div><p class="eyebrow">THE CRAFT APPS</p><h2>Find your app</h2></div><span>${apps.length} APPS</span></div><div class="cards">${cards}</div></div>`;
}
function guidePage(app, guide, label) {
  const [slug, name] = app;
  const official = productUrl(slug);
  const repo = slug === 'artcraft-studio' ? 'artcraft' : slug;
  const pageBody = guide === 'overview'
    ? `<p class="intro">Explore the documentation for ${escape(name)}. Start with a guide below, or visit the product page for more information.</p><div class="guide-grid">${guides.slice(1).map(([id, guideName], i) => `<a class="guide-card" href="${appUrl(slug, id)}"><span class="guide-number">0${i + 1}</span><strong>${escape(guideName)}</strong><span aria-hidden="true">↗</span></a>`).join('')}</div>`
    : `<p class="intro">This ${escape(label.toLowerCase())} guide is being written. In the meantime, the resources below can help you get started.</p><div class="notice"><strong>Documentation in progress</strong><p>We’re building this guide with the community. You can explore ${escape(name)} and contribute to the wiki on GitHub.</p></div>`;
  return `<div class="content article"><a class="back" href="/">← All apps</a><div class="article-heading"><img src="${iconUrl(app)}" alt=""><div><p class="eyebrow">${escape(name.toUpperCase())} / DOCUMENTATION</p><h1>${escape(guide === 'overview' ? name : label)}</h1></div></div>${pageBody}<div class="resources"><p class="eyebrow">USEFUL LINKS</p><a href="${official}">Visit the ${escape(name)} product page ↗</a><a href="https://github.com/storytold/${repo}">Explore the ${escape(name)} repository ↗</a><a href="https://github.com/storytold/craft-wiki">Contribute to Craft Wiki ↗</a>${guide === 'install-update' ? '<a href="https://getartcraft.com/linux">Linux package repositories ↗</a>' : ''}</div></div>`;
}
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('site', 'dist', { recursive: true });
await cp('assets', 'dist/assets', { recursive: true });
await writeFile('dist/index.html', layout('Home', home()));
for (const app of apps) {
  for (const [guide, label] of guides) {
    const dir = `dist/apps/${app[0]}/${guide}`;
    await mkdir(dir, { recursive: true });
    await writeFile(`${dir}/index.html`, layout(`${app[1]} — ${label}`, guidePage(app, guide, label), app[0], guide));
  }
}
console.log(`Built the home page and ${apps.length * guides.length} app pages.`);
