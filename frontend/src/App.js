import React from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./home";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact={true} component={Login} />
          <Route path="/home" exact={true} component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;