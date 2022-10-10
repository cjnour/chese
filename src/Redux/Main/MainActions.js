import { SET_ROUTE } from "../Constants";
import { useLocation } from "react-router-dom";

export const setRoute = (route) => {
  return {
    type: SET_ROUTE,
    payload: route,
  };
};
