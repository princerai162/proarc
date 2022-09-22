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

    dispatch({
      type: UPDATE_INCIDENTS,
      payload: {
        loading: false,
        incidents: response.data,
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
