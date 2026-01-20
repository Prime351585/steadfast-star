// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  server:{
    host:true
  },
  // adapter: cloudflare()
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});