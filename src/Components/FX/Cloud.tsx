import {motion} from 'framer-motion'

type CloudProps = {
    src:string,
    top:string,
    duration:number,
    scale:number,
    rotation:number,
    opacity:number,
    filter:string
}

export const Cloud = ({src, top, duration, scale, rotation, opacity, filter}:CloudProps) => {
    return (
        <motion.div
        className="absolute"
        style={{top}}
        initial={{x:'-150%'}}
        animate={{x: '110vw'}} //go off screen and a tiny bit
            transition={{
                duration,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: -Math.random() * duration,
            }}
        >
            <img
            src = {src}
            alt="A decorative cloud"
            className="max-w-none" //no shrinking
                style={{
                transform: `rotate(${rotation}deg) scale(${scale})`,
                    opacity: opacity,
                    filter: filter,
                }}
            />
        </motion.div>
    );
};