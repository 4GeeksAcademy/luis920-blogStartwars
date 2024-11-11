import React, { useState, useEffect } from 'react';

const CardPlanetas = () => {
  const [planetas, setPlanetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/planets/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        return response.json();
      })
      .then((data) => {
        setPlanetas(data.results); // Asignar los resultados a la variable personas
        setLoading(false); // Desactivar el loading
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Mostrar una pantalla de carga mientras esperamos los datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si ocurre un error en la solicitud
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      {/* Carrusel */}
      <div id="planetaCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Dividir los datos en bloques de 3 personas por slide */}
          {planetas.map((planeta, index) => {
            // Calcular si es el primer item o no para asignar la clase 'active'
            const isActive = index === 0 ? 'active' : '';
            return (
              <div key={index} className={`carousel-item ${isActive}`}>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h3>{planeta.name}</h3>
                        <p>Clima: {planeta.climate}</p>
                        <p>Diametro: {planeta.diameter}</p>
                        <p>Terreno: {planeta.terrain}</p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Controles del carrusel */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#planetaCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#planetaCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
       
      </div>
    </div>
  );
};

export default CardPlanetas;
