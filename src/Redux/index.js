import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { MainReducer } from "./Main/MainReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    MainReducer,
  });

export default rootReducer;
