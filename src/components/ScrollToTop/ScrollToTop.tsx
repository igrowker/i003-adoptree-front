import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll hacia la parte superior de la página
  }, [pathname]); // Ejecuta el efecto cada vez que cambie la ruta

  return null; // No renderiza nada en el DOM
};

export default ScrollToTop;
