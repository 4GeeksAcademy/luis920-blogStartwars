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
    <div className="demo-container" >
      <img 
        src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} 
        className="img-vistas img-fluid " 
        alt="Imagen del vehículo" 
        
      />
      {store.vehiculo ? (
        <div className="vistas-card">
          <h2 className="titulo-vistas">{store.vehiculo.name}</h2>
          <p>Consumables: {store.vehiculo.consumables}</p>
          <p>Crew: {store.vehiculo.crew}</p>
          <p>Model: {store.vehiculo.model}</p>
          <p>Capacity: {store.vehiculo.cargo_capacity}</p>
          <p>Passengers: {store.vehiculo.passengers}</p>
          <p>Cost in credits: {store.vehiculo.cost_in_credits}</p>
          <p>Manufacturer: {store.vehiculo.manufacturer}</p>
          
          
        </div>
      ) : (
        <p>Cargando vehículo...</p>
      )}
    </div>
  );
};
