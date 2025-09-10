import {createContext, useContext, ReactNode} from 'react';
import {useThemeSettingsContext} from "./ThemeSettingsContext.tsx";

const TimeContext = createContext<number | null>(null);

export const TimeProvider = ({ children }: { children: ReactNode }) => {
    const {timeMode, manualTime} = useThemeSettingsContext()

    const currentHour = timeMode === 'manual' ? manualTime : new Date().getHours();

    return (
        <TimeContext.Provider value={currentHour}>
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

