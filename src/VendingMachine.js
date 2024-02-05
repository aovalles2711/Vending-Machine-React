import React from "react";
import { NavLink } from "react-router-dom";

const URL = "https://images.creativefabrica.com/products/previews/2023/10/28/hWQyABIVH/2XNq2nXxRcrVWf3UIePBc79H64t-mobile.jpg"
const VendingMachine = () => {
    return (
        <div className="Vending-Machine-Frontpage">
            <h1>Vending Machine</h1>
            <img className="VendingMachine-img" src={URL} alt="vending-machine" />
            <ul>
                <li><NavLink to="/Chips">Chips</NavLink></li>
                <li><NavLink to="/Drinks">Drinks</NavLink></li>
                <li><NavLink to="/FreshSardines">FreshSardines</NavLink></li>
            </ul>
        </div>
    );
}


export default VendingMachine;