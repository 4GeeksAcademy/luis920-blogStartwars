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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quam, consequuntur magnam et, rem necessitatibus, 
           vitae provident veniam voluptatem quis repellendus animi dolorum? 
           Saepe earum iusto animi non repudiandae! Eos, esse.
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Quam, consequuntur magnam et, rem necessitatibus, 
           vitae provident veniam voluptatem quis repellendus animi dolorum? 
           Saepe earum iusto animi non repudiandae! Eos, esse.</p>
          <p><strong>Consumables:</strong> {store.vehiculo.consumables}</p>
          <p><strong>Crew:</strong> {store.vehiculo.crew}</p>
          <p><strong>Model:</strong> {store.vehiculo.model}</p>
          <p><strong>Capacity:</strong> {store.vehiculo.cargo_capacity}</p>
          <p><strong>Passengers:</strong> {store.vehiculo.passengers}</p>
          <p><strong>Cost in credits:</strong> {store.vehiculo.cost_in_credits}</p>
          <p><strong>Manufacturer:</strong> {store.vehiculo.manufacturer}</p>
          
          
        </div>
      ) : (
        <p>Cargando vehículo...</p>
      )}
    </div>
  );
};
