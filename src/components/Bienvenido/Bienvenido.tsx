import React from 'react';
import video from '../../assets/AdobeStock_812746937.mov';
import adoptionImage from '../../assets/adopcion.jpg';
import compraImage from '../../assets/compra.jpg';
import disfrutaImage from '../../assets/disfruta.jpg';
import './Bienvenido.css';

interface BienvenidoProps {
  language: 'es' | 'en';
}

const Bienvenido: React.FC<BienvenidoProps> = ({ language }) => {
  const content: Record<'es' | 'en', any> = {
    es: {
      welcome: 'BIENVENIDO A ADOPTREE',
      mainTitle: 'Agroadopción Sostenible',
      description:
        'Descubre cómo puedes adoptar un árbol cítrico, apoyar a productores locales y recibir fruta fresca en casa.',
      join: '¡Únete a Adoptree!',
      discoverHow: 'Descubre cómo',
      adopt: 'Adopta',
      buy: 'Compra',
      enjoy: 'Disfruta',
      adoptTitle: 'Naranjos en adopción',
      buyTitle: 'Directo del proveedor',
      enjoyTitle: 'Visita nuestras fincas',
    },
    en: {
      welcome: 'WELCOME TO ADOPTREE',
      mainTitle: 'Sustainable Agro-Adoption',
      description:
        'Discover how you can adopt a citrus tree, support local farmers, and receive fresh fruit at home.',
      join: 'Join Adoptree!',
      discoverHow: 'Discover how',
      adopt: 'Adopt',
      buy: 'Buy',
      enjoy: 'Enjoy',
      adoptTitle: 'Orange trees for adoption',
      buyTitle: 'Direct from the supplier',
      enjoyTitle: 'Visit our farms',
    },
  };

  const {
    welcome,
    mainTitle,
    description,
    join,
    discoverHow,
    adopt,
    buy,
    enjoy,
    adoptTitle,
    buyTitle,
    enjoyTitle,
  } = content[language];

  return (
    <section className="bg-cover bg-center h-screen md:mb-20 p-[220px] 4xl:p-[440px]">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-center text-white">
        <p className="text-lg mb-5 flex">{welcome}</p>
        <h1 className="tipografiaCards text-left text-6xl 4xl:text-[60px] md:text-[40px] font-extrabold mb-8 w-[600px] 4xl:w-[800px]">
          {mainTitle}
        </h1>

        <div className="w-1/2 flex flex-col">
          <p className="text-lg 4xl:text-[30px] md:text-[18px] mb-6 anchoPersonalizado tipografiaPersonalizada w-[500px] 4xl:w-[700px]">
            {description}
            <br />
            <span className="4xl:mt-[15px]">{join}</span>
          </p>
          <button
            onClick={() =>
              document
                .getElementById('como-adoptar')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="w-[220px] text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
          >
            {discoverHow}
          </button>
        </div>
      </div>

      {/* SECCIÓN DE CARDS */}
      <div className="absolute bottom-[-120px] left-0 right-0 hidden md:flex justify-center z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[250px] 4xl:w-[300px]">
            <p className="text-orange-400 font-medium tipografiaCards 4xl:text-[35px]">{adopt}</p>
            <h3 className="text-[1.15rem] font-semibold mb-4 4xl:text-[22px]">{adoptTitle}</h3>
            <img src={adoptionImage} alt="Naranjos en adopción" className="h-24 w-24 mx-auto rounded-full mb-4" />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[250px] 4xl:w-[300px]">
            <p className="text-orange-400 font-medium tipografiaCards 4xl:text-[35px]">{buy}</p>
            <h3 className="text-[1.15rem] font-semibold mb-4 4xl:text-[22px]">{buyTitle}</h3>
            <img src={compraImage} alt="Compra directa" className="h-24 w-24 mx-auto rounded-full mb-4" />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[250px] 4xl:w-[300px]">
            <p className="text-orange-400 font-medium tipografiaCards 4xl:text-[35px]">{enjoy}</p>
            <h3 className="text-[1.15rem] font-semibold mb-4 4xl:text-[22px]">{enjoyTitle}</h3>
            <img src={disfrutaImage} alt="Visita nuestras fincas" className="h-24 w-24 mx-auto rounded-full mb-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bienvenido;
