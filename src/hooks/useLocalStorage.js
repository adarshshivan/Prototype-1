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
            setStoredValue((currentValue) => {
                const valueToStore = value instanceof Function ? value(currentValue) : value

                if (typeof window !== 'undefined') {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore))
                }

                return valueToStore
            })

            if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('local-storage', { detail: { key } }))
            }
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error)
        }
    }

    const removeValue = () => {
        try {
            const fallbackValue = initialValue instanceof Function ? initialValue() : initialValue
            setStoredValue(fallbackValue)

            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key)
                window.dispatchEvent(new CustomEvent('local-storage', { detail: { key } }))
            }
        } catch (error) {
            console.error(`Error removing localStorage key "${key}":`, error)
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

        const handleCustomStorageEvent = (event) => {
            if (event.detail?.key && event.detail.key !== key) {
                return
            }

            setStoredValue(readValue())
        }

        window.addEventListener('storage', handleStorageChange)
        window.addEventListener('local-storage', handleCustomStorageEvent)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
            window.removeEventListener('local-storage', handleCustomStorageEvent)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key])

    return [storedValue, setValue, removeValue]
}
