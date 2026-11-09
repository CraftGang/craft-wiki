import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { allApps } from './data/apps.mjs';
import { appSidebar } from './lib/appSidebar.mjs';

// Points an app page's previous and next links at its neighbors in the custom sidebar: each app in
// turn, each page followed by the pages listed under it. A page that sets `prev` or `next` in its
// frontmatter keeps Starlight's link, and so does the first app's first page for its previous link.
export const onRequest = defineRouteMiddleware(async (context) => {
  const route = context.locals.starlightRoute;
  const match = /^apps\/([^/]+)\/([^/]+)$/.exec(route.id);
  if (!match) return;

  const pages = [];
  for (const [app] of allApps) {
    for (const page of await appSidebar(app)) {
      pages.push({ app, page });
      for (const child of page.children) pages.push({ app, page: child });
    }
  }
  const index = pages.findIndex(({ app, page }) => app === match[1] && page.slug === match[2]);
  if (index === -1) return;

  const link = ({ app, page }) => ({
    type: 'link', label: page.title, href: `/apps/${app}/${page.slug}/`, isCurrent: false, badge: undefined, attrs: {},
  });
  const { prev, next } = route.entry.data;
  if (prev === undefined && index > 0) route.pagination.prev = link(pages[index - 1]);
  if (next === undefined) route.pagination.next = index < pages.length - 1 ? link(pages[index + 1]) : undefined;
});
