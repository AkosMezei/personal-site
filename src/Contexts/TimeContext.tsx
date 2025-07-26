import { createContext, useContext, useState, ReactNode } from 'react';

const TimeContext = createContext<number | null>(null);

export const TimeProvider = ({ children }: { children: ReactNode }) => {
    const [loadHour] = useState<number>(new Date().getHours());
    return (
        <TimeContext.Provider value={loadHour}>
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

