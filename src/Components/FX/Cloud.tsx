import {motion} from 'framer-motion'
import {useThemeSettingsContext} from "../../Contexts/ThemeSettingsContext.tsx";

type CloudProps = {
    src:string,
    top:string,
    duration:number,
    opacity:number,
    width:number,
}

export const Cloud = ({src, top, duration, opacity, width}:CloudProps) => {

    const { debugMode } = useThemeSettingsContext()

    return (
        <motion.div
        className="absolute"
        style={{top, x:`-${width}px`, willChange: 'transform'}}
        animate={{x: '100vw'}} //go off-screen
            transition={{
                duration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: -Math.random() * duration,
            }}
        >

            <div className={`${debugMode ? "outline outline-8 outline-green-500/50" : ""}`}>

            <img
            src = {src}
            alt="A decorative cloud"
            className="max-w-none" //no shrinking
                style={{
                    opacity: opacity,
                }}
            />
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