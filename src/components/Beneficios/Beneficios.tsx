import beneficiosImage from '../../assets/beneficios.jpg'; // Definición de la variable para llamar la imagen estática
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./Beneficios.css" //importacion del css para la fuente 

const Beneficios: React.FC = () => {
  return (
    <section className="py-14 bg-white">

      {/* Contenedor para centrar el contenido */}
      <div className="container mx-auto md:mx-40 px-8 flex flex-col items-center text-center">

        {/* HEADER o título */}
        <p className="text-orange-500 mb-2 fuentePersonalizada">Beneficios</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          ¿Por qué comprar directo del productor?
        </h2>

        {/* IMAGEN principal y texto, centrados en dispositivos grandes */}
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:space-x-8">
          {/* Imagen */}
          <div className="mb-6 md:mb-0 md:w-1/3 flex justify-center">
            <img
              src={beneficiosImage}
              alt="BeneficiosProductor"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Texto de la sección */}
          <div className="md:w-1/2 text-left md:text-left">
            <p className="text-gray-700 mb-4">
              Comprar directo del productor te ofrece alimentos frescos, 
              de calidad, y la oportunidad de apoyar a 
              quienes cultivan de manera sostenible. Aquí te contamos por qué es la mejor opción:
            </p>
                {/* ICONOS con descripcion */}
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon style={{ color: '#FF9E2F' }} fontSize="large" />
                <div className="ml-3">
                  <h4 className="text-lg font-bold text-gray-900">Frescura garantizada</h4>
                  <p className="text-gray-600">
                    Al comprar directo del productor, recibís alimentos recién cosechados, sin largos procesos de almacenamiento o transporte.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon style={{ color: '#FF9E2F' }} fontSize="large" />
                <div className="ml-3">
                  <h4 className="text-lg font-bold text-gray-900">Apoyo a los agricultores locales</h4>
                  <p className="text-gray-600">
                    Ayudás a los pequeños productores a obtener un precio justo por su trabajo, promoviendo la economía local.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon style={{ color: '#FF9E2F' }} fontSize="large" />
                <div className="ml-3">
                  <h4 className="text-lg font-bold text-gray-900">Sostenibilidad</h4>
                  <p className="text-gray-600">
                    Reducís la huella de carbono al evitar intermediarios y grandes cadenas de distribución, apoyando prácticas agrícolas más responsables.
                  </p>
                </div>
              </li>
            </ul>

            {/* BOTÓN */}
            <button className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300">
              Descubre más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
