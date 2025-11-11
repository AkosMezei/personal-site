import {AnimatePresence, motion } from "motion/react";
import {Settings} from "lucide-react";
import {useThemeSettingsContext} from "../Contexts/ThemeSettingsContext.tsx";
import {useFPS} from "../Hooks/useFPS.ts";
import {useBackgroundContext} from "../Contexts/BackgroundContext.tsx";

/**
 * Props for the SettingsMenu component.
 *
 * @typedef {Object} SettingsMenuProps
 * @property {boolean} isOpen - Indicates whether the settings menu is currently open.
 * @property {function} onToggle - Callback function triggered to toggle the open/close state of the settings menu.
 */
type SettingsMenuProps = {
    isOpen: boolean,
    onToggle: () => void,
}

export const SettingsMenu = ({isOpen, onToggle}:SettingsMenuProps) => {

    const {disableStars, setDisableStars, disableStarAnimations, setDisableStarAnimations} = useThemeSettingsContext()

    const {theme} = useBackgroundContext()

    const fps = useFPS({enabled: isOpen})

    if (theme === "light") { //since the settings menu currently only contains options related to stars, it's needless to display it in light mode
        return null;
    }

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mb-12 m-3 p-3 left-0 bottom-9 bg-white/10 backdrop-blur-2xl rounded-lg max-w-96"
                    >
                        <ul>
                            <li>
                                Current FPS: {fps.toFixed(1)}
                            </li>
                            <li>
                                <button className="p-1 rounded-xl hover:bg-white/10" onClick={() => setDisableStars(!disableStars)}>
                                    Click to {disableStars? "enable" : "disable"} stars.
                                </button>
                            </li>
                            <li>
                                <motion.button disabled={disableStars} className="disabled:text-gray-500 disabled:cursor-not-allowed p-0.5 m-0.5 rounded-xl hover:bg-white/10" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setDisableStarAnimations(!disableStarAnimations)}>
                                    Click to {disableStarAnimations? "enable" : "disable"} star animations.
                                </motion.button>
                            </li>
                        </ul>
                    </motion.div>

                )}
            </AnimatePresence>

            <motion.button
                whileHover={{scale:1.2}}
                whileTap={{scale:0.9}}
                onClick={onToggle}
                className="absolute p-2 left-3 bottom-1 bg-white/10 rounded-full"
            >
                <Settings/>
            </motion.button>
        </div>
    );
};