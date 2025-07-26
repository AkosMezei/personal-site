//TODO make text orientation right look all right
//TODO proper content types
//TODO reformat code so it's more readable
//TODO on mobile, expand images to full width
//TODO somehow alert user to the expandability of pictures
//TODO make margins smaller on mobile so more content can fit
//TODO make shit not expand/unexpand when highlighting - yoink from TT website
//TODO resize/remake expansion chevrons on mobile on nested exp. divs
//TODO fix un-expansion when changing language in nested exp. divs
//TODO make prop for image expansion size, default | full width - for TT website project for example
//TODO make bg ever so slightly blur, so the stars are less invasive
//TODO make the div borders more distinct, maybe with a shadow, the normal daytime night mode is hard to see


import {useEffect, useState, useRef} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import { useBackgroundContext } from "../Contexts/BackgroundContext.tsx";
import { useLanguageContext } from "../Contexts/LanguageContext.tsx";

const textVariants = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" }
};

function ExpandableDiv({
                           image = null,
                           imageLocation = "default",
                           preloadOnHover = () => {},
                           title = "Default Title",
                           defaultContent = "Default Content",
                           expandedContent = "Expanded Content",
                           orientation = "left"
                       }: {
    image?: any | null,
    imageLocation?: "top" | "default",
    preloadOnHover?: () => void,
    expandImage?: boolean,
    title?: string,
    defaultContent?: any,
    expandedContent?: any,
    orientation?: "left" | "right" | "center"
}) {

    const [isMobile, setIsMobile] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const [mouseDownTarget, setMouseDownTarget] = useState<EventTarget | null>(null);

    function handleMouseDown(e: React.MouseEvent) {
        // Store the target element where the mouse was pressed
        setMouseDownTarget(e.target);
    }

    function handleMouseUp(e: React.MouseEvent) {
        // Only toggle if mouse down and mouse up occurred on the same element
        if (divRef.current && mouseDownTarget === e.target) {
            const target = e.target as Node;

            if ((target as HTMLElement).tagName === 'IMG') {
                return;
            }
            
            // Check if the user has selected any text
            const selection = window.getSelection();
            const hasTextSelection = selection && selection.toString().length > 0;

            // If there's a text selection, don't expand/collapse
            if (hasTextSelection) {
                return;
            }

            // Check if the click was within our component
            if (divRef.current.contains(target)) {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
            }
        }
    }
    
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        // Initial check
        checkIfMobile();

        // Add event listener
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const { theme } = useBackgroundContext();
    const { language } = useLanguageContext();

    const [isExpanded, setIsExpanded] = useState(false);
    const [imageIsExpanded, setImageIsExpanded] = useState(false);

    function expandImage(e: { stopPropagation: () => void; }){
        e.stopPropagation()
        setImageIsExpanded(!imageIsExpanded);
    }

    return (
        <div ref={divRef}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onMouseEnter={preloadOnHover}
             className={`w-auto rounded-2xl p-3  m-3 ${theme === 'dark' ? "bg-black/10 hover:bg-gray-500/5" : "bg-lightDivBackground/50 hover:bg-lightDivHoverBackground/10"}`}> {/*this is the motherfucker that refuses to update*/}

            {orientation == "left" && (
                <div className="flex flex-row items-center justify-between">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`title-${language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="text-3xl font-bold"
                        >
                            {title}
                        </motion.h1>
                    </AnimatePresence>
                    {isExpanded ? (<ChevronUp/>) : (<ChevronDown/>)}
                </div>
            )}

            {orientation == "right" && (
                <div className="flex flex-row items-center justify-between">
                    {isExpanded ? (<ChevronUp/>) : (<ChevronDown/>)}
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`title-${language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="text-3xl font-bold"
                        >
                            {title}
                        </motion.h1>
                    </AnimatePresence>
                </div>
            )}

            {orientation == "center" && (
                <div className="flex flex-row items-center justify-between">
                    {isExpanded ? (<ChevronUp/>) : (<ChevronDown/>)}
                    <AnimatePresence mode="popLayout">
                        <motion.h1
                            key={`title-${language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className="text-3xl font-bold"
                        >
                            {title}
                        </motion.h1>
                    </AnimatePresence>
                    {isExpanded ? (<ChevronUp/>) : (<ChevronDown/>)}
                </div>
            )}

            {orientation == "left" && (
                <div className="flex flex-row items-center justify-between">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`default-content-${language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            {defaultContent}
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}

            {orientation == "right" && (
                <div className="flex flex-row items-center justify-end">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`default-content-${language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                        >
                            {defaultContent}
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}

            {orientation == "center" && (
                <div className="flex flex-row items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`default-content-${language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3}}
                        >
                            {defaultContent}
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3, ease: "easeInOut"}}
                    >
                        <motion.div initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{y: -15, opacity: 0, transition: {duration: 0.1}}}
                                    transition={{
                                        delay: 0.2
                                    }}>

                            {orientation == "left" && (
                                <div className="flex flex-row items-center justify-between">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`expanded-content-${language}`}
                                            variants={textVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{duration: 0.3}}
                                        >
                                            {expandedContent}
                                        </motion.div>
                                    </AnimatePresence>
                                    <motion.div
                                        whileHover={{
                                            scale: imageIsExpanded ? 0.98 : 1.1,
                                            transformOrigin: "bottom right"
                                        }}
                                        animate={{
                                            width: imageIsExpanded
                                                ? (isMobile ? "100vw" : "40vw")
                                                : (isMobile ? "40vw" : "20vw")
                                        }}
                                        initial={{transformOrigin: "bottom right"}}
                                        transition={{duration: 0.2, ease: "easeInOut"}}
                                    >
                                        <img className="rounded-2xl w-full" src={image} onClick={expandImage}/>
                                    </motion.div>
                                </div>
                            )}

                            {orientation == "right" && (
                                <div className="flex flex-row items-center justify-between text-right">
                                    <motion.div
                                        whileHover={{
                                            scale: imageIsExpanded ? 0.98 : 1.1,
                                            transformOrigin: "bottom left"
                                        }}
                                        animate={{
                                            width: imageIsExpanded
                                                ? (isMobile ? "250vw" : "80vw")
                                                : (isMobile ? "40vw" : "30vw")
                                        }}
                                        initial={{transformOrigin: "bottom left"}}
                                        transition={{duration: 0.2, ease: "easeInOut"}}
                                    >
                                        <img className="rounded-2xl w-full" src={image} onClick={expandImage}/>
                                    </motion.div>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`expanded-content-${language}`}
                                            variants={textVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                        >
                                            {expandedContent}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            )}

                            {orientation == "center" && (
                                <div className="flex flex-col items-center justify-center">
                                    {imageLocation == "top" && (
                                        <motion.div
                                            whileHover={{scale: imageIsExpanded? 0.98 : 1.1, transformOrigin: ""}}
                                            animate={{
                                                width: imageIsExpanded
                                                    ? (isMobile ? "80vw" : "50vw")
                                                    : (isMobile ? "40vw" : "20vw")
                                            }}
                                            initial={{transformOrigin: ""}}
                                            transition={{duration: 0.2, ease: "easeInOut"}}
                                        >
                                            <img className="rounded-2xl w-full mt-5" src={image} onClick={expandImage}/>
                                        </motion.div>
                                    )}
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`expanded-content-${language}`}
                                            variants={textVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                            className="m-3 w-full"
                                        >
                                            {expandedContent}
                                        </motion.div>
                                    </AnimatePresence>
                                    {imageLocation == "default" && (
                                        <motion.div
                                            whileHover={{scale: imageIsExpanded? 0.98 : 1.1, transformOrigin: "bottom right"}}
                                            animate={{
                                                width: imageIsExpanded
                                                    ? (isMobile ? "100vw" : "40vw")
                                                    : (isMobile ? "40vw" : "20vw")
                                            }}
                                            initial={{transformOrigin: "bottom right"}}
                                            transition={{duration: 0.2, ease: "easeInOut"}}
                                        >
                                            <img className="rounded-2xl w-full" src={image} onClick={expandImage}/>
                                        </motion.div>
                                    )}
                                </div>
                            )}

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ExpandableDiv;