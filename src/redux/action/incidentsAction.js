import { UPDATE_INCIDENTS } from "../../config/actionTypes";
import expertServe from "../../api/expertServe";
import { message } from "antd";

export const getIncidents = (payload) => async (dispatch, getState) => {
  try {
    const response = await expertServe.get("/incidents", { params: payload });

    //process it & convert it to desired data structure, then set the store.
    var groupedIncidents = response.data.reduce(function (r, a) {
      r[a.kpiGroup] = r[a.kpiGroup] || [];
      r[a.kpiGroup].push(a);
      return r;
    }, Object.create(null));
    const selectedIncidentId = Object.values(groupedIncidents)[0][0].id;
    dispatch({
      type: UPDATE_INCIDENTS,
      payload: {
        incidents: groupedIncidents,
        selectedIncidentId,
      },
    });
  } catch (err) {
    message.error(err.message);
    dispatch({
      type: UPDATE_INCIDENTS,
      payload: {
        errorMessage: "Error: " + err,
      },
    });
  }
};

export const getIncidentDetails = (incidentId) => async (dispatch) => {
  try {
    const response = await expertServe.get("/incidents/" + incidentId);

    dispatch({
      type: UPDATE_INCIDENTS,
      payload: {
        incidentDetails: response.data,
        selectedIncidentId: incidentId,
      },
    });
  } catch (err) {
    message.error(err.message);
    dispatch({
      type: UPDATE_INCIDENTS,
      payload: {
        errorMessage: "Error: " + err,
      },
    });
  }
};
