import {motion} from 'framer-motion'
import {useThemeSettingsContext} from "../../Contexts/ThemeSettingsContext.tsx";

/**
 * Represents the properties required for configuring a cloud in an application.
 *
 * @typedef {Object} CloudProps
 * @property {string} src - The source URL of the cloud image.
 * @property {string} top - The CSS top position value for where the cloud should appear.
 * @property {number} duration - The duration in milliseconds for the cloud's animation or movement.
 * @property {number} opacity - The opacity level of the cloud, ranging from 0 (completely transparent) to 1 (completely opaque).
 * @property {number} width - The width of the cloud in pixels.
 */
export type CloudProps = {
    src:string,
    top:string,
    duration:number,
    opacity:number,
    width:number,
}

/**
 * Represents a single dynamically animated cloud component that moves across the screen from left to right.
 * The animation behavior and appearance can be customized with provided properties.
 * When debug mode is enabled, additional debug information about the cloud is displayed.
 */
export const Cloud = ({src, top, duration, opacity, width}:CloudProps) => {

    const { debugMode } = useThemeSettingsContext()

    return (
        <motion.div
        className="absolute"
        style={{top, x:`-${width}px`, willChange: 'transform'}}
        animate={{x: '100vw'}} //go off-screen
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: -Math.random() * duration, //trick to make them start at random places during their animations
            }}
        >
            {/* Show the bounding box when debug mode is enabled*/}
            <div className={`${debugMode ? "outline outline-8 outline-green-500/50" : ""}`}>
            <img
            src = {src}
            alt="A decorative cloud"
            className="max-w-none" //no shrinking
                style={{
                    opacity: opacity,
                }}
            />
                {/* Show data related to any given cloud when debug mode is enabled*/}
                {debugMode &&
                    <div className="absolute bg-white/50 p-1 mt-2.5 rounded-xl font-bold text-sm">
                        <p>Width: {width.toFixed(2)}</p>
                        <p>Duration: {duration.toFixed(2)}</p>
                        <p>Opacity: {opacity.toFixed(2)}</p>
                        <p>Top: {top.slice(0, 5)+"vh"}</p>
                    </div>}
            </div>
        </motion.div>
    );
};