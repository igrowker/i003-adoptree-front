import React from 'react';
import CheckIcon from '../../assets/CheckIcon.svg';
import FruitIcon from '../../assets/FruitsIcon.svg';
import PlantIcon from '../../assets/PlantsIcon.svg';
import imgNaranjas from '../../assets/imgNaranjas.png';
import './Agriculture.css';

interface AgricultureProps {
  language: 'es' | 'en';
}

const Agriculture: React.FC<AgricultureProps> = ({ language }) => {
  const content: Record<'es' | 'en', any> = {
    es: {
      crowdfarming: 'Crowdfarming',
      title: 'La agricultura del siglo XXI',
      subtitle: 'Ecológica y sostenible',
      description:
        'Las adopciones de árboles nos permiten cultivar nuestros campos de forma ecológica y regenerativa. Decimos "regenerative" porque buscamos que nuestras prácticas agrícolas no solo mantengan, sino que mejoren nuestros ecosistemas: los suelos, los insectos, la energía que usamos y el agua que empleamos.',
      buyFruit: 'Compra fruta fresca',
      noAgrotoxics: 'No usamos agrotóxicos',
      ecological: 'Cultivamos de forma ecológica para mejorar nuestros sistemas.',
      regenerate: 'Regeneramos el suelo, cuidamos los insectos y optimizamos el uso de agua y energía.',
      discoverMore: 'Descubre más',
    },
    en: {
      crowdfarming: 'Crowdfarming',
      title: '21st Century Agriculture',
      subtitle: 'Ecological and sustainable',
      description:
        'The adoption of trees allows us to cultivate our fields in an ecological and regenerative way. We say "regenerative" because we aim for our agricultural practices to not only maintain but improve our ecosystems: the soil, the insects, the energy we use, and the water we employ.',
      buyFruit: 'Buy fresh fruit',
      noAgrotoxics: 'No agrotoxics used',
      ecological: 'We farm ecologically to improve our systems.',
      regenerate: 'We regenerate the soil, care for insects, and optimize the use of water and energy.',
      discoverMore: 'Discover more',
    },
  };

  const { crowdfarming, title, subtitle, description, buyFruit, noAgrotoxics, ecological, regenerate, discoverMore } =
    content[language];

  return (
    <section className="flex px-[200px] mt-[220px] mb-[6em] max-lg:flex-col max-lg:items-center 4xl:justify-center">
      <section className="w-[50%] 4xl:w-[30%] mr-4 flex flex-col justify-center items-center">
        <img className="w-[500px]" src={imgNaranjas} alt="Naranjas" />
      </section>
      <section className="w-[50%] 4xl:w-[30%] max-lg:w-[100%] max-lg:ml-16 max-lg:mt-16">
        <span className="text-[#FF9900] text-[20px] Typography">{crowdfarming}</span>
        <h2 className="text-[#1F1E17] text-5xl font-[800] w-[60%] mb-8 max-lg:w-[100%]">{title}</h2>
        <h3 className="text-[#4BAF47] text-xl font-bold mb-[1.2rem]">{subtitle}</h3>
        <p className="text-[#878680] w-[75%] mb-[1.2rem] max-lg:w-[90%] max-lg:mb-8">{description}</p>
        <div className="mb-[1.2rem] flex items-center max-lg:mb-8 gap-[15px]">
          <div className="flex items-center w-[30%] gap-[10px]">
            <img className="w-[64px]" src={FruitIcon} alt="Fruit Icon" />
            <p className="text-[#1F1E17] text-base font-bold">{buyFruit}</p>
          </div>
          <div className="flex items-center w-[30%] gap-[10px]">
            <img className="w-[64px]" src={PlantIcon} alt="Plant Icon" />
            <p className="text-[#1F1E17] text-base font-bold">{noAgrotoxics}</p>
          </div>
        </div>
        <div className="mb-[1.2rem] max-lg:mb-8">
          <div className="flex">
            <img className="w-[16px] mr-4" src={CheckIcon} alt="Check Icon" />
            <p className="text-[#1F1E17] font-semibold">{ecological}</p>
          </div>
          <div className="flex">
            <img className="w-[16px] mr-4" src={CheckIcon} alt="Check Icon" />
            <p className="text-[#1F1E17] font-semibold">{regenerate}</p>
          </div>
        </div>
        <button className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
          <a href="/impacto-ambiental">{discoverMore}</a>
        </button>
      </section>
    </section>
  );
};

export default Agriculture;
