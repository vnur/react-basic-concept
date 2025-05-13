import { useEffect, useReducer, useState } from "react";
import "./pokemon.css";
import { useLoaderData } from "react-router-dom";

export const Pokemoon = () => {
  const pokemonData = useLoaderData();
  console.log(pokemonData);
  

  const initialdata = {
    inputdata: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setInputValue":
        return { ...state, inputdata: action.payload };

      default:
        return state;
    }
  };

  const [data,dispatch ] = useReducer(reducer, initialdata)

  const searchPokemonData = pokemonData.filter((item)=>{
   return item.pokemonNameData.includes(data.inputdata)
  })

  console.log(searchPokemonData);
  

  return (
    <>
      <div className="pokemon-input">
        <input
          type="text"
          value={data.inputdata}
          onChange={(e) =>
            dispatch({ type: "setInputValue", payload: e.target.value })
          }
        />
      </div>

      <div className="pokemon-container">
        {searchPokemonData?.map((item, index) => {
          return (
            <div key={index} className="pokemon-card">
              {item.pokemonNameData}
            </div>
          );
        })}
      </div>
    </>
  );
};
