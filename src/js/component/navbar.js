import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"; 

export const Navbar = () => {
  const { store } = useContext(Context); 
  const [isOpen, setIsOpen] = useState(false); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="navbar navbar-dark bg-black mb-3">
      <Link to="/">
        <img
          className="logo-starwars"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
          alt="logo Starwars"
        />
      </Link>
      <div className="ml-auto">
        <div className="btn-group">
          <button
            type="button"
            className="btn-favorites btn-primary dropdown-toggle"
            onClick={toggleDropdown} 
            aria-haspopup="true"
            aria-expanded={isOpen ? "true" : "false"} 
          >
            Favorites
          </button>
          <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
            {store.favoritos && store.favoritos.length > 0 ? (
              store.favoritos.map((persona) => (
                <Link
                  key={persona.uid}
                  to={`/personaje/${persona.uid}`}
                  className="dropdown-item"
                >
                  {persona.name}
                </Link>
              ))
            ) : (
              <p className="dropdown-item">No hay favoritos</p>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
