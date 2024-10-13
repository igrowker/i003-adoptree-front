import React from 'react';
import beneficiosImage from '../../assets/beneficios.jpg'; // Importación de la imagen
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Iconos
import './Beneficios.css'; // Importación del CSS
import { Link } from 'react-router-dom'; // Link para la navegación

interface BeneficiosProps {
  language: 'es' | 'en';
}

const Beneficios: React.FC<BeneficiosProps> = ({ language }) => {
  const content: Record<'es' | 'en', any> = {
    es: {
      benefitsTitle: 'Beneficios',
      whyBuyTitle: '¿Por qué comprar directo del productor?',
      description:
        'Comprar directo del productor te ofrece alimentos frescos, de calidad, y la oportunidad de apoyar a quienes cultivan de manera sostenible. Aquí te contamos por qué es la mejor opción:',
      freshnessTitle: 'Frescura garantizada',
      freshnessDescription:
        'Al comprar directo del productor, recibís alimentos recién cosechados, sin largos procesos de almacenamiento o transporte.',
      supportTitle: 'Apoyo a los agricultores locales',
      supportDescription:
        'Ayudás a los pequeños productores a obtener un precio justo por su trabajo, promoviendo la economía local.',
      sustainabilityTitle: 'Sostenibilidad',
      sustainabilityDescription:
        'Reducís la huella de carbono al evitar intermediarios y grandes cadenas de distribución, apoyando prácticas agrícolas más responsables.',
      discoverMore: 'Descubre más',
    },
    en: {
      benefitsTitle: 'Benefits',
      whyBuyTitle: 'Why buy directly from the producer?',
      description:
        'Buying directly from the producer offers you fresh, quality food and the opportunity to support those who farm sustainably. Here’s why it’s the best option:',
      freshnessTitle: 'Guaranteed Freshness',
      freshnessDescription:
        'By buying directly from the producer, you get freshly harvested food without long storage or transport processes.',
      supportTitle: 'Support for Local Farmers',
      supportDescription:
        'You help small producers get a fair price for their work, promoting the local economy.',
      sustainabilityTitle: 'Sustainability',
      sustainabilityDescription:
        'You reduce the carbon footprint by avoiding intermediaries and large distribution chains, supporting more responsible agricultural practices.',
      discoverMore: 'Discover more',
    },
  };

  const {
    benefitsTitle,
    whyBuyTitle,
    description,
    freshnessTitle,
    freshnessDescription,
    supportTitle,
    supportDescription,
    sustainabilityTitle,
    sustainabilityDescription,
    discoverMore,
  } = content[language];

  return (
    <section className="bg-white lg:px-[200px] 2xl:px-[165px] my-[70px] flex justify-center">
      <div className="container flex flex-col items-center text-center">
        <p className="text-orange-500 mb-2 fuentePersonalizada fuente">
          {benefitsTitle}
        </p>
        <h2 className="beneficios text-3xl font-[800] text-gray-900 mb-[40px]">
          {whyBuyTitle}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:space-x-8">
          {/* Imagen */}
          <div className="mb-6 md:mb-0 h-full">
            <img
              src={beneficiosImage}
              alt="BeneficiosProductor"
              className="rounded-lg shadow-lg lg:w-[370px] 2xl:w-[400px] h-full"
            />
          </div>

          {/* Texto y Beneficios */}
          <div className="md:w-1/2 text-left">
            <p className="text-gray-700 mb-4 lg:text-[.9rem] 2xl:text-base">{description}</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon
                  style={{ color: '#FF9E2F' }}
                  fontSize="large"
                />
                <div className="ml-3">
                  <h4 className="lg:text-[1.10rem] 2xl:text-lg font-bold text-gray-900">
                    {freshnessTitle}
                  </h4>
                  <p className="text-gray-600 lg:text-[.9rem] 2xl:text-base">{freshnessDescription}</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon
                  style={{ color: '#FF9E2F' }}
                  fontSize="large"
                />
                <div className="ml-3">
                  <h4 className="lg:text-[1.10rem] 2xl:text-lg font-bold text-gray-900">
                    {supportTitle}
                  </h4>
                  <p className="text-gray-600 lg:text-[.9rem] 2xl:text-base">{supportDescription}</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon
                  style={{ color: '#FF9E2F' }}
                  fontSize="large"
                />
                <div className="ml-3">
                  <h4 className="lg:text-[1.10rem] 2xl:text-lg font-bold text-gray-900">
                    {sustainabilityTitle}
                  </h4>
                  <p className="text-gray-600 lg:text-[.9rem] 2xl:text-base">{sustainabilityDescription}</p>
                </div>
              </li>
            </ul>

            {/* Botón para redirigir */}
            <Link to="/beneficios">
              <button className="mt-6 lg:text-[.9rem] 2xl:text-base text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
                {discoverMore}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
