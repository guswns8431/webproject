import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return( 
    <div className="nav">
        <Link to="/">강의평가|</Link>
        <Link to="/MyPage">|마이페이지</Link>
    </div>
    );
}

export default Navigation;