import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel'; // Puedes usar una librería para el carrusel
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos del carrusel
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../types/types';

type ArbolAdoptado = {
  id: number;
  purchaseDate: string; 
  shippingAddressId: number;
  status: "PENDING" | "COMPLETED" | "CANCELLED"; 
  tree: {
    active: boolean;
    fincaId: number;
    id: number;
    images: string[];
    price: number; 
    statusTree: string;
    type: string;
    userId: number;
    treeId: number;
  };
  user: {
    avatar: string | null;
    email: string;
    googleId: string | null;
    id: number;
    name: string;
    password: string;
    role: "USER" | "ADMIN"; 
    userId: number;
  };
};


const MiArbol = () => {
  const [arbolAdoptado, setArbolAdoptado] = useState<ArbolAdoptado | null>();
  console.log(arbolAdoptado);
  const user = useSelector((state: RootState) => state.user.user);
  const BACK_URL = import.meta.env.VITE_BACK_URL;

  useEffect(() => {
    const fetchAdoption = async () => {
      try {
        const adoption = await axios.get(`${BACK_URL}/adoptions/${user?.id}`);
        setArbolAdoptado(adoption.data);
      } catch (error) {
        console.error('Error fetching adoption data:', error);
      }
    };

    fetchAdoption();
  }, [user]);

  if (!arbolAdoptado) {
    return (
      <p className="text-center text-gray-600">
        No has adoptado ningún árbol todavía.
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sección de imágenes con carrusel */}
          <div className="flex flex-col items-center">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
              className="w-full rounded-lg shadow-md"
            >
              {arbolAdoptado.tree.images.map((image: string, index: number) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Imagen del árbol ${arbolAdoptado.tree.type}`}
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Sección de información del árbol */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-semibold text-green-800">
              {arbolAdoptado.tree.type}
            </h2>
            <p className="text-gray-700">
              Estado del árbol:{' '}
              <span className="font-medium">
                {arbolAdoptado.tree.statusTree === 'ARBOL_JOVEN'
                  ? 'Árbol joven'
                  : 'Maduro'}
              </span>
            </p>
            <p className="text-gray-700">
              Fecha de adopción:{' '}
              <span className="font-medium">
                {new Date(arbolAdoptado.purchaseDate).toLocaleDateString()}
              </span>
            </p>
            <p className="text-gray-700">
              Dirección de envío:{' '}
              <span className="font-medium">
                {arbolAdoptado.shippingAddressId
                  ? 'Dirección registrada'
                  : 'Sin dirección'}
              </span>
            </p>
            <p className="text-gray-700">
              Precio de adopción:{' '}
              <span className="font-medium">${arbolAdoptado.tree.price}</span>
            </p>

            {/* Botones de acciones */}
            <div className="flex space-x-4 mt-4">
              <button className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
                Ver más fotos
              </button>
              <button className="bg-gray-600 text-white py-2 px-4 rounded-[10px] shadow-lg hover:bg-gray-700">
                Actualizar envío
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiArbol;
