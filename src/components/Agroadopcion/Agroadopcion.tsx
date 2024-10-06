import React, { useState } from 'react';
import imgLimones from '../../assets/img-limones.png';
import imgNaranjero from '../../assets/img-naranjero.png';
import './Agroadopcion.css';

const Agroadopcion: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  const content: Record<'es' | 'en', { 
    title: string; 
    adoptionQuestion: string; 
    adoptionDescription: string; 
    currentProduction: string; 
    ownershipQuestion: string; 
    steps: string[]; 
    clickHere: string; 
  }> = {
    es: {
      title: 'Agroadopción ecológica',
      adoptionQuestion: '¿En qué consistió la adopción de un árbol?',
      adoptionDescription:
        'Adoptá un cítrico de nuestro huerto de Entre Ríos. Vas a poder verlo crecer a través de fotos en tu zona de usuario y recibir tu cosecha de naranjas en tu casa. ¿Ya lo tenés decidido? Hacé clic acá para comenzar la adopción de tu naranjo. Gracias a las adopciones, podemos financiar las prácticas regenerativas que estamos implementando para preservar los ecosistemas locales.',
      currentProduction:
        'La producción actual de naranjas está reservada para los dueños de los árboles. De esta manera, podemos cultivar naranjas de forma ecológica bajo demanda y enviarlas directamente del árbol a tu casa, sin tratamientos postcosecha ni pasar por cámaras de frío.',
      ownershipQuestion: '¿Cómo podés llegar a ser dueño de un árbol?',
      steps: [
        'Decidí cuántas naranjas querés reservar para la primera temporada.',
        'Poné un nombre a tu árbol.',
        'Cuando confirmes la adopción de tu naranjo, te vamos a dar acceso a un huerto en tu área privada para que puedas seguir su evolución, planificar los envíos de tu cosecha, descargarte un certificado de propiedad o regalar el árbol a quien vos quieras.',
      ],
      clickHere: 'clic acá',
    },
    en: {
      title: 'Ecological Agroadoption',
      adoptionQuestion: 'What does adopting a tree consist of?',
      adoptionDescription:
        'Adopt a citrus tree from our orchard in Entre Ríos. You will be able to see it grow through photos in your user area and receive your harvest of oranges at home. Have you decided? Click here to start adopting your orange tree. Thanks to the adoptions, we can finance the regenerative practices we are implementing to preserve local ecosystems.',
      currentProduction:
        'The current production of oranges is reserved for the owners of the trees. In this way, we can cultivate oranges ecologically on demand and send them directly from the tree to your home, without post-harvest treatments or going through cold storage.',
      ownershipQuestion: 'How can you become the owner of a tree?',
      steps: [
        'Decide how many oranges you want to reserve for the first season.',
        'Name your tree.',
        'When you confirm the adoption of your orange tree, we will give you access to an orchard in your private area so you can follow its evolution, plan the shipments of your harvest, download a certificate of ownership, or gift the tree to whomever you want.',
      ],
      clickHere: 'click here',
    },
  };

  const { title, adoptionQuestion, adoptionDescription, currentProduction, ownershipQuestion, steps, clickHere } = content[language];

  return (
    <section
      id="como-adoptar"
      className="bg-[#f8f7f0] py-20 px-[200px] my-[70px] flex justify-center"
    >
      <div className="container flex flex-col items-center text-center">
        <p className="text-orange-500 mb-2 fuentePersonalizada text-[28px] mt-[15px]">
          {content[language].title}
        </p>
        <h2 className="text-3xl font-[800] text-gray-900 mb-[40px]">
          {adoptionQuestion}
        </h2>

        <div className="bg-white rounded px-[60px] py-[40px] max-w-7xl">
          <div className="flex justify-between mb-[35px]">
            <div className="md:col-span-9 mb-9 md:mb-0 w-[500px]">
              <p className="text-left text-base leading-[32px] text-gray-700">
                {adoptionDescription.replace('clic acá', `<b><a href="#!" className="text-gray-700">${clickHere}</a></b>`)}
              </p>
            </div>
            <div className="md:col-span-3 mb-3 md:mb-0">
              <img
                src={imgLimones}
                alt="ImgLimones"
                className="shadow-lg w-[294px]"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="md:col-span-3 mb-3 md:mb-0 md:flex">
              <img
                src={imgNaranjero}
                alt="imgNaranjero"
                className="shadow-lg w-[294px] h-[454px]"
              />
            </div>
            <div className="md:col-span-9 mb-9 md:mb-0 text-gray-700 ml-[25px] w-[500px]">
              <p className="text-left text-gray-700 text-base leading-[32px]">
                {currentProduction}
              </p>

              <p className="text-left text-gray-900 leading-[32px] mt-6 font-bold">
                {ownershipQuestion}
              </p>

              <ol className="list-decimal px-6 text-base leading-[32px]">
                {steps.map((step: string, index: number) => (
                  <li key={index} className="text-left">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => toggleLanguage('es')}
          className={`px-4 py-2 rounded-[10px] ${language === 'es' ? 'bg-[#4BAF47] text-white' : 'bg-gray-200'} transition-colors duration-300`}
        >
          Español
        </button>
        <button
          onClick={() => toggleLanguage('en')}
          className={`px-4 py-2 rounded-[10px] ${language === 'en' ? 'bg-[#4BAF47] text-white' : 'bg-gray-200'} transition-colors duration-300`}
        >
          English
        </button>
      </div>
    </section>
  );
};

export default Agroadopcion;
