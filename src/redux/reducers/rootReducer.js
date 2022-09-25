import { combineReducers } from "redux";
import Auth from "./Auth";
import Incidents from "./Incidents";
import Units from "./units";

const rootReducer = combineReducers({
  auth: Auth,
  units: Units,
  incidents: Incidents,
});

export default rootReducer;
