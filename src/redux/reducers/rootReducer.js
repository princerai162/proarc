import { combineReducers } from "redux";
import Auth from "./Auth";

const rootReducer = combineReducers({
  auth: Auth,
});

export default rootReducer;
