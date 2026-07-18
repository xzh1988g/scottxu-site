import type { Lang } from '../data/site';
import { site } from '../data/site';

/**
 * URL policy (from the brief):
 *  - English is the default site at `/`.
 *  - Chinese mirror lives at `/zh/`.
 *  - The SAME English slug is used on both sides (URLs are never translated).
 *
 * A "path" here means the canonical, language-neutral path, e.g.
 *   '/'  or  '/projects/turtle-soup'
 * Use the helpers below to turn it into the per-language URL.
 */

export const LANGS: Lang[] = ['en', 'zh'];

/** Language-prefixed path for a given canonical path. */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return lang === 'en' ? clean || '/' : `/zh${clean}` || '/zh';
}

/** Absolute URL for a canonical path in a given language. */
export function localizedUrl(path: string, lang: Lang): string {
  const p = localizedPath(path, lang);
  return new URL(p, site.url).href.replace(/\/$/, '') || site.url;
}

/**
 * hreflang alternates for a canonical path: en, zh, and x-default (→ en).
 * Drop these into the <head> so crawlers pair the two language versions.
 */
export function hreflangAlternates(path: string) {
  return [
    { hreflang: 'en', href: localizedUrl(path, 'en') },
    { hreflang: 'zh-Hans', href: localizedUrl(path, 'zh') },
    { hreflang: 'x-default', href: localizedUrl(path, 'en') },
  ];
}

export { site };
