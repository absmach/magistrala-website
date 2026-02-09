// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://magistrala.absmach.eu',
  output: 'static',
  build: {
    format: 'file', // Generates /privacy/index.html not /privacy.html
  },
  vite: {
    plugins: [tailwindcss()]
  }
});