import {useEffect, useRef, useState} from "react";

const FRAME_SAMPLES = 60 // number of frames to average over

type UseFPSOptions = {
    enabled?: boolean;
}

export const useFPS = ({enabled = true}:UseFPSOptions) => {
    const [fps, setFps] = useState(60)
    const frameTimes = useRef<number[]>([])
    const lastTimestamp = useRef(performance.now())

    useEffect(() => {
       if (!enabled) {
           frameTimes.current = [] // reset frame times if not enabled, for a "fresh start" when it gets enabled
           return
       }

        let frameId: number

        const measure = (timestamp:number) => {
            const deltaTime = timestamp - lastTimestamp.current
            lastTimestamp.current = timestamp

            frameTimes.current.push(deltaTime) //add new frame time
            if (frameTimes.current.length >= FRAME_SAMPLES) { //if the number of samples is larger than what we want
                frameTimes.current.shift()
            }

            //calculate the avg delta time
            const averageDelta = frameTimes.current.reduce((a, b) => a + b, 0) / frameTimes.current.length
            const currentFps = 1000 / averageDelta
            setFps(currentFps)

            frameId = requestAnimationFrame(measure)
        }

        frameId = requestAnimationFrame(measure)

        return () => cancelAnimationFrame(frameId)
    }, [enabled]);

    return fps;
}