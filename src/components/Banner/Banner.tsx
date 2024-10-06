import React, { useState } from 'react';
import './Banner.css';

const Banner: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  const content: Record<'es' | 'en', any> = {
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
          <h1>
            {titleLine1}
            <br />
            {titleLine2}
            <br />
            {titleLine3}
          </h1>
          <div className="flex justify-center space-x-4 mb-8">
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
          <button className="text-white bg-gradient-to-r from-green-500 to-green-600 rounded-[10px] shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform">
            <a href="/adopta-un-arbol">{button}</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

