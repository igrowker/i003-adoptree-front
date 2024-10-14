import React from 'react';
import { motion } from 'framer-motion';
import video from '../../assets/AdobeStock_812746937.mov';
import adoptionImage from '../../assets/adopcion.jpg';
import compraImage from '../../assets/compra.jpg';
import disfrutaImage from '../../assets/disfruta.jpg';
import tituloPrincipal from '../../assets/titulo.png'; // Asegúrate de que esta ruta sea correcta
import './Bienvenido.css';

interface BienvenidoProps {
  language: 'es' | 'en';
}

interface ContentText {
  welcome: string;
  mainTitle: string;
  description: string;
  join: string;
  discoverHow: string;
  adopt: string;
  buy: string;
  enjoy: string;
  adoptTitle: string;
  buyTitle: string;
  enjoyTitle: string;
}

const Bienvenido: React.FC<BienvenidoProps> = ({ language }) => {
  const content: Record<'es' | 'en', ContentText> = {
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
      mainTitle: 'Sustainable Agroadoption',
      description:
        'Discover how you can adopt a citrus tree, support local farmers, and receive fresh fruit at home.',
      join: 'Join Adoptree!',
      discoverHow: 'Discover how',
      adopt: 'Adopt',
      buy: 'Buy',
      enjoy: 'Enjoy',
      adoptTitle: 'Orange trees available',
      buyTitle: 'Direct from the supplier',
      enjoyTitle: 'Visit our farms',
    },
  };

   const {
    welcome,
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
    <section className="bg-cover bg-center h-screen md:mb-20 lg:py-[180px] 2xl:py-[180px] px-[200px] 4xl:p-[440px] relative">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="relative z-10 text-center text-white">
        <motion.p 
          className="lg:text-[14px] 2xl:text-lg mb-5 flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {welcome}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {language === 'es' ? (
            <img
              className="lg:w-[370px] 2xl:w-[485px] 4xl:w-[700px]"
              src={tituloPrincipal}
              alt="titulo"
            />
          ) : (
            <h1 className="tipografiaCards leading-[0.8] text-left text-[105px] 4xl:text-[140px] font-[500] mb-8 w-[600px] 4xl:w-[800px]">
              Sustainable Agroadoption
            </h1>
          )}
        </motion.div>
        <motion.div 
          className="w-1/2 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="lg:text-[16px] 2xl:text-lg 4xl:text-[30px] md:text-[20px] mb-6 anchoPersonalizado tipografiaPersonalizada w-[500px] 4xl:w-[700px]">
            {description}
            <br />
            <span className="4xl:mt-[15px]">{join}</span>
          </p>
          <motion.button
            onClick={() =>
              document
                .getElementById('como-adoptar')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="w-[220px] lg:text-[.9rem] 2xl:text-base text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {discoverHow}
          </motion.button>
        </motion.div>
      </div>

      {/* SECCIÓN DE CARDS */}
      <motion.div 
        className="absolute lg:bottom-[-105px] 2xl:bottom-[-127px] left-0 right-0 hidden md:flex justify-center z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
          {[
            { title: adopt, subtitle: adoptTitle, image: adoptionImage },
            { title: buy, subtitle: buyTitle, image: compraImage },
            { title: enjoy, subtitle: enjoyTitle, image: disfrutaImage },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center lg:w-[230px] 2xl:w-[250px] 4xl:w-[300px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <p className="text-orange-400 font-medium tipografiaCards lg:text-[20px] 2xl:text-[24px] 4xl:text-[35px]">
                {card.title}
              </p>
              <h3 className="lg:text-[16px] 2xl:text-[1.15rem] font-semibold mb-4 4xl:text-[22px]">
                {card.subtitle}
              </h3>
              <motion.img
                src={card.image}
                alt={card.subtitle}
                className="lg:h-[4rem] lg:w-[4rem] 2xl:h-[6rem] 2xl:w-[6rem] mx-auto rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Bienvenido;