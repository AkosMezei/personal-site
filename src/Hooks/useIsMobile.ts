import {MOBILE_BREAKPOINT_PX} from "../data/constants.ts";
import {useEffect, useState} from "react";

export function useIsMobile() {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_PX);
        }

        //Initial check
        checkIfMobile()

        //Check if is mobile on resize event
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return isMobile;
}