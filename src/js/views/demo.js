import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";  
import "../../styles/demo.css";
import { useParams } from "react-router";

export const Demo = () => {
  const { store, actions } = useContext(Context)
  const params = useParams()
  
  useEffect(() => {
    actions.loadPersonaID(params.id); 
  }, []);
  
  return (
    <div className="demo-container" >
      <img 
        src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} 
        className="img-vistas img-fluid " 
        alt="Imagen de la persona" 
        
      />
      {store.personaje ? (
        <div className="vistas-card">
        <h2 className="titulo-vistas">{store.personaje.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quam, consequuntur magnam et, rem necessitatibus, 
           vitae provident veniam voluptatem quis repellendus animi dolorum? 
           Saepe earum iusto animi non repudiandae! Eos, esse.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quam, consequuntur magnam et, rem necessitatibus, 
           vitae provident veniam voluptatem quis repellendus animi dolorum? 
           Saepe earum iusto animi non repudiandae! Eos, esse.</p>
        <p><strong>Height:</strong> {store.personaje.height}cm</p>
        <p><strong>Mass:</strong> {store.personaje.mass}kg</p>
        <p><strong>Eyes color:</strong> {store.personaje.eye_color}</p>
        <p><strong>Hair color:</strong> {store.personaje.hair_color}</p>
        <p><strong>Skin color:</strong> {store.personaje.skin_color}</p>
        <p><strong>Birth year:</strong> {store.personaje.birth_year}</p>
        <p><strong>Gender:</strong> {store.planeta.gender}</p>
      </div>
      ) : (
        <p>Cargando personaje...</p>
      )}
    </div>
  );
};
