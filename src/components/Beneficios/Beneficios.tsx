import beneficiosImage from '../../assets/beneficios.jpg'; // Importación de la imagen
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Iconos
import './Beneficios.css'; // Importación del CSS
import { Link } from 'react-router-dom'; // Link para la navegación

const Beneficios: React.FC = () => {
  return (
    <section className="bg-white lg:px-[200px] 2xl:px-[165px] my-[70px] flex justify-center">
      <div className="container flex flex-col items-center text-center">
        <p className="text-orange-500 mb-2 fuentePersonalizada fuente">
          Beneficios
        </p>
        <h2 className="beneficios text-3xl font-[800] text-gray-900 mb-[40px]">
          ¿Por qué comprar directo del productor?
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:space-x-8">
          {/* Imagen */}
          <div className="mb-6 md:mb-0 h-full">
            <img
              src={beneficiosImage}
              alt="BeneficiosProductor"
              className="rounded-lg shadow-lg w-[400px] h-full"
            />
          </div>

          {/* Texto y Beneficios */}
          <div className="md:w-1/2 text-left">
            <p className="text-gray-700 mb-4">
              Comprar directo del productor te ofrece alimentos frescos, de
              calidad, y la oportunidad de apoyar a quienes cultivan de manera
              sostenible. Aquí te contamos por qué es la mejor opción:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon
                  style={{ color: '#FF9E2F' }}
                  fontSize="large"
                />
                <div className="ml-3">
                  <h4 className="text-lg font-bold text-gray-900">
                    Frescura garantizada
                  </h4>
                  <p className="text-gray-600">
                    Al comprar directo del productor, recibís alimentos recién
                    cosechados, sin largos procesos de almacenamiento o
                    transporte.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon
                  style={{ color: '#FF9E2F' }}
                  fontSize="large"
                />
                <div className="ml-3">
                  <h4 className="text-lg font-bold text-gray-900">
                    Apoyo a los agricultores locales
                  </h4>
                  <p className="text-gray-600">
                    Ayudás a los pequeños productores a obtener un precio justo
                    por su trabajo, promoviendo la economía local.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon
                  style={{ color: '#FF9E2F' }}
                  fontSize="large"
                />
                <div className="ml-3">
                  <h4 className="text-lg font-bold text-gray-900">
                    Sostenibilidad
                  </h4>
                  <p className="text-gray-600">
                    Reducís la huella de carbono al evitar intermediarios y
                    grandes cadenas de distribución, apoyando prácticas
                    agrícolas más responsables.
                  </p>
                </div>
              </li>
            </ul>

            {/* Botón para redirigir */}
            <Link to="/beneficios">
              <button className="mt-6 text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
                Descubre más
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
