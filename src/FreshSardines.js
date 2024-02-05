import React from "react";
import { NavLink } from "react-router-dom";

const URL = "https://dtlavets.com/wp-content/uploads/2015/06/Sardine.png"

export default function FreshSardines(props) {
    return (
        <div className="FreshSardines-fish">
            <h1>Ew! Yuck! Why is this even in the vending machine?!</h1>
            <img className="Sardines-img" src={URL} alt="sardines" />
            <NavLink exact to='/'>Return to Vending Machine</NavLink>
        </div>
    )
};