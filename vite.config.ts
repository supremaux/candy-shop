// vite.config.ts
import { defineConfig } from 'vite';
import { astro } from '@astrojs/vite-plugin';

export default defineConfig({
  plugins: [astro()],
});