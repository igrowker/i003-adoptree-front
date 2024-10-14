import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Users } from 'lucide-react';

const DonacionesPatrocinios: React.FC = () => {
  const navigate = useNavigate();

  const handleDonarAhora = () => {
    console.log('Navegando a /donaciones/formulario');
    navigate('/donaciones/formulario');
  };

  const handleConocerMas = () => {
    console.log('Navegando a /patrocinio/formulario');
    navigate('/patrocinio/formulario');
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-[150px] px-4 sm:px-6 lg:px-[200px] 2xl:px-[130px]">
      <h1 className="font-bold text-4xl md:text-5xl mb-12 text-center">
        Donaciones y Patrocinios
      </h1>

      <div className="w-full max-w-5xl grid gap-12 md:grid-cols-2">
        {/* Sección de Donaciones */}
        <section className="bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105">
          <div className="flex items-center mb-6">
            <Leaf className="text-green-500 w-8 h-8 mr-4" />
            <h2 className="text-green-600 font-bold text-2xl md:text-3xl">
              Donaciones sin adoptar un árbol
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Con tu donación, puedes apoyar directamente proyectos de
            sostenibilidad sin necesidad de adoptar un árbol. Contribuye al
            bienestar del medio ambiente y a la agricultura sostenible.
          </p>
          <button
            onClick={handleDonarAhora}
            className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Donar ahora
          </button>
        </section>

        {/* Sección de Patrocinios Corporativos */}
        <section className="bg-white rounded-xl shadow-lg p-8 transition-transform hover:scale-105">
          <div className="flex items-center mb-6">
            <Users className="text-green-500 w-8 h-8 mr-4" />
            <h2 className="text-green-600 font-bold text-2xl md:text-3xl">
              Patrocinios Corporativos
            </h2>
          </div>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Las empresas tienen la oportunidad de contribuir al medio ambiente
            patrocinando árboles en nombre de sus empleados o clientes. Este
            gesto promueve la responsabilidad social corporativa y ayuda a crear
            un impacto positivo en el planeta.
          </p>
          <button
            onClick={handleConocerMas}
            className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Conoce más sobre patrocinios
          </button>
        </section>
      </div>
    </div>
  );
};

export default DonacionesPatrocinios;
