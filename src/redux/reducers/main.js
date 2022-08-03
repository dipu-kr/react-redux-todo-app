import { combineReducers } from "redux";
import { todoreducers } from "./reducer";

const rootreducers = combineReducers({
  todoreducers,
});

export default rootreducers;
