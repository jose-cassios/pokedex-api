import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Seachbar";
import Pokedex from "./components/pokedex";
import { getPokemons, getPokemonsData, searchPokemon } from "./api";
import { FavoriteProvider } from "./components/contexts/FavContexts";

const favoriteKey = "favorites";
function App() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 27;
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("FetchPokemons error", error);
    }
  };

  const loadFavoritePokemons = () => {
    try {
      const pokemons = JSON.parse(window.localStorage.getItem(favoriteKey)) || [];
      setFavorites(pokemons);
    } catch (error) {
      console.error("Failed to load favorite pokemons from localStorage", error);
    }
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoriteKey, JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  };

  const onSearchHandler = async (pokemon) =>{
    if(!pokemon){
      return fetchPokemons();
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result){
      setNotFound(true)
    }else{
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <div className="container mx-auto">
        <Navbar/>
        <Searchbar onSearch={onSearchHandler}/>
        {notFound ? (
          <div className="flex font-semibold capitalize ml-4"> Pokemon Não Encontrado</div>
          ) : 
        (<Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />)}
      </div>
    </FavoriteProvider>
  );
}

export default App;
