import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';


/**
 * Represents a geographical location using latitude and longitude coordinates.
 *
 * @typedef {object} LocationWithCoords
 * @property {string} lat - The latitude coordinate.
 * @property {string} lon - The longitude coordinate.
 * @see {@link https://en.wikipedia.org/wiki/Geographic_coordinate_system}
 */
//TODO: maybe change lat, lon to number instead of string for better type safety
type LocationWithCoords = {
    lat: string,
    lon: string
}

/**
 * Describes the configuration for a weather provider that fetches data using geographical coordinates.
 *
 * @typedef {object} CoordProvider
 * @property {'coords'} type - A literal type identifying this as a coordinate-based provider.
 * @property {string} name - The display name of the weather provider (e.g., "WeatherAPI").
 * @property {string|null|undefined} [key] - The optional API key for the service, typically loaded from environment variables.
 * @property {(location: LocationWithCoords, key?: string|null) => string} url - A URL-builder function that takes location coordinates and an optional API key and returns a fully-formed request URL string.
 */
type CoordProvider = {
    type: 'coords',
    name: string,
    key?: string | null,
    url: (location: LocationWithCoords, key?: string|null) => string
}

/**
 * Describes the configuration for a weather provider that fetches data using an IP address for geolocation.
 *
 * @typedef {object} IpProvider
 * @property {'ip'} type - A literal type identifying this as an IP-based provider.
 * @property {string} name - The display name of the weather provider (e.g., "WeatherAPI-FallbackToIP").
 * @property {string|null} key - The API key for the service. Can be null if not required by the provider.
 * @property {(location: string, key?: string|null) => string} url - A URL-builder function that takes a location string (like 'auto:ip') and an optional API key and returns a fully-formed request URL.
 */
type IpProvider = {
    type: 'ip',
    name: string,
    key: string | null,
    url: (location: string, key?: string|null) => string
}

/**
 * A union type representing any valid weather provider configuration,
 * which can be either coordinate-based or IP-based.
 */
type WeatherProvider = CoordProvider | IpProvider;

/**
 * An array of all configured weather provider objects.
 *
 * This list is the source of truth for which APIs the handler will attempt to call.
 * Each object must conform to the `WeatherProvider` type, defining how to
 * construct its API request. API keys are sourced from environment variables.
 */
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

/**
 * Handles an HTTP request to determine the weather category based on data from multiple weather providers.
 * Supports both IP-based and coordinate-based weather data retrieval, normalizes the results, and returns a category of
 * "clear," "cloudy," or "stormy."
 *
 * @param {VercelRequest} request The incoming HTTP request object, containing headers, body, and method.
 * @param {VercelResponse} response The HTTP response object used to send data back to the client.
 * @return {Promise<void>} Resolves with an HTTP response containing a JSON object with the weather category or an error message.
 */
export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (request.method !== 'POST') {
        return response.status(405).json({ error: "Method not allowed." });
    }

    const clientLocation : LocationWithCoords | null = request.body.location;
    const location : LocationWithCoords | string = clientLocation || 'auto:ip';

    const hasCoords = typeof location === 'object' && location !== null;

    let apiPromises: Promise<any>[];

    // Select the appropriate weather providers and build the API request promises. Prioritize coordinate-based providers.
    if (hasCoords) {
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

    // region Normalization

    /**
     * Normalizes OpenMeteo API data into a weather category.
     * @param data The weather data object from the OpenMeteo API.
     * @returns A weather category: 'clear', 'cloudy', or 'stormy'.
     * @see https://open-meteo.com/en/docs (WMO Weather interpretation codes)
     */
    function normalizeOpenMeteo(data: any): 'clear' | 'cloudy' | 'stormy' {
        const code = data.current.weather_code;

        switch (true){
            // clear / mostly clear / partly cloudy
            case (code >= 0 && code <= 2):
                return 'clear';

            case (code ===3): //overcast
            case (code >= 40 && code < 60): //fog and drizzle
                return 'cloudy';

            case (code >= 60): // rain, snow, showers, thunderstorms
                return 'stormy';

            //unknown codes default to clear
            default:
                return 'clear';
        }
    }

    /**
     * Normalizes OpenWeatherMap API data into a weather category.
     * @param data The weather data object from the OpenWeatherMap API.
     * @returns A weather category: 'clear', 'cloudy', or 'stormy'.
     * @see https://openweathermap.org/weather-conditions
     */
    function normalizeOpenWeatherMap(data: any): 'clear' | 'cloudy' | 'stormy' {
        // The API returns an array of weather conditions, we use the first one.
        const id = data.current.weather[0].id;

        if (id === 800) { // clear
            return 'clear';
        }

        if (id > 800) { // All 80x codes for clouds
            return 'cloudy';
        }
        if (id >= 700 && id < 800) { // atmosphere, we assume mist fog etc is cloudy
            return 'cloudy';
        }
        if (id >= 300 && id < 400) { // drizzle
            return 'cloudy';
        }
        if (id === 500 || id === 501) { // light, moderate rain
            return 'cloudy';
        }
        // All other codes fall into this category.
        return 'stormy';
    }

    const normalizedWeatherCodes = {
        'clear': 0,
        'cloudy': 0,
        'stormy': 0
    }

    /**
     * Iterates over successful API responses to normalize their varied data into a
     * single, unified voting system.
     *
     * Each provider's response is parsed, and its weather condition is mapped to one
     * of three categories: 'clear', 'cloudy', or 'stormy'. A counter for the
     * determined category is then incremented in the `normalizedWeatherCodes` object.
     */
    for (const response of successfulResponses) {
        console.log("Response: ", response, "Provider: ", response.provider, "Data: ", response.data);
        // --- WeatherAPI & WeatherAPI-FallbackToIP ---
        // @see https://www.weatherapi.com/docs/weather_conditions.json
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
        // --- Tomorrow.io ---
        // @see https://docs.tomorrow.io/reference/data-layers-weather-codes
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

        // --- OpenWeatherMap ---
        // @see https://openweathermap.org/weather-conditions
        else if (response.provider === 'OpenWeatherMap'){ //this uses current.clouds as a % of cloud cover, and weather condition codes, so it's more complicated
            const category = normalizeOpenWeatherMap(response.data);
            normalizedWeatherCodes[category]++;
        }
        // --- OpenMeteo ---
        // @see https://open-meteo.com/en/docs (see "WMO Weather interpretation codes")
        else if (response.provider === 'OpenMeteo'){ //also gives a "cloud_cover": as a percentage and a code
           const category = normalizeOpenMeteo(response.data);
           normalizedWeatherCodes[category]++;
        }
    }

    // endregion

    console.log("Normalized weather codes: ", normalizedWeatherCodes);

    // Tally the votes to determine the final weather category.
    // In case of a tie, the order of precedence is: clear > cloudy > stormy.
    if (normalizedWeatherCodes.clear >= normalizedWeatherCodes.cloudy && normalizedWeatherCodes.clear >= normalizedWeatherCodes.stormy) {
        return response.status(200).json({ category: "clear" });
    } else if (normalizedWeatherCodes.cloudy > normalizedWeatherCodes.clear && normalizedWeatherCodes.cloudy >= normalizedWeatherCodes.stormy) {
        return response.status(200).json({ category: "cloudy" });
    } else {
        return response.status(200).json({ category: "stormy" });
    }
}