import React from "react";
import {TbBus} from "react-icons/tb";

function NavBar({cartNumber}) {

  return <div className="navBar">
    <a>My Inventory</a>
    <TbBus/>
    <p className="guitar-num">{cartNumber}</p>
  </div>;
}

export default NavBar;
