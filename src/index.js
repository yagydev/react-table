import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./components/app";
import rootReducer from "./reducers";
import { combineForms } from "react-redux-form";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers();
//applyMiddleware(...middleware)y
const store = createStore(rootReducer, enhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
