import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      readMore: 'Leer más',
      recentPosts: 'Publicaciones Recientes',
      projectUpdate: 'Actualización del Proyecto',
      reforestationImportance: 'Importancia de la Reforestación',
      interview: 'Entrevista con el Dr. Juan Pérez',
      // Puedes agregar más textos que necesites traducir aquí
    },
  },
  en: {
    translation: {
      readMore: 'Read more',
      recentPosts: 'Recent Posts',
      projectUpdate: 'Project Update',
      reforestationImportance: 'Importance of Reforestation',
      interview: 'Interview with Dr. Juan Pérez',
      // Traducciones en inglés
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es', // Cambia entre 'es' o 'en' para el idioma inicial
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false, // React ya hace sanitización por defecto
  },
});

export default i18n;
