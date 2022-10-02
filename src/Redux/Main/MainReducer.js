import { SET_ROUTE } from "../Constants";
import initialState from "./InitialState";

export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE: {
      return {
        ...state,
        width: action.payload,
      };
    }
    default:
      return state;
  }
};
