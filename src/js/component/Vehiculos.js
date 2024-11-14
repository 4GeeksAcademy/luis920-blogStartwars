import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardVehiculos = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadVehiculos(); 
  }, []);
  console.log(store.vehiculos)
  
  return (
    <div className="container mt-5">
      <div className="row">
        {store.vehiculos.map((vehiculo) => (
          <div key={vehiculo.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3>{vehiculo.name}</h3>
                <p>Model: {vehiculo.model}</p>
                <p>Passengers: {vehiculo.passengers}</p>
                <p>Consumables: {vehiculo.consumables}</p>

                <Link to={`/vistaVehiculos/${vehiculo.url.split("/")[5]}`}>
                  <button className="btn btn-primary">More info</button>
                </Link>

                <button
                  onClick={() => actions.agregarAFavoritos(vehiculo)} 
                  className="añadir btn-secondary mt-2"
                >
                  ♡
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
