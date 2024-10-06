import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = (lang: 'es' | 'en') => {
    setLanguage(lang);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-green-500 text-white">
      {/* Links de navegación */}
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacto">Contacto</Link>
      </div>

      {/* LANGUAGE SWITCHER */}
      <div className="flex space-x-4">
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
    </nav>
  );
};

export default Navbar;
