import i18n from 'i18next';
import en from './locales.js/en';
import es from './locales.js/es';
import {initReactI18next} from 'react-i18next';

const locales = {
  en: {translation: en},
  es: {translation: es},
};

export const setLocale = locale => {
  i18n.changeLanguage(locale);
};

export const getCurrentLocale = () => i18n.language;

const initData = () => ({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: locales,
});

i18n.use(initReactI18next).init(initData());

export default i18n;
