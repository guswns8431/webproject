import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import MyPage from "./MyPage";
import Navigation from "./Navigation"
import Eval from "./Eval";

function Router() {
    return (
    <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Eval} />        
        <Route path="/MyPage" component={MyPage} />
    </HashRouter>
    );
  }
  
  export default Router;