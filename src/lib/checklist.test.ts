import { describe, expect, it } from "vitest";
import {
  CHECKLIST_STORAGE_KEY,
  clearChecks,
  countChecked,
  loadChecklist,
  memoryStorage,
  saveChecklist,
  toggleCheck,
} from "./checklist";

describe("checklist persistence", () => {
  it("returns an empty state when storage is empty", () => {
    const storage = memoryStorage();
    expect(loadChecklist(CHECKLIST_STORAGE_KEY, storage)).toEqual({});
  });

  it("round-trips checked ids through storage", () => {
    const storage = memoryStorage();
    saveChecklist(CHECKLIST_STORAGE_KEY, { "seed-stormhill": true }, storage);
    expect(loadChecklist(CHECKLIST_STORAGE_KEY, storage)).toEqual({ "seed-stormhill": true });
  });

  it("ignores corrupt JSON instead of throwing", () => {
    const storage = memoryStorage({ [CHECKLIST_STORAGE_KEY]: "{not-json" });
    expect(loadChecklist(CHECKLIST_STORAGE_KEY, storage)).toEqual({});
  });

  it("ignores non-object payloads", () => {
    const storage = memoryStorage({ [CHECKLIST_STORAGE_KEY]: '["seed-stormhill"]' });
    expect(loadChecklist(CHECKLIST_STORAGE_KEY, storage)).toEqual({});
  });

  it("toggles a single id without dropping siblings", () => {
    const storage = memoryStorage();
    saveChecklist(CHECKLIST_STORAGE_KEY, { a: true, b: false }, storage);
    const next = toggleCheck(CHECKLIST_STORAGE_KEY, "b", storage);
    expect(next).toEqual({ a: true, b: true });
    expect(toggleCheck(CHECKLIST_STORAGE_KEY, "a", storage)).toEqual({ a: false, b: true });
  });

  it("clears only the ids in the current list", () => {
    const storage = memoryStorage();
    saveChecklist(CHECKLIST_STORAGE_KEY, { a: true, b: true, c: true }, storage);
    expect(clearChecks(CHECKLIST_STORAGE_KEY, ["a", "b"], storage)).toEqual({ c: true });
  });

  it("counts checked ids from a known list", () => {
    expect(countChecked(["a", "b", "c"], { a: true, c: true, d: true })).toBe(2);
  });
});
