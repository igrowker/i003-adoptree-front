import React from 'react';
import { useTranslation } from 'react-i18next';
import usFlag from '../../../assets/en.png';
import esFlag from '../../../assets/es.png';

import './LanguageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      console.log(`Idioma cambiado a: ${lng}`);
    });
  };

  return (
    <div className="language-switcher">
      <img
        src={usFlag}
        alt="English"
        className={`flag-icon ${i18n.language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      />
      <img
        src={esFlag}
        alt="Español"
        className={`flag-icon ${i18n.language === 'es' ? 'active' : ''}`}
        onClick={() => changeLanguage('es')}
      />
    </div>
  );
};

export default LanguageSwitcher;
