//TODO make text orientation right look all right
//TODO proper content types
//TODO reformat code so it's more readable
//TODO on mobile, expand images to full width
//TODO somehow alert user to the expandability of pictures
//TODO make margins smaller on mobile so more content can fit
//TODO resize/remake expansion chevrons on mobile on nested exp. divs
//TODO fix un-expansion when changing language in nested exp. divs

import {useEffect, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import { useBackgroundContext } from "./BackgroundContext.tsx";
import { useLanguageContext } from "./LanguageContext.tsx";

const textVariants = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" }
};

function ExpandableDiv({
                           image = null,
                           title = "Default Title",
                           defaultContent = "Default Content",
                           expandedContent = "Expanded Content",
                           orientation = "left"
                       }: {
    image?: any | null,
    expandImage?: boolean,
    title?: string,
    defaultContent?: any,
    expandedContent?: any,
    orientation?: "left" | "right" | "center"
}) {

    const [isMobile, setIsMobile] = useState(false);

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

    function changeExpanded(e: { stopPropagation: () => void; }) {
        e.stopPropagation()
        setIsExpanded(!isExpanded);
    }

    return (
        <div onClick={changeExpanded}
             className={`w-auto rounded-2xl p-3  m-3 ${theme === 'dark' ? "bg-black/10 hover:bg-white/5" : "bg-black/10 hover:bg-black/15"}`}> {/*this is the motherfucker that refuses to update*/}

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
                                            transition={{ duration: 0.3 }}
                                        >
                                            {expandedContent}
                                        </motion.div>
                                    </AnimatePresence>
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
                                    <motion.div
                                        whileHover={{
                                            scale: imageIsExpanded ? 0.98 : 1.1,
                                        }}
                                        animate={{
                                            width: imageIsExpanded
                                                ? (isMobile ? "80vw" : "40vw")
                                                : (isMobile ? "40vw" : "20vw")
                                        }}
                                        transition={{duration: 0.2, ease: "easeInOut"}}
                                    >
                                        <img className="rounded-2xl w-full" src={image} onClick={expandImage}/>
                                    </motion.div>
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