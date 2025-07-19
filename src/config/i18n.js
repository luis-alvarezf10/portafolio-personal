import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.js';
import es from '../locales/es.js';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: 'es', // idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
