import React from 'react';
import { Spa, LocalFlorist, Yard } from '@mui/icons-material'; // Iconos de MUI
import naranjosImg from '../../assets/naranjos.jpg';
import limonerosImg from '../../assets/limoneros.jpg';
import pomelerosImg from '../../assets/pomeleros.jpg';
import mandarinosImg from '../../assets/mandarinos.jpg';
import './Arboles.css'; // Importando tu archivo CSS

const arboles = [
  {
    id: 1,
    name: 'Naranjos',
    image: naranjosImg,
    icon: <Spa style={{ color: '#FFF' }} />,
  },
  {
    id: 2,
    name: 'Limoneros',
    image: limonerosImg,
    icon: <Spa style={{ color: '#FFF' }} />,
  },
  {
    id: 3,
    name: 'Pomeleros',
    image: pomelerosImg,
    icon: <LocalFlorist style={{ color: '#FFF' }} />,
  },
  {
    id: 4,
    name: 'Mandarinos',
    image: mandarinosImg,
    icon: <Yard style={{ color: '#FFF' }} />,
  },
];

const Arboles: React.FC = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-8">
        {/* HEADER o título */}
        <div className="text-center mb-8">
          <p className="text-orange-500 font-medium fuente">Adopta</p>
          <h2 className="text-3xl font-bold text-gray-900">
            Nuestros árboles
          </h2>
        </div>

        {/* Cards de árboles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-56">
          {arboles.map((arbol) => (
            <div
              key={arbol.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg max-w-xs md:h-96 md:w-60"
            >
              {/* Imagen */}
              <img
                src={arbol.image}
                alt={arbol.name}
                className="w-full h-48 object-cover"
              />

              {/* Contenido de la Tarjeta */}
              <div className="relative -mt-8 px-4 py-6 bg-white rounded-t-xl text-center">
                {/* Ícono en la parte superior */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3">
                  {arbol.icon}
                </div>

                {/* Título */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {arbol.name}
                </h3>

                {/* Botón */}
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                  Adoptar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arboles;
