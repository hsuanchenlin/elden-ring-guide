function loadChecklist(s) { return s.data ? JSON.parse(s.data) : {}; }
function saveChecklist(state, s) { 
  if (!s.writable) return false;
  s.data = JSON.stringify(state);
  return true;
}

const storage = { data: JSON.stringify({ "tear-1": false }), writable: true };

function createSession() {
  let state = loadChecklist(storage);
  let persisting = saveChecklist(state, storage);
  return {
    getState: () => state,
    toggle: (id) => {
      if (persisting) {
        state = { ...state, ...loadChecklist(storage) };
      }
      state = { ...state, [id]: !state[id] };
      persisting = saveChecklist(state, storage);
      return state;
    }
  };
}

const list1 = createSession();
const list2 = createSession();

// List 2 toggles tear-1 (storage works)
list2.toggle("tear-1");
console.log("List 2 toggled tear-1", list2.getState());
// List 1 toggles seed-1 (should see tear-1 from storage)
list1.toggle("seed-1");
console.log("List 1 toggled seed-1", list1.getState());

// Storage fails
storage.writable = false;
list1.toggle("seed-2");
console.log("List 1 toggled seed-2 (fails)", list1.getState());
list1.toggle("seed-1"); // untoggle
console.log("List 1 untoggled seed-1 (fails)", list1.getState());
list1.toggle("seed-3");
console.log("List 1 toggled seed-3 (fails)", list1.getState());
