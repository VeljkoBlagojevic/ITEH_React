import React from "react";
import {TbBus} from "react-icons/tb";

function NavBar() {
  return <div className="navBar">
    <a>My Inventory</a>
    <TbBus/>
    <p className="guitar-num">0</p>
  </div>;
}

export default NavBar;
