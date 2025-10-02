/**
 * @file Vercel serverless function that acts as a secure proxy for the Messaging API.
 *
 * @purpose
 * This function serves several key purposes:
 * 1. API key secrecy: It securely handles the `MESSAGING_API_KEY` on the server-side,
 * preventing it from being exposed to the client browser.
 * 2. Stable interface: It creates a consistent API endpoint for the application,
 * decoupling the frontend from the specific implementation details of the external API.
 */

import axios from 'axios';
import type { VercelRequest, VercelResponse } from '@vercel/node';

/** The base URL for the external Messaging API */
const API_BASE_URL = "https://personal-messaging-api-96o2v.ondigitalocean.app/api/messages"
const API_KEY = process.env.MESSAGING_API_KEY;

/**
 * Handles incoming HTTP requests and forwards them to the appropriate endpoint
 * of the Personal Messaging API.
 *
 * API Endpoints Exposed:
 * - `GET /api/messages?chatID={id}`: Fetches all messages for a specific chat.
 * - `POST /api/messages`: Creates a new chat conversation.
 * - `POST /api/messages?chatID={id}`: Posts a new message to an existing chat.
 *
 * @param {VercelRequest} request The incoming Vercel request object.
 * @param {VercelResponse} response The Vercel response object to send the reply.
 * @returns {Promise<void>} A promise that resolves when the response has been sent.
 */
export default async function handler(request: VercelRequest, response: VercelResponse) {
    //Security check to ensure the server is configured correctly.
    if (!API_KEY) {
        return response.status(500).json({error: "Messaging API key not found, server configuration error."});
    }

    try{
        //Fetches all messages for a specific chat.
        if (request.method === 'GET'){
            console.log("GET request received");
            const id = request.query.chatID;
            if (!id) {
                return response.status(400).json({error: "No ID provided"});
            }
            console.log("Forwarding GET request to messaging API, ID: ", id);
            const forwardedResponse = await axios({
                method: 'GET',
                url: `${API_BASE_URL}/${id}/contents`,
                headers: {
                    'X-API-Key': API_KEY
                }
            })
            return response.status(forwardedResponse.status).json(forwardedResponse.data);
        }
        //Creates a new chat conversation (no ID) or adds a message to an existing conversation (with ID)
        else if (request.method === 'POST'){
            const id = request.query.chatID;
            if (id) { //if ID doesn't exist, create a new conversation
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
            else { //if ID exists, add a message to the pre-existing conversation
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
    catch (error: unknown){
        console.error("Error forwarding request to messaging API :", error);
        if (axios.isAxiosError(error)) {
            const status = error.response?.status || 500;
            const data = error.response?.data || {error: "Error forwarding request to messaging API"};

            console.error(`Downstream API error: Status ${status}, Data: ${data}`);
            return response.status(status).json(data);
        } else {
            if (error instanceof Error) {
                return response.status(500).json({error: error.message});
            }
            return response.status(500).json({error: "Unknown error"});
        }
    }

}