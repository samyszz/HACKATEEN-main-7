import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import en from './messages/en.json';
import es from './messages/es.json';
import fr from './messages/fr.json';
import pt from './messages/pt.json';
import ar from './messages/ar.json';
import zh from './messages/zhh.json'; 

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
    lng: 'pt', 
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;