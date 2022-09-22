import { combineReducers } from "redux";
import Auth from "./Auth";
import Incidents from "./Incidents";

const rootReducer = combineReducers({
  auth: Auth,
  incidents: Incidents,
});

export default rootReducer;
