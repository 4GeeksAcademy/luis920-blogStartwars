import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardVehiculos = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadVehiculos(); // Llamamos a la función para cargar los personajes
  }, []);

  // Función para agregar un personaje a favoritos
  const agregarAFavoritos = (vehiculo) => {
    actions.agregarAFavoritos(vehiculo); // Llamamos a la acción para agregar a favoritos en el store
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {store.vehiculos.map((vehiculo) => (
          <div key={vehiculo.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3>{vehiculo.name}</h3>
                <p>Genero: {vehiculo.gender}</p>
                <p>Color de ojos: {vehiculo.eye_color}</p>
                <p>Color de cabello: {vehiculo.hair_color}</p>
                <Link to={`/personaje/${vehiculo.uid}`}>
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

export default CardVehiculos;
