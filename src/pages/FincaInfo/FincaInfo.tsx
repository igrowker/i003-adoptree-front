import React from 'react';
import Slider from "react-slick";
import '../FincaInfo/FincaInfo.css';

const FincaInfo: React.FC = () => {
  const fincaData = {
    images: [
      'https://example.com/finca1.jpg',
      'https://example.com/finca2.jpg',
      'https://example.com/finca3.jpg'
    ],
    title: 'Nuestra Finca Sostenible',
    description: 'La finca está ubicada en una zona montañosa donde se aplican prácticas de sostenibilidad...',
    practices: [
      {
        title: 'Prácticas',
        description: 'Utilizamos técnicas de cultivo 100% orgánicas para preservar la calidad del suelo.',
        icon: 'https://example.com/organic-icon.png',
      },
      {
        title: 'Equipo',
        description: 'Contamos con expertos agrícolas con certificación en prácticas sostenibles.',
        icon: 'https://example.com/team-icon.png',
      },
      {
        title: 'Ubicación',
        description: 'Toda la energía utilizada proviene de fuentes renovables.',
        icon: 'https://example.com/green-energy-icon.png',
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="finca-info-container">
      <div className="finca-info-image">
        <Slider {...settings}>
          {fincaData.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Finca ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="finca-info-details">
        <h2>{fincaData.title}</h2>
        <p>{fincaData.description}</p>
        <div className="finca-info-practices">
          {fincaData.practices.map((practice, index) => (
            <div key={index} className="finca-info-practice">
              <img src={practice.icon} alt={practice.title} />
              <div>
                <h3>{practice.title}</h3>
                <p>{practice.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FincaInfo;
