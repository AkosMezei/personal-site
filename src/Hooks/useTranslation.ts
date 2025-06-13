//Hook to get language, falls back to english if no other language is available

import { useLanguageContext } from "../Components/LanguageContext"
import { translations } from "../Translations.ts"

export const useTranslation = () => {
    const { language } = useLanguageContext() 
    const t = (key: keyof typeof translations.en) => {
        return translations[language.toLowerCase() as 'en' | 'hu']?.[key] || translations.en[key]
    }
    return { t }
}