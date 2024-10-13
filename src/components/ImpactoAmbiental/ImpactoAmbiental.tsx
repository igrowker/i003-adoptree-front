import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../pages/About/AboutUsSection.css';

interface ImpactoAmbientalProps {
  language: 'es' | 'en';
}

const content: Record<'es' | 'en', { [key: string]: string }> = {
  es: {
    title: 'Regenerar la tierra que nos alimenta',
    description:
      'Adoptree es una plataforma que busca conectar a personas con la naturaleza, permitiendo adoptar árboles y reforestar áreas deforestadas.',
    subtitle: 'Los frutos de un movimiento sostenible',
    impactoTitle: 'Nuestro impacto ambiental',
    interesTitle: 'También podría interesarte',
    seeMore: 'Ver más blogs',
    quote: '"Vamos a iniciar la aventura de mejorar lo ecológico con prácticas regenerativas. Creemos que estas prácticas nos pueden ayudar económicamente en la finca y en la mejora del cultivo si conseguimos simbiosis entre animales, la hierba y los árboles."',
    quoteAuthor: 'Paco Marín - Finca Refijo y Marroquino',
    // Metrics
    productor: '21 productores regenerando su entorno',
    hectareas: '1490 hectáreas en proceso de regeneración',
    adopciones: '38.596 adopciones apoyando la regeneración',
    suelosDegradados: 'Entre un 60% y 70% de los suelos de la Argentina están degradados',
    emisiones: 'El sistema alimentario es responsable de más del 30% de las emisiones totales del cambio climático',
    biodiversidad: 'Se ha reducido la biodiversidad un 60% a nivel mundial por nuestro sistema alimentario',
    aguaDulce: 'El 70% del agua dulce que se extrae en el mundo va destinada a la agricultura',
    // Blog titles
    blog1: '¡Completamos el segundo taller del año!',
    blog2: '¡Estuvimos en la radio!',
    blog3: 'Regenerando el paisaje con árboles: Adoptree',
  },
  en: {
    title: 'Regenerate the land that feeds us',
    description:
      'Adoptree is a platform that seeks to connect people with nature, allowing them to adopt trees and reforest deforested areas.',
    subtitle: 'The fruits of a sustainable movement',
    impactoTitle: 'Our environmental impact',
    interesTitle: 'You might also be interested in',
    seeMore: 'See more blogs',
    quote: '"We are going to start the adventure of improving ecology with regenerative practices. We believe that these practices can help us economically on the farm and improve the crops if we achieve symbiosis between animals, grass, and trees."',
    quoteAuthor: 'Paco Marín - Finca Refijo y Marroquino',
    // Metrics
    productor: '21 producers regenerating their environment',
    hectareas: '1490 hectares in the process of regeneration',
    adopciones: '38,596 adoptions supporting regeneration',
    suelosDegradados: 'Between 60% and 70% of soils in Argentina are degraded',
    emisiones: 'The food system is responsible for more than 30% of total climate change emissions',
    biodiversidad: 'Biodiversity has been reduced by 60% worldwide due to our food system',
    aguaDulce: '70% of the freshwater extracted in the world goes to agriculture',
    // Blog titles
    blog1: 'We completed the second workshop of the year!',
    blog2: 'We were on the radio!',
    blog3: 'Regenerating the landscape with trees: Adoptree',
  },
};

const ImpactoAmbiental: React.FC<ImpactoAmbientalProps> = ({ language }) => {
  const {
    title,
    description,
    subtitle,
    impactoTitle,
    interesTitle,
    seeMore,
    quote,
    quoteAuthor,
    productor,
    hectareas,
    adopciones,
    suelosDegradados,
    emisiones,
    biodiversidad,
    aguaDulce,
    blog1,
    blog2,
    blog3,
  } = content[language];

  return (
    <div className="px-4 py-20 from-green-50 to-white sm:px-10 lg:px-[200px] 2xl:px-[165px]">
      <Section
        title="Regenerar la tierra que nos alimenta"
        content="Adoptree es una plataforma que busca conectar a personas con la naturaleza, permitiendo adoptar árboles y reforestar áreas deforestadas."
        imageSrc="./impacto.png"
        imageAlt="Agricultura Regenerativa"
      />

      <MetricSection
        title="Los frutos de un movimiento sostenible"
        content="Adoptree busca conectar a personas con la naturaleza, permitiendo adoptar árboles y reforestar áreas deforestadas."
        metrics={[
          {
            thumbnail: './productoresImg.webp',
            value: '21 productores regenerando su entorno',
          },
          {
            thumbnail: './hectareasImg.webp',
            value: '1490 hectáreas en proceso de regeneración',
          },
          {
            thumbnail: './adopcionesImg.webp',
            value: '38.596 adopciones apoyando la regeneración',
          },
        ]}
      />

      <MetricSection
        title="Nuestro impacto ambiental"
        content="A base de combatir toda la biodiversidad que crecía alrededor de los cultivos, los suelos se volvieron inertes y el agricultor empezó a necesitar cada vez más nutrientes para ver crecer sus cosechas."
        metrics={[
          {
            thumbnail: './suelosDegradados.webp',
            value:
              'Entre un 60% y 70% de los suelos de la Argentina están degradados',
          },
          {
            thumbnail: './emisionesTotales.webp',
            value:
              'El sistema alimentario es responsable de más del 30% de las emisiones totales del cambio climático',
          },
          {
            thumbnail: './biodiversidad.webp',
            value:
              'Se ha reducido la biodiversidad un 60% a nivel mundial por nuestro sistema alimentario',
          },
          {
            thumbnail: './aguaDulce.webp',
            value:
              'El 70% del agua dulce que se extrae en el mundo va destinada a la agricultura',
          },
        ]}
      />

      <SectionQuote />

      <MetricSection
        title="El inmenso potencial de cambiar cómo cultivamos"
        content="El 50% de toda la tierra habitable de nuestro planeta está destinada a la agricultura. ¿Imaginas ponerla al servicio de regenerar nuestro ecosistema en lugar de destruirlo? La agricultura regenerativa lo hace posible."
        metrics={[
          {
            thumbnail: './microorganismos.webp',
            title: 'Mayor biodiversidad y captura de carbono',
            value:
              '¡Se podría absorber más del 100% de las emisiones actuales de CO₂!',
          },
          {
            thumbnail: './plagas.webp',
            title: 'Resistencia natural a plagas y sequías',
            value:
              'Mejora los mecanismos de defensa de las plantas y la capacidad del suelo de absorber agua.',
          },
          {
            thumbnail: './estabilidadFinanciera.webp',
            title: 'Estabilidad financiera para los agricultores',
            value:
              'Reduce la dependencia de insumos mientras mejora los volúmenes de producción.',
          },
          {
            thumbnail: './alimentoNutritivo.webp',
            title: 'Alimentos más nutritivos y saludables',
            value:
              'El 70% del agua dulce que se extrae en el mundo va destinada a la agricultura.',
          },
        ]}
      />

      <SectionInteres />
    </div>
  );
};

// Componente de Sección General con Imagen
const Section: React.FC<{
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
}> = ({ title, content, imageSrc, imageAlt }) => (
  <section className="flex flex-col items-center lg:flex-row pb-[3.2rem] gap-[30px]">
    <motion.div
      className="flex-1 mb-8 lg:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-[3.5rem] font-[900] mb-6 text-gray-800">{title}</h1>
      <p className="text-xl text-gray-600">{content}</p>
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

// Componente de Métricas
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

// Componente de Métrica Individual (Mejorado)
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

      <section className="bg-green-50 py-20 px-8 rounded-lg shadow-md my-20">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="flex-1 mb-8 lg:mb-0 lg:pr-12">
            <blockquote className="text-xl italic text-gray-700">{quote}</blockquote>
            <p className="mt-4 text-right font-semibold text-gray-800">{quoteAuthor}</p>
          </div>
          <div className="flex-1 flex justify-center">
            <img className="max-w-full h-auto rounded-lg shadow-xl" src="./paquitoProductor.jpg" alt="Paco Marín" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 py-24">
        <h2 className="text-4xl font-[800] text-gray-800 mb-6 text-center">{interesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { imgSrc: './tallerAgro.png', title: blog1 },
            { imgSrc: './radioAgro.png', title: blog2 },
            { imgSrc: './pasantesAgro.png', title: blog3 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img className="w-full h-48 object-cover rounded-lg mb-4" src={item.imgSrc} alt={item.title} />
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            </motion.div>
          ))}
        </div>
        <button className="rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838] 4xl:text-[20px] mt-[24px]">
          <Link className="text-white hover:text-white" to="/blogs">
            {seeMore}
          </Link>
        </button>
      </section>
    </div>
  );
};

export default ImpactoAmbiental;
