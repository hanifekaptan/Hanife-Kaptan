import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './resources';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'tr',
        supportedLngs: ['tr', 'en'],
        ns: ['common', 'projects', 'posts', 'contact', 'home'],
        defaultNS: 'common',
        debug: false,
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
            convertDetectedLanguage: (lng: string) => {
                if (lng.startsWith('tr')) return 'tr';
                if (lng.startsWith('en')) return 'en';
                return 'tr';
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;