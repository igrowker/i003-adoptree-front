import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../LanguageContext/LanguageContext';

interface Content {
  title: string;
  text: string;
}

const Post3: React.FC = () => {
  const { language } = useLanguage();

  const content: Record<'es' | 'en', Content> = {
    es: {
      title: 'Entrevista con el Dr. Juan Pérez',
      text: `En esta entrevista, el Dr. Juan Pérez nos habla sobre la importancia de las prácticas agrícolas sostenibles y cómo afectan al medio ambiente a largo plazo. En su opinión, la agricultura sostenible no solo se trata de métodos de cultivo, sino también de un enfoque holístico que considera la salud del suelo, la conservación del agua y la biodiversidad. El Dr. Pérez enfatiza que al implementar prácticas sostenibles, no solo estamos cuidando nuestro planeta, sino que también estamos asegurando un futuro viable para las generaciones venideras. A través de la rotación de cultivos, el uso de fertilizantes orgánicos y la reducción del uso de pesticidas, los agricultores pueden contribuir a un ecosistema más equilibrado y saludable. Además, comparte ejemplos inspiradores de comunidades que han adoptado estas prácticas y han visto mejoras significativas en su productividad y calidad de vida. Al final de la entrevista, el Dr. Pérez hace un llamado a todos los agricultores para que se unan a esta causa y trabajen juntos por un futuro sostenible.

      Además, el Dr. Pérez subraya la importancia de la educación y la investigación en la promoción de prácticas agrícolas sostenibles. Afirma que es esencial formar a la próxima generación de agricultores en técnicas que respeten el medio ambiente y aprovechen al máximo los recursos naturales. Las universidades y centros de investigación deben colaborar con las comunidades agrícolas para desarrollar programas que no solo enseñen a los agricultores, sino que también incluyan a los jóvenes en la creación de soluciones innovadoras que beneficien a todos.`,
    },
    en: {
      title: 'Interview with Dr. Juan Pérez',
      text: `In this interview, Dr. Juan Pérez discusses the importance of sustainable agricultural practices and how they impact the environment in the long term. In his view, sustainable agriculture is not just about farming methods, but a holistic approach that considers soil health, water conservation, and biodiversity. Dr. Pérez emphasizes that by implementing sustainable practices, we are not only caring for our planet but also ensuring a viable future for generations to come. Through crop rotation, the use of organic fertilizers, and reducing pesticide use, farmers can contribute to a more balanced and healthy ecosystem. He also shares inspiring examples of communities that have adopted these practices and have seen significant improvements in their productivity and quality of life. At the end of the interview, Dr. Pérez calls on all farmers to join this cause and work together for a sustainable future.

      Additionally, Dr. Pérez highlights the importance of education and research in promoting sustainable agricultural practices. He states that it is essential to train the next generation of farmers in techniques that respect the environment and make the most of natural resources. Universities and research centers must collaborate with farming communities to develop programs that not only teach farmers but also involve young people in creating innovative solutions that benefit everyone.`,
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
              src="https://iica.int/sites/default/files/2021-03/WhatsApp%20Image%202021-03-05%20at%2012.11.55.jpeg"
              alt="Entrevista con el Dr. Juan Pérez"
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

export default Post3;
