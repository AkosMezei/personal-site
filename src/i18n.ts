import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translations} from './Translations';
import {flowchartTranslations} from "./FlowchartTranslations";

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
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;