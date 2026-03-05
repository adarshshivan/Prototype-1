import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
    const readValue = () => {
        if (typeof window === 'undefined') {
            return initialValue instanceof Function ? initialValue() : initialValue
        }

        try {
            const item = window.localStorage.getItem(key)
            if (item !== null) {
                return JSON.parse(item)
            }

            return initialValue instanceof Function ? initialValue() : initialValue
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error)
            return initialValue instanceof Function ? initialValue() : initialValue
        }
    }

    const [storedValue, setStoredValue] = useState(readValue)

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(readValue()) : value
            setStoredValue(valueToStore)

            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore))
            }
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error)
        }
    }

    useEffect(() => {
        setStoredValue(readValue())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key])

    useEffect(() => {
        if (typeof window === 'undefined') {
            return undefined
        }

        const handleStorageChange = (event) => {
            if (event.key && event.key !== key) {
                return
            }

            setStoredValue(readValue())
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key])

    return [storedValue, setValue]
}
