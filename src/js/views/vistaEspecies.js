import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";  
import "../../styles/demo.css";
import { useParams } from "react-router";

export const VistaEspecies = () => {
  const { store, actions } = useContext(Context)
  const params = useParams()
  
  useEffect(() => {
    actions.loadEspecieID(params.id); 
  }, []);
  
  return (
    <div className="demo-container" >
      <img 
        src={`https://starwars-visualguide.com/assets/img/species/${params.id}.jpg`} 
        className="img-vistas img-fluid " 
        alt="Imagen del planeta" 
        
      />
      {store.especie ? (
       <div className="vistas-card">
        <h1 className="titulo-vistas">  {store.especie.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quam, consequuntur magnam et, rem necessitatibus, 
           vitae provident veniam voluptatem quis repellendus animi dolorum? 
           Saepe earum iusto animi non repudiandae! Eos, esse.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quam, consequuntur magnam et, rem necessitatibus, 
           vitae provident veniam voluptatem quis repellendus animi dolorum? 
           Saepe earum iusto animi non repudiandae! Eos, esse.</p>
       <p><strong>Average lifespan:</strong> {store.especie.average_lifespan}</p>
       <p><strong>Language:</strong> {store.especie.language}</p>
       <p><strong>Classification:</strong> {store.especie.classification}</p>
       <p><strong>Skin color:</strong> {store.especie.skin_colors}</p>
       <p><strong>Hair color:</strong> {store.especie.hair_colors}</p>
       <p><strong>designation:</strong> {store.especie.designation}</p>
       <p><strong>Average height:</strong> {store.especie.average_height}</p>
     </div>
      ) : (
        <p>Cargando planeta...</p>
      )}
    </div>
  );
};
