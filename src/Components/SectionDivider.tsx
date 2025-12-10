import type {ReactNode} from "react";
import {useLanguageContext} from "../Contexts/LanguageContext.tsx";
import {AnimatePresence, motion} from "motion/react";

//for animating the text change on language change
const textVariants = {
    initial: { opacity: 0, filter: "blur(10px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" }
};
/**
 * SectionDivider is a functional React component that renders a styled section divider with a title and content.
 *
 * @param {Object} props - The props object for the component.
 * @param {string} props.title - The title to display in the section. Defaults to "Default Title".
 * @param {React.ReactNode} props.content - The content to display in the section. Defaults to "Default Content".
 * @returns {JSX.Element} The rendered SectionDivider component.
 */
export const SectionDivider = ({
                                   title = "Default Title",
                                   content = "Default Content"
    } : {
    title:string,
    content: ReactNode,}) => {

    const { language } = useLanguageContext();

    return (
        <div className={`w-auto rounded-2xl p-3 m-3 transition-colors duration-300 dark:bg-gray-800/30 bg-lightDivBackground/70`}>
            {/* Title */}
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
            {/* Content */}
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