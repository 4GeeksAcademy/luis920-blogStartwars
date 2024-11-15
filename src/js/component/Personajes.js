import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardPersonajes = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPersonas(); 
  }, []);
  console.log(store.personas)

  return (
    <div className="container mt-5">
      <div className="row">
        {store.personas.map((persona) => (
          <div key={persona.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className='container-info'>
                  <h3>{persona.name}</h3>
                <p>Gender: {persona.gender}</p>
                <p>Eye color: {persona.eye_color}</p>
                <p>Hair color: {persona.hair_color}</p>
                </div>
                

                <div className="d-flex justify-content-between">
                  <Link to={`/demo/${persona.url.split("/")[5]}`}>
                    <button className=" info btn btn-primary">More info</button>
                  </Link>

                  <button
                    onClick={() => actions.agregarAFavoritos(persona)} 
                    className="añadir btn-secondary"
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
