//TODO refuses to update on theme change, make it work with static bg or make it update

import {useState} from "react";
import {getInitialTheme} from "./Components/BackgroundContext.tsx";
import {AnimatePresence, motion} from "motion/react";
import {ChevronDown, ChevronUp} from "lucide-react";

function HomePage() {

    const [theme] = useState(getInitialTheme);

    const [isExpanded, setIsExpanded] = useState(false);

    function changeExpanded() {
        setIsExpanded(!isExpanded);
    }

    return (
        <section className="flex justify-center items-center min-h-screen">
            <div onClick={changeExpanded}
                 className={`w-3/5 rounded-2xl p-3 hover:bg-white/10 ${theme === 'dark' ? "bg-white/5" : "bg-black/10"}`}> {/*this is the motherfucker that refuses to update*/}
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-3xl font-bold">Welcome to Homepage</h1>
                    {isExpanded ? (<ChevronUp/>) : (<ChevronDown/>)}
                </div>
                <p> some homepage p content</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                                <p> some expando content </p>
                                <p> Some more expando content woooooooooo </p>
                                <p> I wonder if</p>
                                <p> This works with</p>
                                <p> Way more contents</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

export default HomePage;