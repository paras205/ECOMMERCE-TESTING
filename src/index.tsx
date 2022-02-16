import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { makeStore } from "src/store/store";
import App from "./App";

const store = makeStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
