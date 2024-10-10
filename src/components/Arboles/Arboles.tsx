import { Spa, LocalFlorist, Yard } from '@mui/icons-material'; // Importando íconos de MUI
import naranjosImg from '../../assets/naranjos.jpg'; // Ejemplo de cómo importar imágenes
import limonerosImg from '../../assets/limoneros.jpg';
import pomelerosImg from '../../assets/pomeleros.jpg';
import mandarinosImg from '../../assets/mandarinos.jpg';
import './Arboles.css';

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
    <section className="py-14 bg-white lg:px-[200px] 2xl:px-[165px]">
      <div className="mx-auto">
        {/* HEADER o título */}
        <div className="text-center mb-8">
          <p className="text-orange-500 font-medium fuente">Adopta</p>
          <h2 className="text-3xl font-[800] text-gray-900">
            Nuestros árboles
          </h2>
        </div>

        {/* Cards de árboles */}
        <div className="flex justify-center gap-6">
          {arboles.map((arbol) => (
            <div
              key={arbol.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg max-w-xs md:h-96 md:w-[16rem]"
            >
              {/* Imagen */}
              <img
                src={arbol.image}
                alt={arbol.name}
                className="w-full h-48 object-cover"
              />

              {/* Contenido de la Tarjeta */}
              <div className="relative -mt-8  py-6 bg-white rounded-t-xl text-center ">
                {/* Ícono en la parte superior */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3">
                  {arbol.icon}
                </div>

                {/* Título */}
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {' '}
                  {arbol.name}{' '}
                </h3>

                {/* Botón */}
                <button className="lg:text-[.9rem] 2xl:text-base mt-4 text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
                  Adoptar
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-4xl font-bold text-white mb-4">
          Adopta un árbol cítrico y sé parte de la agricultura sostenible.
        </h3>
      </div>
    </section>
  );
};

export default Arboles;
