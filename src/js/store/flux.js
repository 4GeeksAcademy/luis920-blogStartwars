const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		demo: [],
		personas: [],
		planetas: [],
		especies:[],
		favoritos:[],
		personaje: {},
		planeta:{},
		especie:{}
	  },
	  actions: {
  
		loadPersonas: () => {
		  fetch('https://swapi.dev/api/people')
			.then((response) => response.json())
			.then((data) => {
			  setStore({ personas: data.results });
			})
			.catch((err) => console.error('Error al cargar personas:', err));
		},
  
	
		loadPlanetas: () => {
		  fetch('https://swapi.dev/api/planets')
			.then((response) => response.json())
			.then((data) => {
			  setStore({ planetas: data.results });
			})
			.catch((err) => console.error('Error al cargar planetas:', err));
		},
		loadEspecies: () => {
			fetch('https://swapi.dev/api/species')
			  .then((response) => response.json())
			  .then((data) => {
				setStore({ especies: data.results });
			  })
			  .catch((err) => console.error('Error al cargar planetas:', err));
		  },
		
  
		
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
		loadEspecieID: async (uid) => {
			console.log(uid)
		  try {
			const response = await fetch(`https://www.swapi.tech/api/species/${uid}`);      
			if (!response.ok) {
			  throw new Error('No se pudo obtener la información del personaje');
			}
			const data = await response.json();
			setStore({ especie: data.result.properties });  
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
  