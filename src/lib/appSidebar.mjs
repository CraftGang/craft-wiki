import { getCollection } from 'astro:content';
import { guides } from '../data/apps.mjs';

const sharedOrder = Object.fromEntries(guides.map(([slug], index) => [slug, index]));

// Sorts by sidebar.order, then by label. A page without an order comes after the ordered pages, and
// Troubleshooting always comes last.
const compare = (a, b) =>
  (a.slug === 'troubleshooting') - (b.slug === 'troubleshooting')
  || (a.order ?? Infinity) - (b.order ?? Infinity)
  || a.label.localeCompare(b.label);

let sidebars;

async function buildSidebars() {
  const pagesByApp = new Map();
  for (const entry of await getCollection('docs')) {
    const match = /^apps\/([^/]+)\/([^/]+)$/.exec(entry.id);
    // Starlight builds no route for a draft page in production mode.
    if (!match || entry.data.sidebar.hidden || (entry.data.draft && import.meta.env.MODE === 'production')) continue;
    const [, app, slug] = match;
    const page = {
      slug,
      label: entry.data.sidebar.label ?? (slug === 'overview' ? 'Overview' : entry.data.title),
      title: entry.data.sidebar.label ?? entry.data.title,
      order: entry.data.sidebar.order ?? sharedOrder[slug],
      parent: entry.data.parent,
      file: entry.filePath ?? entry.id,
      children: [],
    };
    if (!pagesByApp.has(app)) pagesByApp.set(app, []);
    pagesByApp.get(app).push(page);
  }

  const result = new Map();
  for (const [app, pages] of pagesByApp) {
    const topLevel = pages.filter((page) => !page.parent);
    const bySlug = new Map(topLevel.map((page) => [page.slug, page]));
    for (const page of pages.filter((page) => page.parent)) {
      const parent = bySlug.get(page.parent);
      if (!parent) {
        throw new Error(`${page.file}: "parent: ${page.parent}" must name a page in apps/${app}/ that has no parent of its own.`);
      }
      parent.children.push(page);
    }
    for (const page of topLevel) page.children.sort(compare);
    result.set(app, topLevel.sort(compare));
  }
  return result;
}

// The sidebar entries for one app: its pages without a parent, each with the pages that name it as
// their parent in `children`.
export async function appSidebar(app) {
  sidebars ??= buildSidebars();
  return (await sidebars).get(app) ?? [];
}
