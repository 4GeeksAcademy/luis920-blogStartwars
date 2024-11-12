const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [],
		personas: [],
		planetas: [],
		vehiculos: [],
	  },
	  actions: {
		// Example function that calls another action
		exampleFunction: () => {
		  getActions().changeColor(0, "green");
		},
  
		// Cargar todas las personas
		loadPersonas: () => {
		  fetch('https://www.swapi.tech/api/people/')
			.then((response) => response.json())
			.then((data) => setStore({ personas: data.results }))
			.catch((err) => console.error(err));
		},
  
		// Cargar todos los planetas
		loadPlanetas: () => {
		  fetch('https://www.swapi.tech/api/planets/')
			.then((response) => response.json())
			.then((data) => setStore({ planetas: data.results }))
			.catch((err) => console.error(err));
		},
  
		// Cargar todos los vehículos
		loadVehiculos: () => {
		  fetch('https://www.swapi.tech/api/vehicles/')
			.then((response) => response.json())
			.then((data) => setStore({ vehiculos: data.results }))
			.catch((err) => console.error(err));
		},
  
		loadPersonaID: (uid) => {
		  fetch(`https://www.swapi.tech/api/people/${uid}/`)  
			.then((response) => response.json())
			.then((data) => {
			  setStore({ personas: [data.result] }); 
			})
			.catch((err) => console.error(err));
		},
	  },
	};
  };
  
  export default getState;
  