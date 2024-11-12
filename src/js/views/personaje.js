import React, { useEffect }  from 'react';
import { useActionData } from 'react-router';




const Personaje = () => {
  
   useEffect(()=>{
    
    actions.loadPersonaID()

   },[])
   return (
    <div className="container mt-5">
      <div className="row">
        {store.personas.map((persona) => (
          <div key={persona.url} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3>{persona.name}</h3>
                <p>Género: {persona.gender}</p>
                <p>Color de ojos: {persona.eye_color}</p>
                <p>Color de cabello: {persona.hair_color}</p>

                {/* Redirige a la página de detalles usando el ID extraído de la URL */}
                <Link to={`/demo`}>
                  <button className="btn btn-primary">Más Información</button>
                </Link>

                <button
                  onClick={() => agregarAFavoritos(persona)} 
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

export default Personaje;

