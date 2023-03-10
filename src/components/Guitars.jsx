import React from "react";
import Guitar from "./Guitar";

function Guitars({ guitars, onAdd, onRemove, onSet }) {
  return (
    <div>
      {guitars.map((guitar) => (
        <Guitar
          guitar={guitar}
          key={guitar.id}
          onAdd={onAdd}
          onRemove={onRemove}
          onSet={onSet}
          inBus={false}
        />
      ))}
    </div>
  );
}

export default Guitars;
