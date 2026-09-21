# The Tarnished Codex

A modern, responsive Elden Ring progression guide: the recommended first path from Limgrave through Liurnia, Caelid, Altus Plateau, and Leyndell, plus early flask upgrades and three starter archetypes.

Built with [Astro](https://astro.build), Tailwind CSS, and Svelte islands.

## Route (Phase 1)

1. Limgrave (including the Weeping Peninsula and Stormveil)
2. Liurnia of the Lakes
3. Caelid (south; skip Dragonbarrow)
4. Altus Plateau
5. Leyndell, Royal Capital

Companion pages:

- `/flasks` - Golden Seeds and Sacred Tears through Leyndell, with a persistent checklist
- `/builds` - Vagabond strength/poise, Samurai bleed, Astrologer sorcery
- `/zh-tw` - Traditional Chinese pages for the landing, route, flasks, and builds (see `src/lib/i18n.ts`)

Checklists store progress in the browser (`localStorage`). Nothing is uploaded.

## Commands

```bash
npm install
npm run dev
npm test
npm run check
npm run build
```

Requires Node.js 22.12 or newer.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which publishes `dist/` to Cloudflare Workers as the static-assets Worker `tarnished-codex` configured in `wrangler.jsonc`. The workflow needs the `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` repository secrets. To deploy by hand, run `npm run build` and then `npx wrangler deploy` from `main`. Hashed assets under `/_astro/` are served with immutable cache headers from `public/_headers`.

## Stack

- Astro for static pages
- Tailwind CSS v4 for the dark-fantasy design tokens
- Svelte 5 for the checklist and navigation islands
- Vitest for checklist persistence, flask-charge, locale-path, and video catalogue tests
