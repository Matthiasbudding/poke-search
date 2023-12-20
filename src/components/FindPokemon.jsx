import React from "react";
import "./FindPokemon.css";

export default function FindPokemon(props) {
  let timer;
  let value;
  const onChange = (event) => {
    value = event.target.value;
    clearTimeout(timer);
    timer = setTimeout(() => props.onChange(value), 500);
  };

  return (
    <>
      <label>
        Search: <input name="search" onChange={onChange} />
      </label>
    </>
  );
}
