import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardPersonajes = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPersonas();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {store.personas.map((persona,index) => (
          <div key={persona.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
              <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${index +1 }.jpg`}
                    className="img-home"
                    alt={persona.name}
                    onError={(e) => (e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qWAIpqePEAH-UPypnABjdT_eNu7hlLi54Q&s')}
                  />
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
                  className=" añadir  " 
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
