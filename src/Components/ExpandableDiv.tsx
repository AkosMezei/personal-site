import React, {useState, useRef} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import { useBackgroundContext } from "../Contexts/BackgroundContext.tsx";
import { useTranslation } from "react-i18next";
import type { ReactNode } from "react";


/**
 * An object representing animation states for text elements.
 *
 * This object defines the properties for different animation variants, including:
 * - `initial`: The starting state of the animation, with opacity set to 0 and a blur effect applied.
 * - `animate`: The active state of the animation, where the text is fully visible with no blur applied.
 * - `exit`: The end state of the animation, returning to opacity 0 and reapplying the blur effect.
 *
 * Each state contains styles to control the opacity and filter for creating a smooth transition effect.
 * Mainly used for smooth transition when changing the language.
 */
const textVariants = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" }
};

const light_hoverTitleColor = "text-blue-700";
const dark_hoverTitleColor = "text-sky-400";


/**
 * A collapsible UI component, often called an "accordion," that toggles between
 * a collapsed (default) and an expanded state upon user click.
 *
 * @param {string} title The title of the component e.g., "About Me"
 * @param {ReactNode} defaultContent Content to show while the component is not expanded.
 * @param {ReactNode} expandedContent Content to show when the component is expanded.
 * @param {"left" | "right" | "center"} orientation Text orientation can be left, right, center.
 * @param {boolean} isSectionBreak For conditional formatting based on whether the component should also act as a
 * section break/divider.
 * @param {boolean} shouldBlur If the component should blur the background.
 *
 * @example
 * // A basic example for a user profile section.
 * <ExpandableDiv
 *   title="About Me"
 *   defaultContent={
 *     <p>A short and sweet summary about my professional life...</p>
 *   }
 *   expandedContent={
 *     <>
 *       <p>Here are some more details, including hobbies and interests
 *          that are only visible when this component is expanded.</p>
 *       <ContactForm />
 *     </>
 *   }
 * />
 */
function ExpandableDiv({
                           title = "Default Title",
                           defaultContent = "Default Content",
                           expandedContent = "Expanded Content",
                           orientation = "left",
                            isSectionBreak = false,
                            shouldBlur = false,
                       }: {
    title?: string,
    defaultContent?: ReactNode,
    expandedContent?: ReactNode,
    orientation?: "left" | "right" | "center",
    isSectionBreak?: boolean,
    shouldBlur?: boolean,
}) {
    const divRef = useRef<HTMLDivElement>(null);
    const [mouseDownTarget, setMouseDownTarget] = useState<EventTarget | null>(null);

    const contentId = `expandable-content-${title.replace(/\s+/g, '-').toLowerCase()}`; //helper for automatic aria labeling based on the title

    const selectionExistsOnMouseDown = useRef(false);

    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    function handleMouseDown(e: React.MouseEvent) {
        // Store the target element where the mouse was pressed
        setMouseDownTarget(e.target);
        const selection = window.getSelection();
        selectionExistsOnMouseDown.current = !!(selection && selection.toString().length > 0); //check for text selection
    }

    function handleMouseUp(e: React.MouseEvent) {
        // Only toggle if mouse down and mouse up occurred on the same element
        const target = e.target as HTMLElement;
        if (target.closest('a')) { //check if the click target is a link, if it is, don't collapse the div
            return;
        }
        if (divRef.current && mouseDownTarget === e.target) {
            const target = e.target as Node;

            if ((target as HTMLElement).tagName === 'IMG') { //if the target is an image, don't collapse
                return;
            }

            if (selectionExistsOnMouseDown.current) {
                selectionExistsOnMouseDown.current = false; //reset for the next click
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
                setIsExpanded(prev => !prev);
            }
        }
    }

    function handleKeyDown(e: React.KeyboardEvent) { //a11y, expand/collapse on enter and space key presses
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            setIsExpanded(prev => !prev);
        }
    }

    const { theme } = useBackgroundContext();
    const { i18n } = useTranslation();

    const [isExpanded, setIsExpanded] = useState(false);

    //title formatting pulled out so it's not repeated and consistent
    const titleClassName = `text-xl md:text-3xl font-bold transition-colors duration-300 cursor-pointer ${isHovered || isExpanded? `${theme === 'dark'? dark_hoverTitleColor : light_hoverTitleColor }` : ''}`;

    return (
        <motion.div ref={divRef}
             onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             tabIndex={0}
             onKeyDown={handleKeyDown}
             aria-role="button"
             aria-expanded={isExpanded}
             aria-controls={contentId}
             className={`w-auto rounded-2xl transition-all duration-300 hover:outline hover:outline-1 outline-none ${shouldBlur? "backdrop-blur-xs" : ""} focus:ring-2 focus:ring-blue-500
             p-1  m-1 mt-2 md:p-3  md:m-3
             ${theme === 'dark' ? `${isSectionBreak ? "bg-gray-800/30" : `bg-black/20 `} hover:outline-sky-400/50 outline-1 outline-white/10` : `${isSectionBreak ? "bg-lightDivBackground/70" : `${shouldBlur ? "bg-lightDivBackground/40":"bg-lightDivBackground/10"}`} hover:outline-sky-600/50 outline-1 outline-black/20`} 
             ${isExpanded ? `${theme === 'dark'? "outline-sky-400/50 outline-1 outline-none":"outline-sky-600/50 outline-1 outline-none"}`:"hover:cursor-pointer"}
             `}>

            {/* Title formatting section */}

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
                            className={titleClassName}
                        >
                            {title}
                        </motion.h1>
                    </AnimatePresence>
                    {isExpanded ? (<ChevronUp className="cursor-pointer"/>) : (<ChevronDown/>)}
                </div>
            )}

            {orientation == "right" && (
                <div className="flex flex-row items-center justify-between">
                    {isExpanded ? (<ChevronUp className="cursor-pointer"/>) : (<ChevronDown/>)}
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={`title-${i18n.language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className={titleClassName}
                        >
                            {title}
                        </motion.h1>
                    </AnimatePresence>
                </div>
            )}

            {orientation == "center" && (
                <div className="flex flex-row items-center justify-between">
                    {isExpanded ? (<ChevronUp className="cursor-pointer"/>) : (<ChevronDown/>)}
                    <AnimatePresence mode="popLayout">
                        <motion.h1
                            key={`title-${i18n.language}`}
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className={titleClassName}
                        >
                            {title}
                        </motion.h1>
                    </AnimatePresence>
                    {isExpanded ? (<ChevronUp className="cursor-pointer"/>) : (<ChevronDown/>)}
                </div>
            )}

            {/* Default content formatting section */}

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

            {/* Expanded content formatting section */}

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        id={contentId}
                        style={{overflow: "hidden"}}
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                    > {/* Content container size change/expansion animation */}
                        <motion.div initial={{opacity: 0, y: -50}}
                                    animate={{opacity: 1, y: 0}}
                                    exit={{y: -50, opacity: 0, transition: {duration: 0.1}}}
                                    transition={{
                                        delay: 0.2
                                    }}> {/* Content animation */}

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
                                <div className="flex flex-row items-center justify-between">
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
        </motion.div>
    )
}

export default React.memo(ExpandableDiv);