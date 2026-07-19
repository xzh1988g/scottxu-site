import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// Static output for Cloudflare Pages. `site` is used to build absolute URLs
// in the sitemap, canonical tags, and hreflang alternates.
export default defineConfig({
  site: 'https://scottxu.dev',
  output: 'static',
  trailingSlash: 'ignore',

  build: {
    format: 'directory',
  },

  adapter: cloudflare(),
});