import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { localizedUrl } from '../i18n/routing';

/**
 * Hand-rolled sitemap so it lives at exactly /sitemap.xml and carries
 * xhtml:link hreflang alternates pairing each EN page with its ZH mirror.
 */
const canonicalPaths = ['/', ...projects.map((p) => `/projects/${p.slug}`)];

export const GET: APIRoute = () => {
  const urls = canonicalPaths
    .flatMap((path) =>
      (['en', 'zh'] as const).map((lang) => {
        const loc = localizedUrl(path, lang);
        const alternates = (['en', 'zh'] as const)
          .map((l) => {
            const hreflang = l === 'zh' ? 'zh-Hans' : 'en';
            return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${localizedUrl(path, l)}" />`;
          })
          .concat(
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(path, 'en')}" />`,
          )
          .join('\n');
        return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n  </url>`;
      }),
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
