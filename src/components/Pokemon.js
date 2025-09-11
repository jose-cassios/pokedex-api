import React, { useContext, useState } from "react";
import FavoriteContext from "./contexts/FavContexts";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  const { pokemon } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  const onHeartClick = (e) => {
    e.stopPropagation();
    updateFavoritePokemons(pokemon.name);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

  return (
    <div
      className={`pokemon-card ${isFlipped ? "is-flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="pokemon-card-inner">
        <div className="pokemon-card-front">
          <div className="flex justify-center">
            <img
              alt={pokemon.name}
              src={pokemon.sprites.front_default}
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="w-full p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold capitalize">{pokemon.name}</h3>
              <div className="text-lg font-semibold">#{pokemon.id}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                {pokemon.types.map((type, index) => {
                  return (
                    <div
                      key={index}
                      className="px-2 py-1 bg-gray-200 rounded-full text-sm font-semibold"
                    >
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
              <button
                className="text-2xl"
                onClick={onHeartClick}
              >
                {heart}
              </button>
            </div>
          </div>
        </div>
        <div className="pokemon-card-back">
            <div className="w-full p-4">
                <h3 className="text-xl font-bold capitalize mb-2">{pokemon.name} Details</h3>
                <p><strong>Height:</strong> {pokemon.height / 10} m</p>
                <p><strong>Weight:</strong> {pokemon.weight / 10} kg</p>
                <h4 className="font-bold mt-2">Abilities:</h4>
                <ul>
                    {pokemon.abilities.map((ability, index) => (
                        <li key={index}>{ability.ability.name}</li>
                    ))}
                </ul>
                <h4 className="font-bold mt-2">Base Stats:</h4>
                <ul>
                    {pokemon.stats.map((stat, index) => (
                        <li key={index}>{stat.stat.name}: {stat.base_stat}</li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
