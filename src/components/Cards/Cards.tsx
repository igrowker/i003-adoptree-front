import React from 'react';
import './Cards.css';

interface CardsProps {
  language: 'es' | 'en';
}

const Cards: React.FC<CardsProps> = ({ language }) => {
  const content: Record<
    'es' | 'en',
    { directPurchase: string; title: string }
  > = {
    es: {
      directPurchase: 'Compra directa',
      title: 'Agricultura de otros productores',
    },
    en: {
      directPurchase: 'Direct Purchase',
      title: 'Agriculture from other producers',
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
    <section className="w-full my-[70px] lg:px-[200px] 2xl:px-[130px]">
      <div className="text-center">
        <span className="text-[#FF9900] font-facuFont text-[28px]">
          {directPurchase}
        </span>
        <h2 className="text-3xl font-[800] mb-[40px]">{title}</h2>
      </div>
      <div className="flex justify-center items-center gap-6">
        {cards.map((card, index) => (
          <img
            className="lg:w-[216px] 2xl:w-[260px]"
            key={index}
            src={card.thumbnail}
            alt={`Card ${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
