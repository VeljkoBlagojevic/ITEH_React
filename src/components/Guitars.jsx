import React from "react";
import Guitar from "./Guitar";

function Guitars({ guitars, onAdd, onRemove }) {
  return (
    <div>
      {guitars.map((guitar) => (
        <Guitar guitar={guitar} key={guitar.id} onAdd={onAdd} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Guitars;
