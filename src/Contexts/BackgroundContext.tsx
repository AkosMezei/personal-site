import {createContext, useContext, ReactNode, useEffect, useState} from 'react';
import { motion, useMotionTemplate, useMotionValue, animate, MotionValue } from 'framer-motion';
import {useTimeContext} from "./TimeContext.tsx";
import {getColorsForThemeAndTime} from "../Utils/backgroundUtils.ts";
import {Stars} from "../Components/FX/Stars.tsx";
import {Clouds} from "../Components/FX/Clouds.tsx";
import {useWeatherContext} from "./WeatherContext.tsx";
import {useCloudGenerator} from "../Hooks/useCloudGenerator.ts";

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

export function BackgroundProvider({ children }: { children: ReactNode }) {
    const hour = useTimeContext();
    const initialTheme = getInitialTheme();
    const initialColors = getColorsForThemeAndTime(initialTheme, hour);
    const calculatedMidpoint = 20 + (hour / 23) * 60;
    const [theme, setTheme] = useState(getInitialTheme);
    const primary: MotionValue<string> = useMotionValue(initialColors.primary);
    const via: MotionValue<string> = useMotionValue(initialColors.via);
    const secondary: MotionValue<string> = useMotionValue(initialColors.secondary);
    const gradientMidpoint = useMotionValue(calculatedMidpoint);

    const {weatherCategory, isLoading} = useWeatherContext()

    const activeWeather = isLoading ? 'clear' : weatherCategory //clear | cloudy | stormy

    const cloudData = useCloudGenerator(activeWeather);

    useEffect(() => {
        // Get the target colors for the NEW theme
        const newColors = getColorsForThemeAndTime(theme, hour);

        // Animate the motion values from their current state to the new colors
        animate(primary, newColors.primary, { duration: 1.4, ease: "easeOut" });
        animate(via, newColors.via, { duration: 1.2, ease: "easeOut" });
        animate(secondary, newColors.secondary, { duration: 1.0, ease: "easeOut" });

        // Update the data-theme attribute
        document.documentElement.setAttribute('data-theme', theme);

    }, [theme, hour]);

    useEffect(() => {
        const calculatedMidpoint = 20 + (hour / 23) * 60;
        gradientMidpoint.set(calculatedMidpoint);
    }, [hour]);

    const background = useMotionTemplate`linear-gradient(to bottom right, rgb(${primary}), rgb(${via}) ${gradientMidpoint}%, rgb(${secondary}))`;

    const toggleTheme = () => {
        //toggle the state
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        window.dispatchEvent(new Event("storage"));
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e:MediaQueryListEvent) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <BackgroundContext.Provider value={{ theme, toggleTheme }}>
        <motion.main
            style={{background,
                position: 'relative',
                isolation: 'isolate',
            }}
            className={`min-h-screen transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
        >
            {theme === 'dark' && (
                <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                    <Stars />
                </div>
            )}

            {theme === 'light' && (
                <div style={{position: 'absolute', inset:0, zIndex: -1, pointerEvents: 'none'}}>
                    <Clouds data={cloudData}/>
                </div>
            )}
            {children}
        </motion.main>
        </BackgroundContext.Provider>
    )
}