// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tarnished-codex.xuanhsuan.workers.dev",
  trailingSlash: "never",
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
