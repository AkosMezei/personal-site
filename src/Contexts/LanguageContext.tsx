import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'HU'

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