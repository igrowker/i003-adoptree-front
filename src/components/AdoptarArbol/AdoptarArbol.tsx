//import compraImage from '../../assets/compra.jpg'
import "./AdoptarArbol.css"
import AgricultureIcon from '@mui/icons-material/Agriculture';
import GiteIcon from '@mui/icons-material/Gite';
import { GiFruitTree } from "react-icons/gi";

const AdoptarArbol = ({ datos, onAdopt }: any) => {



  return (
    
    <div className=" max-w-sm rounded overflow-hidden shadow-lg bg-orange-300 mt-5 ml-5">
      <img className="w-full h-48 object-cover" src={datos.imageUrl} alt="{datos.name}" />
      <div className="px-12 py-4">
        <div className="font-bold  text-xl mb-2 text-green-700"> {datos.name} </div>
        <p className="text-gray-700 text-base pb-2"><GiFruitTree size={22} style={{ color: '#FFF', display:"inline" }}/>  Tipo: {datos.type} </p>
        <p className="text-gray-700 text-base pb-2"> <GiteIcon style={{ color: '#FFF' }} />  Finca: {datos.location} </p>
        <p className="text-gray-700 text-base pb-2"><AgricultureIcon style={{ color: '#FFF' }} /> Productor: "datos.productor" </p>
        <p className="text-orange-700 font-semibold text-lg">Precio: $ {datos.price} / año</p>
        <button
          onClick={() => onAdopt(datos.id)}
          className="mt-4 w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Adoptar este árbol
        </button>
      </div>
    </div>
  ); 
};

export default AdoptarArbol;