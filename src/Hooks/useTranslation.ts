//Hook to get language, falls back to english if no other language is available

import { useLanguageContext } from "../Components/LanguageContext"
import { translations } from "../Translations.ts"

const getNestedProperty = (obj: any, path: string): string | undefined => {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
};

export const useTranslation = () => {
    const { language } = useLanguageContext();

    const t = (key: string): string => {
        const currentLang = language.toLowerCase() as 'en' | 'hu';

        // Try to get the value from the current language
        const currentLangValue = getNestedProperty(translations[currentLang], key);

        // Fallback to English if not found in current language
        const fallbackValue = getNestedProperty(translations.en, key);

        return currentLangValue || fallbackValue || key; // Return key as last fallback
    };

    return { t };
};