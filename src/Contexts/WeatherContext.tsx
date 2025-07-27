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
        const getWeatherData = async () => {
            try {
                const cachedDataString = sessionStorage.getItem("weather");
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
                console.error("Couldn't get weather from sessionStorage:", e);
            }
            try {
                const response = await axios.get('/api/weather')

                console.log(response.data);

                const code = response.data.current.condition.code;
                const category = mapWeatherCodeToCategory(parseInt(code));

                setWeatherCategory(category);
                setError(false);

                const dataToCache: CachedWeather = {category, timestamp: Date.now()};
                sessionStorage.setItem("weather", JSON.stringify(dataToCache));
            } catch (err) {
                console.error("Couldn't get weather from API:", err);
                setError(true);
            } finally {
                setIsLoading(false);
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