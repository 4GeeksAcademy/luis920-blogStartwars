const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [],
		personas: [],
		planetas: [],
		vehiculos: [],
		personaje: [],
	  },
	  actions: {
  
		// Cargar todas las personas
		loadPersonas: () => {
		  fetch('https://www.swapi.tech/api/people/')
			.then((response) => response.json())
			.then((data) => {
			  setStore({ personas: data.results });
			})
			.catch((err) => console.error('Error al cargar personas:', err));
		},
  
		// Cargar todos los planetas
		loadPlanetas: () => {
		  fetch('https://www.swapi.tech/api/planets/')
			.then((response) => response.json())
			.then((data) => {
			  setStore({ planetas: data.results });
			})
			.catch((err) => console.error('Error al cargar planetas:', err));
		},
  
		// Cargar todos los vehículos
		loadVehiculos: () => {
		  fetch('https://www.swapi.tech/api/vehicles/')
			.then((response) => response.json())
			.then((data) => {
			  setStore({ vehiculos: data.results });
			})
			.catch((err) => console.error('Error al cargar vehículos:', err));
		},
  
		// Cargar un personaje por ID
		loadPersonaID: async (uid) => {
		  try {
			const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);      
			if (!response.ok) {
			  throw new Error('No se pudo obtener la información del personaje');
			}
			const data = await response.json();
			setStore({ personaje: [data.result.properties] });  
		  } catch (error) {
			console.error('Error al obtener el personaje:', error);
		  }
		},
	  },
	};
  };
  
  export default getState;
  