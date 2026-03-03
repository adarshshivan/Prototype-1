import { useState, useCallback } from 'react'

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

    const execute = useCallback(async () => {
        setStatus('pending')
        setResult(null)
        setError(null)

        try {
            const response = await asyncFunction()
            setResult(response)
            setStatus('success')
            return response
        } catch (err) {
            setError(err)
            setStatus('error')
            throw err
        }
    }, [asyncFunction])

    useState(() => {
        if (immediate) {
            execute()
        }
    }, [execute, immediate])

    return { status, result, error, execute }
}
