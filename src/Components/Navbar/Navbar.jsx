import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nlogo text-center w-100 mt-3">
        <img
          className="h-50 w-50"
          src={require("./img/spacex.png")}
          alt="spacex logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
