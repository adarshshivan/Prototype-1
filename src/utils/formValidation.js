export const validators = {
    isEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    isPassword: (password) => password.length >= 8,
    isUsername: (username) => /^[a-zA-Z0-9_-]{3,}$/.test(username),
    isEmpty: (value) => !value || value.trim().length === 0,
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

        if (rule.required && validators.isEmpty(value)) {
            errors[field] = `${field} is required`
        } else if (rule.type && validators[rule.type] && !validators[rule.type](value)) {
            errors[field] = `${field} format is invalid`
        } else if (rule.minLength && value.length < rule.minLength) {
            errors[field] = `${field} must be at least ${rule.minLength} characters`
        }
    })

    return errors
}
