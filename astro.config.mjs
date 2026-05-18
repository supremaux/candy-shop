// astro.config.mjs
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: vercel({
    mode: "standalone", // ou 'edge' se preferir
    imageService: true,
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
