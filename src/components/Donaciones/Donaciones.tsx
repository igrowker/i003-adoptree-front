import React from 'react';
import donacionesImage from '../../assets/Donaciones.png'; 
import { useNavigate } from 'react-router-dom';

const Donaciones: React.FC = () => {
    const navigate = useNavigate();

    const handleDonationClick = () => {
        navigate('/donar'); 
      };

  return (
    <section className="bg-white px-[200px] my-[116px] flex justify-center">
      <div className="container flex flex-col items-center text-center">
        <p className="text-orange-500 mb-2 fuentePersonalizada">Donaciones</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-[40px]">
          ¿Nos ayudarías a crecer con una donación?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:space-x-8">
          {/* Imagen */}
          <div className="mb-6 md:mb-0">
            <img
              src={donacionesImage}
              alt="Donaciones"
              className="rounded-lg shadow-lg w-[400px]"
            />
          </div>

          {/* Texto */}
          <div className="md:w-1/2 text-left md:text-left">
            <p className="text-gray-700 mb-4">
              Con tu donación, nos ayudas a seguir adelante con nuestros proyectos
              de sostenibilidad y apoyo a los agricultores locales. Cada aporte
              hace una gran diferencia y nos ayuda a crecer.
            </p>

            <button className="rounded-[10px] bg-[#4BAF47] text-white mt-6 hover:bg-[#3B8838]"
            onClick={handleDonationClick}
            >
              Dona aquí
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donaciones;
