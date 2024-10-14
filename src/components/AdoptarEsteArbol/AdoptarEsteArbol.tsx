import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Heart, MapPin } from 'lucide-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

type Cosecha = {
  id: number;
  cantidad: number;
  fechaDeEnvio: string; // ISO 8601 format
  estadoDeEnvio: "EN_PREPARACION" | "ENVIADO" | "ENTREGADO"; // Agrega más estados si es necesario
};

export type Productor = {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  // Agrega otras propiedades si es necesario
};

type Finca = {
  id: number;
  name: string;
  practicesSustainable: string;
  productor: Productor;
  ubication: string;
};

type Tree = {
  active: boolean;
  cosecha: Cosecha[];
  finca: Finca;
  id: number;
  images: string[];
  price: number;
  type: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
  userId: number;
};


const AdoptarEsteArbol: React.FC = () => {
  const [arbol, setArbol] = useState<Tree>();

  console.log(arbol)

  const { id } = useParams<{ id: string }>();
  console.log(id);
  const navigate = useNavigate();

  const BACK_URL = import.meta.env.VITE_BACK_URL;

  useEffect(() => {
    const fetchArbol = async () => {
      const response = await axios.get(`${BACK_URL}/arboles/${id}`);

      setArbol(response.data);
    };

    fetchArbol();
  }, []);

  if (!arbol) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Árbol no encontrado
          </h2>
          <p className="text-gray-600 mb-6">
            Lo sentimos, no pudimos encontrar el árbol que estás buscando.
          </p>
          <button
            onClick={() => navigate('/adopta-un-arbol')}
            className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
          >
            Volver a la lista de árboles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-[150px]">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/2">
            <img
              className="h-64 w-full object-cover md:h-full"
              src={arbol.images[0]}
              alt={arbol.type}
            />
          </div>
          <div className="p-8 md:w-1/2">
            <div className="uppercase tracking-wide text-sm text-[#4aaf47b4] font-semibold mb-1">
              {arbol.type}
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Adopta un {arbol.type}
            </h2>
            <p className="mt-2 text-gray-500">
              Gracias a:{' '}
              {arbol.finca.productor.nombre +
                ' ' +
                arbol.finca.productor.apellido}
            </p>
            <div className="mt-3 flex items-center text-sm text-gray-500">
              <MapPin className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
              <p>{arbol.finca.ubication}</p>
            </div>
            <p className="mt-4 text-3xl font-bold text-[#4BAF47]">
              {arbol.price.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
              })}
              /año
            </p>
            <div className="mt-6 space-y-4">
              <button
                onClick={() => navigate(`/checkout/${arbol.id}`)}
                className="w-full flex items-center justify-center text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300 transform"
              >
                <Heart className="mr-2 h-5 w-5" /> Adoptar
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-[10px] shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
                <Link
                  className="flex items-center justify-center"
                  to={`/adopta-un-arbol`}
                >
                  <ArrowLeft className="mr-2 h-5 w-5" /> Volver
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptarEsteArbol;
