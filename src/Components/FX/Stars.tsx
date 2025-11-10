import {useEffect, useState} from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import {STAR_DATA} from "../../data/starData.ts";
import {useThemeSettingsContext} from "../../Contexts/ThemeSettingsContext.tsx";
import {useIsMobile} from "../../Hooks/useIsMobile.ts";

const MAX_OPACITY_FACTOR = 1.0;
const MIN_OPACITY_FACTOR = 0.3;

const Star = ({top, left, size, opacity, layer, mouseX, mouseY}: {
    top: string | number;
    left: string | number;
    size: number;
    opacity: number;
    layer: number;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}) => {

    const isMobile = useIsMobile();

    const parallaxStrength = layer === 1 ? -20 : layer === 2 ? -10 : -5;
    const x = useTransform(mouseX, [0, window.innerWidth], isMobile? [0,0] : [0, parallaxStrength]);
    const y = useTransform(mouseY, [0, window.innerHeight], isMobile? [0,0] : [0, parallaxStrength])

    const numericTop = parseFloat(top as string);
    const numericLeft = parseFloat(left as string);

    const positionSum = numericTop + numericLeft;

    const gradientOpacityFactor =
        MAX_OPACITY_FACTOR -
        (positionSum / 200) * (MAX_OPACITY_FACTOR - MIN_OPACITY_FACTOR);

    const finalOpacity = opacity * gradientOpacityFactor;

    const {disableStarAnimations} = useThemeSettingsContext()

    if (disableStarAnimations)
        return (
        <motion.div
            className="absolute bg-white rounded-full"
            style={{ top, left, width: size, height: size, opacity: finalOpacity, x, y}}
        />
    )

    const randomCycleDuration = Math.random() * 8 + 7; //from 7 to 15 seconds
    const randomDelay = Math.random() * 30; //0-30s random start delay
    const repeatDelay = Math.random() * 10 + 5; //5-15s random repeat delay

    return (
        <motion.div
            className="absolute bg-white rounded-full"
            style={{ top, left, width: size, height: size, opacity: 0, x, y}}
            animate={{opacity:[finalOpacity, 0, 0, finalOpacity]}}
            transition={{
                duration: randomCycleDuration,
                repeat: Infinity,
                times: [0, 0.2, 0.8, 1],
                repeatDelay: repeatDelay,
                delay: randomDelay,
            }}
        />
    );
};

const ShootingStar = ({top, left, mouseX, mouseY, onComplete}:{top:string; left:string;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    onComplete: () => void;
}) => {

    const isMobile = useIsMobile();

    const x = useTransform(mouseX, [0, window.innerWidth], isMobile? [0,0] : [0, -20]);
    const y = useTransform(mouseY, [0, window.innerHeight], isMobile? [0,0] : [0, -20])

    return (
        <motion.div className="absolute w-5/6"
                    style={{top, left, x, y}}
                    initial={{ rotate:70, opacity:0 }}
            animate={{ rotate:35, opacity:[0, 1, 1, 0] }}
            transition={{
                duration: 1,
                times: [0, 0.2, 0.9, 1],
            }}
                    onAnimationComplete={onComplete}
        >
            <div
                className="w-[2px] h-8 bg-gradient-to-t from-white via-15% via-white/50 rounded-full"
            />

        </motion.div>
    )
}

const ShootingStarController = ({mouseX, mouseY}:{mouseX: MotionValue<number>; mouseY: MotionValue<number>;}) => {

    const [position, setPosition] = useState({
        top: 50 + Math.random() * 50,
        left: Math.random() * 50,
        key:0
    });

    const resetStar = () => {
        const delay = 1000 + Math.random() * 9000; //1-10s delay
        setTimeout(() => {
            setPosition({
                top: 50 + Math.random() * 100,
                left: Math.random() * 80,
                key:position.key + 1
            })
        }, delay)
    }

    return (
        <ShootingStar key={position.key} top={`${position.top}%`} left={`${position.left}%`} mouseX={mouseX} mouseY={mouseY} onComplete={resetStar}/>
    )

}

export const Stars = () => {

    const {disableStars} = useThemeSettingsContext()

    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        //cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    if (disableStars) return;

    return (
        <div className="absolute inset-0 overflow-hidden">
            {STAR_DATA.map((star, index) => (
                <Star
                    key={index}
                    {...star}
                    mouseX={mouseX}
                    mouseY={mouseY}
                />
            ))}
            <ShootingStarController mouseX={mouseX} mouseY={mouseY}/>
        </div>
    );
};