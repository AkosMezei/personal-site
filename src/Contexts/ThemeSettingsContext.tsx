import {createContext, useContext, useState, ReactNode, useEffect} from "react";

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
    setTimeMode: (mode: Mode) => void;
    setManualTime: (time: Time) => void;
    setWeatherMode: (mode: Mode) => void;
    setManualWeather: (weather: Weather) => void;
    setDebugMode: (mode: Debug) => void;
}

export const ThemeSettingsContext = createContext<ThemeSettingsContextType | null>(null)

export const ThemeSettingsProvider = ({children}: {children: ReactNode}) => {

    //region timeMode

    const initializeTimeMode = (): Mode => {
        try {
            const savedTimeMode = localStorage.getItem("timeMode");

            if (savedTimeMode === "dynamic" || savedTimeMode === "manual") {
                return savedTimeMode;
            }
        }
        catch (e) {
            console.error("Error reading timeMode from localstorage:", e);
        }
        return "dynamic";
    }

    const [timeMode, setTimeMode] = useState<Mode>(initializeTimeMode);

    useEffect(() => {
        try {
            localStorage.setItem("timeMode", timeMode);
        }
        catch (e) {
            console.error("Error writing timeMode to localstorage:", e);
        }
    }, [timeMode]);

    //endregion

    //region manualTime

    const initializeManualTime = (): Time => {
        try {
            const savedManualTime = localStorage.getItem("manualTime");

            if (savedManualTime !== null) {
                return parseInt(savedManualTime);
            }
        }
        catch (e) {
            console.error("Error reading manualTime from localstorage:", e);
        }
        return 12;
    }

    const [manualTime, setManualTime] = useState<Time>(initializeManualTime);

    useEffect(() => {
        try {
            localStorage.setItem("manualTime", manualTime.toString());
        }
        catch (e) {
            console.error("Error writing manualTime to localstorage:", e);
        }
    }, [manualTime]);

    //endregion

    //region weatherMode

    const initializeWeatherMode = (): Mode => {
        try {
            const savedWeatherMode = localStorage.getItem("weatherMode");

            if (savedWeatherMode === "dynamic" || savedWeatherMode === "manual") {
                return savedWeatherMode;
            }
        }
        catch (e) {
            console.error("Error reading weatherMode from localstorage:", e);
        }
        return "dynamic";
    }

    const [weatherMode, setWeatherMode] = useState<Mode>(initializeWeatherMode);

    useEffect(() => {
        try {
            localStorage.setItem("weatherMode", weatherMode);
        }
        catch (e) {
            console.error("Error writing weatherMode to localstorage:", e);
        }
    }, [weatherMode]);

    //endregion

    //region ManualWeather

    const initializeManualWeather = (): Weather => {
        try {
            const savedManualWeather = localStorage.getItem("manualWeather");

            if (savedManualWeather === 'clear' || savedManualWeather === 'cloudy' || savedManualWeather === 'stormy') {
                return savedManualWeather as Weather;
            }
        }
        catch (e) {
            console.error("Error reading manualWeather from localstorage:", e);
        }
        return "clear";
    }

    const [manualWeather, setManualWeather] = useState<Weather>(initializeManualWeather);

    useEffect(() => {
        try {
            localStorage.setItem("manualWeather", manualWeather);
        }
        catch (e) {
            console.error("Error writing manualWeather to localstorage:", e);
        }
    }, [manualWeather]);

    //endregion

    //region debugMode

    const initializeDebugMode = (): Debug => {
        try {
            const savedDebugMode = localStorage.getItem("debugMode");

            if (savedDebugMode === "true") {
                return true;
            } else {
                return false;
            }
        }
        catch (e) {
            console.error("Error reading debugMode from localstorage:", e);
        }
        return false;
    }

    const [debugMode, setDebugMode] = useState<Debug>(initializeDebugMode);

    useEffect(() => {
        try {
            localStorage.setItem("debugMode", debugMode.toString());
        }
        catch (e) {
            console.error("Error writing debugMode to localstorage:", e);
        }
    }, [debugMode]);

    //endregion

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