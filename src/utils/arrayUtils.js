// Array utilities
const resolveSelector = (item, key) => {
    if (typeof key === 'function') {
        return key(item)
    }

    return item?.[key]
}

export const groupBy = (array, key) => {
    if (!Array.isArray(array) || !key) return {}

    return array.reduce((result, item) => {
        const group = resolveSelector(item, key)
        if (!result[group]) {
            result[group] = []
        }
        result[group].push(item)
        return result
    }, {})
}

export const sortBy = (array, key, order = 'asc') => {
    if (!Array.isArray(array) || !key) return []

    return [...array].sort((a, b) => {
        const left = resolveSelector(a, key)
        const right = resolveSelector(b, key)

        if (left < right) return order === 'asc' ? -1 : 1
        if (left > right) return order === 'asc' ? 1 : -1
        return 0
    })
}

export const unique = (array, key) => {
    if (!Array.isArray(array)) return []

    const seen = new Set()
    return array.filter((item) => {
        const value = key ? resolveSelector(item, key) : item
        if (seen.has(value)) return false
        seen.add(value)
        return true
    })
}

export const chunk = (array, size) => {
    if (!Array.isArray(array) || size <= 0) return []

    const chunks = []
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size))
    }
    return chunks
}

export const flatten = (array) => {
    if (!Array.isArray(array)) return []

    return array.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flatten(item) : item)
    }, [])
}
