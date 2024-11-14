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
    <div className="demo-container">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
      {store.planeta ? (
        <div className="planeta-card">
          <h2>{store.planeta.name}</h2>
          <p>Rotation period: {store.planeta.rotation_period} </p>
          <p>Orbital period: {store.planeta.orbital_period} </p>
          <p>Diameter: {store.planeta.diameter}</p>
          <p>Climate: {store.planeta.climate}</p>
          <p>Gravity: {store.planeta.gravity}</p>
        </div>
      ) : (
        <p>Cargando personaje...</p>
      )}
    </div>
  );
};
