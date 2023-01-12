import React from "react";
import { TbSquarePlus, TbSquareMinus } from "react-icons/tb";

function Guitar() {
  return (
    <div>
      <img
        className="guitar-img"
        src="https:/picsum.photos/200"
        alt="Guitar 1"
      ></img>
      <div className="guitar-body">
        <h3 className="guitar-name">Guitar name</h3>
        <p className="guitar-description">
          This is first guitar in the inventory!
        </p>
      </div>
      <TbSquarePlus />
      <TbSquareMinus />
    </div>
  );
}

export default Guitar;
