import { UPDATE_UNITS } from "../../config/actionTypes";

const INITIAL_STATE = {
  loading: true,
  errorMessage: "",
  selectedUnitId: undefined,
  units: [],
};

const Units = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_UNITS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default Units;
