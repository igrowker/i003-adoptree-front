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
          <button className="rtext-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
            <a href="/adopta-un-arbol">Adopta ahora</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
