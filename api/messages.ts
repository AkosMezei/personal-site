import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const API_BASE_URL = "https://personal-messaging-api-96o2v.ondigitalocean.app/api/messages"
const API_KEY = process.env.MESSAGING_API_KEY;

console.log('MESSAGING_API_KEY loaded:', API_KEY ? `Exists (length: ${API_KEY.length})` : 'IS MISSING OR EMPTY');

export default async function handler(request: VercelRequest, response: VercelResponse) {
    if (!API_KEY) {
        return response.status(500).json({error: "Messaging API key not found, server configuration error."});
    }

    try{
        if (request.method === 'GET'){
            const rawChatID = request.query;
            const id = Array.isArray(rawChatID) ? rawChatID[0] : rawChatID;
            if (!id) {
                return response.status(400).json({error: "No ID provided"});
            }

            const forwardedResponse = await axios({
                method: 'GET',
                url: `${API_BASE_URL}/${id}/contents`,
                headers: {
                    'X-API-Key': API_KEY
                }
            })
            return response.status(forwardedResponse.status).json(forwardedResponse.data);
        }
        else if (request.method === 'POST'){
            const rawChatID = request.query;
            const id = Array.isArray(rawChatID) ? rawChatID[0] : rawChatID;
            if (id) {
            const forwardedResponse = await axios({
                method: 'POST',
                url: `${API_BASE_URL}/${id}/contents`,
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': API_KEY
                },
                data: request.body
            })
                return response.status(forwardedResponse.status).json(forwardedResponse.data);

            }
            else {
                const forwardedResponse = await axios({
                    method: 'POST',
                    url: API_BASE_URL,
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': API_KEY
                    },
                    data: request.body
                })
                return response.status(forwardedResponse.status).json(forwardedResponse.data);
            }
        }
        else {
            return response.status(405).json({error: "Method not allowed"});
        }
    }
    catch (error: any){
        console.error("--- ERROR FORWARDING REQUEST ---");

        console.error("Downstream API Status:", error.response?.status);
        console.error("Downstream API Response Body:", error.response?.data);

        const status = error.response?.status || 500;
        const data = error.response?.data || { error: "An internal server error occurred while forwarding the request." };

        return response.status(status).json(data);
    }

}