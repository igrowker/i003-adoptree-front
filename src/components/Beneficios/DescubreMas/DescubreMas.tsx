import React from 'react';
import refrescanteImg from './refrescante.jpg'; // Asegúrate de que la ruta es correcta
import soporteImg from './soporte.jpg'; // Asegúrate de que la ruta es correcta
import sosteniendoImg from './sosteniendo.jpg'; // Asegúrate de que la ruta es correcta
import { useLanguage } from '../../../LanguageContext/LanguageContext'; // Importa el contexto de idioma
import { AlertCircle, ShoppingCart } from 'lucide-react';

const DescubreMas: React.FC = () => {
  const { language } = useLanguage(); // Usamos el hook useLanguage para obtener el idioma

  return (
    <section className="lg:px-[200px] 2xl:px-[165px] my-[150px]">
      <div className="max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[3rem] font-[900] mb-[1.3rem]">
            {language === 'es' ? 'Descubre Más' : 'Discover More'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'es'
              ? 'Comprar directo del productor te ofrece alimentos frescos, de calidad, y la oportunidad de apoyar a quienes cultivan de manera sostenible. Aquí te contamos por qué es la mejor opción:'
              : 'Buying directly from the producer gives you fresh, high-quality food and the opportunity to support those who farm sustainably. Here’s why it’s the best choice:'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {[
            {
              title: language === 'es' ? 'Frescura Garantizada' : 'Guaranteed Freshness',
              image: refrescanteImg,
              description:
                language === 'es'
                  ? 'Al adoptar o comprar uno de nuestros árboles cítricos, estás apoyando la producción local y disfrutando de frutas recién cosechadas, llenas de frescura y nutrientes esenciales.'
                  : 'By adopting or buying one of our citrus trees, you are supporting local production and enjoying freshly harvested fruits full of freshness and essential nutrients.',
            },
            {
              title: language === 'es' ? 'Apoyo a los Agricultores Locales' : 'Support for Local Farmers',
              image: soporteImg,
              description:
                language === 'es'
                  ? 'Al colaborar con los pequeños productores, estás impulsando una economía más equitativa y sostenible, brindándoles la oportunidad de mejorar su calidad de vida.'
                  : 'By working with small producers, you are driving a more equitable and sustainable economy, giving them the opportunity to improve their quality of life.',
            },
            {
              title: language === 'es' ? 'Sostenibilidad' : 'Sustainability',
              image: sosteniendoImg,
              description:
                language === 'es'
                  ? 'Minimiza tu huella de carbono al prescindir de intermediarios, fomentando prácticas agrícolas sostenibles que protegen nuestro planeta para las futuras generaciones.'
                  : 'Minimize your carbon footprint by bypassing intermediaries, promoting sustainable farming practices that protect our planet for future generations.',
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-green-100 rounded-xl p-8 shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            {language === 'es'
              ? '¡Haz Parte de la Donación y Compra de Nuestros Árboles!'
              : 'Be Part of the Donation and Purchase of Our Trees!'}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {language === 'es'
              ? 'Únete a nuestra iniciativa adoptando uno de nuestros árboles: pomelero, limonero, naranjo o mandarino.'
              : 'Join our initiative by adopting one of our trees: grapefruit, lemon, orange, or mandarin.'}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300">
              <AlertCircle className="mr-2" size={24} />
              <a href="/donar">
                {language === 'es' ? 'Quiero Donar' : 'I Want to Donate'}
              </a>
            </button>
            <button className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300">
              <ShoppingCart className="mr-2" size={24} />
              <a href="adopta-un-arbol">
                {language === 'es' ? 'Quiero Adoptar' : 'I Want to Adopt'}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescubreMas;
