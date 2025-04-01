import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetalles = () => {
  const { id } = useParams();  
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setPokemon(data);
      });
  }, [id]);

  if (!pokemon) return <div>Cargando</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        width={200}
      />
      <p>Tipo: {pokemon.types.map(t => t.type.name).join(", ")}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Habilidades:</p>
      <ul>
        {pokemon.abilities.map(a => (
          <li key={a.ability.name}>{a.ability.name}</li>
        ))}
      </ul>
      <p>Estadísticas:</p>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetalles;
