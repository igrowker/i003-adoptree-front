import React from 'react';
import './AboutUsSection.css';
import sostenibilidadImage from '../../assets/sostenibilidad.jpg';
import sostenibilidadIcon from '../../assets/1sostenibilidad.jpg';
import compromisoIcon from '../../assets/compromiso.png';
import innovacionIcon from '../../assets/innovacion.png';

const AboutUsSection: React.FC = () => {
  return (
    <div className="bg-[#F7FAFC] min-h-screen flex flex-col items-center py-12 px-6">
      <h1 className="text-[#30342C] font-nunito-black text-4xl mb-6 text-center">
        Sobre Nosotros
      </h1>
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-[#00BF62] font-nunito-black text-3xl mb-4">
          Nuestro compromiso con la sostenibilidad
        </h2>
        <div className="commitment-section flex items-center gap-4">
          <div className="commitment-image flex-1">
            <img src={sostenibilidadImage} alt="Compromiso con la sostenibilidad" className="w-full h-auto rounded-md" />
          </div>
          <div className="commitment-text flex-1">
            <p className="text-[#30342C] font-lato text-lg mb-6">
              En nuestra empresa, nos dedicamos a promover prácticas agrícolas sostenibles y ecológicas.
              Nuestro objetivo es preservar el medio ambiente mientras ofrecemos productos de alta calidad a nuestros clientes.
            </p>
            <p className="text-[#30342C] font-lato text-lg mb-6">
              A través de la adopción de árboles frutales y programas de patrocinio, ayudamos a empresas y personas a
              ser parte de un cambio positivo. Nuestro enfoque es hacer que cada colaboración tenga un impacto real.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de valores */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-[#00BF62] font-nunito-black text-3xl mb-4">
          Nuestros valores
          </h2>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
            <img src={sostenibilidadIcon} alt="Sostenibilidad" className="w-20 h-20 mb-4" /> {/* Icono de Sostenibilidad */}
            <h3 className="text-[#FF9E2F] font-nunito-black text-2xl mb-4">Sostenibilidad</h3>
            <p className="text-[#30342C] font-lato text-lg">
              Cuidamos el medio ambiente y buscamos siempre reducir nuestra huella de carbono en cada proyecto.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
            <img src={compromisoIcon} alt="Compromiso" className="w-20 h-20 mb-4" /> {/* Icono de Compromiso */}
            <h3 className="text-[#FF9E2F] font-nunito-black text-2xl mb-4">Compromiso</h3>
            <p className="text-[#30342C] font-lato text-lg">
              Estamos comprometidos con nuestros clientes y con la sociedad para lograr un impacto positivo.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img src={innovacionIcon} alt="Innovación" className="w-20 h-20 mb-4" /> {/* Icono de Innovación */}
            <h3 className="text-[#FF9E2F] font-nunito-black text-2xl mb-4">Innovación</h3>
            <p className="text-[#30342C] font-lato text-lg">
              Nos esforzamos en buscar nuevas soluciones para mejorar la sostenibilidad y la eficiencia de nuestros proyectos.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de servicios */}
      <section className="w-full max-w-4xl">
        <h2 className="text-[#00BF62] font-nunito-black text-3xl mb-4">
          ¿Qué ofrecemos?
        </h2>
        <p className="text-[#30342C] font-lato text-lg mb-6">
          Ofrecemos la oportunidad de adoptar un árbol frutal, con el cual contribuirás a la producción agrícola sostenible
          y recibirás frutas frescas en tu hogar. Además, brindamos programas de patrocinio para empresas que deseen mejorar
          su impacto social y ambiental.
        </p>
      </section>
    </div>
  );
};

export default AboutUsSection;
