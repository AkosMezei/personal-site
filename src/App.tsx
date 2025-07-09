import './App.css'
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { animate } from "motion";
import HomePage from "./HomePage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BackgroundContext, getInitialTheme } from './Components/BackgroundContext';
import {useEffect, useState } from 'react';
import { injectSpeedInsights } from '@vercel/speed-insights';
import {LanguageProvider} from "./Components/LanguageContext.tsx";


const styles = `
  /* Base transitions for theme changes */
  * {
    transition: color 0.4s ease-out,
              background-color 1.2s ease-out,
              border-color 1.2s ease-out,
              text-decoration-color 0.8s ease-out,
              fill 3s ease-out,
              stroke 1.8s ease-out;
  }`

function App() {

    injectSpeedInsights(); //for vercel

    const [theme, setTheme] = useState(getInitialTheme);
    const primary = useMotionValue(theme === 'dark' ? '6, 12, 26' : '254 250 224'); // Primary theme color
    const background = useMotionTemplate`linear-gradient(to bottom right, rgb(${primary}), ${
        theme === 'dark'
            ? 'rgb(32,51,87)' // Dark theme
            : 'rgb(226 235 248)' // Light theme
    }99%)`;

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'; //TODO make this nicer, for some reason if dark == !dark doesn't work
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        window.dispatchEvent(new Event("storage"));
        
        //TODO keeps throwing an error so I duct taped an ignore onto it, fix it properly later
        // @ts-ignore
        animate(primary, newTheme === 'dark' ? '6, 12, 26' : '199 224 254', {
            duration: 1.4
        });
    };

    useEffect(() => {
        // Update data-theme attribute on theme change
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    
    // Listen for OS theme changes
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('theme')) { // Only update if user hasn't set a preference
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <BackgroundContext.Provider value={{theme, toggleTheme}}>
            <LanguageProvider>
            <style>{styles}</style>
            <div className={theme}>
                <Header/>
                <motion.main
                    style={{background}}
                    className={`min-h-screen transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                >
                    <HomePage/>
                    <Footer/>
                </motion.main>
            </div>
            </LanguageProvider>
        </BackgroundContext.Provider>
    );
}

export default App;