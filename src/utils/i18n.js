import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationGB from '../../public/locales/gb/translation.json';
import translationCZ from '../../public/locales/cz/translation.json';

const resources = {
  gb: {
    translation: translationGB,
  },
  cz: {
    translation: translationCZ,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  debug: true,
  fallbackLang: 'gb',
});

i18n.changeLanguage('gb');
export default i18n;
