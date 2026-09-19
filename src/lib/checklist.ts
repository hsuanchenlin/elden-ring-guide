export const CHECKLIST_STORAGE_KEY = "tarnished-codex:v1";

export type ChecklistState = Record<string, boolean>;

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem?(key: string): void;
}

function canUseStorage(storage?: StorageLike): storage is StorageLike {
  return storage !== undefined;
}

export function memoryStorage(initial: Record<string, string> = {}): StorageLike {
  const data = { ...initial };
  return {
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem(key, value) {
      data[key] = value;
    },
    removeItem(key) {
      delete data[key];
    },
  };
}

export function loadChecklist(key: string, storage?: StorageLike): ChecklistState {
  if (!canUseStorage(storage)) return {};
  try {
    const raw = storage.getItem(key);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const state: ChecklistState = {};
    for (const [id, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof value === "boolean") state[id] = value;
    }
    return state;
  } catch {
    return {};
  }
}

export function saveChecklist(key: string, state: ChecklistState, storage?: StorageLike): void {
  if (!canUseStorage(storage)) return;
  storage.setItem(key, JSON.stringify(state));
}

export function toggleCheck(key: string, id: string, storage?: StorageLike): ChecklistState {
  const state = loadChecklist(key, storage);
  const next = { ...state, [id]: !state[id] };
  saveChecklist(key, next, storage);
  return next;
}

export function clearChecks(key: string, ids: readonly string[], storage?: StorageLike): ChecklistState {
  const state = { ...loadChecklist(key, storage) };
  for (const id of ids) delete state[id];
  saveChecklist(key, state, storage);
  return state;
}

export function countChecked(ids: readonly string[], state: ChecklistState): number {
  return ids.reduce((count, id) => count + (state[id] ? 1 : 0), 0);
}

export function browserStorage(): StorageLike | undefined {
  try {
    if (typeof localStorage === "undefined") return undefined;
    return localStorage;
  } catch {
    return undefined;
  }
}
