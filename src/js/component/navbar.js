import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context); 

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
        <div className="dropdown">
          <button
            className="btn bg-primary  text-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favoritos.length > 0 ? (
              store.favoritos.map((favorito, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  <span>{favorito.name}</span>
                  <button
                    className="btn btn-sm  ms-2"
                    onClick={() => actions.removeFavoritos(favorito.name)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </li>
              ))
            ) : (
              <li className="dropdown-item text-muted">add Favorites</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
