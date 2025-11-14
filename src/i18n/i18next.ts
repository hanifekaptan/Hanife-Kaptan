import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'tr',
        ns: ['common', 'projects', 'posts', 'contact', 'home'],
        defaultNS: 'common',
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        interpolation: {
            escapeValue: false, // React zaten XSS'e karşı koruma sağlar
        },
    });

export default i18n;