import {createContext, ReactNode, useContext, useState} from 'react';

const ActiveNodeContext = createContext<string[]>([]);
const SetActiveNodeContext = createContext<((ids: string[]) => void) | null>(null)

export const ActiveNodeProvider = ({ children }:{children: ReactNode}) => {
    const [activeIds, setActiveIds] = useState<string[]>(['AddNewItem']);
    return (
        <ActiveNodeContext.Provider value={activeIds}>
            <SetActiveNodeContext.Provider value={setActiveIds}>
                {children}
            </SetActiveNodeContext.Provider>
        </ActiveNodeContext.Provider>
    );
};

export const useActiveNodeIds = () => useContext(ActiveNodeContext);
export const useSetActiveNodeIds = () => {
    const context = useContext(SetActiveNodeContext)
    if (context === null) {
        throw new Error('useSetActiveNodeIds must be used within a ActiveNodeProvider')
    }
    return context;
};