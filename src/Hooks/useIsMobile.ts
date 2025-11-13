/**
 * @File - simple hook that checks if current viewport width corresponds to a mobile size
 */

import {MOBILE_BREAKPOINT_PX} from "../data/constants.ts";
import {useEffect, useState} from "react";

/**
 * A custom React hook to determine if the user's device screen width is considered mobile.
 * The determination is based on a predefined breakpoint value.
 *
 * @return {boolean} Returns a boolean indicating whether the viewport width is considered mobile.
 */
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