import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations} from './Translations';
import {flowchartTranslations} from "./FlowchartTranslations";

const getInitialLanguage = () => {
    const saved = localStorage.getItem('language'); // 'language' is the key you used
    try {
        return saved ? JSON.parse(saved) : 'en';
    } catch {
        return 'en';
    }
};

i18n
.use(initReactI18next)
  .init({
      resources: {
          en: {
              translation: translations.en.translation,
              flowchart: flowchartTranslations.en.flowchart
          },
          hu: {
              translation: translations.hu.translation,
              flowchart: flowchartTranslations.hu.flowchart
          }
      },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;