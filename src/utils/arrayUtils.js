// Array utilities
export const groupBy = (array, key) => {
    return array.reduce((result, item) => {
        const group = item[key]
        if (!result[group]) {
            result[group] = []
        }
        result[group].push(item)
        return result
    }, {})
}

export const sortBy = (array, key, order = 'asc') => {
    return [...array].sort((a, b) => {
        if (a[key] < b[key]) return order === 'asc' ? -1 : 1
        if (a[key] > b[key]) return order === 'asc' ? 1 : -1
        return 0
    })
}

export const unique = (array, key) => {
    const seen = new Set()
    return array.filter((item) => {
        const value = key ? item[key] : item
        if (seen.has(value)) return false
        seen.add(value)
        return true
    })
}

export const chunk = (array, size) => {
    const chunks = []
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size))
    }
    return chunks
}

export const flatten = (array) => {
    return array.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flatten(item) : item)
    }, [])
}
