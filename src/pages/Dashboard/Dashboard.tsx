import { useEffect, useState } from 'react';
import { Bell, HomeIcon, TreePineIcon, User2Icon } from 'lucide-react';
import axios from 'axios';
import { RootState } from '../../types/types';
import { useSelector } from 'react-redux';
import MiArbol from '../../components/MiArbol/MiArbol';
import MiPerfil from '../../components/MiPerfil/MiPerfil';

interface Tree {
  images: string[];
  type: string;
  statusTree: 'ARBOL_JOVEN' | 'ADULTO';
}

interface ArbolAdoptado {
  tree: Tree;
  tipo: string;
  purchaseDate: string;
}

const Dashboard = () => {
  const [arbolAdoptado, setArbolAdoptado] = useState<ArbolAdoptado | null>(
    null
  );

  const [activeSection, setActiveSection] = useState('home');

  const notificaciones = [
    {
      id: 1,
      arbol: 'Pedro',
      mensaje: 'Tu árbol fue regado recientemente.',
      leido: false,
    },
    {
      id: 2,
      arbol: 'Pedro',
      mensaje: 'Nueva foto del árbol disponible.',
      leido: true,
    },
  ];

  const fotosRecientes: string[] = [];

  const user = useSelector((state: RootState) => state.user.user);
  const BACK_URL = import.meta.env.VITE_BACK_URL;

  useEffect(() => {
    const fetchAdoption = async () => {
      const adoption = await axios.get(`${BACK_URL}/adoptions/${user?.id}`);
      setArbolAdoptado(adoption.data);
    };
    fetchAdoption();
  }, [BACK_URL, user]);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900 mt-[92px]">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 space-y-6 shadow-2xl">
        <h2 className="text-3xl font-bold mb-8">AdoptTree 🌱</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                className={`w-full text-left py-2 px-4 rounded flex items-center gap-2 ${
                  activeSection === 'home' ? 'bg-[#208b4f]' : ''
                }`}
                onClick={() => setActiveSection('home')}
              >
                <HomeIcon />
                Inicio
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left py-2 px-4 rounded flex gap-2 items-center ${
                  activeSection === 'miArbol' ? 'bg-[#208b4f]' : ''
                }`}
                onClick={() => setActiveSection('miArbol')}
              >
                <TreePineIcon />
                Mi Árbol
              </button>
            </li>
            <li className="flex items-center space-x-2 transition duration-200">
              <button
                className={`w-full text-left py-2 px-4 rounded flex items-center gap-2 ${
                  activeSection === 'perfil' ? 'bg-[#208b4f]' : ''
                }`}
                onClick={() => setActiveSection('perfil')}
              >
                <User2Icon />
                Mi Perfil
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {activeSection === 'home' && (
          <>
            {/* Header */}
            <header className="bg-white shadow-md rounded-md p-4 flex items-center justify-between sticky top-0 z-10">
              <h1 className="text-2xl font-bold">Mi Árbol Adoptado</h1>
              <Bell className="w-6 h-6 text-gray-500 cursor-pointer hover:text-green-600" />
            </header>

            {/* Información del Árbol */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {arbolAdoptado ? (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <img
                    src={arbolAdoptado.tree.images[0]}
                    alt={arbolAdoptado.tree.type}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">
                    {arbolAdoptado.tree.type}
                  </h3>
                  <p className="text-gray-600 mt-2">{arbolAdoptado.tipo}</p>
                  <p className="text-gray-600 mt-1">
                    Estado:{' '}
                    {arbolAdoptado.tree.statusTree === 'ARBOL_JOVEN'
                      ? 'Árbol Joven'
                      : 'Adulto'}
                  </p>
                  <p className="text-gray-600 mt-1">
                    Fecha de adopción:{' '}
                    {new Date(arbolAdoptado.purchaseDate).toLocaleDateString()}
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-500">
                  No has adoptado ningún árbol aún.
                </div>
              )}

              {/* Sección de Fotos Recientes */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Fotos recientes</h2>
                {fotosRecientes.length > 0 ? (
                  <img
                    src={fotosRecientes[0]}
                    alt="Foto reciente del árbol"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ) : (
                  <p className="text-gray-500">
                    No hay fotos recientes de tu árbol adoptado.
                  </p>
                )}
              </div>
            </section>

            {/* Sección de Notificaciones */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Notificaciones</h2>
              <ul className="space-y-4">
                {notificaciones.map((notif) => (
                  <li
                    key={notif.id}
                    className="flex justify-between items-center"
                  >
                    <p
                      className={`${notif.leido ? 'text-gray-400' : 'text-gray-900'} font-medium`}
                    >
                      {notif.arbol}: {notif.mensaje}
                    </p>
                    <button className="text-green-600 hover:text-green-800">
                      {notif.leido ? 'Leído' : 'Marcar como leído'}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {activeSection === 'miArbol' && <MiArbol />}

        {activeSection === 'perfil' && <MiPerfil user={user} />}
      </main>
    </div>
  );
};

export default Dashboard;
