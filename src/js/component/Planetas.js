import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardPlanetas = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPlanetas(); // Llamamos a la función para cargar los personajes
  }, []);

  // Función para agregar un personaje a favoritos
  const agregarAFavoritos = (planeta) => {
    actions.agregarAFavoritos(planeta); // Llamamos a la acción para agregar a favoritos en el store
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {store.planetas.map((planeta) => (
          <div key={planeta.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3>{planeta.name}</h3>
                <p>Genero: {planeta.gender}</p>
                <p>Color de ojos: {planeta.eye_color}</p>
                <p>Color de cabello: {planeta.hair_color}</p>
                <Link to={`/personaje/${planeta.uid}`}>
                  <button className="btn btn-primary">Más Información</button>
                </Link>
                <button
                  onClick={() => agregarAFavoritos(planeta)} 
                  className="btn btn-secondary mt-2"
                >
                  Añadir a Favoritos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPlanetas;
