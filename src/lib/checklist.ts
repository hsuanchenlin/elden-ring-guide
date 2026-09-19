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

export function saveChecklist(key: string, state: ChecklistState, storage?: StorageLike): boolean {
  if (!canUseStorage(storage)) return false;
  try {
    storage.setItem(key, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}

export function toggleId(state: ChecklistState, id: string): ChecklistState {
  return { ...state, [id]: !state[id] };
}

export function clearIds(state: ChecklistState, ids: readonly string[]): ChecklistState {
  const next = { ...state };
  for (const id of ids) delete next[id];
  return next;
}

export interface ChecklistSession {
  getState(): ChecklistState;
  isPersisting(): boolean;
  toggle(id: string): ChecklistState;
  clear(ids: readonly string[]): ChecklistState;
}

export function createChecklistSession(key: string, storage?: StorageLike): ChecklistSession {
  let state = loadChecklist(key, storage);
  // Re-saving the freshly loaded state is idempotent and doubles as a
  // writability probe, so an unusable storage is flagged before the first toggle.
  let persisting = saveChecklist(key, state, storage);
  return {
    getState: () => state,
    isPersisting: () => persisting,
    toggle(id) {
      if (persisting) {
        state = loadChecklist(key, storage);
      }
      state = toggleId(state, id);
      persisting = saveChecklist(key, state, storage);
      return state;
    },
    clear(ids) {
      if (persisting) {
        state = loadChecklist(key, storage);
      }
      state = clearIds(state, ids);
      persisting = saveChecklist(key, state, storage);
      return state;
    },
  };
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
