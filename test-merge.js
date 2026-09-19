const state = { a: true, b: true };
const currentStorage = {}; // Result of clearIds in another tab
const merged = { ...state, ...currentStorage };
console.log(merged);
