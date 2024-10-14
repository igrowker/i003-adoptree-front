import React from 'react';
import { useLanguage } from '../../LanguageContext/LanguageContext'; // Importa el hook del contexto
import Bienvenido from '../../components/Bienvenido/Bienvenido';
import Arboles from '../../components/Arboles/Arboles';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Beneficios from '../../components/Beneficios/Beneficios';
import Agriculture from '../../components/Agriculture/Agriculture';
import Agroadopcion from '../../components/Agroadopcion/Agroadopcion';
import Donaciones from '../../components/Donaciones/Donaciones';

const Home: React.FC = () => {
  const { language } = useLanguage(); // Obtiene el idioma del contexto

  return (
    <>
      <Bienvenido language={language} />
      <Agriculture language={language} />
      <Arboles language={language} />
      <Banner language={language} />
      <Cards language={language} />
      <Agroadopcion language={language} />
      <Beneficios language={language} />
      <Donaciones language={language} />
    </>
  );
};

export default Home;
