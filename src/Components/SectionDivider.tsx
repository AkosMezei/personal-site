import type {ReactNode} from "react";
import {useBackgroundContext} from "../Contexts/BackgroundContext.tsx";
import {useLanguageContext} from "../Contexts/LanguageContext.tsx";
import {AnimatePresence, motion} from "motion/react";

const textVariants = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" }
};

export const SectionDivider = ({
                                   title = "Default Title",
                                   content = "Default Content"
    } : {
    title:string,
    content: ReactNode,}) => {

    const { theme } = useBackgroundContext();
    const { language } = useLanguageContext();



    return (
        <div className={`w-auto rounded-2xl p-3  m-3 ${theme === 'dark' ? "bg-black/10 " : "bg-lightDivBackground/50 "}`}>
            <div className="flex flex-col items-center justify-between">
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
            </div>
            <div className="flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`default-content-${language}`}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3}}
                        className="text-center"
                    >
                        {content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};