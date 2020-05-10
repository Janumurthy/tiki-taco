import React from "react"
import Logo from "../assets/images/Logo.png";

export default () => 
{
    return (
        <header>
            <div className="logo-container">
                <img className="logo" src={Logo} alt="Tiki Taco"/>
            </div>
        </header>
    )
}