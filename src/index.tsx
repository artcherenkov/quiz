import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import { store } from "./store/store";
import { setQuestions } from "./store/slices/quiz";
import { RAW_QUESTIONS, transformQuestions } from "./data";

import "./vendor/normalize.css";
import "./vendor/fonts.css";
import "./index.css";

store.dispatch(setQuestions(transformQuestions(RAW_QUESTIONS)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
