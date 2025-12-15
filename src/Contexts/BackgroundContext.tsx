import {createContext, useContext, ReactNode, useEffect, useState, useLayoutEffect} from 'react';
import { motion } from 'framer-motion';
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
    const time = useTimeContext();
    const hour = typeof time === 'number' ? time : time.getHours();
    const gradientHourlyProgress = hour / 23; //get the percentage of how much of the day already passed
    const calculatedMidpoint = GRADIENT_MIDPOINT_START_PERCENT + gradientHourlyProgress * GRADIENT_MIDPOINT_RANGE_PERCENT; //calculate a gradient midpoint based on current time

    const [theme, setTheme] = useState(getInitialTheme);
    const {weatherCategory} = useWeatherContext()
    //get colors for both themes
    const lightColors = getColorsForThemeAndTime('light', time);
    const darkColors = getColorsForThemeAndTime('dark', time);
    //create both themes indifferent of which one is being used
    const lightBackground = `linear-gradient(to bottom right, rgb(${lightColors.primary}), rgb(${lightColors.via}) ${calculatedMidpoint}%, rgb(${lightColors.secondary}))`;
    const darkBackground = `linear-gradient(to bottom right, rgb(${darkColors.primary}), rgb(${darkColors.via}) ${calculatedMidpoint}%, rgb(${darkColors.secondary}))`;

    const cloudData = useCloudGenerator(weatherCategory);

    useLayoutEffect(() => {
        // Update the data-theme attribute - mainly so I can use tailwind dark: prefixes with my custom theming
        const root = document.documentElement;
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }

    }, [theme, hour]);

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
        <main
            className={`relative isolate min-h-screen transition-colors duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
        >
            {/* render both themes */}
            <div
                className="fixed inset-0 -z-20 pointer-events-none"
                style={{background: lightBackground}}
            />
            {/* on theme change, don't change which theme is rendered, instead, change the opacity of the higher z index theme*/}
            <motion.div
                className="fixed inset-0 -z-10 pointer-events-none"
                style={{background: darkBackground}}
                initial={false}
                animate={{opacity: theme === 'dark' ? 1 : 0}}
                transition={{duration: 1.4, ease: 'easeOut'}}
            />

            {/* Use the starfield as a background if the theme is dark */}
            <motion.div
                className="inset-0 -z-10 pointer-events-none"
                animate={{opacity: theme === 'dark' ? 1 : 0}}
                transition={{duration: 0.3}}
            >
                <Stars/>
            </motion.div>

            {/* Use the clouds as a background if the theme is light*/}
            <motion.div
                animate={{opacity: theme === 'dark' ? 0 : 1}}
                transition={{duration: 0.3}}
            >
                <AnimatePresence>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:3}} style={{position: 'fixed', inset:0, zIndex: -1, pointerEvents: 'none'}}>
                        <Clouds data={cloudData}/>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
            {children}
        </main>
        </BackgroundContext.Provider>
    )
}