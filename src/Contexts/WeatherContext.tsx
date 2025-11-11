import { WeatherCategory } from '../Utils/weatherUtils';
import {useState, useEffect, useContext, ReactNode} from "react";
import axios from "axios";
import React from 'react';
import {useThemeSettingsContext} from "./ThemeSettingsContext.tsx";

/**
 * Represents a geographical location defined by latitude and longitude coordinates.
 *
 * Properties:
 * - `lat`: The latitude of the location, represented as a number. Positive values indicate locations in the northern hemisphere, and negative values indicate locations in the southern hemisphere.
 * - `lon`: The longitude of the location, represented as a number. Positive values indicate locations east of the Prime Meridian, and negative values indicate locations west of the Prime Meridian.
 */
type Location = {
    lat: number;
    lon: number;
}

/**
 * Represents the context for weather information.
 *
 * This type defines the structure used to manage and provide access to
 * weather-related data, as well as its state within an application.
 *
 * Properties:
 * - `weatherCategory` (WeatherCategory): Describes the current category or type
 *   of weather information (e.g., clear, cloudy, stormy).
 * - `isLoading` (boolean): Indicates whether the weather data is currently being
 *   fetched or processed.
 * - `error` (boolean): Represents if an error occurred while fetching or processing
 *   the weather data.
 */
type WeatherContextType = {
    weatherCategory: WeatherCategory;
    isLoading: boolean;
    error: boolean;
};

/**
 * Represents a cached weather entry containing a category and a timestamp.
 *
 * This type is designed to store weather data with an associated timestamp for caching purposes.
 *
 * @typedef {Object} CachedWeather
 * @property {WeatherCategory} category - The category of the weather, as defined by the WeatherCategory type.
 * @property {number} timestamp - The timestamp when the weather data was cached, represented as a UNIX epoch time in milliseconds.
 */
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
                const cachedDataString = localStorage.getItem("weather"); //get the cached weather data
                if (cachedDataString) { //if cached data exists
                    const cachedData: CachedWeather = JSON.parse(cachedDataString)
                    const isCacheFresh = Date.now() - cachedData.timestamp < CACHE_DURATION_MS; //check if it's fresh

                    if (isCacheFresh) { //if cache is fresh, set it as current weather
                        setWeatherCategory(cachedData.category);
                        setIsLoading(false);
                        return;
                    }
                }
            } catch (e) {
                console.error("Couldn't get weather from localStorage:", e);
            }

            const cachedLocationString = localStorage.getItem("userLocation"); //check if the user location is cached
            if (cachedLocationString) {
                const cachedLocation: Location = JSON.parse(cachedLocationString);
                fetchWeatherFromApi(cachedLocation); //if user location is cached, get the weather based on that
            } else { //if user location is NOT cached, get user location
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
        if (weatherMode !== 'manual') { //only get the weather data if it's not manually set by the user
            getWeatherData();
        }
    }, [weatherMode, manualWeather]);

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