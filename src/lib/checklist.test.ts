import { describe, expect, it } from "vitest";
import {
  CHECKLIST_STORAGE_KEY,
  clearIds,
  countChecked,
  createChecklistSession,
  loadChecklist,
  memoryStorage,
  saveChecklist,
  toggleId,
  type StorageLike,
} from "./checklist";

const KEY = CHECKLIST_STORAGE_KEY;

function readThrowingStorage(): StorageLike {
  return {
    getItem() {
      throw new Error("read denied");
    },
    setItem() {
      /* writes succeed */
    },
  };
}

function writeThrowingStorage(): StorageLike {
  return {
    getItem: () => null,
    setItem() {
      throw new DOMException("quota exceeded", "QuotaExceededError");
    },
  };
}

describe("checklist persistence", () => {
  it("returns an empty state when storage is empty", () => {
    const storage = memoryStorage();
    expect(loadChecklist(KEY, storage)).toEqual({});
  });

  it("round-trips checked ids through storage", () => {
    const storage = memoryStorage();
    expect(saveChecklist(KEY, { "seed-stormhill": true }, storage)).toBe(true);
    expect(loadChecklist(KEY, storage)).toEqual({ "seed-stormhill": true });
  });

  it("ignores corrupt JSON instead of throwing", () => {
    const storage = memoryStorage({ [KEY]: "{not-json" });
    expect(loadChecklist(KEY, storage)).toEqual({});
  });

  it("ignores non-object payloads", () => {
    const storage = memoryStorage({ [KEY]: '["seed-stormhill"]' });
    expect(loadChecklist(KEY, storage)).toEqual({});
  });

  it("toggles a single id without dropping siblings", () => {
    const state = toggleId({ a: true, b: false }, "b");
    expect(state).toEqual({ a: true, b: true });
    expect(toggleId(state, "a")).toEqual({ a: false, b: true });
  });

  it("clears only the ids in the current list", () => {
    expect(clearIds({ a: true, b: true, c: true }, ["a", "b"])).toEqual({ c: true });
  });

  it("counts checked ids from a known list", () => {
    expect(countChecked(["a", "b", "c"], { a: true, c: true, d: true })).toBe(2);
  });
});

describe("storage failure resilience", () => {
  it("returns an empty state when storage is unavailable", () => {
    expect(loadChecklist(KEY, undefined)).toEqual({});
  });

  it("reports unavailable storage as not saved instead of throwing", () => {
    expect(saveChecklist(KEY, { a: true }, undefined)).toBe(false);
  });

  it("returns an empty state when storage throws on read", () => {
    expect(loadChecklist(KEY, readThrowingStorage())).toEqual({});
  });

  it("reports quota-full and other write failures as not saved instead of throwing", () => {
    expect(saveChecklist(KEY, { a: true }, writeThrowingStorage())).toBe(false);
  });
});

describe("checklist session", () => {
  it("persists toggles and reset through working storage", () => {
    const storage = memoryStorage();
    const session = createChecklistSession(KEY, storage);
    expect(session.isPersisting()).toBe(true);
    session.toggle("a");
    expect(session.getState()).toEqual({ a: true });
    session.toggle("b");
    expect(loadChecklist(KEY, storage)).toEqual({ a: true, b: true });
    session.clear(["a"]);
    expect(session.getState()).toEqual({ b: true });
    expect(session.isPersisting()).toBe(true);
  });

  it("restores previously saved state", () => {
    const storage = memoryStorage({ [KEY]: '{"a":true}' });
    const session = createChecklistSession(KEY, storage);
    expect(session.getState()).toEqual({ a: true });
  });

  it("keeps in-memory state authoritative when storage is unavailable", () => {
    const session = createChecklistSession(KEY, undefined);
    expect(session.isPersisting()).toBe(false);
    session.toggle("a");
    session.toggle("b");
    expect(session.getState()).toEqual({ a: true, b: true });
    expect(session.isPersisting()).toBe(false);
  });

  it("keeps accumulating state when storage throws on read", () => {
    const session = createChecklistSession(KEY, readThrowingStorage());
    expect(session.getState()).toEqual({});
    session.toggle("a");
    session.toggle("b");
    expect(session.getState()).toEqual({ a: true, b: true });
    expect(session.isPersisting()).toBe(true);
  });

  it("updates state without throwing when storage throws on write", () => {
    const session = createChecklistSession(KEY, writeThrowingStorage());
    expect(session.isPersisting()).toBe(false);
    expect(() => session.toggle("a")).not.toThrow();
    expect(session.getState()).toEqual({ a: true });
    session.clear(["a"]);
    expect(session.getState()).toEqual({});
    expect(session.isPersisting()).toBe(false);
  });

  it("reflects a write that starts failing mid-session", () => {
    const data: Record<string, string> = {};
    let writable = true;
    const storage: StorageLike = {
      getItem: (key) => data[key] ?? null,
      setItem(key, value) {
        if (!writable) throw new DOMException("quota exceeded", "QuotaExceededError");
        data[key] = value;
      },
    };
    const session = createChecklistSession(KEY, storage);
    session.toggle("a");
    expect(session.isPersisting()).toBe(true);
    writable = false;
    session.toggle("b");
    expect(session.getState()).toEqual({ a: true, b: true });
    expect(session.isPersisting()).toBe(false);
  });
});
