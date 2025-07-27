import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const apiKey = import.meta.env.WEATHER_API_KEY;
    const location = request.query.location || 'auto:ip';

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    try {
        const weatherResponse = await axios.get(apiUrl);

        response.status(200).json(weatherResponse.data);
    }
    catch (error) {
        console.error(error);
        response.status(500).json({ error: "Error fetching weather data. Please try again later." });
    }
}