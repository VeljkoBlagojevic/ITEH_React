import React from "react";
import { TbBus } from "react-icons/tb";
import { Link } from "react-router-dom";

function NavBar({ busNumber }) {
  return (
    <div className="navBar">
      <Link to="/" className="home-button">My Inventory</Link>
      <Link to="/bus" className="bus-button">
        <TbBus />
      </Link>
      <p className="guitar-num">{busNumber}</p>
    </div>
  );
}

export default NavBar;
