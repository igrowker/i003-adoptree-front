import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../LanguageContext/LanguageContext';

interface Content {
  title: string;
  text: string;
}

const Post2: React.FC = () => {
  const { language } = useLanguage(); // Get language from context

  const content: Record<'es' | 'en', Content> = {
    es: {
      title: 'Importancia de la Reforestación',
      text: `La reforestación es clave para combatir el cambio climático y preservar la biodiversidad. 
      En nuestro proyecto, estamos comprometidos con la restauración de ecosistemas dañados y la promoción de prácticas sostenibles que benefician tanto al medio ambiente como a las comunidades locales. 
      Al plantar árboles, no solo estamos creando nuevos hábitats para la fauna, sino que también estamos ayudando a limpiar el aire, conservar el agua y prevenir la erosión del suelo. 
      La reforestación también puede jugar un papel importante en la economía local al generar oportunidades de empleo y promover el ecoturismo. 
      Creemos que cada árbol plantado es un paso hacia un futuro más verde y saludable para todos.`,
    },
    en: {
      title: 'Importance of Reforestation',
      text: `Reforestation is key to combating climate change and preserving biodiversity. In our project, we are committed to restoring damaged ecosystems and promoting sustainable practices that benefit both the environment and local communities. 
      By planting trees, we are not only creating new habitats for wildlife, but we are also helping to clean the air, conserve water, and prevent soil erosion. 
      Reforestation can also play an important role in the local economy by creating job opportunities and promoting ecotourism. 
      We believe that every tree planted is a step towards a greener and healthier future for all.`,
    },
  };

  const { title, text } = content[language];

  return (
    <div className="lg:px-[200px] 2xl:px-[165px] py-[150px]">
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
              src="/src/assets/Reforestacion.jpg"
              alt="Importancia de la reforestación"
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

export default Post2;
