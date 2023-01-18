import React from "react";
import { TbSquarePlus, TbSquareMinus } from "react-icons/tb";

function Guitar({ guitar, onAdd, onRemove }) {
  return (
    <div>
      <img
        className="guitar-img"
        src="https:/picsum.photos/200"
        alt="Guitar 1"
      ></img>
      <div className="guitar-body">
        <h3 className="guitar-name">{guitar.name}</h3>
        <p className="guitar-description">{guitar.description}</p>
      </div>
      <button className="btn" onClick={() => onAdd(guitar.name)}>
        <TbSquarePlus />
      </button>
      <button className="btn" onClick={() => onRemove(guitar.name)}>
        <TbSquareMinus />
      </button>
    </div>
  );
}

export default Guitar;
