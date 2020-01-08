import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Eval from "./Eval";
import MyPage from "./MyPage";
import { Login } from "./Login";
import  Home from "./Home";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Home/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA 
serviceWorker.unregister();
