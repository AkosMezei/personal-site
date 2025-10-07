import { WeatherCategory } from '../Utils/weatherUtils';
import {useState, useEffect, useContext, ReactNode} from "react";
import axios from "axios";
import React from 'react';
import {useThemeSettingsContext} from "./ThemeSettingsContext.tsx";

type Location = {
    lat: number;
    lon: number;
}

type WeatherContextType = {
    weatherCategory: WeatherCategory;
    isLoading: boolean;
    error: boolean;
};

type CachedWeather = {
    category: WeatherCategory;
    timestamp: number;
};

const CACHE_DURATION_MINUTES = 30;
const CACHE_DURATION_MS = CACHE_DURATION_MINUTES * 60 * 1000; //*1000 to translate seconds into ms, *60 to translate seconds into minutes

const WeatherContext = React.createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({children}:{children:ReactNode}) => {

    const {weatherMode, manualWeather} = useThemeSettingsContext()

    const [weatherCategory, setWeatherCategory] = useState<WeatherCategory>('clear');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    //actively listen to changes in manually set theme regarding the weather
    useEffect(() => {
        if (weatherMode === 'manual'){
            setWeatherCategory(manualWeather);
        }
        else {
            setWeatherCategory(localStorage.getItem("weather") ? JSON.parse(localStorage.getItem("weather") as string).category : 'clear');
        }
    }, [manualWeather, weatherMode]);

    //function to call the bff
    const fetchWeatherFromApi = async (location: Location | null) => {
        try {
            const response = await axios.post('/api/weather', {location});
            const category = response.data.category;
            setWeatherCategory(category);
            setError(false);

            const dataToCache: CachedWeather = {category, timestamp: Date.now()};
            localStorage.setItem("weather", JSON.stringify(dataToCache));
        }
        catch (err) {
            console.error("Couldn't get weather from API:", err);
            setError(true);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        const getWeatherData = async () => {
            try {
                const cachedDataString = localStorage.getItem("weather");
                if (cachedDataString) {
                    const cachedData: CachedWeather = JSON.parse(cachedDataString)
                    const isCacheFresh = Date.now() - cachedData.timestamp < CACHE_DURATION_MS;

                    if (isCacheFresh) {
                        setWeatherCategory(cachedData.category);
                        setIsLoading(false);
                        return;
                    }
                }
            } catch (e) {
                console.error("Couldn't get weather from localStorage:", e);
            }

            const cachedLocationString = localStorage.getItem("userLocation");
            if (cachedLocationString) {
                const cachedLocation: Location = JSON.parse(cachedLocationString);
                fetchWeatherFromApi(cachedLocation);
            } else {
                if ('geolocation' in navigator) {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const location: Location = {
                                lat: position.coords.latitude,
                                lon: position.coords.longitude,
                            };
                            fetchWeatherFromApi(location);
                        },
                        (err) => {
                            console.error("User denied geolocation, falling back to IP", err);
                            fetchWeatherFromApi(null) //fallback
                        }
                    )
                } else {
                    console.error("Geolocation not supported, falling back to IP");
                    fetchWeatherFromApi(null)
                }
            }
        }
        getWeatherData();
    }, []);

    const value = {weatherCategory, isLoading, error};

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    );
}

export const useWeatherContext = () => {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error('useWeatherContext must be used within a WeatherProvider');
    }
    return context;
}