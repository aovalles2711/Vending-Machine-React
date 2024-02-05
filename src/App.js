import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Drinks from "./Drinks";
import FreshSardines from "./FreshSardines";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={VendingMachine} />
          <Route path="/Chips" exact Component={Chips} />
          <Route path="/Drinks" exact Component={Drinks} />
          <Route path="/FreshSardines" exact Component={FreshSardines} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
