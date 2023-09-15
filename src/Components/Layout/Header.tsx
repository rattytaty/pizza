import React from "react";
import logoSvg from '../../assets/img/pizza-logo.svg'
import {CartButton} from "./CartButton";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <Link to="/"  className="header__logo">
                    <img width="38" src={logoSvg} alt="Pizza logo"/>
                    <div>
                        <h1>NY PIZZA</h1>
                        <p>Best pizza all around the world.</p>
                    </div>
                </Link>

               <CartButton/>
            </div>
        </div>
    )
}