import { useBackgroundContext } from '../Contexts/BackgroundContext.tsx';
import { Moon, Sun, Palette, BugOff, BugPlay } from 'lucide-react';
import {useLanguageContext} from "../Contexts/LanguageContext.tsx";
import flagEN from "../assets/Flag_of_the_United_Kingdom.svg.jpg"
import flagHU from "../assets/128px-Flag_of_Hungary.svg.jpg"
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {useThemeSettingsContext} from "../Contexts/ThemeSettingsContext.tsx";

function Header() {

    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isThemeSettingsBarExpanded, setIsThemeSettingsBarExpanded] = useState<boolean>(false)

    const { timeMode, manualTime, setTimeMode, setManualTime, weatherMode, manualWeather, setWeatherMode, setManualWeather, debugMode, setDebugMode } = useThemeSettingsContext()


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
            theme === 'dark' ? 'bg-white/5' : 'bg-gray-900/15'
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
                                : 'text-black hover:bg-black'
                        }`}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5"/>
                        ) : (
                            <Moon className="w-5 h-5"/>
                        )}
                    </button>
                    {!isMobile &&
                    <button onClick={() => setIsThemeSettingsBarExpanded(!isThemeSettingsBarExpanded)}>
                        <Palette/>
                    </button>
                    }
                </div>
            </div>
            <AnimatePresence>
                {isThemeSettingsBarExpanded &&
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <div className=""> {/*container for theme settings expanded section, colr it here if need be*/}
                            <div className="flex flex-auto justify-evenly pb-2 pt-2 w-4/5 m-auto">
                                    <div className="flex flex-auto justify-evenly w-1/4 flex-wrap">
                                        <h1> Theme Colors: </h1>
                                        <button className={`rounded-lg pr-1 pl-1 ${timeMode === "dynamic" ? "bg-amber-200" : ""}`} onClick={() => setTimeMode('dynamic')}> Dynamic </button>
                                        <button className={`rounded-lg pr-1 pl-1 ${(timeMode === "manual" && manualTime === 5) ? "bg-amber-200" : ""}`} onClick={() => {setTimeMode('manual'); setManualTime(5)}}> Morning </button>
                                        <button className={`rounded-lg pr-1 pl-1 ${(timeMode === "manual" && manualTime === 12) ? "bg-amber-200" : ""}`} onClick={() => {setTimeMode('manual'); setManualTime(12)}}> Midday </button>
                                        <button className={`rounded-lg pr-1 pl-1 ${(timeMode === "manual" && manualTime === 19) ? "bg-amber-200" : ""}`} onClick={() => {setTimeMode('manual'); setManualTime(19)}}> Evening </button>
                                        <button className={`rounded-lg pr-1 pl-1 ${(timeMode === "manual" && manualTime === 23) ? "bg-amber-200" : ""}`} onClick={() => {setTimeMode('manual'); setManualTime(23)}}> Night </button>

                                    </div>
                                {theme === "light" &&
                                    <div className="flex flex-auto justify-evenly w-1/4 flex-wrap">
                                        <h1> Weather: </h1>
                                        <button className={`rounded-lg pr-1 pl-1 ${weatherMode === "dynamic" ? "bg-amber-200" : ""}`} onClick={() => setWeatherMode('dynamic')}> Dynamic </button>
                                        <button className={`rounded-lg pr-1 pl-1 ${(weatherMode === "manual" && manualWeather === 'clear') ? "bg-amber-200" : ""}`} onClick={() => {setWeatherMode('manual'); setManualWeather('clear')}}> Clear </button>
                                        <button className={`rounded-lg pr-1 pl-1 ${(weatherMode === "manual" && manualWeather === 'cloudy') ? "bg-amber-200" : ""}`} onClick={() => {setWeatherMode('manual'); setManualWeather('cloudy')}}> Cloudy </button>
                                        <button className={`rounded-lg pr-1 pl-1 ${(weatherMode === "manual" && manualWeather === 'stormy') ? "bg-amber-200" : ""}`} onClick={() => {setWeatherMode('manual'); setManualWeather('stormy')}}> Stormy </button>
                                    </div>
                                }
                                { theme === "light" &&
                                <div>
                                    {debugMode ?
                                    (<BugOff className="cursor-pointer" onClick={() => setDebugMode(!debugMode)}/>)
                                    :
                                    (<BugPlay className="cursor-pointer" onClick={() => setDebugMode(!debugMode)}/>)
                                    }

                                </div>
                                }
                            </div>
                        </div>
                    </motion.div>}
            </AnimatePresence>
        </header>
    );
}

export default Header;