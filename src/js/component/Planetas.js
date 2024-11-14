import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardPlanetas = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPlanetas(); 
  }, []);
  console.log(store.planetas)
  
  return (
    <div className="container mt-5">
      <div className="row">
        {store.planetas.map((planeta) => (
          <div key={planeta.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3>{planeta.name}</h3>
                <p>Climate: {planeta.climate}</p>
                <p>Diameter: {planeta.diameter}</p>
                <p>Gravity: {planeta.gravity}</p>

                <Link to={`/vistaPlanetas/${planeta.url.split("/")[5]}`}>
                  <button className="btn btn-primary">More info</button>
                </Link>

                <button
                  onClick={() => actions.agregarAFavoritos(planeta)} 
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
   

export default CardPlanetas;
