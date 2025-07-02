# Personal Portfolio & Full-Stack Messaging Platform

This is the repository for my personal portfolio website, built from the ground up to be a fast, interactive, and modern showcase of my skills as a developer.

**[➡️ View the Live Site](https://your-live-url.com)**

![Screenshot of the portfolio website](./path-to-your/screenshot.png)

## About This Project

This website is more than just a digital resume; it's a fully-featured single-page application (SPA) designed to demonstrate a wide range of front-end and back-end development skills. I built every component from scratch (excluding the listed libraries) to prove a deep understanding of core web technologies and modern development patterns.

The application features a custom, two-tier messaging system, multi-language support, and a theme switcher, all operating without full page reloads and animated for a seamless user experience.

---

## Technical Stack

| Category       | Technology                                                                                                                                     |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| **Frontend**   | [React](https://react.dev/) (with Hooks), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)                           |
| **Styling**    | [Tailwind CSS](https://tailwindcss.com/)                                                                                                       |
| **Animation**  | [Framer Motion](https://motion.dev/)                                                                                                           |
| **API**        | [.NET 8 REST API](https://dotnet.microsoft.com/en-us/) (C#)                                                                                    |
| **Database**   | [MongoDB](https://www.mongodb.com/)                                                                                                            |
| **Deployment** | Frontend on [Vercel](https://vercel.com/), API in [Docker](https://www.docker.com/) container on [DigitalOcean](https://www.digitalocean.com/) |

---

## Key Features & Architecture

### 1. The Portfolio Frontend

The user-facing site is a responsive React SPA built with performance and user experience as top priorities.

- **Interactive Components:** Features like the nested accordions, theme switcher, and language provider were built from scratch to demonstrate a strong grasp of React state management (useState, useContext) and component lifecycle.
- **Performance Optimization:** Implements "just-in-time" preloading of images on hover and uses image preloads on hover to prevent layout shifts, ensuring a smooth experience during animations and content expansion.
- **Fluid Animations:** Leverages Framer Motion for all major UI animations, including layout animations and presence/exit effects, creating a polished and professional feel.

### 2. The Messaging System

The portfolio includes a fully functional messaging system, as a demonstration of a complete end-to-end feature.

- **Two-Tier Architecture:** The system is composed of the React front-end and a separate .NET REST API which acts as a gateway for all message-related operations.
- **NoSQL Database:** MongoDB was deliberately chosen over a traditional SQL database to gain hands-on experience with its document-based model. Each conversation is stored as a single document, containing the chat ID, created_at, updated_at and an embedded array of message objects.
- **Efficient Chat Creation:** A new chat session is only created in the database on the server-side when a user sends their first message (lazy creation), preventing the creation of empty, unused chat documents. The `chatID` is managed on the client-side using `localStorage` with a fallback to `sessionStorage`.
- **Administrative Dashboard:** A separate (private) administrative interface was built to view and respond to incoming messages, completing the communication loop.

---

## Roadmap & Future Enhancements

This project is actively maintained. Here are some of the key improvements planned to further enhance its architecture and security:

-   **Enhanced API Security (Backend-for-Frontend):** The current architecture involves a client-side API key. The next major step is to implement a **Backend-for-Frontend (BFF)** proxy. This will involve a lightweight server-side component that will receive requests from the React app, securely attach the secret API key on the server, and then forward the request to the main API. This will ensure the API key is never exposed on the client, adhering to security best practices.

-   **End-to-End Message Encryption (E2EE):** To guarantee user privacy, the plan is to implement E2EE for the chat. This would involve generating a client-side public/private key pair on chat initiation and using it to encrypt message content before it's sent to the API, ensuring that only the administrator can decrypt and read the messages.

-   **Real-Time Communication with WebSockets:** The current chat relies on HTTP polling. A significant planned upgrade is to transition to a WebSocket-based connection (likely using SignalR for .NET) to provide true real-time, bidirectional communication, reduce network overhead, and improve the user experience.

---

## Getting Started Locally

To run this project on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root of the project and add the following variables:
    ```
    VITE_API_KEY=your_api_key_for_local_development
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000` (or another port if 3000 is in use).