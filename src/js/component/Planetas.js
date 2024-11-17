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
        {store.planetas.map((planeta,index) => (
          <div key={planeta.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
              <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${index +1 }.jpg`}
                    className="img-home"
                    alt={planeta.name}
                    onError={(e) => (e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qWAIpqePEAH-UPypnABjdT_eNu7hlLi54Q&s')}
                  />
                <h3>{planeta.name}</h3>
                <p>Climate: {planeta.climate}</p>
                <p>Diameter: {planeta.diameter}</p>
                <p>Gravity: {planeta.gravity}</p>
                
                <div className="d-flex justify-content-between">
                  <Link to={`/vistaPlanetas/${planeta.url.split("/")[5]}`}>
                    <button className=" info btn btn-primary">More info</button>
                  </Link>
                  <button
                  type="button"
                  className=" añadir  " 
                  onClick={() => actions.addFavoritos(planeta)}
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
   

export default CardPlanetas;
