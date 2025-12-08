import {memo, useEffect, useMemo, useState} from 'react';
import { motion, useMotionValue, useTransform, MotionValue } from 'framer-motion';
import {STAR_DATA} from "../../data/starData.ts";
import {useThemeSettingsContext} from "../../Contexts/ThemeSettingsContext.tsx";
import {useIsMobile} from "../../Hooks/useIsMobile.ts";

/**
 * Star is a memoized functional component that renders a single parallax, animated star.
 * This star responds to mouse movement, device type, and context settings, offering a dynamic visual effect
 * based on these inputs. The component can switch between animated and static styles depending on user settings.
 *
 * @param {Object} props - The input parameters for the component.
 * @param {string|number} props.top - The top position of the star as a percentage.
 * @param {string|number} props.left - The left position of the star as a percentage.
 * @param {number} props.size - The diameter of the star in pixels.
 * @param {number} props.opacity - The base opacity of the star (value between 0 and 1).
 * @param {number} props.layer - The parallax layer the star belongs to (higher layers usually move less).
 * @param {MotionValue<number>} props.mouseX - The motion value for the mouse pointer's horizontal position.
 * @param {MotionValue<number>} props.mouseY - The motion value for the mouse pointer's vertical position.
 * @returns {JSX.Element} A motion-enabled `div` element representing the star.
 */
const Star = memo(({top, left, size, opacity, layer, mouseX, mouseY, disableStarAnimations}: {
    top: string | number;
    left: string | number;
    size: number;
    opacity: number;
    layer: number;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    disableStarAnimations: boolean;
}) => {

    const isMobile = useIsMobile();

    //adjust the parallax strength depending on the layer
    const parallaxStrength = layer === 1 ? -20 : layer === 2 ? -10 : -5;
    const x = useTransform(mouseX, [0, window.innerWidth], isMobile? [0,0] : [0, parallaxStrength]);
    const y = useTransform(mouseY, [0, window.innerHeight], isMobile? [0,0] : [0, parallaxStrength])

    //if animations are disabled, return a star that is not animated
    if (disableStarAnimations)
        return (
        <motion.div
            className="absolute bg-white rounded-full"
            style={{ top, left, width: size, height: size, opacity: opacity, x, y}}
        />
    )

    const randomCycleDuration = Math.random() * 8 + 7; //from 7 to 15 seconds
    const randomDelay = Math.random() * 30; //0-30s random start delay
    const repeatDelay = Math.random() * 10 + 5; //5-15s random repeat delay

    return (
        <motion.div
            className="absolute bg-white rounded-full"
            style={{ top, left, width: size, height: size, opacity: 0, x, y}}
            animate={{opacity:[opacity, 0, 0, opacity]}}
            transition={{
                duration: randomCycleDuration,
                repeat: Infinity,
                times: [0, 0.2, 0.8, 1],
                repeatDelay: repeatDelay,
                delay: randomDelay,
            }}
        />
    );
});

/**
 * ShootingStar is a React component that renders an animated shooting star effect
 * based on the provided position, mouse movement, and completion callback.
 *
 * @param {Object} props - The properties to customize the ShootingStar component.
 * @param {string} props.top - The CSS `top` position of the shooting star.
 * @param {string} props.left - The CSS `left` position of the shooting star.
 * @param {MotionValue<number>} props.mouseX - A MotionValue instance representing the horizontal mouse position,
 *                                             used for parallax.
 * @param {MotionValue<number>} props.mouseY - A MotionValue instance representing the vertical mouse position,
 *                                             used for parallax.
 * @param {Function} props.onComplete - A callback function invoked when the animation finishes to make sure only one
 *                                      shooting star is on screen at any given moment.
 */
const ShootingStar = ({top, left, mouseX, mouseY, onComplete}:{top:string; left:string;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
    onComplete: () => void;
}) => {

    const isMobile = useIsMobile();

    const rotateStart =65 + Math.random() * 10; //from 65 to 75
    const rotateEnd = 30 + Math.random() * 10; //from 30 to 40
    const durationDesktop = 0.5 + Math.random(); //from .5 seconds to 1.5 s

    const x = useTransform(mouseX, [0, window.innerWidth], isMobile? [0,0] : [0, -20]);
    const y = useTransform(mouseY, [0, window.innerHeight], isMobile? [0,0] : [0, -20])

    //shooting star animations are done by rotating a large container with the star at one end, so the movement follows a slight arc
    return (
        <motion.div className="absolute w-[150%] md:w-5/6"
                    style={{top, left, x, y}}
                    initial={{ rotate:rotateStart, opacity:0 }}
            animate={{ rotate:rotateEnd, opacity:[0, 1, 1, 0] }}
            transition={{
                duration: isMobile? 3 : durationDesktop, //make animations last longer on mobile, since because of the inherently smaller screen size, stars travel a shorter distance
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

/**
 * ShootingStarController is a React functional component that controls the behavior and position of a shooting star element.
 *
 * @param {Object} params - The parameters for the component.
 * @param {MotionValue<number>} params.mouseX - A MotionValue representing the current horizontal mouse position for parallax.
 * @param {MotionValue<number>} params.mouseY - A MotionValue representing the current vertical mouse position for parallax.
 *
 * @returns {JSX.Element} A ShootingStar component that updates its position and appearance at random intervals.
 *
 * The component uses a responsive design approach to determine the position of the shooting star based on the device type (mobile or desktop).
 * The position is randomly calculated within certain boundaries, and the star resets its position after a random delay
 * between 3 and 8 seconds. The ShootingStar component is re-rendered with a new `key` whenever the star resets.
 */
const ShootingStarController = ({mouseX, mouseY}:{mouseX: MotionValue<number>; mouseY: MotionValue<number>;}) => {

    const isMobile = useIsMobile();

    const [position, setPosition] = useState({
        top: 50 + Math.random() * 50,
        left: Math.random() * 50,
        key:0
    });

    const resetStar = () => {
        const delay = 3000 + Math.random() * 8000; //3-8s delay
        setTimeout(() => {
            setPosition({
                top: (isMobile ? 25 : 50) + Math.random() * 100,
                left: Math.random() * (isMobile? 40 : 80),
                key:position.key + 1
            })
        }, delay)
    }

    return (
        <ShootingStar key={position.key} top={`${position.top}%`} left={`${position.left}%`} mouseX={mouseX} mouseY={mouseY} onComplete={resetStar}/>
    )

}

/**
 * `Stars` is a React functional component that renders a starfield animation.
 * It provides an interactive visual experience by responding to mouse movement.
 * The stars can optionally be disabled.
 *
 * The component listens to mouse movements to dynamically update the position of the stars.
 * These interactions are managed using motion values (`mouseX` and `mouseY`) that are
 * updated in response to mouse events. A cleanup function ensures proper removal of event
 * listeners on unmounting.
 *
 * If the `disableStars` configuration from the theme settings context is `true`,
 * the component will not render.
 */
export const Stars = () => {

    const {disableStars, disableStarAnimations} = useThemeSettingsContext() //move star animations to parent for performance

    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    const isMobile = useIsMobile();

    const activeStarData = useMemo(() => {
        if (isMobile) {
            return STAR_DATA.filter((_, index) => index % 2 === 0)
        }
        return STAR_DATA;
    }, [isMobile])

    const [visibleCount, setVisibleCount] = useState(0);

    useEffect(() => { //create a star renderer so to speak
        if (disableStars) return;

        let animationFrameId: number;
        let currentCount = 0;
        const totalStars = activeStarData.length;
        const batchSize = 10; //render batchSize stars each frame

        const renderBatch = () => {
            if (currentCount < totalStars) {
                currentCount = Math.min(currentCount + batchSize, totalStars); //so it doesn't overflow
                setVisibleCount(currentCount);

                animationFrameId = requestAnimationFrame(renderBatch);
            }
        }

        renderBatch();

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        }
    }, [disableStars, activeStarData]);

    //handle mouse position for parallax
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

    //if stars are disabled, don't render any
    if (disableStars) return null;

    //render stars from 0 to visibleCount only, which updates every frame, so we only render 10 stars a frame, instead of trying to render all on the first frame
    return (
        <div className="absolute inset-0 overflow-hidden">
            {activeStarData.slice(0, visibleCount).map((star, index) => (
                <Star
                    key={index}
                    {...star}
                    mouseX={mouseX}
                    mouseY={mouseY}
                    disableStarAnimations={disableStarAnimations}
                />
            ))}
            <ShootingStarController mouseX={mouseX} mouseY={mouseY}/>
        </div>
    );
};