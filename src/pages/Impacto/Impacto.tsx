import ImpactoAmbiental from '../../components/ImpactoAmbiental/ImpactoAmbiental';
import { useLanguage } from '../../LanguageContext/LanguageContext';

const Impacto = () => {
  const { language } = useLanguage(); // Obtiene el idioma del contexto
  return <ImpactoAmbiental language={language} />;  // Aquí pasas language como prop
};

export default Impacto;
