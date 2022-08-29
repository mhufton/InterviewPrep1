import "./styles.css";
import React from "react";
import Random from "./Random";
import Favs from "./Favs";

const increase = (setCount, count) => {
  setCount(count + 1);
};

const decrease = (setCount, count) => {
  setCount(count - 1);
};

const resetCount = (setCount) => {
  setCount(0);
};

const randomizer = (random, setRandom) => {
  setRandom(!random);
};

export default function App() {
  const [count, setCount] = React.useState(0);
  const [random, setRandom] = React.useState(false);
  const [favs, setFavs] = React.useState([]);

  const addToFav = (value) => {
    if (!favs.includes(value)) setFavs((current) => [...current, value]);
  };

  return (
    <div className="App">
      <div>
        <div>
          <button onClick={() => increase(setCount, count)}>Increment</button>
          <button onClick={() => decrease(setCount, count)}>Decrement</button>
          <button onClick={() => resetCount(setCount, count)}>Reset</button>
        </div>
        <h2>Count: {count}</h2>
      </div>
      <button onClick={() => randomizer(random, setRandom)}>
        Randomize Users
      </button>
      {favs.length ? <Favs favs={favs} /> : <p>No favorites selected</p>}
      <Random random={random} addToFav={addToFav} />
    </div>
  );
}
