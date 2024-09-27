import React, { useState } from 'react';

// Definición del tipo de contenido
interface Content {
  title: string;
  text: string;
}

// Definición del componente
const Post1: React.FC = () => {
  // Estado para controlar el idioma actual (español por defecto)
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  // Función para cambiar el idioma
  const toggleLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  // Contenido en español e inglés
  const content: Record<'es' | 'en', Content> = {
    es: {
      title: 'Actualización del Proyecto',
      text: `Este mes hemos logrado un progreso significativo en la implementación de nuevas prácticas sostenibles en la finca.
      Hemos introducido nuevas especies de árboles autóctonos, que no solo contribuyen a la biodiversidad, 
      sino que también mejoran la calidad del suelo y ayudan a retener más agua, haciéndonos menos dependientes de los recursos hídricos externos.
      Además, hemos implementado un sistema de riego más eficiente, que optimiza el uso del agua y minimiza el desperdicio.

      Aparte de estos avances, también hemos iniciado un programa de formación para nuestros empleados, 
      en el cual se les educa sobre la importancia de la sostenibilidad y el impacto positivo que estas acciones tienen en el medio ambiente. 
      El programa no solo mejora las habilidades técnicas del equipo, sino que también refuerza nuestro compromiso colectivo con la protección del entorno.`
    },
    en: {
      title: 'Project Update',
      text: `This month, we have made significant progress in implementing new sustainable practices on the farm. 
      We have introduced new species of native trees, which not only contribute to biodiversity, but also improve soil quality and help retain more water, making us less dependent on external water resources. 
      In addition, we have implemented a more efficient irrigation system, which optimizes water use and minimizes waste.

      Beyond these advancements, we have also launched a training program for our employees, 
      educating them on the importance of sustainability and the positive impact these actions have on the environment. 
      The program not only enhances the technical skills of the team but also reinforces our collective commitment to environmental protection.`
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
            src="/src/assets/es.png" // Ruta de la imagen de la bandera española
            alt="Español"
            className={`flag-icon mr-4 cursor-pointer ${language === 'es' ? 'active' : ''}`}
            onClick={() => toggleLanguage('es')}
          />
          <img
            src="/src/assets/en.png" // Ruta de la imagen de la bandera inglesa
            alt="English"
            className={`flag-icon cursor-pointer ${language === 'en' ? 'active' : ''}`}
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
            src="src/assets/invernadero.jpg" // Asegúrate de que esta ruta sea correcta
            alt="Actualización del proyecto"
            className="w-full lg:w-[500px] lg:h-[150px] rounded-tl-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-4 lg:ml-4 lg:mt-0"

/>
        </div>
      </div>
    </div>
  );
};

export default Post1;

