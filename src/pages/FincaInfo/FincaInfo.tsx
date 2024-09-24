import React, { useState } from 'react';
import './FincaInfo.css';

const FincaInfo: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fincaData = {
    images: [
      'https://st3.depositphotos.com/1473952/12536/i/450/depositphotos_125363882-stock-photo-growing-coffee-plants.jpg',
      'https://phantom-expansion.unidadeditorial.es/a41a4de6b5f98819fd94aca815127a4d/crop/20x0/1368x899/resize/828/f/webp/assets/multimedia/imagenes/2021/11/11/16366691784221.jpg',
      'https://www.agronewscomunitatvalenciana.com/sites/default/files/articles/00naranjas_0%20%281%29.jpg'
    ],
    title: 'Nuestra Finca Sostenible',
    description: 'La finca está ubicada en una zona montañosa donde se aplican prácticas de sostenibilidad...',
    practices: [
      {
        title: 'Prácticas',
        description: 'Utilizamos técnicas de cultivo 100% orgánicas para preservar la calidad del suelo.',
        icon: '🌿',
      },
      {
        title: 'Equipo',
        description: 'Contamos con expertos agrícolas con certificación en prácticas sostenibles.',
        icon: '👥',
      },
      {
        title: 'Ubicación',
        description: 'Toda la energía utilizada proviene de fuentes renovables.',
        icon: '📍',
      },
    ],
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % fincaData.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + fincaData.images.length) % fincaData.images.length);
  };

  return (
    <div className="finca-info-container">
      <div className="finca-info-content">
        <div className="finca-info-image">
          <button onClick={prevSlide} className="carousel-button prev" aria-label="Imagen anterior">&#10094;</button>
          <img src={fincaData.images[currentSlide]} alt={`Finca ${currentSlide + 1}`} />
          <button onClick={nextSlide} className="carousel-button next" aria-label="Siguiente imagen">&#10095;</button>
        </div>
        <div className="finca-info-details">
          <h2>{fincaData.title}</h2>
          <p>{fincaData.description}</p>
          <div className="finca-info-practices">
            {fincaData.practices.map((practice, index) => (
              <div key={index} className="finca-info-practice">
                <span className="practice-icon" aria-hidden="true">{practice.icon}</span>
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FincaInfo;