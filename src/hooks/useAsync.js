import { useState, useCallback, useEffect, useRef } from 'react'

/**
 * useAsync hook for handling async operations
 * @param {Function} asyncFunction - The async function to execute
 * @param {boolean} immediate - Execute immediately on mount
 * @returns {Object} - { status, result, error, execute }
 */
export function useAsync(asyncFunction, immediate = true) {
    const [status, setStatus] = useState('idle')
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const isMountedRef = useRef(true)

    useEffect(() => {
        isMountedRef.current = true

        return () => {
            isMountedRef.current = false
        }
    }, [])

    const execute = useCallback(async () => {
        setStatus('pending')
        setResult(null)
        setError(null)

        try {
            const response = await asyncFunction()

            if (!isMountedRef.current) {
                return response
            }

            setResult(response)
            setStatus('success')
            return response
        } catch (err) {
            if (!isMountedRef.current) {
                throw err
            }

            setError(err)
            setStatus('error')
            throw err
        }
    }, [asyncFunction])

    const reset = useCallback(() => {
        if (!isMountedRef.current) {
            return
        }

        setStatus('idle')
        setResult(null)
        setError(null)
    }, [])

    useEffect(() => {
        if (immediate) {
            execute()
        }
    }, [execute, immediate])

    return { status, result, error, execute, reset }
}
