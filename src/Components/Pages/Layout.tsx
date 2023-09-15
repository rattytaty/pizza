import {Header} from "../Layout/Header";
import React from "react";
import {Outlet} from "react-router-dom";
import LoadingCircle from "../Layout/LoadingCircle";


export const Layout = () => {
    return <div className="wrapper">
        <Header/>
        <div className="content">
            <Outlet/>
        </div>
        {false && <LoadingCircle/>}
    </div>

}