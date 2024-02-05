import React from "react";
import { NavLink } from "react-router-dom";

const URL = "https://pngimg.com/uploads/potato_chips/potato_chips_PNG79.png"

export default function Chips() {
    return (
        <div className="Chips-bag">
            <h1>Yum! I love Lays! </h1>
            <img className="Chips-img" src={URL} alt="chips" />
            <div
        style={{
          display: "flex",
          justifyContents: "center",
          alignItems: "center",
        }}
      >
      </div>
            <NavLink exact to='/'>Return to Vending Machine</NavLink>
        </div>
    );
};