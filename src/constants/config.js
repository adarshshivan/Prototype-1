// Application-wide constants
export const APP_CONFIG = {
    NAME: 'Modern Dashboard',
    VERSION: '1.0.0',
    DESCRIPTION: 'A visually stunning dashboard with modern UI/UX'
}

export const THEME = {
    LIGHT: 'light',
    DARK: 'dark'
}

export const ANIMATION_DELAYS = {
    SHORT: 0.2,
    NORMAL: 0.4,
    LONG: 0.6
}

export const BREAKPOINTS = {
    MOBILE: 640,
    TABLET: 768,
    DESKTOP: 1024,
    WIDE: 1280,
    EXTRA_WIDE: 1536
}

export const NOTIFICATION_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
}

export const NOTIFICATION_DURATION = {
    SHORT: 2000,
    NORMAL: 3000,
    LONG: 5000,
    PERSISTENT: 0
}

export const COLORS = {
    PRIMARY: '#000000',
    SECONDARY: '#FFFFFF',
    NEUTRAL_50: '#FAFAFA',
    NEUTRAL_100: '#F5F5F5',
    NEUTRAL_200: '#E5E5E5',
    NEUTRAL_900: '#0A0A0A',
    SUCCESS: '#10B981',
    ERROR: '#EF4444',
    WARNING: '#F59E0B'
}

export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000
}

export const STORAGE_KEYS = {
    THEME: 'theme',
    USER_PREFERENCES: 'userPreferences',
    AUTH_TOKEN: 'authToken',
    LAST_ACTIVE: 'lastActive'
}

export const VALIDATION_RULES = {
    PASSWORD_MIN_LENGTH: 8,
    USERNAME_MIN_LENGTH: 3,
    SEARCH_MIN_LENGTH: 2
}
