import { combineReducers } from "redux";
import blogReducer from "./blog";

const rootReducer = combineReducers({
  blog: blogReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
