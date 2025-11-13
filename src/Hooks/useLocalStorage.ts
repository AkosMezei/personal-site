/**
 * @File - hook to manage state synchronized with localStorage.
 */

import {useEffect, useState} from "react";

/**
 * Retrieves a stored value from localStorage by the given key. Parses the stored value as JSON
 * and returns it. If no value is found, or an error occurs during the retrieval, the initial value is returned.
 *
 * @param {string} key - The key associated with the value in localStorage.
 * @param {T} initialValue - The default value to return if no value is found or an error occurs.
 * @return {T} The retrieved value from localStorage, or the initial value if retrieval fails.
 */
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

/**
 * Provides a custom hook to manage state synchronized with localStorage.
 *
 * @template T The type of the stored value.
 * @param {string} key The key under which the value is stored in localStorage.
 * @param {T} initialValue The initial value to use if no stored value exists.
 * @returns {[T, React.Dispatch<React.SetStateAction<T>>]}
 *          A tuple containing the current state and a function to update it.
 *
 * The hook initializes state with the value from localStorage corresponding
 * to the provided key. If no value exists in localStorage, the provided
 * initial value is used. The state is automatically synchronized with
 * localStorage whenever it changes.
 */
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