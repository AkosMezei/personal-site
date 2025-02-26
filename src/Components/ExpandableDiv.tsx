//TODO make text orientation left look all right
//TODO proper content types

import {useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {getInitialTheme} from "./BackgroundContext.tsx";

function ExpandableDiv({image = null, title = "Default Title", defaultContent = "Default Content", expandedContent = "Expanded Content", orientation = "left"}: {image?: string | null, title?: string, defaultContent?: any, expandedContent?:any, orientation?: "left" | "right" | "center"}) {

    const [theme] = useState(getInitialTheme);
    
    const [isExpanded, setIsExpanded] = useState(false);

    function changeExpanded() {
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
                    <div className="flex flex-row items-center justify-start">
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
                                    <div className="flex flex-col items-start justify-start">
                                        {expandedContent}
                                    </div>
                                )}

                                {orientation == "right" && (
                                    <div className="flex flex-col items-end justify-end">
                                        {expandedContent}
                                    </div>
                                )}

                                {orientation == "center" && (
                                    <div className="flex flex-col items-center justify-center">
                                        {expandedContent}
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