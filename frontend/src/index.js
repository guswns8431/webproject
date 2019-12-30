import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Login } from "./components/Login";
import * as serviceWorker from "./serviceWorker";
import Home from "./home";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
