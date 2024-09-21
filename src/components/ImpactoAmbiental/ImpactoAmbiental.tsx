import React from 'react';

// Componente principal
const ImpactoAmbiental: React.FC = () => {
  return (
    <div className="px-4 py-40 bg-gray-100 sm:px-10 lg:px-20 xl:px-60">
      <Section
        title="Regenerar la tierra que nos alimenta"
        content="Adoptree es una plataforma que busca conectar a personas con la naturaleza, permitiendo adoptar árboles y reforestar áreas deforestadas."
        imageSrc="./agriculturaRegenerativa.webp"
        imageAlt="Agricultura Regenerativa"
      />

      <MetricSection
        title="Los frutos de un movimiento sostenible"
        content="Adoptree busca conectar a personas con la naturaleza, permitiendo adoptar árboles y reforestar áreas deforestadas."
        metrics={[
          { thumbnail: './productoresImg.webp', value: '21 productores regenerando su entorno' },
          { thumbnail: './hectareasImg.webp', value: '1490 hectáreas en proceso de regeneración' },
          { thumbnail: './adopcionesImg.webp', value: '38.596 adopciones apoyando la regeneración' },
        ]}
      />

      <MetricSection
        title="Nuestro impacto ambiental"
        content="A base de combatir toda la biodiversidad que crecía alrededor de los cultivos, los suelos se volvieron inertes y el agricultor empezó a necesitar cada vez más nutrientes para ver crecer sus cosechas."
        metrics={[
          { thumbnail: './suelosDegradados.webp', value: 'Entre un 60% y 70% de los suelos de la Argentina están degradados' },
          { thumbnail: './emisionesTotales.webp', value: 'El sistema alimentario es responsable de más del 30% de las emisiones totales del cambio climático' },
          { thumbnail: './biodiversidad.webp', value: 'Se ha reducido la biodiversidad un 60% a nivel mundial por nuestro sistema alimentario' },
          { thumbnail: './aguaDulce.webp', value: 'El 70% del agua dulce que se extrae en el mundo va destinada a la agricultura' },
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
            value: '¡Se podría absorber más del 100% de las emisiones actuales de CO₂!',
          },
          {
            thumbnail: './plagas.webp',
            title: 'Resistencia natural a plagas y sequías',
            value: 'Mejora los mecanismos de defensa de las plantas y la capacidad del suelo de absorber agua.',
          },
          {
            thumbnail: './estabilidadFinanciera.webp',
            title: 'Estabilidad financiera para los agricultores',
            value: 'Reduce la dependencia de insumos mientras mejora los volúmenes de producción.',
          },
          {
            thumbnail: './alimentoNutritivo.webp',
            title: 'Alimentos más nutritivos y saludables',
            value: 'El 70% del agua dulce que se extrae en el mundo va destinada a la agricultura.',
          },
        ]}
      />

      <SectionInteres />
    </div>
  );
};

// Componente de Sección General con Imagen
const Section: React.FC<{ title: string; content: string; imageSrc: string; imageAlt: string }> = ({ title, content, imageSrc, imageAlt }) => (
  <section className="flex flex-col items-center gap-10 lg:flex-row py-10">
    <div className="flex-1 mb-4 lg:mb-0">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg opacity-75">{content}</p>
    </div>
    <div className="flex-1 flex justify-center">
      <img className="max-w-full h-auto " src={imageSrc} alt={imageAlt} />
    </div>
  </section>
);

// Componente de Métricas
const MetricSection: React.FC<{ title: string; content: string; metrics: { thumbnail: string; value: string; title?: string }[] }> = ({ title, content, metrics }) => (
  <section className="flex flex-col items-center gap-10 py-10 ">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-center">{content}</p>
    <div className="flex flex-col gap-4 items-center justify-center md:flex-row">
      {metrics.map((metric, index) => (
        <MetricItem key={index} thumbnail={metric.thumbnail} value={metric.value} title={metric.title} />
      ))}
    </div>
  </section>
);

// Componente de Métrica Individual
const MetricItem: React.FC<{ thumbnail: string; value: string; title?: string }> = ({ thumbnail, value, title }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
    <img className="w-20 h-20 object-cover" src={thumbnail} alt={title} />
    {title && <h3 className="mt-2 font-semibold">{title}</h3>}
    <p className="text-sm opacity-60">{value}</p>
  </div>
);

// Componente para la sección de Testimonios
const SectionQuote: React.FC = () => (
  <section className="flex flex-col lg:flex-row py-10 p-5 rounded-lg shadow-md">
    <div className="flex-1 mb-4 lg:mb-0">
      <p className="text-lg opacity-75">
        "Vamos a iniciar la aventura de mejorar lo ecológico con prácticas regenerativas. Creemos que estas prácticas nos pueden ayudar económicamente en la finca y en la mejora del cultivo si conseguimos simbiosis entre animales, la hierba y los árboles."
      </p>
      <span className="block text-right font-semibold">Paco Marín - Finca Refijo y Marroquino</span>
    </div>
    <div className="flex-1 flex justify-center">
      <img className="max-w-full h-auto rounded-lg shadow-md" src="./paquitoProductor.jpg" alt="Paco Marín" />
    </div>
  </section>
);

// Componente para la Sección de Interés
const SectionInteres: React.FC = () => (
  <section className="flex flex-col items-center gap-10 py-10">
    <h2 className="text-4xl font-bold">También podría interesarte</h2>
    <div className="flex flex-col gap-10 justify-center cursor-pointer md:flex-row">
      {[
        { imgSrc: './tallerAgro.png', title: '¡Completamos el segundo taller del año!' },
        { imgSrc: './radioAgro.png', title: '¡Estuvimos en la radio!' },
        { imgSrc: './pasantesAgro.png', title: 'Regenerando el paisaje con árboles: Adoptree' },
      ].map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
          <img className="w-72 h-auto rounded-lg" src={item.imgSrc} alt={item.title} />
          <h3 className="mt-2">{item.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default ImpactoAmbiental;
