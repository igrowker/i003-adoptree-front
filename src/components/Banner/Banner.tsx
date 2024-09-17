import React from 'react';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>
          Adopta un árbol
          <br />
          cítrico y sé parte
          <br />
          de la agricultura
          <br />
          sostenible.
        </h1>
      </div>
    </section>
  );
};

export default Banner;
