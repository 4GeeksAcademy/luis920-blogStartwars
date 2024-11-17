import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const CardEspecies = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadEspecies();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {store.especies.map((especie,index) => (
          <div key={especie.uid} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
              <img
                    src={`https://starwars-visualguide.com/assets/img/species/${index +1 }.jpg`}
                    className="img-home"
                    alt={especie.name}
                    onError={(e) => (e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qWAIpqePEAH-UPypnABjdT_eNu7hlLi54Q&s')}
                  />
                <div className="container">
                  <h3>{especie.name}</h3>
                  <p>Average height: {especie.average_height} cm</p>
                  <p>Classification: {especie.classification}</p>
                  <p>Designation: {especie.designation}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={`/vistaEspecies/${especie.url.split("/")[5]}`}>
                    <button className="info btn btn-primary">More info</button>
                  </Link>
                  <button
                  type="button"
                  className=" añadir btn-secondary " 
                  onClick={() => actions.addFavoritos(especie)}
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

export default CardEspecies;
