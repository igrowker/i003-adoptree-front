import React, { useState } from 'react';
import { useGetFincaDataQuery } from '../../store/services/fincaApi'; 
import './FincaInfo.css';

const FincaInfo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const { data: fincaData, isLoading, isError } = useGetFincaDataQuery();

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

      <div className="finca-info-header">
        <h2>{fincaData.name}</h2>
      </div>


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

      <div className="finca-info-practices">
        <div className="finca-info-practice">
          <span className="practice-icon" aria-hidden="true">♻️</span>
          <h3>Prácticas sostenibles</h3>
          <p>{fincaData.practicesSustainable}</p>
        </div>

        <div className="finca-info-practice">
          <span className="practice-icon" aria-hidden="true">🌳</span>
          <h3>Árboles</h3>
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
