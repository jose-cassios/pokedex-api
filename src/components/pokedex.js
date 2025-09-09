import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./pagination";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-4xl font-bold text-white">Pokédex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="pokeball-loader"></div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};
export default Pokedex;
