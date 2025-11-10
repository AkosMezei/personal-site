import {createContext, useContext, ReactNode} from "react";
import {useLocalStorage} from "../Hooks/useLocalStorage.ts";

type Mode = "dynamic" | "manual";
type Weather = "clear" | "cloudy" | "stormy";
type Time = number; //maybe change these to actual breakpoint numbers instead of 'number' (5, 12, 19, 23)
type Debug = boolean;


interface ThemeSettingsContextType {
    timeMode: Mode;
    manualTime: Time;
    weatherMode: Mode;
    manualWeather: Weather;
    debugMode: Debug;
    disableStars: boolean;
    disableStarAnimations: boolean;
    setDisableStarAnimations: (disable: boolean) => void;
    setDisableStars: (disable: boolean) => void;
    setTimeMode: (mode: Mode) => void;
    setManualTime: (time: Time) => void;
    setWeatherMode: (mode: Mode) => void;
    setManualWeather: (weather: Weather) => void;
    setDebugMode: (mode: Debug) => void;
}

export const ThemeSettingsContext = createContext<ThemeSettingsContextType | null>(null)

export const ThemeSettingsProvider = ({children}: {children: ReactNode}) => {

    const [timeMode, setTimeMode] = useLocalStorage<Mode>("timeMode", "dynamic");
    const [manualTime, setManualTime] = useLocalStorage<Time>("manualTime", 12);
    const [weatherMode, setWeatherMode] = useLocalStorage<Mode>("weatherMode", "dynamic");
    const [manualWeather, setManualWeather] = useLocalStorage<Weather>("manualWeather", "clear");
    const [debugMode, setDebugMode] = useLocalStorage<Debug>("debugMode", false);
    const [disableStars, setDisableStars] = useLocalStorage<boolean>("disableStars", false);
    const [disableStarAnimations, setDisableStarAnimations] = useLocalStorage<boolean>("disableStarAnimations", false);

    const value = {
        timeMode,
        manualTime,
        weatherMode,
        manualWeather,
        setTimeMode,
        setManualTime,
        setWeatherMode,
        setManualWeather,
        debugMode,
        setDebugMode,
        disableStars,
        setDisableStars,
        disableStarAnimations,
        setDisableStarAnimations,
    }

    return (
        <ThemeSettingsContext.Provider value={value}>
            {children}
        </ThemeSettingsContext.Provider>
    )
}

export const useThemeSettingsContext = () => {
    const context = useContext(ThemeSettingsContext);
    if (context === null) {
        throw new Error('useThemeSettingsContext must be used within a ThemeSettingsProvider');
    }
    return context;
}