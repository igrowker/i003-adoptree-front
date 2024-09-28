import React from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import sostenibilidadImage from '../../assets/sostenibilidad.jpg';
import sostenibilidadIcon from '../../assets/1sostenibilidad.jpg';
import compromisoIcon from '../../assets/compromiso.png';
import innovacionIcon from '../../assets/innovacion.png';
import './AboutUsSection.css';

const AboutUs: React.FC = () => {
  return (
    <section className="about-section">
      <div className="max-w-6xl mx-auto">
        <h2 className="about-header">Sobre Nosotros</h2>
        <p className="about-text text-center">
          Adoptree es una plataforma que conecta a los consumidores directamente
          con los productores de cítricos en Argentina, promoviendo la agricultura sostenible.
        </p>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 about-image-container">
  <div className="about-image h-80 overflow-hidden">
    <img src={img1} alt="Limonero" className="w-full h-full object-cover" />
  </div>
  <div className="about-image h-80 overflow-hidden">
    <img src={img2} alt="Naranjas" className="w-full h-full object-cover" />
  </div>
  <div className="about-image h-80 overflow-hidden">
    <img src={img3} alt="Naranjo" className="w-full h-full object-cover" />
  </div>
  <div className="about-image h-80 overflow-hidden">
    <img src={img4} alt="Naranjo" className="w-full h-full object-cover" />
  </div>
</div>


        <h3 className="text-[30px] font-[700] text-center mb-4">Nos aseguramos de que tu idea y creación se entreguen correctamente</h3>

        <div className="about-paragraphs-container grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto px-4 max-w-screen-lg">
  <div className="about-paragraph bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <p className="text-base leading-relaxed text-gray-600">
      Adoptree ofrece una conexión directa con los productores de cítricos en Argentina. 
      Al adoptar un árbol, recibís una parte de la cosecha, apoyando la sostenibilidad agrícola.
    </p>
  </div>
  <div className="about-paragraph bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <p className="text-base leading-relaxed text-gray-600">
      Nuestra plataforma facilita a los agricultores ingresos constantes, 
      permitiendo mantener sus huertos de manera sostenible y mejorar las prácticas agrícolas responsables.
    </p>
  </div>
</div>
      </div>

      <div className="bg-[#F7FAFC] flex flex-col items-center pt-[4rem] pb-12 px-6 gap-[4rem]">
        <div className="w-full max-w-4xl">
          <h3 className="text-[30px] font-[700] text-center">Nuestro compromiso con la sostenibilidad</h3>
          <div className="commitment-section">
            <div className="commitment-image">
              <img
                src={sostenibilidadImage}
                alt="Compromiso con la sostenibilidad"
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="commitment-text">
              <p className='text-start mb-3'>
                En nuestra empresa, nos dedicamos a promover prácticas agrícolas sostenibles y ecológicas. Nuestro objetivo es preservar el medio ambiente mientras ofrecemos productos de alta calidad a nuestros clientes.
              </p>
              <p className='text-start'>
                A través de la adopción de árboles frutales y programas de patrocinio, ayudamos a 
                empresas y personas a ser parte de un cambio positivo. Nuestro enfoque es hacer que 
                cada colaboración tenga un impacto real.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de valores */}
        <div className="w-full max-w-4xl mb-12">
          <h3 className="text-[30px] font-[700] text-center mb-4">Nuestros valores</h3>
          <div className="about-values">
            <div className="value-card flex flex-col justify-center items-center">
              <img src={sostenibilidadIcon} alt="Sostenibilidad" className="value-icon" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Sostenibilidad</h3>
              <p className="value-text text-sm text-gray-600">
                Cuidamos el medio ambiente y buscamos siempre reducir nuestra huella de carbono en cada proyecto.
              </p>
            </div>
            <div className="value-card flex flex-col justify-center items-center">
              <img src={compromisoIcon} alt="Compromiso" className="value-icon" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Compromiso</h3>
              <p className="value-text text-sm text-gray-600">
                Estamos comprometidos con nuestros clientes y con la sociedad para lograr un impacto positivo.
              </p>
            </div>
            <div className="value-card flex flex-col justify-center items-center">
              <img src={innovacionIcon} alt="Innovación" className="value-icon" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovación</h3>
              <p className="value-text text-sm text-gray-600">
                Nos esforzamos en buscar nuevas soluciones para mejorar la sostenibilidad y la eficiencia de nuestros proyectos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;