import {AnimatePresence, motion} from "motion/react";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

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
            const scrollBarWidth = window.innerWidth - document.body.clientWidth;
            document.body.style.paddingRight = `${scrollBarWidth}px`; //add scroll bar width to padding to body when modal is open, to prevent content shift
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpened(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("popstate", handlePopState);
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
                                    <motion.img layoutId={src} transition={{duration:0.5}} onClick={(e) => e.stopPropagation()}
                                                className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain" src={src}/>
                                </motion.div>
                            }
                        </AnimatePresence>,
                    document.body
                    )
                }
        </>
    );
};