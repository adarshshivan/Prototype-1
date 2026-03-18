export const validators = {
    isEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    isPassword: (password) => password.length >= 8,
    isUsername: (username) => /^[a-zA-Z0-9_-]{3,}$/.test(username),
    isEmpty: (value) => !value || value.trim().length === 0,
    isNumber: (value) => {
        if (value === null || value === undefined || value === '') return false
        return Number.isFinite(Number(value))
    },
    isURL: (url) => {
        try {
            new URL(url)
            return true
        } catch {
            return false
        }
    },
    isPhoneNumber: (phone) => /^\d{10}$/.test(phone.replace(/\D/g, ''))
}

export const validateForm = (data, rules) => {
    const errors = {}

    Object.keys(rules).forEach((field) => {
        const rule = rules[field]
        const value = data[field]
        const fieldLabel = rule.label || field

        const withDefaultMessage = (fallback) => rule.message || fallback

        if (rule.required && validators.isEmpty(value)) {
            errors[field] = withDefaultMessage(`${fieldLabel} is required`)
        } else if (rule.type && validators[rule.type] && !validators[rule.type](value)) {
            errors[field] = withDefaultMessage(`${fieldLabel} format is invalid`)
        } else if (rule.minLength && value.length < rule.minLength) {
            errors[field] = withDefaultMessage(`${fieldLabel} must be at least ${rule.minLength} characters`)
        } else if (rule.maxLength && value.length > rule.maxLength) {
            errors[field] = withDefaultMessage(`${fieldLabel} must be at most ${rule.maxLength} characters`)
        } else if (rule.pattern && !rule.pattern.test(value)) {
            errors[field] = withDefaultMessage(`${fieldLabel} format is invalid`)
        } else if (rule.custom && typeof rule.custom === 'function') {
            const customResult = rule.custom(value, data)

            if (customResult !== true) {
                errors[field] = typeof customResult === 'string'
                    ? customResult
                    : withDefaultMessage(`${fieldLabel} is invalid`)
            }
        }
    })

    return errors
}
