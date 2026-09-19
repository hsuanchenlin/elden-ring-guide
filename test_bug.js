function loadChecklist(storage) {
  const raw = storage.getItem("test");
  return raw ? JSON.parse(raw) : {};
}
function saveChecklist(state, storage) {
  try { storage.setItem("test", JSON.stringify(state)); return true; }
  catch { return false; }
}

const data = {};
let writable = true;
const storage = {
  getItem: () => data["test"] ?? null,
  setItem: (k, v) => { if (!writable) throw new Error(); data[k] = v; }
};

let state = {};
function toggle(id) {
  const currentStorage = loadChecklist(storage);
  state = { ...state, ...currentStorage, [id]: !(state[id] ?? currentStorage[id]) };
  saveChecklist(state, storage);
  return state;
}

toggle("a"); // a: true. saved.
writable = false; // storage fails
toggle("b"); // a: true, b: true. state updated, not saved.
toggle("a"); // a: false, b: true. state updated, not saved.
const finalState = toggle("c"); // a: true? b: true? c: true?
console.log(finalState);
