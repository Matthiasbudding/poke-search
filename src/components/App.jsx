import React, { useState, useEffect } from "react";
import "./App.css";
import FindPokemon from "./FindPokemon";
import Pokemon from "./Pokemon";
import eevee from "../eevee.json";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [query, setQuery] = useState(null);
  const [activePokemon, setActivePokemon] = useState(eevee);

  useEffect(() => {
    fetch(`${API_URL}/${query}`)
      .then((response) => response.json())
      .then((data) => {
        setActivePokemon(data);
      });
  }, [query]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Find your own Pokemon now!</p>
        <FindPokemon onChange={setQuery} />
      </header>
      <Pokemon pokemon={activePokemon} />
    </div>
  );
}

export default App;
