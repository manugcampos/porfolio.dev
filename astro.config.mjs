import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import astroI18next from 'astro-i18next';
import vercel from '@astrojs/vercel/serverless';


// https://astro.build/config
export default defineConfig({
  integrations: [
    astroI18next(),
    tailwind(),
    robotsTxt()
  ],
  site: 'https://porfolio.dev/',
  output: 'server',
  adapter: vercel(),
});
