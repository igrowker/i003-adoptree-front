import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../LanguageContext/LanguageContext'; // Ajusta la ruta según tu estructura
import '../LanguageSwitcher/LanguageSwitcher.css'; // Asegúrate de que la ruta sea correcta

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isAtFooter, setIsAtFooter] = useState(false);

  const handleLanguageChange = (lang: 'es' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Almacena el idioma en localStorage
  };

  const checkScrollPosition = () => {
    const footer = document.querySelector('footer'); // Selecciona tu footer
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      const isInView = footerRect.top <= window.innerHeight && footerRect.top >= 0;
      setIsAtFooter(isInView);
    }
  };

  useEffect(() => {
    // Recupera el idioma de localStorage al cargar el componente
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage as 'es' | 'en'); // Establece el idioma guardado
    }

    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, [setLanguage]);

  return (
    <div className="language-switcher" style={{ bottom: isAtFooter ? 'calc(20px + 100px)' : '20px' }}>
      <button
        onClick={() => handleLanguageChange('es')}
        className={language === 'es' ? 'active' : ''}
      >
        Español
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={language === 'en' ? 'active' : ''}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;

