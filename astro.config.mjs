// @ts-check
import { defineConfig } from 'astro/config';


import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  server:{
    host:true
  },
  output: 'server',
  adapter: cloudflare(),
  vite: {
    plugins: []
  },

  integrations: [mdx()]
});