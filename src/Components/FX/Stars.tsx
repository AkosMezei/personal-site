//TODO window.innerWidth and height could be a potential issue during serverside rendering
//TODO parseFloat without checking if the conversion was successful could lead to NaN
//TODO layer value validation, enum or type guard
//TODO check how much twinkling affects performance, box shadow is notoriously intensive, but I'm only drawing one at a time
import {useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, MotionValue} from 'framer-motion';
import {STAR_DATA} from "../../data/starData.ts";

const MAX_OPACITY_FACTOR = 1.0;
const MIN_OPACITY_FACTOR = 0.3;

const Star = ({top, left, size, opacity, layer, mouseX, mouseY, isTwinkling}: {
    top: string | number,
    left: string | number,
    size: number,
    opacity: number,
    layer: number,
    mouseX: MotionValue<number>,
    mouseY: MotionValue<number>,
    isTwinkling: boolean
}) => {
    const parallaxStrength = layer === 1 ? -20 : layer === 2 ? -10 : -5;
    const x = useTransform(mouseX, [0, window.innerWidth], [0, parallaxStrength]);
    const y = useTransform(mouseY, [0, window.innerHeight], [0, parallaxStrength])

    const numericTop = parseFloat(top as string);
    const numericLeft = parseFloat(left as string);

    const positionSum = numericTop + numericLeft;

    const gradientOpacityFactor =
        MAX_OPACITY_FACTOR -
        (positionSum / 200) * (MAX_OPACITY_FACTOR - MIN_OPACITY_FACTOR);

    const finalOpacity = opacity * gradientOpacityFactor;

    //define glow colors
    const ORIGINAL_COLOR = "#FFFFFF";
    const NEW_STAR_COLOR = "rgba(253,238,211,0.5)";
    const GLOW_COLOR = "rgba(252,228,181,0.3)";
    const NO_GLOW = "0px 0px 0px 0px rgba(255, 0, 0, 0)";
    const MAX_GLOW = `0px 0px 25px 10px ${GLOW_COLOR}`;

    const starVariants = {
        //initial (not twinkling) state
        initial: {
            opacity: finalOpacity,
            scale: 1,
            backgroundColor: ORIGINAL_COLOR,
            boxShadow: NO_GLOW,
            zIndex: 0,
            transition: { duration: 3, ease: "easeOut" }
        },
        //twinkling state
        twinkle: {
            //keyframes for animation for better tunability
            backgroundColor: [ORIGINAL_COLOR, NEW_STAR_COLOR, NEW_STAR_COLOR, ORIGINAL_COLOR],
            opacity: [finalOpacity, 1, 1, finalOpacity],
            scale: [1, 2, 2, 1],
            boxShadow: [NO_GLOW, MAX_GLOW, MAX_GLOW, NO_GLOW],
            zIndex: 10,
            transition: {
                duration: 7,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 1]
            }
        }
    };

    return (
        <motion.div
            className="absolute rounded-full"
            style={{
                top,
                left,
                width: size,
                height: size,
                x,
                y,
            }}
            variants={starVariants}
            animate={isTwinkling ? "twinkle" : "initial"}
        />
    );
};

export const Stars = () => {
    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    const [twinklingStarIndex, setTwinklingStarIndex] = useState<number | null>(null);

    useEffect(() => {
        const twinkleInterval = setInterval(() => {
            const randomStarIndex = Math.floor(Math.random() * STAR_DATA.length);
            setTwinklingStarIndex(randomStarIndex);
        }, 10000) //10s twinkle interval

        return () => {
            clearInterval(twinkleInterval);
        }
    }, []);

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

    return (
        <div className="absolute inset-0 overflow-hidden">
            {STAR_DATA.map((star, index) => (
                <Star
                    key={index}
                    {...star}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    isTwinkling={index === twinklingStarIndex}
                />
            ))}
        </div>
    );
};