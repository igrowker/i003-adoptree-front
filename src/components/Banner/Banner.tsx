import React from 'react';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="banner-text">
          <h1>
            Adopta un árbol cítrico
            <br />
            y sé parte de la agricultura
            <br />
            sostenible.
          </h1>
          <button className="rounded-[10px] bg-[#4BAF47] text-white hover:bg-[#3B8838] 4xl:text-[20px]">
            Adopta ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
