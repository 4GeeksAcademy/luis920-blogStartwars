import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardPersonajes = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPersonas(); 
  }, []);

  const handleAddFavorite = (persona) => {
    actions.addFavorite(persona); // Esto ya agrega el personaje a favoritos en el store
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {store.personas.map((persona) => (
          <div key={persona.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="container">
                  <h3>{persona.name}</h3>
                  <p>Gender: {persona.gender}</p>
                  <p>Eye color: {persona.eye_color}</p>
                  <p>Hair color: {persona.hair_color}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={`/demo/${persona.url.split("/")[5]}`}>
                    <button className="info btn btn-primary">More info</button>
                  </Link>
                  <button
                  type="button"
                  className=" añadir btn-secondary " 
                  onClick={() => actions.addFavoritos(persona)}
                  >
                    ♡
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPersonajes;
