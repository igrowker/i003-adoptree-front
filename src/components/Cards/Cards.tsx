import React from 'react';
import './Cards.css';

const Cards: React.FC = () => {
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
    <section className="w-full my-[100px] px-[200px]">
      <div className="text-center">
        <span className="text-[#FF9900] font-facuFont">Compra directa</span>
        <h2 className="text-3xl font-manrope font-extrabold mb-[40px]">
          Agricultura de otros productores
        </h2>
      </div>
      <div className="flex justify-between items-center gap-2">
        {cards.map((card, index) => (
          <img
            className="w-[260px]"
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
