import { createStore } from "redux";
import rootreducers from "./redux/reducers/main";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const listData = JSON.stringify(state);
    localStorage.setItem("list", listData);
  } catch (e) {
    console.warn(e);
  }
}

//load string from localStorage and convert into an object
//invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const listData = localStorage.getItem("list");
    if (listData === null) return undefined;
    return JSON.parse(listData);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any value that we already have saved
const store = createStore(rootreducers, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
