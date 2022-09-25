import { UPDATE_UNITS } from "../../config/actionTypes";
import expertServe from "../../api/expertServe";
import { message } from "antd";

export const getUnits = (payload) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_UNITS,
      payload: {
        loading: true,
      },
    });
    const response = await expertServe.get("/units", { params: payload });

    dispatch({
      type: UPDATE_UNITS,
      payload: {
        loading: false,
        units: response.data,
      },
    });
  } catch (err) {
    message.error(err.message);
    dispatch({
      type: UPDATE_UNITS,
      payload: {
        loading: false,
        errorMessage: "Error: " + err,
      },
    });
  }
};

export const updateSelectedUnitId = () => async (dispatch) => {
  const selectedUnit = await localStorage.getItem("selected_unit");
  dispatch({
    type: UPDATE_UNITS,
    payload: {
      loading: false,
      selectedUnitId: selectedUnit != null ? selectedUnit : undefined,
    },
  });
};
