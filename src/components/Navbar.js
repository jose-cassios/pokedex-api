import React, {useContext} from "react";
import FavoriteContext from "./contexts/FavContexts";

const Navbar = () => {
  const {favoritePokemons} = useContext(FavoriteContext)
  const navbarLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <nav className="flex rounded-md items-center justify-between bg-green-500 m-5 p-4 shadow-md sm:pr-20">
      <div className="hover:scale-110 transition">
        <img
        className="w-auto"
        alt = "PokeApi-logo"
        src={navbarLogo}/>
      </div>
      <div className="sm:text-xl ml-10 bg-slate-300 rounded-md p-2">Favoritos {favoritePokemons.length}❤️</div>
    </nav>
  );
};

export default Navbar;
