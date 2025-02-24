import { createContext, useContext} from 'react';

type Theme = 'dark' | 'light';

type BackgroundContextType = {
    theme: Theme;
    toggleTheme: () => void;
} | null;

export const BackgroundContext = createContext<BackgroundContextType>(null);

export function useBackgroundContext() {
    const context = useContext(BackgroundContext);
    if (!context) {
        throw new Error('useBackgroundContext must be used within a BackgroundProvider');
    }
    return context;
}

// Helper to get initial theme
export function getInitialTheme(): Theme {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
        return savedTheme;
    }

    // Otherwise, check OS preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}