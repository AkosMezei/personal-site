import { useBackgroundContext } from './BackgroundContext.tsx';
import { Moon, Sun } from 'lucide-react';
import {useLanguageContext} from "./LanguageContext.tsx";
import flagEN from "../assets/Flag_of_the_United_Kingdom.svg.jpg"
import flagHU from "../assets/128px-Flag_of_Hungary.svg.jpg"
import {useEffect, useState} from "react";

function Header() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        // Initial check
        checkIfMobile();

        // Add event listener
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);
    
    const { theme, toggleTheme } = useBackgroundContext();
    
    const { language, toggleLanguage } = useLanguageContext() //TODO get language preferences from TT site, localstorage etc stuffs, save it to context
    
    return (
        <header className={`fixed top-0 w-full z-50 backdrop-blur-sm ${
            theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/50'
        }`}>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center ">
                <div>
                <h1 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                    Mezei Ákos
                </h1>
                </div>
                <div className="flex">
                    <label className="inline-flex items-center cursor-pointer">
                        <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300"> <img alt="English flag" className="rounded-full max-w-10" src={flagEN}/> </span>
                        <input
                            type="checkbox"
                            checked={language === "HU"}
                            onChange={toggleLanguage}
                            className="sr-only peer"
                        />
                        <div
                            className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"> <img alt="Hungarian flag" className="rounded-full max-w-10" src={flagHU}/> </span>
                    </label>
                    <button
                        onClick={toggleTheme}
                        className={`${isMobile ? "" : "ml-12"} ml-2 rounded-lg p-2 hover:bg-opacity-20 transition-colors ${
                            theme === 'dark'
                                ? 'text-white hover:bg-white'
                                : 'text-gray-900 hover:bg-gray-900'
                        }`}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5"/>
                        ) : (
                            <Moon className="w-5 h-5"/>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;