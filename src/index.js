import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import loadable from "@loadable/component";

import "bootstrap/dist/css/bootstrap.min.css";

// import reportWebVitals from "./reportWebVitals";

const Provider = loadable(() => import("./App/utils/stateProvider"), {
  resolveComponent: (mod) => mod.Provider,
  fallback: <></>,
});

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector("div#content")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
