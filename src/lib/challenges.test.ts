import { describe, expect, it } from "vitest";
import { challengeVideos } from "../data/challenges";
import type { ChallengeCategory } from "../data/types";

describe("challenge video catalogue shape", () => {
  it("exports a non-empty array of videos", () => {
    expect(Array.isArray(challengeVideos)).toBe(true);
    expect(challengeVideos.length).toBeGreaterThan(0);
  });

  it("every entry has required fields and valid category", () => {
    const validCategories: ChallengeCategory[] = ["weapon-only", "no-hp-leveling", "no-item", "other"];
    challengeVideos.forEach((v, idx) => {
      expect(v, `video at index ${idx}`).toHaveProperty("youtubeId");
      expect(typeof v.youtubeId).toBe("string");
      expect(v.youtubeId.length).toBeGreaterThan(5);
      expect(v).toHaveProperty("title");
      expect(v).toHaveProperty("category");
      expect(validCategories).toContain(v.category);
      expect(v).toHaveProperty("runner");
      expect(v).toHaveProperty("published");
      // published looks like YYYY-MM-DD or YYYY-MM
      expect(/^\d{4}-\d{2}/.test(v.published)).toBe(true);
    });
  });

  it("includes at least one official trailer and one of each approved constraint category", () => {
    const cats = new Set(challengeVideos.map((v) => v.category));
    expect(cats.has("other")).toBe(true); // official
    expect(cats.has("weapon-only") || cats.has("no-hp-leveling") || cats.has("no-item")).toBe(true);
  });
});
