import { createContext, useContext, useState, ReactNode } from 'react';

/**
 * Represents a type alias for supported language codes.
 *
 * `Language` can hold one of the following string values:
 * - 'EN': Represents the English language.
 * - 'HU': Represents the Hungarian language.
 */
type Language = 'EN' | 'HU'

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
    const [language, setLanguage] = useState<Language>('EN');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'EN' ? 'HU' : 'EN');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}