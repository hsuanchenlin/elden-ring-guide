# Elden Ring Guide

Static Astro site for *The Tarnished Codex*, a Phase 1 Elden Ring progression guide.

## Commands

See `README.md` for local development commands, Node requirements, and deployment.

Never run `npx wrangler deploy` from a feature branch; `main` deploys itself through `.github/workflows/deploy.yml`.

## Layout

- Route, flask, and build copy lives in `src/data/`. Edit those modules instead of hard-coding page prose when the facts change.
- Pages are `src/pages/{index,progression,flasks,builds,404}.astro`.
- Shared chrome is `src/layouts/BaseLayout.astro` plus `src/components/`.
- Design tokens (Erdtree gold, obsidian, parchment) are `@theme` entries in `src/styles/global.css`.
- Checklist persistence is `src/lib/checklist.ts`, stored under `tarnished-codex:v1` in `localStorage`. Tests should inject `memoryStorage()` rather than touching a browser.

## Conventions

- Keep Phase 1 scoped to Limgrave, Liurnia, Caelid, Altus Plateau, and Leyndell unless the captain expands the route.
- Prefer Svelte islands only where the page must remember state or toggle UI (checklist, mobile nav). The rest stays static Astro.
- Do not add tests that only grep source files for copy. Assert flask math, storage behavior, or the published catalogues.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
