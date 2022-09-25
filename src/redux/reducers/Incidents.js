import { UPDATE_INCIDENTS } from "../../config/actionTypes";

const INITIAL_STATE = {
  loading: false,
  errorMessage: "",
  incidents: {},
  selectedIncidentId: "",
  incidentDetails: {},
};

const Incidents = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_INCIDENTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default Incidents;
