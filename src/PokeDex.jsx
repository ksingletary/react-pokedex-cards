import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  // const [pokemon, setPokemon] = useState([]);
  
  // const addPokemon = async name => {
    //   const response = await axios.get(
      //     `https://pokeapi.co/api/v2/pokemon/${name}/`
      //   );
      //   setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
      // };
  
      
  const [pokemon, setPokemon] = useAxios(`https://pokeapi.co/api/v2/pokemon/`)
  console.log('pokemon before adding',pokemon)
  const addPokemon = async (name) => ([...pokemon,setPokemon([name])])
  console.log('pokemon after adding',pokemon)

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.data.sprites.front_default}
            back={cardData.data.sprites.back_default}
            name={cardData.data.name}
            stats={cardData.data.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
