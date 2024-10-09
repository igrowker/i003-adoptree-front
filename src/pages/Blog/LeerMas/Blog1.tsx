import React from 'react';
import limones from '../../../assets/limones.jpg';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../LanguageContext/LanguageContext';

interface Content {
  title: string;
  text: string;
}

const Post1: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<'es' | 'en', Content> = {
    es: {
      title: 'Actualización del Proyecto',
      text: `Este mes hemos logrado un progreso significativo en la implementación de nuevas prácticas sostenibles en la finca.
      Hemos introducido nuevas especies de árboles autóctonos, que no solo contribuyen a la biodiversidad, 
      sino que también mejoran la calidad del suelo y ayudan a retener más agua, haciéndonos menos dependientes de los recursos hídricos externos.
      Además, hemos implementado un sistema de riego más eficiente, que optimiza el uso del agua y minimiza el desperdicio.

      Aparte de estos avances, también hemos iniciado un programa de formación para nuestros empleados, 
      en el cual se les educa sobre la importancia de la sostenibilidad y el impacto positivo que estas acciones tienen en el medio ambiente. 
      El programa no solo mejora las habilidades técnicas del equipo, sino que también refuerza nuestro compromiso colectivo con la protección del entorno.`,
    },
    en: {
      title: 'Project Update',
      text: `This month, we have made significant progress in implementing new sustainable practices on the farm. 
      We have introduced new species of native trees, which not only contribute to biodiversity, but also improve soil quality and help retain more water, making us less dependent on external water resources. 
      In addition, we have implemented a more efficient irrigation system, which optimizes water use and minimizes waste.

      Beyond these advancements, we have also launched a training program for our employees, 
      educating them on the importance of sustainability and the positive impact these actions have on the environment. 
      The program not only enhances the technical skills of the team but also reinforces our collective commitment to environmental protection.`,
    },
  };

  const { title, text } = content[language];

  return (
    <div className="px-[200px] py-[150px]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="relative">
            <img
              className="w-full h-64 object-cover"
              src={limones}
              alt="Project update"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <h1 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
              {title}
            </h1>
          </div>
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {text}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Post1;
