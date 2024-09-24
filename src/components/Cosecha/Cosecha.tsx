//import { useState, useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { GiFruitBowl } from 'react-icons/gi';
import { GiPlantSeed } from 'react-icons/gi';
import { FaShippingFast } from 'react-icons/fa';
import { GiFruiting } from 'react-icons/gi';
import './Cosecha.css'; //importacion de estilos
import imgCosecha from '../../assets/cosecha.png'; //img de "cosecha" (se puede cambiar)

//array de obj que tiene la info dependiendo del paso que este
const pasos = [
  {
    label: 'Orden Procesada',
    icon: <GiFruiting size={34} style={{ display: 'inline' }} />,
  },
  {
    label: 'Orden Preparada',
    icon: <GiPlantSeed size={34} style={{ display: 'inline' }} />,
  },
  { label: 'Orden Despachada', icon: <LocalShippingIcon fontSize="large" /> },
  {
    label: 'Orden En Camino',
    icon: <FaShippingFast size={34} style={{ display: 'inline' }} />,
  },
  {
    label: 'Orden Llego',
    icon: <GiFruitBowl size={34} style={{ display: 'inline' }} />,
  },
];

const Cosecha = () => {
  //--> dentro de los () de cosecha debe ir : " { envioId }: { envioId: string } " para hacer la consulta al determinado ID de arbol

  /* LOGICA PARA EL MANEJO DE ESTADOS 
  const [envioEstatus, setEnvioEstatus] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [estimatedArrival, setEstimatedArrival] = useState<string>('');

  useEffect(() => {
    fetchEnvioData(envioId);
  }, [envioId]);

  const fetchEnvioData = async (id: string) => {
    const envioData = await fakeApiCall(id);
    setEnvioEstatus(envioData.status);
    setProgress(envioData.progress);
    setEstimatedArrival(envioData.estimatedArrival);
  };
*/

  const envioEstatus = {
    id: 1,
    estado: 'En Camino',
  }; //VARIABLE ESTATICA DEF. PARA PROBAR EL COMPONENTE !!ELIMINAR LUEGO

  //CAMBIA EL ESTADO Y PINTA LA BARRA DE ESTADO
  const getPasoIndex = () => {
    switch (envioEstatus.estado) {
      case 'Procesada':
        return 0;
      case 'Preparada':
        return 1;
      case 'Despachada':
        return 2;
      case 'En Camino':
        return 3;
      case 'Llego':
        return 4;
      default:
        return 0;
    }
  };

  return (
    <div className="p-6 pt-20 md:pt-40 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-6 justify-center">
      {/* Contenedor de la imagen */}
      <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
        <img
          src={imgCosecha}
          alt="Imagen relacionada con la cosecha"
          className="w-2/3 h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Contenedor de la barra de progreso adaptada*/}
      <div className="md:w-1/2 w-full">
        <h2 className="pb-10 fuenteTitulo text-center">Seguimiento de Envío</h2>
        <hr className="mb-6 md:mb-16" />

        {/* Barra de progreso de envío */}
        <div className="mb-10">
          <div className="w-full max-w-xl mx-auto">
            <div className="flex items-center justify-between">
              {pasos.map((paso, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`relative ${index <= getPasoIndex() ? 'text-orange-500' : 'text-gray-400'}`}
                  >
                    {paso.icon}
                    {index <= getPasoIndex() && (
                      <CheckCircleIcon
                        className="absolute -top-2 -right-4 text-green-500"
                        fontSize="small"
                      />
                    )}
                  </div>
                  <p className="mt-2 text-sm">{paso.label}</p>
                </div>
              ))}
            </div>
            {/* Progreso visual de la barra */}
            <div className="relative mt-4">
              <div className="absolute left-0 right-0 h-2 bg-gray-300 rounded-full"></div>
              <div
                className="absolute left-0 h-2 bg-orange-500 rounded-full"
                style={{
                  width: `${(getPasoIndex() + 1) * (100 / pasos.length)}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Información de envío */}
        <p className="text-gray-700 text-start pt-5">
          Estado del Envío:{' '}
          <span className="font-bold text-green-500">envioEstatus</span>
        </p>
        <p className="text-gray-700 text-start">
          Fecha Estimada de Llegada:{' '}
          <span className="font-bold text-green-500">estimatedArrival</span>
        </p>
      </div>
    </div>
  );
};

// Simulación de la API (SOLO para probar funcionamiento) - SE COMENTO DE MOMENTO POR ERROR EN EL ANALIZADOR ESLINT
//!!ELIMINAR ESTA LOGICA LUEGO
/*
const fakeApiCall = async (id: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'En Camino',
        progress: 60,
        estimatedArrival: '25-09-2024',
      });
    }, 1000);
  });
};
*/

export default Cosecha;
