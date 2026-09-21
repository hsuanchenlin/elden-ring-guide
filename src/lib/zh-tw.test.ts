import { describe, expect, it } from "vitest";
import { starterBuilds } from "../data/builds";
import { starterBuildCopyZhTw, statCopyZhTw, zoneCopyZhTw } from "../data/zh-tw";
import { zones } from "../data/zones";

const digits = (text: string) => text.match(/\d+/g);

describe("zh-TW catalogue copy", () => {
  it("names every zone and keeps its level and upgrade brackets in step with the English route", () => {
    for (const zone of zones) {
      const copy = zoneCopyZhTw[zone.id];
      expect(copy.name.trim(), zone.id).not.toBe("");
      expect(digits(copy.levelRange), zone.id).toEqual(digits(zone.levelRange));
      expect(digits(copy.weaponUpgrade), zone.id).toEqual(digits(zone.weaponUpgrade));
      expect(digits(copy.somberUpgrade), zone.id).toEqual(digits(zone.somberUpgrade));
      expect(digits(copy.vigorTarget), zone.id).toEqual(digits(zone.vigorTarget));
      expect(copy.epithet.trim(), zone.id).not.toBe("");
    }
  });

  it("names every starter build", () => {
    for (const build of starterBuilds) {
      const copy = starterBuildCopyZhTw[build.id];
      expect(copy, build.id).toBeDefined();
      expect(copy.className.trim()).not.toBe("");
      expect(copy.archetype.trim()).not.toBe("");
    }
  });

  it("names every opening stat on the starter builds", () => {
    const stats = Object.keys(starterBuilds[0].stats);
    expect(stats.length).toBeGreaterThan(0);
    for (const stat of stats) {
      expect(statCopyZhTw[stat]?.trim(), stat).not.toBe("");
    }
  });
});
