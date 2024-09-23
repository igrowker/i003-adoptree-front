import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './DonacionesPatrocinios.css';

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
    <div className="bg-[#F7FAFC] min-h-screen flex flex-col items-center py-12 px-6">
      <h1 className="text-[#30342C] font-nunito-black text-4xl mb-6 text-center">
        Donaciones y Patrocinios
      </h1>

      {/* Sección de Donaciones */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-[#00BF62] font-nunito-black text-3xl mb-4">
          Donaciones sin adoptar un árbol
        </h2>
        <p className="text-[#30342C] font-lato text-lg mb-6">
          Con tu donación, podes apoyar directamente proyectos de sostenibilidad sin necesidad de adoptar un árbol. Contribuye al bienestar del medio ambiente y a la agricultura sostenible.
        </p>
        <button
          onClick={handleDonarAhora} 
          className="bg-[#FF9E2F] text-white px-6 py-3 rounded-lg font-lato hover:bg-[#F4B763]"
        >
          Donar ahora
        </button>
      </section>

      {/* Sección de Patrocinios Corporativos */}
      <section className="w-full max-w-4xl">
        <h2 className="text-[#00BF62] font-nunito-black text-3xl mb-4">
          Patrocinios Corporativos
        </h2>
        <p className="text-[#30342C] font-lato text-lg mb-6">
          Las empresas tienen la oportunidad de contribuir al medio ambiente patrocinando árboles en nombre de sus empleados o clientes. Este gesto promueve la responsabilidad social corporativa y ayuda a crear un impacto positivo en el planeta.
        </p>
        <button 
          onClick={handleConocerMas} 
          className="bg-[#FF9E2F] text-white px-6 py-3 rounded-lg font-lato hover:bg-[#F4B763]"
        >
          Conoce más sobre patrocinios
        </button>
      </section>
    </div>
  );
};

export default DonacionesPatrocinios;
