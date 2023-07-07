import {Header} from "../Header";
import React from "react";
import {Outlet} from "react-router-dom";

export const Layout = ()=>{
return <div className="wrapper">
    <Header/>
    <div className="content">
    <Outlet/>
    </div>
    </div>
}