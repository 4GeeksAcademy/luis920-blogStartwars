import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";  
import "../../styles/demo.css";
import { useParams } from "react-router";

export const VistaPlanetas = () => {
  const { store, actions } = useContext(Context)
  const params = useParams()
  
  useEffect(() => {
    actions.loadPlanetaID(params.id); 
  }, []);
  
  return (
    <div className="demo-container" >
      <img 
        src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} 
        className="img-vistas img-fluid " 
        alt="Imagen del planeta" 
        
      />
      {store.planeta ? (
       <div className="vistas-card">
        <h1 className="titulo-vistas">  {store.planeta.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quam, consequuntur magnam et, rem necessitatibus, 
           vitae provident veniam voluptatem quis repellendus animi dolorum? 
           Saepe earum iusto animi non repudiandae! Eos, esse.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quam, consequuntur magnam et, rem necessitatibus, 
           vitae provident veniam voluptatem quis repellendus animi dolorum? 
           Saepe earum iusto animi non repudiandae! Eos, esse.</p>
       <p><strong>Rotation period:</strong> {store.planeta.rotation_period}</p>
       <p><strong>Orbital period:</strong> {store.planeta.orbital_period}</p>
       <p><strong>Diameter:</strong> {store.planeta.diameter}</p>
       <p><strong>Climate:</strong> {store.planeta.climate}</p>
       <p><strong>Gravity:</strong> {store.planeta.gravity}</p>
       <p><strong>Population:</strong> {store.planeta.population}</p>
       <p><strong>Terrain:</strong> {store.planeta.terrain}</p>
     </div>
      ) : (
        <p>Cargando planeta...</p>
      )}
    </div>
  );
};
