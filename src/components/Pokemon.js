import React, { useContext } from "react";
import FavoriteContext from "./contexts/FavContexts";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  const { pokemon } = props;

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

  // Mapping for stat names
  const statNameMapping = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SPA",
    "special-defense": "SPD",
    speed: "SPD",
  };

  // Function to get type color
  const getTypeColor = (type, variant = 'bg') => {
    const colors = {
      grass: "green",
      fire: "red",
      water: "blue",
      bug: "yellow",
      normal: "gray",
      poison: "purple",
      electric: "yellow",
      ground: "yellow",
      fairy: "pink",
      fighting: "red",
      psychic: "pink",
      rock: "yellow",
      ghost: "purple",
      ice: "blue",
      dragon: "indigo",
      dark: "gray",
      steel: "gray",
      flying: "indigo",
    };
    const color = colors[type] || "gray";
    if (variant === 'bg') return `bg-${color}-500`;
    if (variant === 'bg-light') return `bg-${color}-200`;
    return `border-${color}-500`;
  };
  
  const statColors = {
      hp: "bg-red-500",
      attack: "bg-orange-500",
      defense: "bg-yellow-500",
      "special-attack": "bg-blue-400",
      "special-defense": "bg-green-400",
      speed: "bg-pink-400",
  }

  const primaryType = pokemon.types[0].type.name;

  return (
    <div className={`pokemon-card-new font-sans rounded-2xl overflow-hidden shadow-lg`}>
      {/* Blue border */}
      <div className="border-4 border-blue-400 rounded-2xl">
        {/* Yellow border */}
        <div className="border-4 border-yellow-400 rounded-xl">
          {/* Main content */}
          <div className="bg-white p-1">
            {/* Header */}
            <div className={`rounded-t-lg ${getTypeColor(primaryType)}`}>
                <div className="flex justify-between items-center text-white p-2">
                    <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mr-2">#{String(pokemon.id).padStart(3, '0')}</span>
                      <button onClick={onHeartClick} className="text-2xl">
                        {heart}
                      </button>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className={`${getTypeColor(primaryType, 'bg-light')} p-1`}>
                <img alt={pokemon.name} src={pokemon.sprites.other['official-artwork'].front_default} className="w-full h-40 object-contain"/>
            </div>

            {/* Types & HP */}
            <div className={`p-2 flex justify-between items-center ${getTypeColor(primaryType, 'bg-light')}`}>
                <div className="flex">
                {pokemon.types.map((typeInfo, index) => (
                    <span key={index} className={`px-3 py-1 mr-2 rounded-full text-white font-bold text-xs ${getTypeColor(typeInfo.type.name)}`}>
                    {typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}
                    </span>
                ))}
                </div>
                <div className="flex items-center">
                <span className="text-md font-bold mr-1">HP</span>
                <span className="text-xl font-bold">{pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat}</span>
                </div>
            </div>

            {/* Info */}
            <div className={`px-2 pt-2 ${getTypeColor(primaryType, 'bg-light')} grid grid-cols-2 gap-2 text-xs`}>
                <div>
                    <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
                    <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
                </div>
                <div>
                    <p className="font-bold">Abilities:</p>
                    <ul className="list-disc list-inside">
                        {pokemon.abilities.slice(0, 2).map((abilityInfo, index) => (
                        <li key={index} className="capitalize">{abilityInfo.ability.name}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Base Stats */}
            <div className={`px-2 py-2 ${getTypeColor(primaryType, 'bg-light')}`}>
                <h3 className="font-bold text-sm mb-1">Status Base:</h3>
                {pokemon.stats.map((statInfo, index) => (
                <div key={index} className="grid grid-cols-6 items-center mb-1 text-xs">
                    <span className="col-span-1 font-bold">{statNameMapping[statInfo.stat.name] || statInfo.stat.name}</span>
                    <div className="col-span-4 bg-gray-300 rounded-full h-3">
                    <div className={`${statColors[statInfo.stat.name] || 'bg-gray-500'} h-3 rounded-full`} style={{ width: `${(statInfo.base_stat / 255) * 100}%` }}></div>
                    </div>
                    <span className="col-span-1 text-right font-bold">{statInfo.base_stat}</span>
                </div>
                ))}
            </div>

            {/* Footer */}
            <div className="text-center text-xs py-1 bg-gray-300 rounded-b-lg">
                <p>©2024 Pokémon/Nintendo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
