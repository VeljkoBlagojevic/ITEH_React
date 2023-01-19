import "./App.css";
import Guitars from "./components/Guitars";
import NavBar from "./components/NavBar";
import Bus from "./components/Bus";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Covid from "./components/Covid";

function App() {
  const [busNumber, setBusNumber] = useState(0);
  const [covidCasesDeath, setCovidCasesDeath] = useState(0);
  const [addedGuitars, setAddedGuitars] = useState([]);
  const [guitars] = useState([
    {
      id: 1,
      name: "Ibanez GRG121DX-BKF",
      image:
        "https://images.musicstore.de/images/1600/ibanez-grg121dx-bkf-black-flat_1_GIT0034063-000.jpg",
      description:
        "The Ibanez Gio GRG121DX-BKF Black Flat impressively demonstrates that a well playable and above all good sounding instrument does not have to cost a great deal of money. The classic RG contours of the poplar body with wide tummy-cut and slanted armrest ensure lasting enjoyment even after hours of sessions, while the slim maple neck in GRG profile with flat fretboard allows nimble and precise actions in all positions. Two proprietary Ibanez IBZ-6 ceramic humbuckers in neck and bridge position ultimately provide the official sound of rock to modern metal. Reliable hardware in the form of an Ibanez F106 fixed bridge and tuning stable Ibanez die-cast tuners completes the Ibanez Gio GRG121DX-BKF Black Flat.",
      stringSize: 11,
      inBus: false,
    },
    {
      id: 2,
      name: "Gibson Les Paul Tribute",
      image:
        "https://images.musicstore.de/images/1600/gibson-les-paul-tribute-satin-tobacco-sunburst_1_GIT0049503-000.jpg",
      description:
        "The Gibson Les Paul Tribute Satin Tobacco Burst captures the Vibe sound of the legendary Singlecut electric guitar skillfully and convinces at the same time with agile playing characteristics. For example, the lightweight mahogany body takes a comfortable position on both the belt and the thigh thanks to - Ultra Modern -Weight-Relief, while the rounded profile of the glued maple neck lies comfortably in the hand. In addition, two Gibson 490 pickups with -II Alnico magnets provide the classically powerful Les Paul with endless sustain, which has always been Rock regarded as the perfect foundation for blues. In addition to traditional Vintage Deluxe Keystone mechanics.",
      stringSize: 11,
      inBus: false,
    },
    {
      id: 3,
      name: "Jackson X Series King V",
      image:
        "https://images.musicstore.de/images/1600/jackson-x-series-king-v-kvxmg-gloss-black_1_GIT0050161-000.jpg",
      description:
        "The Jackson X Series King V KVXMG Gloss Black is a premium metal guitar with high quality features and optimal playing characteristics. Based on the sleek King-V design with elaborate neck-through construction, the electric guitar features a full-length maple neck with Laurel fingerboard and poplar body wing. The flat Speed Neck profile and the compound radius, which increases from 12 to 16, ensure extremely manoeuvrable handling, which makes every riff and solos much easier. In addition, the proven combination of an EMG 85 on the neck and an EMG 81 on the bridge, which is the gold standard for hot rock and metal sounds for a reason, ensures adequate sound conversion. With their high transparency and crisp attack, the active humbuckers precisely reproduce every note, even in drop tunings. Last but not least, the Jackson X Series King V KVXMG Gloss Black features a Floyd Rose Special Double Locking tremolo for uninhibited lead techniques with squeals and dive bombs.",
      stringSize: 11,
      inBus: false,
    },
  ]);

  function refreshFnc() {
    let newGuitars = guitars.filter((g) => g.inBus === true);
    setAddedGuitars(newGuitars);
  }

  function setStringSize(id, stringSize) {
    guitars
      .filter((guitar) => guitar.id === id)
      .forEach((guitar) => (guitar.stringSize = stringSize));
  }

  function addGuitar(guitar) {
    guitars
      .filter((g) => g.id === guitar.id)
      .filter((g) => g.inBus === false)
      .forEach((g) => {
        setBusNumber(busNumber + 1);
        g.inBus = true;
      });

    refreshFnc();
  }

  function removeGuitar(guitar) {
    guitars
      .filter((g) => g.id === guitar.id)
      .forEach((g) => {
        g.inBus = false;
        setBusNumber(busNumber - 1);
      });
    refreshFnc();
  }

  return (
    <BrowserRouter className="App">
      <NavBar busNumber={busNumber} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>These are all your guitars in inventory: </h1>
              <Guitars
                guitars={guitars}
                onAdd={addGuitar}
                onRemove={removeGuitar}
                onSet={setStringSize}
              />
            </>
          }
        ></Route>
        <Route
          path="/bus"
          element={<Bus guitars={addedGuitars} onRemove={removeGuitar} />}
        ></Route>
      </Routes>
      <Covid
        setCovidCasesDeath={setCovidCasesDeath}
        covidCasesDeath={covidCasesDeath}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
