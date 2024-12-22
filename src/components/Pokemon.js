import React,{useContext} from "react";
import FavoriteContext from "./contexts/FavContexts";

const Pokemon = (props) => {
  const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
  const { pokemon } = props;
  const onHeartClick = ()=>{
    updateFavoritePokemons(pokemon.name)
  }
  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
  return (
    <div className="flex flex-col items-center shadow-xl justify-center border-4 p-4 border-blue-500 bg-yellow-500 m-7 rounded-md">
      <div className="flex justify-center hover:scale-125 transition">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="scale-125 w-full max-[150px] h-auto object-contain"
        />
      </div>
      <div className="card-body">
        <div className="flex uppercase border-double border-4 border-green-600 space-x-5 font-semibold bg-slate-300 p-2 m-5 rounded-md">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="flex justify-between items-center capitalize font-semibold">
            <div className="pokemon-type">
                {pokemon.types.map((type, index)=>{
                    return(
                        <div key={index} className="pokemon-type-text">{type.type.name}</div>
                    )
                })}
            </div>
            <button className="scale-125 bg-indigo-300 border-2 border-blue-600 rounded-md " onClick={onHeartClick}>{heart}</button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
