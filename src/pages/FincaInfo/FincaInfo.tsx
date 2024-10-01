import React, { useState } from 'react';
import { useGetFincaDataQuery } from '../../store/services/fincaApi'; // Importamos el hook
import './FincaInfo.css';

const FincaInfo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Aquí proporcionas el argumento necesario, en este caso un "id" de la finca
  const fincaId = 1;  // Suponiendo que tienes el id de la finca disponible
  const { data: fincaData, isLoading, isError } = useGetFincaDataQuery(fincaId);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isError) {
    return <div>Error al cargar los datos.</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % fincaData.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + fincaData.images.length) % fincaData.images.length
    );
  };

  return (
    <div className="finca-info-container">
      {/* Sección centrada del título y descripción */}
      <div className="finca-info-header">
        <h2>{fincaData.name}</h2>
      </div>

      {/* Carrusel de imágenes */}
      <div className="finca-info-image">
        <button
          onClick={prevSlide}
          className="carousel-button prev"
          aria-label="Imagen anterior"
        >
          &#10094;
        </button>
        <img
          src={fincaData.images[currentSlide]}
          alt={`Finca ${currentSlide + 1}`}
        />
        <button
          onClick={nextSlide}
          className="carousel-button next"
          aria-label="Siguiente imagen"
        >
          &#10095;
        </button>
      </div>

      {/* Cards fijas con descripciones dinámicas */}
      <div className="finca-info-practices">
        <div className="finca-info-practice">
          <span className="practice-icon" aria-hidden="true">♻️</span>
          <h3>Prácticas</h3>
          <p>{fincaData.practicesSustainable}</p>
        </div>

        <div className="finca-info-practice">
          <span className="practice-icon" aria-hidden="true">🌳</span>
          <h3>Árboles</h3>
          {/* Usamos un mapa para recorrer los tipos de árboles */}
          <ul>
            {fincaData.arbol.type.map((treeType: string, index: number) => (
              <li key={index}>{treeType}</li>
            ))}
          </ul>
        </div>

        <div className="finca-info-practice">
          <span className="practice-icon" aria-hidden="true">📍</span>
          <h3>Ubicación</h3>
          <p>{fincaData.ubication}</p>
        </div>
      </div>
    </div>
  );
};

export default FincaInfo;
