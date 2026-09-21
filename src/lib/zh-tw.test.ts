import { describe, expect, it } from "vitest";
import { starterBuilds } from "../data/builds";
import { starterBuildCopyZhTw, zoneCopyZhTw } from "../data/zh-tw";
import { zones } from "../data/zones";

const digits = (text: string) => text.match(/\d+/g);

describe("zh-TW catalogue copy", () => {
  it("names every zone and keeps its level and upgrade brackets in step with the English route", () => {
    for (const zone of zones) {
      const copy = zoneCopyZhTw[zone.id];
      expect(copy.name.trim(), zone.id).not.toBe("");
      expect(digits(copy.levelRange), zone.id).toEqual(digits(zone.levelRange));
      expect(digits(copy.weaponUpgrade), zone.id).toEqual(digits(zone.weaponUpgrade));
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
});
