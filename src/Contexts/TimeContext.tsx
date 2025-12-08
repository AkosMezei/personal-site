/**
 * @file A simple context that manages and returns the current hour of the day.
 */

import {createContext, useContext, ReactNode} from 'react';
import {useThemeSettingsContext} from "./ThemeSettingsContext.tsx";

const TimeContext = createContext<number | Date | null>(null);

export const TimeProvider = ({ children }: { children: ReactNode }) => {
    const {timeMode, manualTime} = useThemeSettingsContext()

    //if timeMode is set to manual, return the hour corresponding to the manualTime
    const currentTime = timeMode === 'manual' ? manualTime : new Date();

    return (
        <TimeContext.Provider value={currentTime}>
            {children}
        </TimeContext.Provider>
    )
}

export const useTimeContext = () => {
    const context = useContext(TimeContext);
    if (context === null) {
        throw new Error('useTimeContext must be used within a TimeProvider');
    }
    return context;
}

