// Simple analytics utility for tracking user interactions
const isAnalyticsEnabled = import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS === 'true'

const emitAnalyticsEvent = (eventName, payload = {}) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', eventName, payload)
    }

    if (import.meta.env.DEV) {
        console.info(`[Analytics] ${eventName}`, payload)
    }
}

export const analytics = {
    trackEvent: (eventName, eventData = {}) => {
        if (isAnalyticsEnabled) {
            emitAnalyticsEvent(eventName, eventData)
        }
    },

    trackPageView: (pageName) => {
        if (isAnalyticsEnabled) {
            emitAnalyticsEvent('page_view', { page_name: pageName })
        }
    },

    trackUserAction: (action, metadata = {}) => {
        if (isAnalyticsEnabled) {
            emitAnalyticsEvent(action, metadata)
        }
    }
}
