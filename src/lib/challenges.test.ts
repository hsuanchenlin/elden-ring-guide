import { describe, expect, it } from "vitest";
import { challengeVideos } from "../data/challenges";
import { officialTrailer } from "../data/media";
import type { ChallengeCategory } from "../data/types";

const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

describe("published video catalogues", () => {
  it("gives every challenge entry a well-formed YouTube id, attribution, and date", () => {
    expect(challengeVideos.length).toBeGreaterThan(0);
    for (const video of challengeVideos) {
      expect(video.youtubeId, video.title).toMatch(YOUTUBE_ID);
      expect(video.title.trim()).not.toBe("");
      expect(video.runner.trim()).not.toBe("");
      expect(video.published, video.title).toMatch(ISO_DATE);
    }
  });

  it("uses each YouTube id only once across the trailer and the challenge runs", () => {
    const ids = [officialTrailer.youtubeId, ...challengeVideos.map((video) => video.youtubeId)];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("covers weapon-only, no-HP-leveling, and no-item runs", () => {
    const categories = new Set(challengeVideos.map((video) => video.category));
    const required: ChallengeCategory[] = ["weapon-only", "no-hp-leveling", "no-item"];
    for (const category of required) {
      expect(categories.has(category), category).toBe(true);
    }
  });

  it("embeds the official trailer from the publisher", () => {
    expect(officialTrailer.youtubeId).toMatch(YOUTUBE_ID);
    expect(officialTrailer.publisher).toMatch(/Bandai Namco/);
    expect(officialTrailer.published).toMatch(ISO_DATE);
  });
});
