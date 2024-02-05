import React from "react";
import { NavLink } from "react-router-dom";

const URL = "https://ongpng.com/wp-content/uploads/2023/04/7-51.png"

export default function Drinks() {
    return (
        <div className="Drinks-gatorade">
            <h1>Quench Your Thirst with Gatorade</h1>
            <img className="Drinks-img" src={URL} alt="drinks" />
            <NavLink exact to='/'>Return to Vending Machine</NavLink>
        </div>
    );
};