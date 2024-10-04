import AgricultureIcon from '@mui/icons-material/Agriculture';
import GiteIcon from '@mui/icons-material/Gite';
import { GiFruitTree, GiFruitBowl } from 'react-icons/gi';
import './AdoptarArbol.css'; // Asegúrate de ajustar este archivo
import { useNavigate } from 'react-router-dom';

interface FincaData {
  id: number,
  name: string,
  ubication: string,
  practicesSustainable: string,
  productor: string
}

interface ArbolData {
  id: number;
  name: string;
  type: string;
  location: string;
  images: string[];
  finca: FincaData;
  productor: string;
  price: number;
}

type OnAdoptType = (id: number) => void;

interface AdoptarArbolProps {
  datos: ArbolData;
  onAdopt: OnAdoptType;
}

const AdoptarArbol: React.FC<AdoptarArbolProps> = ({ datos }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center gap-6">
      <div className="group bg-white rounded-xl overflow-hidden shadow-lg max-w-sm md:h-[29rem] md:w-[17rem] flex flex-col">
        <div className="relative flex-grow">
          <img
            src={datos.images[0]}
            alt={`Árbol de ${datos.name}`}
            className="w-full h-48 object-cover transition-all duration-300 group-hover:brightness-95"
          />
          <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full px-3 py-1 text-sm font-bold text-[#4BAF47]">
            ${datos.price}/año
          </div>
        </div>

        <div className="relative -mt-6 py-6 bg-white rounded-t-xl text-center flex flex-col justify-between flex-grow">
          <div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3 shadow-md">
              <GiFruitBowl size={22} className="text-white" aria-hidden="true" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900 mb-4">
              {datos.type}
            </h3>

            <div className="px-4 space-y-2">
              <p className="flex items-center text-gray-700 text-sm whitespace-nowrap max-w-full">
                <GiFruitTree
                  size={20}
                  className="text-[#FF9E2F] mr-2 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Tipo:{' '}
                  <span className="text-[#00BF62] font-medium">{datos.type}</span>
                </span>
              </p>
              <p className="flex items-center text-gray-700 text-sm whitespace-nowrap max-w-full">
                <GiteIcon
                  className="text-[#FF9E2F] mr-2 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Finca:{' '}
                  <span className="text-[#00BF62] font-medium">
                    {datos.finca.name}
                  </span>
                </span>
              </p>
              <p className="flex items-center text-gray-700 text-sm whitespace-nowrap max-w-full">
                <AgricultureIcon
                  className="text-[#FF9E2F] mr-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>
                  Productor:{' '}
                  <span className="text-[#00BF62] font-medium">
                    {datos.finca.productor}
                  </span>
                </span>
              </p>
            </div>
          </div>

          {/* Botón en la parte inferior */}
          <div className="mt-4">
            <button
              onClick={() => navigate(`/adopta-un-arbol/${datos.id}`)}
              className="w-11/12 rounded-lg bg-[#4BAF47] text-white transition-all duration-300 hover:bg-[#3B88338] py-2 px-4 font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4BAF47] focus:ring-opacity-50"
            >
              Adoptar este árbol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptarArbol;

