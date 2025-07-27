import './App.css'
import HomePage from "./HomePage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {BackgroundProvider} from './Contexts/BackgroundContext.tsx';
import { injectSpeedInsights } from '@vercel/speed-insights';
import {LanguageProvider} from "./Contexts/LanguageContext.tsx";
import {Analytics} from "@vercel/analytics/react";
import {TimeProvider} from "./Contexts/TimeContext.tsx";
import {WeatherProvider} from "./Contexts/WeatherContext.tsx";

const styles = `
  /* Base transitions for theme changes */
  * {
    transition: color 0.4s ease-out,
              background-color 1.2s ease-out,
              border-color 1.2s ease-out,
              text-decoration-color 0.8s ease-out,
              fill 3s ease-out,
              stroke 1.8s ease-out;
  }`

function App() {

    injectSpeedInsights(); //for vercel

    return (
        <WeatherProvider>
            <TimeProvider>
                <BackgroundProvider>
                    <LanguageProvider>
                        <style>{styles}</style>
                        <div>
                                <Header/>
                                <HomePage/>
                                <Footer/>
                        </div>
                    </LanguageProvider>
                    <Analytics/>
                </BackgroundProvider>
            </TimeProvider>
        </WeatherProvider>
    );
}

export default App;