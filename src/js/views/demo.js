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
    <div className="demo-container">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
      {store.personaje ? (
        <div className="personaje-card">
          <h2>{store.personaje.name}</h2>
          <p>Altura: {store.personaje.height} cm</p>
          <p>Peso: {store.personaje.mass} kg</p>
          <p>Color de ojos: {store.personaje.eye_color}</p>
          <p>Color de cabello: {store.personaje.hair_color}</p>
          <p>Género: {store.personaje.gender}</p>
        </div>
      ) : (
        <p>Cargando personaje...</p>
      )}
    </div>
  );
};
