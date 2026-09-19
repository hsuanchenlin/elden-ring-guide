import { describe, expect, it } from "vitest";
import { flaskChargesFromSeeds, flaskPickups, pickupsByKind, seedsToNextCharge, totalQuantity } from "../data/flasks";
import { allLandmarks, zones } from "../data/zones";
import { starterBuilds } from "../data/builds";

describe("flask charge table", () => {
  it("starts at 4 charges with no seeds", () => {
    expect(flaskChargesFromSeeds(0)).toBe(4);
  });

  it("unlocks the fifth charge with the first seed", () => {
    expect(flaskChargesFromSeeds(1)).toBe(5);
    expect(flaskChargesFromSeeds(2)).toBe(6);
    expect(flaskChargesFromSeeds(3)).toBe(6);
    expect(flaskChargesFromSeeds(4)).toBe(7);
  });

  it("caps at 14 charges after 30 seeds", () => {
    expect(flaskChargesFromSeeds(30)).toBe(14);
    expect(flaskChargesFromSeeds(99)).toBe(14);
    expect(seedsToNextCharge(30)).toEqual({ nextCharges: null, seedsNeeded: 0 });
  });

  it("reports seeds remaining until the next charge", () => {
    expect(seedsToNextCharge(0)).toEqual({ nextCharges: 5, seedsNeeded: 1 });
    expect(seedsToNextCharge(2)).toEqual({ nextCharges: 7, seedsNeeded: 2 });
    expect(seedsToNextCharge(12)).toEqual({ nextCharges: 11, seedsNeeded: 4 });
  });
});

describe("phase 1 catalogue", () => {
  it("counts multi-seed locations separately from pickup locations", () => {
    const phantomTree = flaskPickups.find((pickup) => pickup.id === "seed-phantom-tree");
    expect(phantomTree?.name).toBe("Outer Wall Phantom Tree");
    expect(phantomTree?.quantity).toBe(2);
  });

  it("totals 18 golden seeds across 17 pickup locations", () => {
    const seeds = pickupsByKind("golden-seed");
    expect(seeds).toHaveLength(17);
    expect(totalQuantity(seeds)).toBe(18);
  });

  it("totals one tear per church", () => {
    const tears = pickupsByKind("sacred-tear");
    expect(totalQuantity(tears)).toBe(tears.length);
  });

  it("covers the five route zones in captain order", () => {
    expect(zones.map((zone) => zone.id)).toEqual([
      "limgrave",
      "liurnia",
      "caelid",
      "altus",
      "leyndell",
    ]);
  });

  it("gives every landmark and flask pickup a unique id", () => {
    const ids = [
      ...allLandmarks().map((item) => item.id),
      ...flaskPickups.map((item) => item.id),
    ];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("publishes the three starter archetypes", () => {
    expect(starterBuilds.map((build) => build.id)).toEqual(["vagabond", "samurai", "astrologer"]);
  });
});
