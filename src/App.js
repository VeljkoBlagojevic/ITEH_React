import "./App.css";
import Guitars from "./components/Guitars";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [cartNumber, setCartNumber] = useState(0);

  const guitars = [
    {
      id: 1,
      name: "prva gitara",
      description: "prvi opis",
    },
    {
      id: 2,
      name: "druga gitara",
      description: "drugi opis",
    },
    {
      id: 3,
      name: "treca gitara",
      description: "treci opis",
    },
  ];

  function addGuitar(name) {
    console.log(
      "Uspesno smo dodali smo gitaru sa nazivom: " + name + " u autobus"
    );
    setCartNumber(cartNumber + 1);
  }

  function removeGuitar(name) {
    console.log(
      "Uspesno smo izbacili smo gitaru sa nazivom: " + name + " iz autobusa"
    );
    setCartNumber(cartNumber - 1);
  }

  return (
    <div className="App">
      <NavBar cartNumber={cartNumber} />
      <Guitars guitars={guitars} onAdd={addGuitar} onRemove={removeGuitar} />
    </div>
  );
}

export default App;
