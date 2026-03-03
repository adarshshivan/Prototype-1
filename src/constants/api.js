// API endpoints configuration
export const API_ENDPOINTS = {
    // Auth
    AUTH: {
        LOGIN: '/auth/login',
        LOGOUT: '/auth/logout',
        REGISTER: '/auth/register',
        REFRESH: '/auth/refresh'
    },

    // User
    USER: {
        PROFILE: '/user/profile',
        PREFERENCES: '/user/preferences',
        SETTINGS: '/user/settings',
        UPDATE: '/user/update'
    },

    // Dashboard
    DASHBOARD: {
        STATS: '/dashboard/stats',
        ACTIVITIES: '/dashboard/activities',
        PROJECTS: '/dashboard/projects',
        OVERVIEW: '/dashboard/overview'
    },

    // Projects
    PROJECTS: {
        LIST: '/projects',
        CREATE: '/projects',
        GET: (id) => `/projects/${id}`,
        UPDATE: (id) => `/projects/${id}`,
        DELETE: (id) => `/projects/${id}`
    },

    // Notifications
    NOTIFICATIONS: {
        LIST: '/notifications',
        MARK_READ: '/notifications/mark-read',
        DELETE: (id) => `/notifications/${id}`
    }
}

// Error messages
export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network connection error. Please try again.',
    SERVER_ERROR: 'Server error occurred. Please try again later.',
    NOT_FOUND: 'Resource not found.',
    UNAUTHORIZED: 'You are not authorized to perform this action.',
    VALIDATION_ERROR: 'Please check your input and try again.',
    UNKNOWN_ERROR: 'An unknown error occurred.'
}

// Success messages
export const SUCCESS_MESSAGES = {
    LOGIN: 'Successfully logged in.',
    LOGOUT: 'Successfully logged out.',
    CREATED: 'Successfully created.',
    UPDATED: 'Successfully updated.',
    DELETED: 'Successfully deleted.',
    SAVED: 'Changes saved successfully.'
}
