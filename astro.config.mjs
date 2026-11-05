import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site's public address. Used for canonical links, share images and the sitemap.
// If you add a custom domain, change this and set the domain in the repo's Settings > Pages.
const SITE = 'https://felipecramos.github.io';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/og/'),
      i18n: { defaultLocale: 'en', locales: { en: 'en', pt: 'pt-BR' } },
    }),
  ],
});
