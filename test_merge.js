function toggleId(state, id) {
  return { ...state, [id]: !state[id] };
}

let state = { a: false, b: true };
let currentStorage = { a: true };

let merged = { ...state, ...currentStorage };
console.log(merged);
