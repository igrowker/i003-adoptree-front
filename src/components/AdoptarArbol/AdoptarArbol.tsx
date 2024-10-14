import React from 'react';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import GiteIcon from '@mui/icons-material/Gite';
import { GiFruitTree, GiFruitBowl } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import './AdoptarArbol.css';
import { ArbolInterface } from '../../store/services/arbolApi';

interface AdoptarArbolProps {
  datos: ArbolInterface;
  language: 'es' | 'en';  // Aquí añadimos el language
}

const AdoptarArbol: React.FC<AdoptarArbolProps> = ({ datos, language }) => {
  const navigate = useNavigate();

  // Contenido traducido
  const content: Record<'es' | 'en', any> = {
    es: {
      adoptButton: 'Adoptar este árbol',
      type: 'Tipo',
      finca: 'Finca',
      productor: 'Productor',
    },
    en: {
      adoptButton: 'Adopt this tree',
      type: 'Type',
      finca: 'Farm',
      productor: 'Producer',
    },
  };

  const { adoptButton, type, finca, productor } = content[language];

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col w-full max-w-[250px]">
      <div className="relative">
        <img
          src={datos.images[0]} 
          alt={`Árbol de ${datos.type}`}
          className="w-full h-48 object-cover transition-all duration-300 group-hover:brightness-95"
        />
        <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-bold text-[#4BAF47]">
          ${datos.price}/año
        </div>
      </div>

      <div className="relative -mt-6 p-4 bg-white rounded-t-xl text-center flex flex-col justify-between flex-grow">
        <div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3 shadow-md">
            <GiFruitBowl size={22} className="text-white" aria-hidden="true" />
          </div>

          <h3 className="mt-6 text-xl font-semibold text-gray-900 mb-4">
            {datos.type}
          </h3>

          <div className="space-y-2">
            <p className="flex items-center text-gray-700 text-sm">
              <GiFruitTree
                size={20}
                className="text-[#FF9E2F] mr-2 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="truncate">
                {type}: <span className="text-[#00BF62] font-medium">{datos.type}</span>
              </span>
            </p>
            <p className="flex items-center text-gray-700 text-sm">
              <GiteIcon
                className="text-[#FF9E2F] mr-2 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="truncate">
                {finca}: <span className="text-[#00BF62] font-medium">{datos.finca.name}</span>
              </span>
            </p>
            <p className="flex items-center text-gray-700 text-sm">
              <AgricultureIcon
                className="text-[#FF9E2F] mr-1 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="truncate">
                {productor}: <span className="text-[#00BF62] font-medium">
                  {datos.finca.productor.nombre} {datos.finca.productor.apellido}
                </span>
              </span>
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate(`/adopta-un-arbol/${datos.id}`)}
          className="w-full mt-4 rounded-lg bg-[#4BAF47] text-white transition-all duration-300 hover:bg-[#3B8833] py-2 px-4 font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4BAF47] focus:ring-opacity-50"
        >
          {adoptButton}
        </button>
      </div>
    </div>
  );
};

export default AdoptarArbol;
