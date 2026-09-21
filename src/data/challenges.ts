import type { ChallengeVideo } from "./types";

/**
 * Curated static catalogue of Elden Ring challenge runs, one per constraint the guide tracks.
 * Each entry was checked against YouTube's oEmbed endpoint on 2026-09-21 (a 200 means the video
 * exists and allows embedding); repeat that check when adding or replacing an entry. Discovery
 * stays hand-curated in Phase 1: no API, scheduled refresh, or credentials.
 */
export const challengeVideos: ChallengeVideo[] = [
  {
    youtubeId: "F8FFnoluvF0",
    title: "Smithscript Dagger Only Run | Elden Ring Tarnished Update",
    category: "weapon-only",
    runner: "Youwy",
    published: "2026-09-05",
  },
  {
    youtubeId: "CnDI68CUE7o",
    title: "Level 1, No upgrades, Hitless challenge run of Elden Ring with a side of Judgement",
    category: "no-hp-leveling",
    runner: "Lamenter's Gaol",
    published: "2026-05-04",
  },
  {
    youtubeId: "3DOT2_2AMFc",
    title: "The IMPOSSIBLE Elden Ring run BARE FISTS NO weapons NO talismans NO heals NO armor NO items, ETC.",
    category: "no-item",
    runner: "Skumnut",
    published: "2026-04-02",
  },
];
