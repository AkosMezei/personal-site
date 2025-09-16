import { WeatherCategory } from '../Utils/weatherUtils';
import {useState, useEffect, useContext, ReactNode} from "react";
import axios from "axios";
import React from 'react';

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

const CACHE_DURATION_MS = 30 * 60 * 1000; //30 mins

const WeatherContext = React.createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({children}:{children:ReactNode}) => {
    const [weatherCategory, setWeatherCategory] = useState<WeatherCategory>('clear');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    //function to call the bff
    const fetchWeatherFromApi = async (location: Location | null) => {
        try {
            const response = await axios.post('/api/weather', {location});
            const category = response.data.category;
            setWeatherCategory(category);
            setError(false);

            console.log("response: ", response.data)

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