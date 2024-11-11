import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CardPersonajes = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/people/')
      .then((response) => response.json())
      .then((data) => {
        setPersonas(data.results);
      })
      .catch((error) => {
        console.error('Error fetching personas:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {personas.map((persona, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3>{persona.name}</h3>
                <p>Genero: {persona.gender}</p>
                <p>Color de ojos: {persona.eye_color}</p>
                <p>Color de cabello: {persona.hair_color}</p>
                <Link to={`/personaje/${persona.uid}`}>
                  <button className="btn btn-primary">Más Información</button>
                </Link>
                <button className="btn btn-secondary mt-2">Añadir</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPersonajes;
