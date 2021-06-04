import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    preload: ['en'],
    load: 'languageOnly',
    fallbackLng: 'en',
    debug: false,
    nsSeparator: false,
    backend: {
      loadPath: '/{{lng}}.json',
      allowMultiLoading: false
    },
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['cookie', 'querystring', 'navigator'],
      caches: ['cookie']
    },
    react: {
      useSuspense: true,
      bindI18n: false,
      bindI18nStore: false
    }
  });

export default i18n;
