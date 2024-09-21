import AgricultureIcon from '@mui/icons-material/Agriculture';
import GiteIcon from '@mui/icons-material/Gite';
import { GiFruitTree, GiFruitBowl } from 'react-icons/gi';
import './AdoptarArbol.css'; // Asegúrate de ajustar este archivo

//!! SE ESTABLECIO ESTOS TIPOS PARA QUE NO GENERE ERROR DE ESLINT DURANTE LA COMPROBACION
//!! CON ESTO SE INDICA LOS TIPOS ESPECIFICOS QUE RECIBE ESTE COMPONENTE PARA NO COLOCAR "ANY"
interface ArbolData {
  //TIPO DE LA DATA ESTATICA
  id: number;
  name: string;
  type: string;
  location: string;
  productor: string;
  price: number;
  imageUrl: string;
}

type OnAdoptType = (id: number) => void; //TIPO DE LA FUNCION
//!!--------------------------------------------------------------------------------------------

const AdoptarArbol = ({
  datos,
  onAdopt,
}: {
  datos: ArbolData;
  onAdopt: OnAdoptType;
}) => {
  return (
    <div className="flex justify-center gap-6">
      <div className="group bg-white rounded-xl overflow-hidden shadow-lg max-w-sm md:h-[29rem] md:w-[17rem] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Imagen con filtro tenue */}
        <img
          src={datos.imageUrl}
          alt="imageArbol"
          className="w-full h-48 object-cover transition duration-300 group-hover:brightness-90"
        />

        {/* Contenido de la Tarjeta */}
        <div className="relative -mt-6 py-6 bg-white rounded-t-xl text-center">
          {/* Ícono en la parte superior */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 rounded-full p-3">
            <GiFruitBowl
              size={22}
              style={{ color: '#FFF', display: 'inline' }}
            />
          </div>

          {/* Título */}
          <h3 className="mt-6 text-xl font-semibold text-gray-900 mb-2">
            {datos.name}
          </h3>

          {/* Texto */}
          <div className="ml-3 fuenteParrafos">
            <p className="text-gray-700 text-base pb-2">
              <GiFruitTree
                size={22}
                style={{ color: '#FF9E2F', display: 'inline' }}
              />{' '}
              Tipo: <span style={{ color: '#00BF62' }}>{datos.type}</span>
            </p>
            <p className="text-gray-700 text-base pb-2">
              <GiteIcon style={{ color: '#FF9E2F' }} /> Finca:{' '}
              <span style={{ color: '#00BF62' }}>{datos.location}</span>
            </p>
            <p className="text-gray-700 text-base pb-2">
              <AgricultureIcon style={{ color: '#FF9E2F' }} /> Productor:{' '}
              <span style={{ color: '#00BF62' }}>{datos.productor}</span>
            </p>
          </div>

          <p className="font-semibold text-lg" style={{ color: '#FF9E2F' }}>
            Precio: $ {datos.price} / año
          </p>

          {/* Botón */}
          <button
            onClick={() => onAdopt(datos.id)}
            className="rounded-[10px] bg-[#4BAF47] text-white transition mt-4 hover:bg-[#3B8838] py-2 px-4"
          >
            Adoptar este árbol
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdoptarArbol;
