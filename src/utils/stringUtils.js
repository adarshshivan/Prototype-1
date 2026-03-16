// String and text utilities
export const truncate = (text, length = 100) => {
    if (typeof text !== 'string') return ''
    if (length <= 0) return ''
    if (text.length <= length) return text
    return text.slice(0, length) + '...'
}

export const capitalize = (text) => {
    if (typeof text !== 'string' || text.length === 0) return ''
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

export const slugify = (text) => {
    if (typeof text !== 'string') return ''

    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}

export const camelToKebab = (text) => {
    if (typeof text !== 'string') return ''
    return text.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export const formatBytes = (bytes, decimals = 2) => {
    if (!Number.isFinite(bytes) || bytes <= 0) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    const sizeIndex = Math.min(i, sizes.length - 1)

    return parseFloat((bytes / Math.pow(k, sizeIndex)).toFixed(dm)) + ' ' + sizes[sizeIndex]
}

export const generateId = (prefix = 'id') => {
    const randomPart = globalThis.crypto?.randomUUID
        ? globalThis.crypto.randomUUID().replace(/-/g, '').slice(0, 12)
        : Math.random().toString(36).slice(2, 14)

    return `${prefix}_${Date.now()}_${randomPart}`
}
