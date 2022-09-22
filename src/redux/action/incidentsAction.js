import { UPDATE_INCIDENTS } from "../../config/actionTypes";
import expertServe from "../../api/expertServe";
import { message } from "antd";

export const getIncidents = (payload) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_INCIDENTS,
      payload: {
        loading: true,
      },
    });
    const response = await expertServe.get("/incidents", { params: payload });

    //process it & convert it to desired data structure, then set the store.
    var groupedIncidents = response.data.reduce(function (r, a) {
      r[a.kpiGroup] = r[a.kpiGroup] || [];
      r[a.kpiGroup].push(a);
      return r;
    }, Object.create(null));

    dispatch({
      type: UPDATE_INCIDENTS,
      payload: {
        loading: false,
        incidents: groupedIncidents,
      },
    });
  } catch (err) {
    message.error(err.message);
    dispatch({
      type: UPDATE_INCIDENTS,
      payload: {
        loading: false,
        errorMessage: "Error: " + err,
      },
    });
  }
};
