import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";  // Asegúrate de que este contexto esté bien configurado
import "../../styles/demo.css";


export const Demo = () => {
  const { store, actions } = useContext(Context)

  
  useEffect(() => {
    actions.loadPersonaID(1); 
  }, [actions]);
  
  const personaje = store.personaje && store.personaje[0];

  return (
    <div className="demo-container">
      {personaje ? (
        <div className="personaje-card">
          <h2>{personaje.name}</h2>
          <p>Altura: {personaje.height} cm</p>
          <p>Peso: {personaje.mass} kg</p>
          <p>Color de ojos: {personaje.eye_color}</p>
          <p>Color de cabello: {personaje.hair_color}</p>
          <p>Género: {personaje.gender}</p>
        </div>
      ) : (
        <p>Cargando personaje...</p>
      )}
    </div>
  );
};
