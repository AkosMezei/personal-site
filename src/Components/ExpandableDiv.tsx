import {useEffect, useState, useRef} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import { useBackgroundContext } from "../Contexts/BackgroundContext.tsx";
import {MOBILE_BREAKPOINT_PX} from "../data/constants.ts";
import { useTranslation } from "react-i18next";
import type { ReactNode } from "react";

const textVariants = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" }
};

function ExpandableDiv({
                           title = "Default Title",
                           defaultContent = "Default Content",
                           expandedContent = "Expanded Content",
                           orientation = "left"
                       }: {
    title?: string,
    defaultContent?: ReactNode,
    expandedContent?: ReactNode,
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
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_PX);
        };

        // Initial check
        checkIfMobile();

        // Add event listener
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const { theme } = useBackgroundContext();
    const { i18n } = useTranslation();

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div ref={divRef}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             className={`w-auto rounded-2xl ${isMobile?"p-1  m-1":"p-3  m-3"} ${theme === 'dark' ? "bg-black/10 " : "bg-lightDivBackground/50 "} ${isExpanded ? "":"hover:cursor-pointer"}`}> {/*this is the motherfucker that refuses to update*/}

            {orientation == "left" && (
                <div className="flex flex-row items-center justify-between">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`title-${i18n.language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className={`${isMobile?"text-xl":"text-3xl"}  font-bold`}
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
                            key={`title-${i18n.language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className={`${isMobile?"text-xl":"text-3xl"}  font-bold`}
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
                            key={`title-${i18n.language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className={`${isMobile?"text-xl":"text-3xl"}  font-bold`}
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
                            key={`default-content-${i18n.language}`}
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
                            key={`default-content-${i18n.language}`}
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
                            key={`default-content-${i18n.language}`}
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
                                            key={`expanded-content-${i18n.language}`}
                                            variants={textVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{duration: 0.3}}
                                        >
                                            {expandedContent}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            )}

                            {orientation == "right" && (
                                <div className="flex flex-row items-center justify-between text-right">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`expanded-content-${i18n.language}`}
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
                                            key={`expanded-content-${i18n.language}`}
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