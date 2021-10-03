import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import repositoriesReducer from "./repositoriesReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  auth: authReducer,
  message: messageReducer,
  repositories: repositoriesReducer,
  project: projectReducer,
});
