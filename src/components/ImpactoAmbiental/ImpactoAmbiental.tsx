import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../pages/About/AboutUsSection.css';
import { useLanguage } from '../../LanguageContext/LanguageContext';

// Common styles
const sectionContainer = 'flex flex-col items-center gap-4 py-24';
const sectionTitle = 'text-4xl font-[800] text-gray-800 mb-6 text-center';
const sectionContent = 'text-lg text-gray-600 max-w-3xl text-center mb-10';

// Language translations
const translations = {
  es: {
    title: "Regenerar la tierra que nos alimenta",
    content: "Adoptree es una innovadora plataforma digital que fomenta la conexión entre las personas y la naturaleza, brindando la oportunidad de adoptar árboles y participar activamente en la reforestación de áreas degradadas.",
    metricsTitle: "Los frutos de un movimiento sostenible",
    metricsContent: "Adoptree busca conectar a personas con la naturaleza, permitiendo adoptar árboles y reforestar áreas deforestadas.",
    impactTitle: "Nuestro impacto ambiental",
    impactContent: "A base de combatir toda la biodiversidad que crecía alrededor de los cultivos, los suelos se volvieron inertes y el agricultor empezó a necesitar cada vez más nutrientes para ver crecer sus cosechas.",
    potentialTitle: "El inmenso potencial de cambiar cómo cultivamos",
    potentialContent: "El 50% de toda la tierra habitable de nuestro planeta está destinada a la agricultura. ¿Imaginas ponerla al servicio de regenerar nuestro ecosistema en lugar de destruirlo? La agricultura regenerativa lo hace posible.",
    interestTitle: "También podría interesarte",
    viewMoreBlogs: "Ver más blogs",
    // Add more Spanish translations here
  },
  en: {
    title: "Regenerate the land that feeds us",
    content: "Adoptree is an innovative digital platform that fosters the connection between people and nature, providing the opportunity to adopt trees and actively participate in the reforestation of degraded areas.",
    metricsTitle: "The fruits of a sustainable movement",
    metricsContent: "Adoptree seeks to connect people with nature, allowing them to adopt trees and reforest deforested areas.",
    impactTitle: "Our environmental impact",
    impactContent: "By combating all the biodiversity that grew around crops, soils became inert and farmers began to need more and more nutrients to see their crops grow.",
    potentialTitle: "The immense potential of changing how we cultivate",
    potentialContent: "50% of all habitable land on our planet is destined for agriculture. Can you imagine putting it at the service of regenerating our ecosystem instead of destroying it? Regenerative agriculture makes it possible.",
    interestTitle: "You might also be interested in",
    viewMoreBlogs: "View more blogs",
    // Add more English translations here
  }
};

// Main component
const ImpactoAmbiental: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="px-4 py-20 from-green-50 to-white sm:px-10 lg:px-[200px] 2xl:px-[130px]">
      <Section
        title={t.title}
        content={t.content}
        imageSrc="./impacto.png"
        imageAlt={language === 'es' ? "Agricultura Regenerativa" : "Regenerative Agriculture"}
      />

      <MetricSection
        title={t.metricsTitle}
        content={t.metricsContent}
        metrics={[
          {
            thumbnail: './productoresImg.webp',
            value: language === 'es' ? '21 productores regenerando su entorno' : '21 producers regenerating their environment',
          },
          {
            thumbnail: './hectareasImg.webp',
            value: language === 'es' ? '1490 hectáreas en proceso de regeneración' : '1490 hectares in the process of regeneration',
          },
          {
            thumbnail: './adopcionesImg.webp',
            value: language === 'es' ? '38.596 adopciones apoyando la regeneración' : '38,596 adoptions supporting regeneration',
          },
        ]}
      />

      <MetricSection
        title={t.impactTitle}
        content={t.impactContent}
        metrics={[
          {
            thumbnail: './suelosDegradados.webp',
            value: language === 'es' 
              ? 'Entre un 60% y 70% de los suelos de la Argentina están degradados'
              : 'Between 60% and 70% of Argentina\'s soils are degraded',
          },
          {
            thumbnail: './emisionesTotales.webp',
            value: language === 'es'
              ? 'El sistema alimentario es responsable de más del 30% de las emisiones totales del cambio climático'
              : 'The food system is responsible for more than 30% of total climate change emissions',
          },
          {
            thumbnail: './biodiversidad.webp',
            value: language === 'es'
              ? 'El sistema alimentario es responsable de más del 30% de las emisiones totales del cambio climático'
              : 'The food system is responsible for more than 30% of total climate change emissions',
          },
          {
            thumbnail: './aguaDulce.webp',
            value: language === 'es'
              ? 'El sistema alimentario es responsable de más del 30% de las emisiones totales del cambio climático'
              : 'The food system is responsible for more than 30% of total climate change emissions',
          }
        ]}
      />

      <SectionQuote language={language} />

      <MetricSection
        title={t.potentialTitle}
        content={t.potentialContent}
        metrics={[
          {
            thumbnail: './microorganismos.webp',
            title: language === 'es' ? 'Mayor biodiversidad y captura de carbono' : 'Greater biodiversity and carbon capture',
            value: language === 'es'
              ? '¡Se podría absorber más del 100% de las emisiones actuales de CO₂!'
              : 'More than 100% of current CO₂ emissions could be absorbed!',
          },
          {
            thumbnail: './plagas.webp',
            title: language === 'es' ? 'Mayor biodiversidad y captura de carbono' : 'Greater biodiversity and carbon capture',
            value: language === 'es'
              ? '¡Se podría absorber más del 100% de las emisiones actuales de CO₂!'
              : 'More than 100% of current CO₂ emissions could be absorbed!',
          },
          {
            thumbnail: './estabilidadFinanciera.webp',
            title: language === 'es' ? 'Mayor biodiversidad y captura de carbono' : 'Greater biodiversity and carbon capture',
            value: language === 'es'
              ? '¡Se podría absorber más del 100% de las emisiones actuales de CO₂!'
              : 'More than 100% of current CO₂ emissions could be absorbed!',
          },
          {
            thumbnail: './alimentoNutritivo.webp',
            title: language === 'es' ? 'Mayor biodiversidad y captura de carbono' : 'Greater biodiversity and carbon capture',
            value: language === 'es'
              ? '¡Se podría absorber más del 100% de las emisiones actuales de CO₂!'
              : 'More than 100% of current CO₂ emissions could be absorbed!',
          }
        ]}
      />

      <SectionInteres language={language} />
    </div>
  );
};

// Section component
const Section: React.FC<{
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}> = ({ title, content, imageSrc, imageAlt }) => (
  <section className="flex flex-col items-center lg:flex-row pb-[3.2rem] gap-[20px]">
    <motion.div
      className="flex-1 mb-8 lg:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-[3.5rem] font-[900] mb-6 text-gray-800">{title}</h1>
      <p className="text-xl text-gray-600 w-[590px]">{content}</p>
    </motion.div>
    <motion.div
      className="flex-1 flex justify-end"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <img className="h-auto rounded-lg" src={imageSrc} alt={imageAlt} />
    </motion.div>
  </section>
);

// MetricSection component
const MetricSection: React.FC<{
  title: string;
  content: string;
  metrics: { thumbnail: string; value: string; title?: string }[];
}> = ({ title, content, metrics }) => (
  <section className={sectionContainer}>
    <h2 className={sectionTitle}>{title}</h2>
    <p className={sectionContent}>{content}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-8">
      {metrics.map((metric, index) => (
        <MetricItem
          key={index}
          thumbnail={metric.thumbnail}
          value={metric.value}
          title={metric.title}
        />
      ))}
    </div>
  </section>
);

// MetricItem component
const MetricItem: React.FC<{
  thumbnail: string;
  value: string;
  title?: string;
}> = ({ thumbnail, value, title }) => (
  <motion.div
    className="value-card flex flex-col justify-center items-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="w-24 h-24 mb-4 rounded-full bg-green-100 flex items-center justify-center">
      <img
        className="w-16 h-16 object-contain"
        src={thumbnail}
        alt={title || value}
      />
    </div>
    {title && (
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    )}
    <p className="text-base text-gray-600">{value}</p>
  </motion.div>
);

// SectionQuote component
const SectionQuote: React.FC<{ language: 'es' | 'en' }> = ({ language }) => {
  const quote = language === 'es'
    ? "Vamos a iniciar la aventura de mejorar lo ecológico con prácticas regenerativas. Creemos que estas prácticas nos pueden ayudar económicamente en la finca y en la mejora del cultivo si conseguimos simbiosis entre animales, la hierba y los árboles."
    : "We are going to start the adventure of improving the ecological with regenerative practices. We believe that these practices can help us economically on the farm and in improving the crop if we achieve symbiosis between animals, grass and trees.";

  const author = "Paco Marín - Finca Refijo y Marroquino";

  return (
    <section className="bg-green-50 py-20 px-8 rounded-lg shadow-md my-20">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="flex-1 mb-8 lg:mb-0 lg:pr-12">
          <blockquote className="text-xl italic text-gray-700">
            "{quote}"
          </blockquote>
          <p className="mt-4 text-right font-semibold text-gray-800">
            {author}
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            className="max-w-full h-auto rounded-lg shadow-xl"
            src="./paquitoProductor.jpg"
            alt="Paco Marín"
          />
        </div>
      </div>
    </section>
  );
};

// SectionInteres component
const SectionInteres: React.FC<{ language: 'es' | 'en' }> = ({ language }) => {
  const t = translations[language];
  const items = [
    {
      imgSrc: './tallerAgro.png',
      title: language === 'es' ? '¡Completamos el segundo taller del año!' : 'We completed the second workshop of the year!',
    },
    {
      imgSrc: './radioAgro.png',
      title: language === 'es' ? '¡Estuvimos en la radio!' : 'We were on the radio!',
    },
    {
      imgSrc: './pasantesAgro.png',
      title: language === 'es' ? 'Regenerando el paisaje con árboles: Adoptree' : 'Regenerating the landscape with trees: Adoptree',
    },
  ];

  return (
    <section className={sectionContainer}>
      <h2 className={sectionTitle}>{t.interestTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              className="w-full h-48 object-cover rounded-lg mb-4"
              src={item.imgSrc}
              alt={item.title}
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          </motion.div>
        ))}
      </div>
      <button className="rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838] hover:5tex 4xl:text-[20px] mt-[24px]">
        <Link className="text-white hover:text-white" to="/blogs">
          {t.viewMoreBlogs}
        </Link>
      </button>
    </section>
  );
};

export default ImpactoAmbiental;