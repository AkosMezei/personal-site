import axios, {isAxiosError} from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const apiKey = process.env.WEATHER_API_KEY;
    const location = request.query.location || 'auto:ip';

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    if (!apiKey) {
        console.error("Server Error: WEATHER_API_KEY is not defined.");
        return response.status(500).json({ error: "Server configuration error." });
    }

    try {
        const weatherResponse = await axios.get(apiUrl);
        response.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1200');
        response.status(200).json(weatherResponse.data);
    }
    catch (error:unknown) {
        //handle axios specific errors
        if (isAxiosError(error)) {
            console.error("Axios error fetching from WeatherAPI:", error.response?.data || error.message);
            return response.status(error.response?.status || 500).json({ error: "Failed to fetch weather data." });
        }
        //handle non axios specific errors
        else {
            console.error("An unexpected error occurred:", error);
            return response.status(500).json({ error: "An unexpected server error occurred." });
        }
    }
}