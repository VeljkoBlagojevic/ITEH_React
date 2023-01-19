import React from "react";
import { useState } from "react";

function Guitar({ guitar, onAdd, onRemove, onSet, inBus }) {
  let [stringSize, setStringSize] = useState(null);

  function set(val) {
    setStringSize(val.target.value);
  }

  return (
    <div className="guitar">
      <img className="guitar-img" src={guitar.image} alt={guitar.name}></img>
      <div className="guitar-body">
        <h1 className="guitar-name">{guitar.name}</h1>
        <p className="guitar-description">{guitar.description}</p>
      </div>
      {inBus === false ? (
        <button className="btnAdd" onClick={() => onAdd(guitar)}>
          Add guitar
        </button>
      ) : (
        <button className="btnRemove" onClick={() => onRemove(guitar)}>
          Remove guitar
        </button>
      )}
      {inBus === true ? (
        <>
          <p className="text">String size: {guitar.stringSize}</p>
        </>
      ) : (
        <div className="stringProps">
          <label htmlFor="string-sizes">Choose a string size:</label>
          <select name="string-sizes" id="string-sizes" onChange={set}>
            <option value="11" onChange={set}>11</option>
            <option value="12" onChange={set}>12</option>
            <option value="13" onChange={set}>13</option>
          </select>
          {/* <p>String size:</p>
          <input className="txtStringSize" type="text" onChange={set} />{" "} */}
          <button
            className="btnSubmit"
            onClick={() => onSet(guitar.id, stringSize)}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Guitar;
