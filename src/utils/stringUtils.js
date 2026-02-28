// String and text utilities
export const truncate = (text, length = 100) => {
    if (text.length <= length) return text
    return text.slice(0, length) + '...'
}

export const capitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export const slugify = (text) => {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}

export const camelToKebab = (text) => {
    return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export const generateId = (prefix = 'id') => {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}
