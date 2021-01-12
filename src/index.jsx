import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { PurringCats } from "./component/purring-cats";
import configureStore from "./store";
import "./index.css";

const store = configureStore();

const app = (
  <Provider store={store}>
    <PurringCats />
  </Provider>
);
const here = document.querySelector("#here");

// let the fun begin!
render(app, here);
