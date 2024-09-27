import React, { useState } from 'react';

// Definición del tipo de contenido
interface Content {
  title: string;
  text: string;
}

// Definición del componente
const Post2: React.FC = () => {
  // Estado para controlar el idioma actual (español por defecto)
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  // Función para cambiar el idioma
  const toggleLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  // Contenido en español e inglés
  const content: Record<'es' | 'en', Content> = {
    es: {
      title: 'Importancia de la Reforestación',
      text: `La reforestación es clave para combatir el cambio climático y preservar la biodiversidad. 
      En nuestro proyecto, estamos comprometidos con la restauración de ecosistemas dañados y la promoción de prácticas sostenibles que benefician tanto al medio ambiente como a las comunidades locales. 
      Al plantar árboles, no solo estamos creando nuevos hábitats para la fauna, sino que también estamos ayudando a limpiar el aire, conservar el agua y prevenir la erosión del suelo. 
      La reforestación también puede jugar un papel importante en la economía local al generar oportunidades de empleo y promover el ecoturismo. 
      Creemos que cada árbol plantado es un paso hacia un futuro más verde y saludable para todos.`
    },
    en: {
      title: 'Importance of Reforestation',
      text: `Reforestation is key to combating climate change and preserving biodiversity. In our project, we are committed to restoring damaged ecosystems and promoting sustainable practices that benefit both the environment and local communities. 
      By planting trees, we are not only creating new habitats for wildlife, but we are also helping to clean the air, conserve water, and prevent soil erosion. 
      Reforestation can also play an important role in the local economy by creating job opportunities and promoting ecotourism. 
      We believe that every tree planted is a step towards a greener and healthier future for all.`
    }
  };

  // Desestructuramos el contenido basado en el idioma
  const { title, text } = content[language];

  return (
    <div className="p-4">
      {/* Contenedor para texto, imagen y botones */}
      <div className="flex justify-center items-center mt-4 flex-col">
        {/* Selector de idioma */}
        <div className="flex items-center mb-4">
        <img
    src="/src/assets/es.png" // Asegúrate de que esta ruta sea correcta
    alt="Español"
    className={`flag-icon mr-4 cursor-pointer ${language === 'es' ? 'border-2 border-blue-500' : ''}`}
    onClick={() => toggleLanguage('es')}
/>
<img
    src="/src/assets/en.png" // Asegúrate de que esta ruta sea correcta
    alt="English"
    className={`flag-icon cursor-pointer ${language === 'en' ? 'border-2 border-blue-500' : ''}`}
    onClick={() => toggleLanguage('en')}
/>
        </div>

        {/* Contenedor para texto e imagen */}
        <div className="flex flex-col items-center lg:flex-row">
          <div className="max-w-md mb-4 lg:mb-0">
            <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
            <p className="mt-2 text-gray-700 text-center whitespace-pre-line">{text}</p>
          </div>
          <img
            src="/src/assets/Reforestacion.jpg" // Asegúrate de que esta ruta sea correcta
            alt="Importancia de la reforestación"
            className="w-full lg:w-[500px] lg:h-[150px] rounded-tl-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-4 lg:ml-4 lg:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Post2;
