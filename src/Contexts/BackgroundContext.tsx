import {createContext, useContext, ReactNode, useEffect, useState} from 'react';
import { motion, useMotionTemplate, useMotionValue, animate, MotionValue } from 'framer-motion';
import {useTimeContext} from "./TimeContext.tsx";
import {getColorsForThemeAndTime} from "../Utils/backgroundUtils.ts";
import {Stars} from "../Components/FX/Stars.tsx";
import {Clouds} from "../Components/FX/Clouds.tsx";
import {useWeatherContext} from "./WeatherContext.tsx";
import {useCloudGenerator} from "../Hooks/useCloudGenerator.ts";
import {AnimatePresence} from "motion/react";

/**
 * Represents a theme that can be applied to a user interface.
 *
 * The theme determines the visual style, colors, and appearance.
 * It can either be set to 'dark' for a darker color scheme or
 * 'light' for a brighter color scheme.
 */
type Theme = 'dark' | 'light';

/**
 * Represents a context type for managing background properties like theme and theme toggling functionality.
 *
 * This type can be used to provide and consume a stateful context that manages the current theme and its toggle function.
 *
 * The `theme` property allows access to the current theme configuration.
 * The `toggleTheme` property provides a method to switch between themes.
 *
 * The type can either hold the context object or be null, depending on whether the context is available.
 *
 * Use this type to define and work with background-related context in applications requiring theme management.
 */
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

const GRADIENT_MIDPOINT_START_PERCENT = 20;

const GRADIENT_MIDPOINT_RANGE_PERCENT = 60;

export function BackgroundProvider({ children }: { children: ReactNode }) {
    const hour = useTimeContext();
    const initialTheme = getInitialTheme();
    const initialColors = getColorsForThemeAndTime(initialTheme, hour);
    const gradientHourlyProgress = hour / 23; //get the percentage of how much of the day already passed
    const calculatedMidpoint = GRADIENT_MIDPOINT_START_PERCENT + gradientHourlyProgress * GRADIENT_MIDPOINT_RANGE_PERCENT; //calculate a gradient midpoint based on current time
    const [theme, setTheme] = useState(getInitialTheme);
    const primary: MotionValue<string> = useMotionValue(initialColors.primary);
    const via: MotionValue<string> = useMotionValue(initialColors.via);
    const secondary: MotionValue<string> = useMotionValue(initialColors.secondary);
    const gradientMidpoint = useMotionValue(calculatedMidpoint);

    const {weatherCategory} = useWeatherContext()

    const cloudData = useCloudGenerator(weatherCategory);

    useEffect(() => {
        // Get the target colors for the NEW theme
        const newColors = getColorsForThemeAndTime(theme, hour);

        // Animate the motion values from their current state to the new colors
        animate(primary, newColors.primary, { duration: 1.4, ease: "easeOut" });
        animate(via, newColors.via, { duration: 1.2, ease: "easeOut" });
        animate(secondary, newColors.secondary, { duration: 1.0, ease: "easeOut" });

        // Update the data-theme attribute - mainly so I can use tailwind dark: prefixes with my custom theming
        const root = document.documentElement;
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }

    }, [theme, hour]);

    useEffect(() => { //recalculate the gradient midpoint if the hour changes
        const calculatedMidpoint = GRADIENT_MIDPOINT_START_PERCENT + gradientHourlyProgress * GRADIENT_MIDPOINT_RANGE_PERCENT;
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

    useEffect(() => { //get user preference for the initial theme
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
            {/* Use the starfield as a background if the theme is dark */}
            {theme === 'dark' && (
                <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                    <Stars />
                </div>
            )}

            {/* Use the clouds as a background if the theme is light*/}
            {theme === 'light' && (
                <AnimatePresence>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:3}} style={{position: 'absolute', inset:0, zIndex: -1, pointerEvents: 'none'}}>
                        <Clouds data={cloudData}/>
                    </motion.div>
                </AnimatePresence>
            )}
            {children}
        </motion.main>
        </BackgroundContext.Provider>
    )
}