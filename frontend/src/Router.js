import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import MyPage from "./MyPage";
import Navigation from "./Navigation"
import App from "./App";

function Router() {
    return (
    <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={App} />        
        <Route path="/MyPage" component={MyPage} />
    </HashRouter>
    );
  }
  
  export default Router;