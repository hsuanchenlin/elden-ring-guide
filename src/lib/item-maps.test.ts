import { describe, expect, it } from "vitest";
import { starterBuilds } from "../data/builds";
import { flaskPickups } from "../data/flasks";
import {
  acquisitionFor,
  catalogueItemIds,
  earlyWeaponIdFor,
  earlyWeaponIdsByName,
  itemAcquisitions,
  mapFigure,
  mapPlaceholder,
} from "../data/item-maps";

describe("item acquisition catalogue", () => {
  it("covers every flask pickup and every unique early weapon", () => {
    const ids = catalogueItemIds();
    expect(ids).toEqual([...new Set(ids)]);
    expect(ids.length).toBe(flaskPickups.length + new Set(Object.values(earlyWeaponIdsByName)).size);

    for (const pickup of flaskPickups) {
      const item = acquisitionFor(pickup.id);
      expect(item.id).toBe(pickup.id);
    }

    for (const build of starterBuilds) {
      for (const weapon of build.earlyWeapons) {
        const item = acquisitionFor(earlyWeaponIdFor(weapon.name));
        expect(item.id).toBe(earlyWeaponIdsByName[weapon.name]);
      }
    }
  });

  it("publishes Traditional Chinese acquisition copy for every catalogue id", () => {
    for (const id of catalogueItemIds()) {
      const item = acquisitionFor(id);
      expect(item.nameZhTw.trim(), id).not.toBe("");
      expect(item.locationZhTw.trim(), id).not.toBe("");
      expect(item.howToGetZhTw.trim(), id).not.toBe("");
      expect(item.alt.trim(), id).not.toBe("");
      expect(item.alt, id).toContain("地圖待補");
    }
  });

  it("keeps schematic pins inside the map and omits them for character creation", () => {
    const keepsake = acquisitionFor("seed-keepsake");
    expect(keepsake.pin).toBeUndefined();

    for (const id of catalogueItemIds()) {
      const item = itemAcquisitions[id];
      if (!item.pin) continue;
      expect(item.pin.x, id).toBeGreaterThanOrEqual(0);
      expect(item.pin.x, id).toBeLessThanOrEqual(100);
      expect(item.pin.y, id).toBeGreaterThanOrEqual(0);
      expect(item.pin.y, id).toBeLessThanOrEqual(100);
      expect(["confirmed", "approximate"], id).toContain(item.pin.certainty);
    }
  });

  it("uses one labeled blank placeholder with stable dimensions", () => {
    expect(mapPlaceholder).toEqual({ src: "/maps/blank.svg", width: 800, height: 450 });

    for (const id of catalogueItemIds()) {
      const figure = mapFigure(acquisitionFor(id));
      expect(figure.src).toBe(mapPlaceholder.src);
      expect(figure.width).toBe(mapPlaceholder.width);
      expect(figure.height).toBe(mapPlaceholder.height);
      expect(figure.caption).toContain("地圖畫面待補");
    }
  });
});
