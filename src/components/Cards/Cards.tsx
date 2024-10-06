import React, { useState } from 'react';
import './Cards.css';

const Cards: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  const content: Record<'es' | 'en', any> = {
    es: {
      directPurchase: 'Compra directa',
      title: 'Agricultura de otros productores',
    },
    en: {
      directPurchase: 'Direct Purchase',
      title: 'Agriculture from Other Producers',
    },
  };

  const { directPurchase, title } = content[language];

  const cards = [
    {
      thumbnail: '/cards/trigo.png',
    },
    {
      thumbnail: '/cards/oliva.png',
    },
    {
      thumbnail: '/cards/miel.png',
    },
    {
      thumbnail: '/cards/zapallo.png',
    },
  ];

  return (
    <section className="w-full my-[70px] px-[200px]">
      <div className="text-center">
        <span className="text-[#FF9900] font-facuFont text-[28px]">
          {directPurchase}
        </span>
        <h2 className="text-3xl font-[800] mb-[40px]">
          {title}
        </h2>
      </div>
      <div className="flex justify-center items-center gap-6">
        {cards.map((card, index) => (
          <img
            className="w-[260px]"
            key={index}
            src={card.thumbnail}
            alt={`Card ${index}`}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => toggleLanguage('es')}
          className={`px-4 py-2 rounded-[10px] ${language === 'es' ? 'bg-[#4BAF47] text-white' : 'bg-gray-200'} transition-colors duration-300`}
        >
          Español
        </button>
        <button
          onClick={() => toggleLanguage('en')}
          className={`px-4 py-2 rounded-[10px] ${language === 'en' ? 'bg-[#4BAF47] text-white' : 'bg-gray-200'} transition-colors duration-300`}
        >
          English
        </button>
      </div>
    </section>
  );
};

export default Cards;
