import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";  
import "../../styles/demo.css";
import { useParams } from "react-router";

export const VistaVehiculos = () => {
  const { store, actions } = useContext(Context)
  const params = useParams()
  
  useEffect(() => {
    actions.loadVehiculoID(params.id); 
  }, []);
  
  return (
    <div className="demo-container">
        
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
      {store.vehiculo ? (
        <div className="planeta-card">
          <h2>{store.vehiculo.name}</h2>
          <p>Consumables: {store.vehiculo.consumables} </p>
          <p>Crew: {store.vehiculo.crew} </p>
          <p>model: {store.vehiculo.model}</p>
          <p>Capacity: {store.vehiculo.cargo_capacity}</p>
          <p>Passengers: {store.vehiculo.passengers}</p>
        </div>
      ) : (
        <p>Cargando personaje...</p>
      )}
    </div>
  );
};
