import {useEffect, useState} from "react";


function getStoredValue<T>(key:string, initialValue:T):T{
    if (typeof window === 'undefined') {
        return initialValue;
    }

    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    } catch (error) {
        console.error(error);
        return initialValue;
    }
}

export const useLocalStorage = <T>(key:string, initialValue:T) => {
    const [storedValue, setStoredValue] = useState<T>(()=>{
        return getStoredValue(key, initialValue);
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue] as const;
}