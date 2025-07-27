import cloud_large_1 from '../assets/clouds/cloud_large_1.png';
import cloud_large_2 from '../assets/clouds/cloud_large_2.png';
import cloud_large_3 from '../assets/clouds/cloud_large_3.png';
import cloud_large_4 from '../assets/clouds/cloud_large_4.png';
import cloud_long_1 from '../assets/clouds/cloud_long_1.png';
import cloud_medium_1 from '../assets/clouds/cloud_medium_1.png';
import cloud_medium_2 from '../assets/clouds/cloud_medium_2.png';
import cloud_small_1 from '../assets/clouds/cloud_small_1.png';
import cloud_small_2 from '../assets/clouds/cloud_small_2.png';
import cloud_small_3 from '../assets/clouds/cloud_small_3.png';
import cloud_small_4 from '../assets/clouds/cloud_small_4.png';


//helper function for variation
const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

// This is the main data structure that defines the "choreographed" cloud scenes.
export const scenes = {
    /**
     * Clear weather: A calm, sparse sky with 3 slow-moving clouds.
     */
    clear: [
        {
            src: cloud_medium_1,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '10vh',
            duration: randomBetween(280, 350),
            scale: randomBetween(0.9, 1.1),
            rotation: randomBetween(-5, 5),
            opacity: randomBetween(0.7, 0.9)
        },
        {
            src: cloud_small_1,
            left: `${50 + randomBetween(-15, 15)}vw`,
            top: '15vh',
            duration: randomBetween(200, 250),
            scale: randomBetween(0.8, 1.2),
            rotation: randomBetween(-3, 3),
            opacity: randomBetween(0.6, 0.8)
        },
        {
            src: cloud_long_1,
            left: `${85 + randomBetween(-15, 15)}vw`,
            top: '25vh',
            duration: randomBetween(330, 400),
            scale: randomBetween(1.0, 1.2),
            rotation: randomBetween(-2, 2),
            opacity: randomBetween(0.7, 0.85)
        },
    ],

    /**
     * Cloudy weather: A fuller sky with 6 clouds of mixed sizes and speeds.
     */
    cloudy: [
        {
            src: cloud_large_2,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '8vh',
            duration: randomBetween(260, 320),
            scale: randomBetween(1.1, 1.3),
            rotation: randomBetween(-3, 3),
            opacity: randomBetween(0.8, 1.0)
        },
        {
            src: cloud_medium_1,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '28vh',
            duration: randomBetween(220, 280),
            scale: randomBetween(0.9, 1.1),
            rotation: randomBetween(-5, 5),
            opacity: randomBetween(0.85, 1.0)
        },
        {
            src: cloud_small_3,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '18vh',
            duration: randomBetween(160, 220),
            scale: randomBetween(1.0, 1.3),
            rotation: randomBetween(-2, 2),
            opacity: randomBetween(0.7, 0.9)
        },
        {
            src: cloud_large_4,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '12vh',
            duration: randomBetween(300, 380),
            scale: randomBetween(0.8, 1.0),
            rotation: randomBetween(-4, 4),
            opacity: randomBetween(0.8, 0.95)
        },
        {
            src: cloud_long_1,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '35vh',
            duration: randomBetween(380, 450),
            scale: randomBetween(1.0, 1.1),
            rotation: randomBetween(-1, 1),
            opacity: randomBetween(0.8, 0.9)
        },
        {
            src: cloud_small_2,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '5vh',
            duration: randomBetween(180, 240),
            scale: randomBetween(0.7, 0.9),
            rotation: randomBetween(-5, 5),
            opacity: randomBetween(0.6, 0.8)
        },
    ],

    /**
     * Stormy weather: A dense, heavy sky with 8 faster clouds, focusing on larger shapes.
     */
    stormy: [
        {
            src: cloud_large_1,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '5vh',
            duration: randomBetween(80, 120),
            scale: randomBetween(1.4, 1.6),
            rotation: randomBetween(-6, 6),
            opacity: 1.0
        },
        {
            src: cloud_large_2,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '5vh',
            duration: randomBetween(80, 120),
            scale: randomBetween(1.4, 1.6),
            rotation: randomBetween(-6, 6),
            opacity: 1.0
        },
        {
            src: cloud_large_3,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '5vh',
            duration: randomBetween(80, 120),
            scale: randomBetween(1.4, 1.6),
            rotation: randomBetween(-6, 6),
            opacity: 1.0
        },
        {
            src: cloud_large_3,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '10vh',
            duration: randomBetween(80, 120),
            scale: randomBetween(1.4, 1.6),
            rotation: randomBetween(-4, 4),
            opacity: 1.0
        },
        {
            src: cloud_medium_2,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '20vh',
            duration: randomBetween(60, 130),
            scale: randomBetween(1.2, 1.4),
            rotation: randomBetween(-3, 3),
            opacity: 1.0
        },
        {
            src: cloud_medium_2,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '20vh',
            duration: randomBetween(60, 130),
            scale: randomBetween(1.2, 1.4),
            rotation: randomBetween(-3, 3),
            opacity: 1.0
        },
        {
            src: cloud_medium_1,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '20vh',
            duration: randomBetween(60, 130),
            scale: randomBetween(1.2, 1.4),
            rotation: randomBetween(-3, 3),
            opacity: 1.0
        },
        {
            src: cloud_large_2,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '15vh',
            duration: randomBetween(80, 120),
            scale: randomBetween(1.4, 1.6),
            rotation: randomBetween(-5, 5),
            opacity: 1.0
        },
        {
            src: cloud_long_1,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '30vh',
            duration: randomBetween(80, 120),
            scale: randomBetween(1.4, 1.6),
            rotation: randomBetween(-2, 2),
            opacity: 0.95
        },
        {
            src: cloud_medium_1,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '25vh',
            duration: randomBetween(110, 160),
            scale: randomBetween(0.9, 1.1),
            rotation: randomBetween(-4, 4),
            opacity: 1.0
        },
        {
            src: cloud_large_4,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '1vh',
            duration: randomBetween(80, 120),
            scale: randomBetween(1.4, 1.6),
            rotation: randomBetween(-5, 5),
            opacity: 1.0
        },
        {
            src: cloud_small_4,
            left: `${15 + randomBetween(-15, 15)}vw`,
            top: '22vh',
            duration: randomBetween(80, 120),
            scale: randomBetween(1.1, 1.4),
            rotation: randomBetween(-6, 6),
            opacity: 0.9
        }
    ],
};