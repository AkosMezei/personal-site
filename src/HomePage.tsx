//TODO refuses to update on theme change

import {useState} from "react";
import {getInitialTheme} from "./Components/BackgroundContext.tsx";

function HomePage() {
    
    const [theme] = useState(getInitialTheme);

    return (
        <section className="flex justify-center items-center min-h-screen">
            <div className={`w-3/5 rounded-2xl p-3 ${theme === 'dark' ? "bg-white/5": "bg-black/10"}`}>
                <h1 className="text-3xl font-bold">Welcome to Homepage</h1>
                <p> some homepage p content</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </section>
    );
}

export default HomePage;