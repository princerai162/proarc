import { UPDATE_AUTH } from "../../config/actionTypes";
import expertServe from "../../api/expertServe";
import { message } from "antd";

export const register = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_AUTH,
      payload: {
        loading: true,
      },
    });
    const response = await expertServe.post("/login", data);
    if (response.data.success) {
      await localStorage.setItem("token", response.data.data.token);
      //await localStorage.setItem("user_data", response.data.data.token);
      dispatch({
        type: UPDATE_AUTH,
        payload: {
          loading: false,
          isAuth: true,
        },
      });
      message.success(response.data.message);
    } else {
      dispatch({
        type: UPDATE_AUTH,
        payload: {
          loading: false,
          isAuth: false,
          errorMessage: "Error: " + response.data.message,
        },
      });
      message.error(response.data.message);
    }
  } catch (err) {
    dispatch({
      type: UPDATE_AUTH,
      payload: {
        loading: false,
        errorMessage: "Error: " + err,
      },
    });
  }
};
