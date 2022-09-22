import { UPDATE_AUTH } from "../../config/actionTypes";
import expertServe from "../../api/expertServe";
import { message } from "antd";

export const login = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_AUTH,
      payload: {
        loading: true,
      },
    });
    const response = await expertServe.post("/Users/login", data);
    await localStorage.setItem("token", response.data.id);
    await localStorage.setItem("auth", JSON.stringify(response.data));

    dispatch({
      type: UPDATE_AUTH,
      payload: {
        loading: false,
        isAuth: true,
        userDetails: response.data,
      },
    });
    message.success("User Logged In.");
  } catch (err) {
    message.error(err.message);
    dispatch({
      type: UPDATE_AUTH,
      payload: {
        loading: false,
        errorMessage: "Error: " + err,
      },
    });
  }
};

export const updateLocalLogin =
  (data, isAuth) => async (dispatch, getState) => {
    dispatch({
      type: UPDATE_AUTH,
      payload: {
        isAuth: isAuth,
        userDetails: data,
      },
    });
  };
