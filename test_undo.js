const currentStorage = { "seed-1": false, "tear-1": true }; // List 2 set tear-1 to true
const state = { "seed-1": false, "tear-1": false }; // List 1's initial state
const merged = { ...currentStorage, ...state };
console.log(merged);
