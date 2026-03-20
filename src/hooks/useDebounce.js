import { useState, useEffect, useRef } from 'react'

export function useDebounce(value, delay = 500, options = {}) {
    const { leading = false } = options
    const [debouncedValue, setDebouncedValue] = useState(value)
    const isFirstRun = useRef(true)

    useEffect(() => {
        if (leading && isFirstRun.current) {
            setDebouncedValue(value)
            isFirstRun.current = false
            return undefined
        }

        const handler = setTimeout(() => {
            setDebouncedValue(value)
            isFirstRun.current = false
        }, delay)

        return () => clearTimeout(handler)
    }, [value, delay, leading])

    return debouncedValue
}
