import {AnimatePresence, motion} from "motion/react";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";

/**
 * Represents the properties for an expandable image component.
 *
 * @typedef {Object} ExpandableImageProps
 * @property {string} src - The source URL of the image.
 * @property {string} alt - The alternative text for the image, used for accessibility and as fallback content.
 * @property {string} [maxHeight] - Optional maximum height of the image when expanded. - Currently unused
 * @property {string} [maxWidth] - Optional maximum width of the image when expanded. - Currently unused
 */
type ExpandableImageProps = {
    src:string,
    alt:string,
    maxHeight?:string,
    maxWidth?:string,
}

export const ExpandableImage = ({src, alt, }:ExpandableImageProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    useEffect(() => {
        if (isOpened) {
            if (history.state?.modal !== "open") {
                history.pushState({ modal: "open" }, ""); //push modal:open state to history for navigation robustness
            }

            const scrollBarWidth = window.innerWidth - document.body.clientWidth; //calculate the width of the scroll bar
            document.body.style.paddingRight = `${scrollBarWidth}px`; //add padding equal to the width of the scroll bar
            document.body.style.overflow = "hidden"; //hide scroll bar

            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === "Escape") { //exit modal on escape key press
                    history.back();
                }
            }

            const handlePopState = () => {
                setIsOpened(false);
            }

            document.addEventListener("keydown", handleKeyDown); //add event listener for the esc key exit
            window.addEventListener("popstate", handlePopState); //add event listener for popstate, which is used when navigating back

            return () => { //cleanup
                document.removeEventListener("keydown", handleKeyDown);
                window.removeEventListener("popstate", handlePopState);

                document.body.style.overflow = "unset";
                document.body.style.paddingRight = "0px";
            };
        }
    }, [isOpened]);

    return (
        <>
            <motion.img layout whileHover={{scale: 1.02}}
                        role="button" aria-haspopup="dialog" aria-label={`View larger version of: ${alt}`}
                        animate={{ opacity: isOpened ? 0 : 1 }} //hide the image when the modal is opened
                        transition={{ opacity: { duration: 0.2 } }}
                        className={`pt-1 pb-1 rounded-2xl mx-auto object-cover max-w-[80%] max-h-64`}
                        alt={alt}
                        src={src}
                        layoutId={src}
                        onClick={() => setIsOpened(true)}
            />
                {/* use createPortal to create a modal that overlays page content  */}
                {
                    createPortal(
                        <AnimatePresence>
                            {isOpened &&
                                <motion.div role="dialog" aria-modal="true" aria-label={`Expanded image view: ${alt}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50" onClick={() => setIsOpened(false)}
                                >
                                    <motion.div layout onClick={(e) => e.stopPropagation()}>
                                        <TransformWrapper>
                                            <TransformComponent wrapperClass="!w-auto">
                                                <motion.img layoutId={src} transition={{duration:0.5}}
                                                            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain" src={src}/>
                                            </TransformComponent>
                                        </TransformWrapper>
                                    </motion.div>
                                </motion.div>
                            }
                        </AnimatePresence>,
                    document.body
                    )
                }
        </>
    );
};