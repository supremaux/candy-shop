// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
              sans: ["Inter", "system-ui", "sans-serif"],
            },
            colors: {
              brand: {
                50: "#fef2f2",
                100: "#ffe1e1",
                200: "#fec8c8",
                300: "#fca5a5",
                400: "#f87171",
                500: "#ef4444",
                600: "#dc2626",
                700: "#b91c1c",
                800: "#991b1b",
                900: "#7f1d1d",
              },
              warm: {
                50: "#fffbeb",
                100: "#fef3c7",
                200: "#fde68a",
              },
            },
    },
  },
  plugins: [],
} as Config;