import { useBackgroundContext } from '../Contexts/BackgroundContext.tsx';
import {Moon, Sun, Palette, BugOff, BugPlay, Phone, Copy, Mail} from 'lucide-react';
import flagEN from "../assets/Flag_of_the_United_Kingdom.svg.jpg"
import flagHU from "../assets/128px-Flag_of_Hungary.svg.jpg"
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {useThemeSettingsContext} from "../Contexts/ThemeSettingsContext.tsx";
import {useWeatherContext} from "../Contexts/WeatherContext.tsx"
import {useTranslation} from "react-i18next";
import GitHub_Logo from "/GitHub_Logo.png"
import GitHub_Logo_White from "/GitHub_Logo_White.png"
import GitHub_Mark from "/github-mark.svg"
import GitHub_Mark_White from "/github-mark-white.svg"
import LinkedinLogo from "/LI-Logo.png"
import {createPortal} from "react-dom";
import {useIsMobile} from "../Hooks/useIsMobile.ts";

function Header() {

    const {i18n} = useTranslation();

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'en' ? 'hu' : 'en';
        i18n.changeLanguage(newLang);
    };

    const {weatherCategory} = useWeatherContext()

    const isMobile = useIsMobile()
    const [isThemeSettingsBarExpanded, setIsThemeSettingsBarExpanded] = useState<boolean>(false)

    const [isContactInfoExpanded, setIsContactInfoExpanded] = useState<boolean>(false)

    const { timeMode, manualTime, setTimeMode, setManualTime, weatherMode, manualWeather, setWeatherMode, setManualWeather, debugMode, setDebugMode } = useThemeSettingsContext()

    const [isPhoneCopied, setIsPhoneCopied] = useState<boolean>(false)
    const [isEmailCopied, setIsEmailCopied] = useState<boolean>(false)

    useEffect(() => {
        if (isContactInfoExpanded && isMobile) {
            const scrollBarWidth = window.innerWidth - document.body.clientWidth;
            document.body.style.paddingRight = `${scrollBarWidth}px`; //add scroll bar width to padding to body when modal is open, to prevent content shift
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        }

        return () => {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        }
    }, [isContactInfoExpanded]);

    useEffect(() => {
        if (isPhoneCopied) {
            navigator.clipboard.writeText("+40751780098");
            const timeout = setTimeout(() => {
                setIsPhoneCopied(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [isPhoneCopied]);

    useEffect(() => {
        if (isEmailCopied) {
            navigator.clipboard.writeText("akosmezei1@gmail.com")
            const timeout = setTimeout(() => {
                setIsEmailCopied(false);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [isEmailCopied]);
    
    const { theme, toggleTheme } = useBackgroundContext();
    

    
    return (
        <header className={`fixed top-0 w-full z-50 backdrop-blur-sm ${
            theme === 'dark' ? 'bg-white/5' : 'bg-gray-900/15'
        }`}>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center ">
                <div onClick={()=> setIsContactInfoExpanded((prev)=>!prev)} className="cursor-pointer px-2">
                    <h1 className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                        Mezei Ákos
                    </h1>
                    <h2 className={` text-sm
                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                    >
                        Contact Info
                    </h2>
                </div>
                <AnimatePresence>
                {isContactInfoExpanded && !isMobile &&
                    <motion.div initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <div className="flex flex-auto justify-between w-full m-auto items-center">
                            <motion.a whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} className="cursor-pointer m-1 p-1 rounded-xl h-fit" target="_blank" href="https://github.com/AkosMezei">
                                <img alt="Github Icon" className="h-6 inline" src={theme === 'dark' ? GitHub_Mark_White : GitHub_Mark}/>
                                <img alt="Github Logo" className="h-6 inline" src={theme === 'dark' ? GitHub_Logo_White : GitHub_Logo}/>
                            </motion.a>
                            <motion.a whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} className="cursor-pointer m-1 p-1 rounded-xl h-fit" target="_blank" href="https://www.linkedin.com/in/akos-mezei-501a38253/">
                                <img alt="Linkedin Logo" className="h-6 inline" src={LinkedinLogo}/>
                            </motion.a>
                            <div className="h-fit m-1 p-1">
                                <motion.div whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} className="inline-block w-[160px]">
                                    <a href="tel:+40751780098" className="text-center"> <Phone className="inline"/> {isPhoneCopied? "Copied!" : "+40 751 780 098"} </a>
                                </motion.div>
                                <motion.div role="button" whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} className="inline-block" onClick={() => setIsPhoneCopied(true)}>
                                    <Copy className="ml-4 inline-block"/>
                                </motion.div>
                            </div>
                            <div className="h-fit ml-5 m-1 p-1">
                                <motion.div whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} className="inline-block w-[220px]">
                                    <a href="mailto:akosmezei1@gmail.com" className="text-center"> <Mail className="inline"/> {isEmailCopied? "Copied!" : "akosmezei1@gmail.com"} </a>
                                </motion.div>
                                <motion.div role="button" whileHover={{scale:1.2}} whileTap={{ scale: 0.9 }} className="inline-block" onClick={() => setIsEmailCopied(true)}>
                                    <Copy className="ml-4 inline-block"/>
                                </motion.div>
                            </div>
                        </div>

                    </motion.div>
                }
                    <AnimatePresence>
                        {isContactInfoExpanded && isMobile &&
                            <>
                                {
                                    createPortal(

                                            <motion.div initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50" onClick={() => setIsContactInfoExpanded(false)}
                                            >
                                                <div className={`flex flex-col justify-between w-fit min-w-96 min-h-fit m-auto items-center text-white font-semibold ${theme === 'dark'? "bg-black/70" : "bg-black/70" } rounded-2xl p-10`} onClick={(e)=> e.stopPropagation()}>
                                                    <motion.a whileTap={{ scale: 0.8 }} className="cursor-pointer m-1 p-1 rounded-xl h-fit" target="_blank" href="https://github.com/AkosMezei">
                                                        <img alt="Github Icon" className="h-6 inline" src={GitHub_Mark_White}/>
                                                        <img alt="Github Logo" className="h-6 inline" src={GitHub_Logo_White}/>
                                                    </motion.a>
                                                    <motion.a whileTap={{ scale: 0.8 }} className="cursor-pointer m-1 p-1 rounded-xl h-fit" target="_blank" href="https://www.linkedin.com/in/akos-mezei-501a38253/">
                                                        <img alt="Linkedin Logo" className="h-6 inline" src={LinkedinLogo}/>
                                                    </motion.a>
                                                    <div className="h-fit m-1 p-1">
                                                        <motion.div whileTap={{ scale: 0.8 }} className="inline-block">
                                                            <a href="tel:+40751780098" className="text-center"> <Phone className="inline"/> {isPhoneCopied? "Copied!" : "+40 751 780 098"} </a>
                                                        </motion.div>
                                                        <motion.div whileTap={{ scale: 0.8 }} role="button" className="inline-block" onClick={() => setIsPhoneCopied(true)}>
                                                            <Copy className="ml-4 inline-block"/>
                                                        </motion.div>
                                                    </div>
                                                    <div className="h-fit ml-5 m-1 p-1">
                                                        <motion.div whileTap={{ scale: 0.8 }} className="inline-block">
                                                            <a href="mailto:akosmezei1@gmail.com" className="text-center"> <Mail className="inline"/> {isEmailCopied? "Copied!" : "akosmezei1@gmail.com"} </a>
                                                        </motion.div>
                                                        <motion.div whileTap={{ scale: 0.8 }} role="button" className="inline-block" onClick={() => setIsEmailCopied(true)}>
                                                            <Copy className="ml-4 inline-block"/>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ,
                                        document.body
                                    )
                                }
                            </>

                        }
                    </AnimatePresence>

                </AnimatePresence>
                <div className="flex">
                    <label className="inline-flex items-center cursor-pointer" role="switch" aria-checked={i18n.language === "en"}>
                        <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300"> <img alt="English flag" className="rounded-full max-w-10" src={flagEN}/> </span>
                        <input
                            type="checkbox"
                            checked={i18n.language === "hu"}
                            onChange={handleLanguageChange}
                            className="sr-only peer"
                        />
                        <div
                            className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700
                            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                            peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px]
                            after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
                            after:h-5 after:w-5 after:transition-all dark:border-gray-600

                            peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sky-500 dark:peer-focus:ring-sky-800 peer-focus:ring-offset-2 peer-focus:ring-offset-white
                            "
                        ></div>
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
                        <div className=""> {/*container for theme settings expanded section, color it here if need be*/}
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
                                    {debugMode &&
                                        <h1> Current weather: {weatherCategory} </h1>
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