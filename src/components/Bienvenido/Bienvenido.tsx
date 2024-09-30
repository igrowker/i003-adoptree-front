import React from 'react';
import video from '../../assets/AdobeStock_812746937.mov';
import tituloPrincipal from '../../assets/titulo.png';
import adoptionImage from '../../assets/adopcion.jpg';
import compraImage from '../../assets/compra.jpg';
import disfrutaImage from '../../assets/disfruta.jpg';

import './Bienvenido.css'; //

const Bienvenido: React.FC = () => {
  return (
    <section className=" bg-cover bg-center h-screen md:mb-20 p-[220px] max-md:pl-[2em] max-md:pt-[8em] 4xl:p-[440px]">
      
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      {/* Filtro oscuro sobre el video */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white max-md:w-[80vw]">
        <p className="text-lg mb-5 flex">BIENVENIDO A ADOPTREE</p>
        <img
          className="w-[400px] max-md:w-[15em] 4xl:w-[700px]"
          src={tituloPrincipal}
          alt="titulo"
        />
        <div className="w-1/2 flex flex-col">
          <p className="text-lg 4xl:text-[30px] md:text-[18px] mb-6 anchoPersonalizado tipografiaPersonalizada 4xl:w-[700px] ">
            Descubre cómo puedes adoptar un árbol cítrico, apoyar a productores
            locales y recibir fruta fresca en casa.
            <br />
            <br className="hidden 4xl:block" />
            <span className="4xl:mt-[15px]">¡Únete a Adoptree!</span>
          </p>
          <button className="rounded-[10px] w-[220px] bg-[#4BAF47] text-white hover:bg-[#3B8838]">
            Descubre cómo
          </button>
        </div>
      </div>

      {/*SECCIÓN DE CARDS*/}
      <div className="absolute bottom-[-12em] left-0 right-0 hidden md:flex justify-center z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">

          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[250px] 4xl:w-[300px] responsiveCards">
            <p className="text-orange-400 font-medium tipografiaCards 4xl:text-[35px]">
              Adopta
            </p>
            <h3 className="text-xl font-semibold mb-4 4xl:text-[22px]">
              Naranjos en adopción
            </h3>
            <img
              src={adoptionImage}
              alt="Naranjos en adopción"
              className="mx-auto rounded-full mb-4 responsiveImg"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[250px] 4xl:w-[300px] responsiveCards">
            <p className="text-orange-400 font-medium tipografiaCards 4xl:text-[35px]">
              Compra
            </p>
            <h3 className="text-xl font-semibold mb-4 4xl:text-[22px]">
              Naranjos en adopción
            </h3>
            <img
              src={compraImage}
              alt="Naranjos en adopción"
              className="mx-auto rounded-full mb-4 responsiveImg"
            />
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center w-[250px] 4xl:w-[300px] responsiveCards">
            <p className="text-orange-400 font-medium tipografiaCards 4xl:text-[35px]">
              Disfruta
            </p>
            <h3 className="text-xl font-semibold mb-4 4xl:text-[22px]">
              Naranjos en adopción
            </h3>
            <img
              src={disfrutaImage}
              alt="Naranjos en adopción"
              className="mx-auto rounded-full mb-4 responsiveImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bienvenido;
