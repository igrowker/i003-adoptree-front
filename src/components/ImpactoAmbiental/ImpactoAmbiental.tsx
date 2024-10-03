import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../pages/About/AboutUsSection.css';

// Estilos comunes
const sectionContainer = 'flex flex-col items-center gap-4 py-24';
const sectionTitle = 'text-4xl font-bold text-gray-800 mb-6 text-center';
const sectionContent = 'text-lg text-gray-600 max-w-3xl text-center mb-10';

// Componente principal
const ImpactoAmbiental: React.FC = () => {
  return (
    <div className="px-4 py-20 from-green-50 to-white sm:px-10 lg:px-20 xl:px-[200px]">
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
  <section className="flex flex-col items-center lg:flex-row px-[30px] py-20">
    <motion.div
      className="flex-1 mb-8 lg:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-[3.5rem] font-bold mb-6 text-gray-800">{title}</h1>
      <p className="text-xl text-gray-600">{content}</p>
    </motion.div>
    <motion.div
      className="flex-1 flex justify-end"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <img
        className="max-w-[450px] h-auto rounded-lg"
        src={imageSrc}
        alt={imageAlt}
      />
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

// Componente para la sección de Testimonios
const SectionQuote: React.FC = () => (
  <section className="bg-green-50 py-20 px-8 rounded-lg shadow-md my-20">
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
      <div className="flex-1 mb-8 lg:mb-0 lg:pr-12">
        <blockquote className="text-xl italic text-gray-700">
          "Vamos a iniciar la aventura de mejorar lo ecológico con prácticas
          regenerativas. Creemos que estas prácticas nos pueden ayudar
          económicamente en la finca y en la mejora del cultivo si conseguimos
          simbiosis entre animales, la hierba y los árboles."
        </blockquote>
        <p className="mt-4 text-right font-semibold text-gray-800">
          Paco Marín - Finca Refijo y Marroquino
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

// Componente para la Sección de Interés
const SectionInteres: React.FC = () => (
  <section className={sectionContainer}>
    <h2 className={sectionTitle}>También podría interesarte</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        {
          imgSrc: './tallerAgro.png',
          title: '¡Completamos el segundo taller del año!',
        },
        { imgSrc: './radioAgro.png', title: '¡Estuvimos en la radio!' },
        {
          imgSrc: './pasantesAgro.png',
          title: 'Regenerando el paisaje con árboles: Adoptree',
        },
      ].map((item, index) => (
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
        Ver más blogs
      </Link>
    </button>
  </section>
);

export default ImpactoAmbiental;
