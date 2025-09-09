import React, { useContext } from "react";
import FavoriteContext from "./contexts/FavContexts";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const navbarLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png";

  return (
    <nav className="flex items-center justify-between p-4 my-4">
      <div>
        <img
          className="w-48"
          alt="PokeApi-logo"
          src={navbarLogo}
        />
      </div>
      <div className="text-white font-bold text-lg">
        Favoritos {favoritePokemons.length} ❤️
      </div>
    </nav>
  );
};

export default Navbar;
