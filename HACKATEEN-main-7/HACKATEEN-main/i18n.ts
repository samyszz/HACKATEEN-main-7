import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './messages/en.json';
import es from './messages/es.json';
import fr from './messages/fr.json';
import pt from './messages/pt.json';
import ar from './src/messages/ar.json';
import zh from './src/messages/zh.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  pt: { translation: pt },
  ar: { translation: ar },
  zh: { translation: zh },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
