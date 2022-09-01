import { UPDATE_AUTH } from "../../config/actionTypes";

const INITIAL_STATE = {
  loading: false,
  isAuth: false,
  userDetails: {},
};

const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default Auth;
