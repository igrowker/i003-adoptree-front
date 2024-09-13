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
    <div className="w-full flex flex-col items-center gap-10">
      <div className="text-center">
        <span className="text-[#FF9900] font-facuFont">Compra directa</span>
        <h2 className="text-3xl font-manrope font-extrabold">
          Agricultura de otros productores
        </h2>
      </div>
      <div className="flex justify-center items-center gap-2">
        {cards.map((card, index) => (
          <img
            className="w-[300px] h-[500px] "
            key={index}
            src={card.thumbnail}
            alt={`Card ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
