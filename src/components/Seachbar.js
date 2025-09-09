import React, { useState } from "react";


const Searchbar = (props) => {
  const [search, setSearch] = useState("dito");
  const {onSearch} = props
  const onChangeHandler = (e) => {

    setSearch(e.target.value);
    if(e.target.value.length === 0){
        onSearch(undefined)
    }
  };

  const onClickHandler = () => {
    const pokemonName = search.toLowerCase();
    onSearch(pokemonName);
  };

  return (
    <div className="flex bg-blue-500 mb-5 p-4 shadow-md rounded-md mr-5 ml-5 space-x-2">
      <div className="searchbar">
        <input className="p-2 mr-1" placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>
      <div className="p-1 bg-slate-300 font-semibold rounded-md border-double border-4 border-green-600">
        <button className=" transform active:scale-95 rounded font-semibold" onClick={onClickHandler}> Buscar Pokemon</button>
      </div>
    </div>
  );
};
export default Searchbar;
