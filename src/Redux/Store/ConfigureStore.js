import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import rootReducer from "..";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory({
  basename: "/",
  hashType: "slash",
});

export const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
