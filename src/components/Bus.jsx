import React from "react";
import Guitar from "./Guitar";

function Bus({ guitars, onRemove }) {
  return (
    <div>
      <h1>These are guitars packed into your bus: </h1>
      {guitars.map((guitar) => (
        <Guitar
          guitar={guitar}
          key={guitar.id}
          inBus={true}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default Bus;
