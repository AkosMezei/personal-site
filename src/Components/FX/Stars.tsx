//TODO window.innerWidth and height could be a potential issue during serverside rendering
//TODO parseFloat without checking if the conversion was successful could lead to NaN
//TODO layer value validation, enum or type guard
// TODO add subtle twinkle effect to stars
import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import {STAR_DATA} from "../../data/starData.ts";

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

    return (
        <motion.div
            className="absolute bg-white rounded-full"
            style={{ top, left, width: size, height: size, opacity: finalOpacity, x, y}}
        />
    );
};

export const Stars = () => {
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
        </div>
    );
};