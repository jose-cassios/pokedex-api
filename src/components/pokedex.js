import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./pagination";

const Pokedex = (props) => {
  const { pokemons, loading, page,setPage, totalPages} = props;
  const onLeftClickHandler = () =>{
      if(page > 0){
        setPage(page-1)
      }
  }

  const onRightClickHandler = () =>{
    if(page+1 !== totalPages){
      setPage(page+1)
    }
  }

  return (
    <div className="grid">
      <div className="flex justify-between p-2 ml-4 mr-4">
        <h1 className="text-2xl font-semibold text-gray-800">Pokedex</h1>
        <Pagination
        page={page+1}
        totalPages={totalPages}
        onLeftClick={onLeftClickHandler}
        onRightClick={onRightClickHandler}/>
      </div>
      {loading ? (
        <div className="flex justify-center font-semibold text-xl">Carregando....</div>
      ) : (
        <div className="grid shadow-md sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pokemons && pokemons.map((pokemon, index)=>{
                return (
                  <Pokemon key={index} pokemon={pokemon}/>
                )
            })}
        </div>
      )}
    </div>
  );
};
export default Pokedex;
