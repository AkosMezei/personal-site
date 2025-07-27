import { mapWeatherCodeToCategory, WeatherCategory } from '../Utils/weatherUtils';
import {useState, useEffect, useContext, ReactNode} from "react";
import axios from "axios";
import React from 'react';

type WeatherContextType = {
    weatherCategory: WeatherCategory;
    isLoading: boolean;
    error: boolean;
};

type CachedWeather = {
    category: WeatherCategory;
    timestamp: number;
};

const CACHE_DURATION_MS = 30 * 60 * 1000; //30 mins

const WeatherContext = React.createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({children}:{children:ReactNode}) => {
    const [weatherCategory, setWeatherCategory] = useState<WeatherCategory>('clear');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchWeatherByIp = async () => {
            try {
                const response = await axios.get('/api/weather'); // No location query param
                const code = response.data.current.condition.code;
                const category = mapWeatherCodeToCategory(code);
                setWeatherCategory(category);
                const dataToCache: CachedWeather = { category, timestamp: Date.now() };
                sessionStorage.setItem("weather", JSON.stringify(dataToCache));
            } catch (err) {
                console.error("Couldn't get weather from API via IP:", err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        const getWeatherData = async () => {
            //check for cached data first
            try {
                const cachedDataString = sessionStorage.getItem("weather");
                if (cachedDataString) {
                    const cachedData: CachedWeather = JSON.parse(cachedDataString);
                    if ((Date.now() - cachedData.timestamp) < CACHE_DURATION_MS) {
                        setWeatherCategory(cachedData.category);
                        setIsLoading(false);
                        return;
                    }
                }
            } catch (e) {
                console.error("Failed to read weather from sessionStorage:", e);
            }

            // browser geolocation support check
            if ("geolocation" in navigator) {
                // ask the user
                navigator.geolocation.getCurrentPosition(
                    // user allowed
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        try {
                            const response = await axios.get(`/api/weather?location=${latitude},${longitude}`);
                            const code = response.data.current.condition.code;
                            const category = mapWeatherCodeToCategory(code);

                            setWeatherCategory(category);
                            setError(false);

                            // cache more accurate data
                            const dataToCache: CachedWeather = { category, timestamp: Date.now() };
                            sessionStorage.setItem("weather", JSON.stringify(dataToCache));

                        } catch (err) {
                            console.error("Couldn't get weather from API via Coords:", err);
                            setError(true);
                        } finally {
                            setIsLoading(false);
                        }
                    },
                    // error or no allow
                    (error) => {
                        console.warn(`Geolocation error (${error.code}): ${error.message}`);
                        // try ip based
                        fetchWeatherByIp();
                    }
                );
            } else {
                // if no geolocation, try ip
                console.log("Browser does not support geolocation. Falling back to IP.");
                fetchWeatherByIp();
            }
        };

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