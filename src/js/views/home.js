import React from "react";
import "../../styles/home.css";
import CardPersonajes from "../component/Personajes";
import CardPlanetas from "../component/Planetas";
import CardVehiculos from "../component/Vehiculos";

export const Home = () => 

	
	<div className="text-center mt-5">
		<h1 className="text-light">Characters</h1>
		<CardPersonajes/>
		<h1 className="text-light">Planets</h1>
		<CardPlanetas/>
		<h1 className="text-light">Vehicles</h1>
		<CardVehiculos/>
	</div>

