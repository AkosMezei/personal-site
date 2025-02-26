//TODO make text orientation left look all right
//TODO proper content types
//TODO reformat code so it's more readable

import {useEffect, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {getInitialTheme} from "./BackgroundContext.tsx";

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
    
    
    const [theme] = useState(getInitialTheme);

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
             className={`w-auto rounded-2xl p-3 hover:bg-white/10 m-3 ${theme === 'dark' ? "bg-white/5" : "bg-black/10"}`}> {/*this is the motherfucker that refuses to update*/}

            {orientation == "left" && (
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    {isExpanded ? (<ChevronUp/>) : (<ChevronDown/>)}
                </div>
            )}

            {orientation == "right" && (
                <div className="flex flex-row items-center justify-between">
                    {isExpanded ? (<ChevronUp/>) : (<ChevronDown/>)}
                    <h1 className="text-3xl font-bold">{title}</h1>
                </div>
            )}

            {orientation == "center" && (
                <div className="flex flex-row items-center justify-between">
                    {isExpanded ? (<ChevronUp/>) : (<ChevronDown/>)}
                    <h1 className="text-3xl font-bold">{title}</h1>
                    {isExpanded ? (<ChevronUp/>) : (<ChevronDown/>)}
                </div>
            )}

            {orientation == "left" && (
                <div className="flex flex-row items-center justify-between">
                    {defaultContent}
                </div>
            )}

            {orientation == "right" && (
                <div className="flex flex-row items-center justify-end">
                    {defaultContent}
                </div>
            )}

            {orientation == "center" && (
                <div className="flex flex-row items-center justify-center">
                    {defaultContent}
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
                                <div className={`flex ${isMobile? "flex-col" : "flex-row"} items-center justify-between`}>
                                    <div>
                                        {expandedContent}
                                    </div>
                                    <motion.div
                                        whileHover={{scale: imageIsExpanded? 0.98 : 1.1, transformOrigin: "bottom right"}}
                                        animate={{
                                            width: imageIsExpanded
                                                ? (isMobile ? "80vw" : "40vw")
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
                                <div
                                    className={`flex ${isMobile ? "flex-col" : "flex-row"} items-center justify-between`}>
                                    <motion.div
                                        whileHover={{
                                            scale: imageIsExpanded ? 0.98 : 1.1,
                                            transformOrigin: "bottom left"
                                        }}
                                        animate={{
                                            width: imageIsExpanded
                                                ? (isMobile ? "80vw" : "40vw")
                                                : (isMobile ? "40vw" : "20vw")
                                        }}
                                        initial={{transformOrigin: "bottom left"}}
                                        transition={{duration: 0.2, ease: "easeInOut"}}
                                    >
                                        <img className="rounded-2xl w-full" src={image} onClick={expandImage}/>
                                    </motion.div>
                                    <div>
                                        {expandedContent}
                                    </div>
                                </div>
                            )}

                            {orientation == "center" && (
                                <div className="flex flex-col items-center justify-center">
                                    <div className="m-3 w-full">
                                        {expandedContent}
                                    </div>
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