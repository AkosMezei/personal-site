import {useEffect, useRef, useState} from "react";

const FRAME_SAMPLES = 60 // number of frames to average over

export const useFPS = () => {
    const [fps, setFps] = useState(60)
    const frameTimes = useRef<number[]>([])
    const lastTimestamp = useRef(performance.now())

    useEffect(() => {
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
    }, []);

    return fps;
}