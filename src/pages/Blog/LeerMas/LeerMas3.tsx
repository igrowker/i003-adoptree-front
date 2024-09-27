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
      title: 'Entrevista con el Dr. Juan Pérez',
      text: `En esta entrevista, el Dr. Juan Pérez nos habla sobre la importancia de las prácticas agrícolas sostenibles y cómo afectan al medio ambiente a largo plazo. En su opinión, la agricultura sostenible no solo se trata de métodos de cultivo, sino también de un enfoque holístico que considera la salud del suelo, la conservación del agua y la biodiversidad. El Dr. Pérez enfatiza que al implementar prácticas sostenibles, no solo estamos cuidando nuestro planeta, sino que también estamos asegurando un futuro viable para las generaciones venideras. A través de la rotación de cultivos, el uso de fertilizantes orgánicos y la reducción del uso de pesticidas, los agricultores pueden contribuir a un ecosistema más equilibrado y saludable. Además, comparte ejemplos inspiradores de comunidades que han adoptado estas prácticas y han visto mejoras significativas en su productividad y calidad de vida. Al final de la entrevista, el Dr. Pérez hace un llamado a todos los agricultores para que se unan a esta causa y trabajen juntos por un futuro sostenible.

Además, el Dr. Pérez subraya la importancia de la educación y la investigación en la promoción de prácticas agrícolas sostenibles. Afirma que es esencial formar a la próxima generación de agricultores en técnicas que respeten el medio ambiente y aprovechen al máximo los recursos naturales. Las universidades y centros de investigación deben colaborar con las comunidades agrícolas para desarrollar programas que no solo enseñen a los agricultores, sino que también incluyan a los jóvenes en la creación de soluciones innovadoras que beneficien a todos.`

    },
    en: {
      title: 'Interview with Dr. Juan Pérez',
      text: `In this interview, Dr. Juan Pérez discusses the importance of sustainable agricultural practices and how they impact the environment in the long term. In his view, sustainable agriculture is not just about farming methods, but a holistic approach that considers soil health, water conservation, and biodiversity. Dr. Pérez emphasizes that by implementing sustainable practices, we are not only caring for our planet but also ensuring a viable future for generations to come. Through crop rotation, the use of organic fertilizers, and reducing pesticide use, farmers can contribute to a more balanced and healthy ecosystem. He also shares inspiring examples of communities that have adopted these practices and have seen significant improvements in their productivity and quality of life. At the end of the interview, Dr. Pérez calls on all farmers to join this cause and work together for a sustainable future.

Additionally, Dr. Pérez highlights the importance of education and research in promoting sustainable agricultural practices. He states that it is essential to train the next generation of farmers in techniques that respect the environment and make the most of natural resources. Universities and research centers must collaborate with farming communities to develop programs that not only teach farmers but also involve young people in creating innovative solutions that benefit everyone.`
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
            src="src/assets/sostenible.jpg" // Asegúrate de que esta ruta sea correcta
            alt="Actualización del proyecto"
            className="w-full lg:w-[700px] lg:h-[200px] rounded-tl-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out mt-4 lg:ml-4 lg:mt-0"
/>
        </div>
      </div>
    </div>
  );
};

export default Post1;

