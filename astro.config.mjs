// astro.config.mjs
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: vercel({
    mode: "edge", // ou 'edge' se preferir
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
