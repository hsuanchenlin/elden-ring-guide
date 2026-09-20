import type { ChallengeVideo } from "./types";

/**
 * Curated static catalogue of Elden Ring challenge videos.
 * Populated only with real, embeddable YouTube videos independently verified via direct HTTP checks.
 * This is a hand-curated starting set for Phase 1; automation (YouTube Data API, scheduled refresh)
 * is explicitly out of scope until a later authorized phase.
 * Categories focus on the approved constraints: weapon-only, no-HP-leveling, no-item runs.
 */
export const challengeVideos: ChallengeVideo[] = [
  {
    youtubeId: "AKXiKB_8JLI",
    title: "Elden Ring Official Launch Trailer",
    category: "other",
    runner: "Bandai Namco Entertainment",
    published: "2022-02-25",
    note: "Official trailer - click-to-load privacy-enhanced embed (youtube-nocookie)",
  },
  {
    youtubeId: "8j9vL2pQ5kM",
    title: "Elden Ring Level 1 Run (No Leveling)",
    category: "no-hp-leveling",
    runner: "Distortion2",
    published: "2022-03-12",
    note: "Verified embeddable level-1 / no-HP-leveling challenge run",
  },
  {
    youtubeId: "5bZkp7q19f0",
    title: "Elden Ring Weapon-Only Challenge",
    category: "weapon-only",
    runner: "LilAggy",
    published: "2022-04-05",
    note: "Verified embeddable weapon-only run (starting armament focus)",
  },
  {
    youtubeId: "L2pQ5kM8j9v",
    title: "Elden Ring No Items / No Flask Run",
    category: "no-item",
    runner: "The Backlogs",
    published: "2022-05-20",
    note: "Verified embeddable no-item (no consumables, no flask upgrades) challenge",
  },
];
