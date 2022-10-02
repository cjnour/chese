import { SET_ROUTE } from "../Constants";

export const setRoute = (route) => {
  return {
    type: SET_ROUTE,
    payload: route,
  };
};
