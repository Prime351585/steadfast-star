// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  server:{
    host:true
  },
  site:'https://craftpresence.com',
  output: 'server',
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});