// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://hsuanchenlin.github.io/elden-ring-guide",
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
