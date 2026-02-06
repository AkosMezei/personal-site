import {createContext, useContext, ReactNode, useEffect} from 'react';
import {useLocalStorage} from "../Hooks/useLocalStorage.ts";
import {useTranslation} from "react-i18next";

/**
 * Represents a type alias for supported language codes.
 *
 * `Language` can hold one of the following string values:
 * - 'EN': Represents the English language.
 * - 'HU': Represents the Hungarian language.
 */
type Language = 'en' | 'hu'

/**
 * Represents the type definition for the language context within an application.
 * The context includes the current language and a function to toggle the language state.
 */
type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
} | null;

export const LanguageContext = createContext<LanguageContextType>(null);

export function useLanguageContext() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguageContext must be used within a LanguageProvider');
    }
    return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useLocalStorage<Language>('language', i18n.language as Language)

    useEffect(() => {
        if (i18n.language !== language) {
            i18n.changeLanguage(language);
        }
    }, [language, i18n]);

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'hu' : 'en';
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}