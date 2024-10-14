import React from 'react';
import './Banner.css';

interface BannerProps {
  language: 'es' | 'en';
}

interface ContentText {
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  button: string;
}

const Banner: React.FC<BannerProps> = ({ language }) => {
  const content: Record<'es' | 'en', ContentText> = {
    es: {
      titleLine1: 'Adopta un árbol cítrico',
      titleLine2: 'y sé parte de la agricultura',
      titleLine3: 'sostenible.',
      button: 'Adopta ahora',
    },
    en: {
      titleLine1: 'Adopt a citrus tree',
      titleLine2: 'and be part of sustainable',
      titleLine3: 'agriculture.',
      button: 'Adopt now',
    },
  };

  const { titleLine1, titleLine2, titleLine3, button } = content[language];

  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="banner-text">
          <h1 className="lg:text-[45px] 2xl:text-[48px]">
            {titleLine1}
            <br />
            {titleLine2}
            <br />
            {titleLine3}
          </h1>
          <button className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
            <a href="/adopta-un-arbol">{button}</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;