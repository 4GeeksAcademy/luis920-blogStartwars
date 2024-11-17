const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [],
		personas: [],
		planetas: [],
		vehiculos: [],
		favoritos:[],
		personaje: {},
		planeta:{},
		vehiculo:{}
	  },
	  actions: {
  
		// Cargar todas las personas
		loadPersonas: () => {
		  fetch('https://swapi.dev/api/people')
			.then((response) => response.json())
			.then((data) => {
			  setStore({ personas: data.results });
			})
			.catch((err) => console.error('Error al cargar personas:', err));
		},
  
		// Cargar todos los planetas
		loadPlanetas: () => {
		  fetch('https://swapi.dev/api/planets')
			.then((response) => response.json())
			.then((data) => {
			  setStore({ planetas: data.results });
			})
			.catch((err) => console.error('Error al cargar planetas:', err));
		},
  
		// Cargar todos los vehículos
		loadVehiculos: () => {
		  fetch('https://swapi.dev/api/vehicles')
			.then((response) => response.json())
			.then((data) => {
			  setStore({ vehiculos: data.results });
			})
			.catch((err) => console.error('Error al cargar vehículos:', err));
		},
  
		// Cargar un personaje por ID
		loadPersonaID: async (uid) => {
			console.log(uid)
		  try {
			const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);      
			if (!response.ok) {
			  throw new Error('No se pudo obtener la información del personaje');
			}
			const data = await response.json();
			setStore({ personaje: data.result.properties });  
		  } catch (error) {
			console.error('Error al obtener el personaje:', error);
		  }
		},
		loadPlanetaID: async (uid) => {
			console.log(uid)
		  try {
			const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);      
			if (!response.ok) {
			  throw new Error('No se pudo obtener la información del personaje');
			}
			const data = await response.json();
			setStore({ planeta: data.result.properties });  
		  } catch (error) {
			console.error('Error al obtener el personaje:', error);
		  }
		},
		loadVehiculoID: async (uid) => {
			console.log(uid)
		  try {
			const response = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);      
			if (!response.ok) {
			  throw new Error('No se pudo obtener la información del personaje');
			}
			const data = await response.json();
			setStore({ vehiculo: data.result.properties });  
		  } catch (error) {
			console.error('Error al obtener el personaje:', error);
		  }
		},
		addFavoritos: (item) => {
			const { favoritos } = getStore(); 
			const index = favoritos.findIndex(fav => fav.name === item.name); 
		
			if (index !== -1) {
				setStore({
					favoritos: [
						...favoritos.slice(0, index), 
						...favoritos.slice(index + 1) 
					]
				});
			} else {
				setStore({
					favoritos: [...favoritos, item] 
				});
			}
		},
		removeFavoritos: (name) => {
			const { favoritos } = getStore(); 
			const nuevosFavoritos = favoritos.filter(fav => fav.name !== name);
			setStore({ favoritos: nuevosFavoritos }); 
		},
	  },
	};
  };
  
  export default getState;
  