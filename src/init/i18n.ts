import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend, { type BackendOptions } from 'i18next-xhr-backend';

import { getConfig } from 'init/config';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init<BackendOptions>({
    backend: {
      loadPath: getConfig('i18n.loadPath'),
    },
    lng: getConfig('i18n.lang'),
    fallbackLng: getConfig('i18n.fallbackLang'),
    debug: import.meta.env.NODE_ENV !== 'production',
    ns: ['common'],
    defaultNS: 'common',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
