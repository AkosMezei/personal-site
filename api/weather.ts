import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

type LocationWithCoords = {
    lat: string,
    lon: string
}

type CoordProvider = {
    type: 'coords',
    name: string,
    key?: string | null,
    url: (location: LocationWithCoords, key?: string|null) => string
}

type IpProvider = {
    type: 'ip',
    name: string,
    key: string | null,
    url: (location: string, key?: string|null) => string
}

type WeatherProvider = CoordProvider | IpProvider;

//TODO maybe change lat, lon to number instead of string
const weatherProviders: WeatherProvider[] = [
    {
        type: 'coords',
        name: "WeatherAPI",
        url: (location, key) => `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location.lat},${location.lon}`,
        key: process.env.WEATHER_API_KEY || null
    },

    {
        type: 'coords',
        name: "TomorrowIO",
        url: (location, key) => `https://api.tomorrow.io/v4/weather/realtime?location=${location.lat}, ${location.lon}&apikey=${key}`,
        key: process.env.TOMORROWIO_API_KEY || null
    },

    {
        type: 'coords',
        name: "OpenWeatherMap",
        url: (location, key) => `https://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&exclude=minutely,hourly,daily,alerts&appid=${key}`,
        key: process.env.OPENWEATHERMAP_API_KEY || null
    },

    {
        type: 'coords',
        name: "OpenMeteo",
        url: (location) => `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current=weather_code,cloud_cover&forecast_days=1`
    },

    {
        type: 'ip',
        name: "WeatherAPI-FallbackToIP",
        url: (locationString, key) => `https://api.weatherapi.com/v1/current.json?key=${key}&q=${locationString}`,
        key: process.env.WEATHER_API_KEY || null
    }
]

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: "Method not allowed." });
    }

    console.log("Request headers: " + request.headers);
    console.log("Request body: " + request.body);

    const clientLocation : LocationWithCoords | null = request.body.location;
    const location : LocationWithCoords | string = clientLocation || 'auto:ip';

    const hasCoords = typeof location === 'object' && location !== null;

    let apiPromises: Promise<any>[];

    if (hasCoords) {
        console.log("Using coords");
        console.log("Location: "+ location)
        const providersToCall = weatherProviders.filter(provider => provider.type === 'coords')
        apiPromises = providersToCall.map(provider => {
            if (!provider.key && provider.name !== 'OpenMeteo')
                return Promise.reject(new Error(`Provider ${provider.name} requires an API key.`))
            const requestUrl = provider.url(location, provider.key)
            return axios.get(requestUrl)
                .then(axiosResponse => ({
                    provider: provider.name,
                    data: axiosResponse.data
                }))
        })
    } else {
        console.log("Using IP");
        const providersToCall = weatherProviders.filter(provider => provider.type === 'ip')
        apiPromises = providersToCall.map(provider => {
            if (!provider.key)
                return Promise.reject(new Error(`Provider ${provider.name} requires an API key.`))
            const requestUrl = provider.url(location, provider.key)
            return axios.get(requestUrl)
                .then(axiosResponse => ({
                    provider: provider.name,
                    data: axiosResponse.data
                }))
        })
    }

    const results = await Promise.allSettled(apiPromises)

    const successfulResponses = results
        .filter(result => result.status === 'fulfilled')
        .map(result => result.value)

    if (successfulResponses.length === 0) {
        return response.status(500).json({ error: "Error fetching weather data, all providers failed. Please try again later." });
    }

    //TODO the whole voting system goes here
    // region Normalization

    const normalizedWeatherCodes = {
        'clear': 0,
        'cloudy': 0,
        'stormy': 0
    }

    for (const response of successfulResponses) {
        console.log("Response: " + response);
        console.log("Provider: " + response.provider);
        console.log("Data: " + response.data);
        if (response.provider === 'WeatherAPI' || response.provider === 'WeatherAPI-FallbackToIP'){
            switch (response.data.current.condition.code) {
                case 1000:
                case 1003: normalizedWeatherCodes.clear++; break;
                case 1006:
                case 1009:
                case 1030:
                case 1135:
                case 1147: normalizedWeatherCodes.cloudy++; break;
                default: normalizedWeatherCodes.stormy++; break;
            }
        }
        else if (response.provider === 'TomorrowIO'){
            switch (response.data.values.weatherCode) {
                case 1000:
                case 1100:
                case 1101: normalizedWeatherCodes.clear++; break;
                case 1001:
                case 1102:
                case 2000:
                case 2100: normalizedWeatherCodes.cloudy++; break;
                default: normalizedWeatherCodes.stormy++; break;
            }
        }

        //TODO make these two handle all cases, this is just quickly thrown together to kinda somewhat mostly work

        else if (response.provider === 'OpenWeatherMap'){ //this uses current.clouds as a % of cloud cover, and weather condition codes, so it's more complicated https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
            if (response.data.current.clouds <= 25) { //if cloud cover is less than 25%, weather is clear
                normalizedWeatherCodes.clear++;
            } else if (response.data.current.weather.id === 800) { //800 is clear, even if cloud cover for some reason is >25%
                normalizedWeatherCodes.clear++;
            } else if (response.data.current.weather.id === 500 || response.current.weather.id === 501) { //light or moderate rain
                normalizedWeatherCodes.cloudy++;
            } else if (response.data.current.weather.id > 501 && response.data.current.weatherCode < 511) {
                normalizedWeatherCodes.stormy++;
            }
        }
        else if (response.provider === 'OpenMeteo'){ //also gives a "cloud_cover": as a percentage and a code https://open-meteo.com/en/docs?forecast_days=1&hourly=&current=weather_code,cloud_cover
            if (response.data.current.cloud_cover <= 25){ //if cloud cover is less than 25%, weather is clear
                normalizedWeatherCodes.clear++;
            } else if (response.data.current.weather_code > 50){ //if cover >25%, and code is >50
                if (response.data.current.weather_code > 60){ //if code is >60, so rain or worse, increase stormy
                    normalizedWeatherCodes.stormy++;
                }
                else{ //if code is between 50-60, so drizzle, set to cloudy
                    normalizedWeatherCodes.cloudy++;
                }
            }
        }
    }

    // endregion

    //TODO return response as clear | cloudy | stormy
    if (normalizedWeatherCodes.clear > normalizedWeatherCodes.cloudy && normalizedWeatherCodes.clear > normalizedWeatherCodes.stormy) {
        return response.status(200).json({ category: "clear" });
    } else if (normalizedWeatherCodes.cloudy > normalizedWeatherCodes.clear && normalizedWeatherCodes.cloudy > normalizedWeatherCodes.stormy) {
        return response.status(200).json({ category: "cloudy" });
    } else {
        return response.status(200).json({ category: "stormy" });
    }
}