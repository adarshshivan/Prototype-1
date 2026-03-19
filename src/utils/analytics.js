// Simple analytics utility for tracking user interactions
const isAnalyticsEnabled = import.meta.env.PROD || import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
const eventQueue = []
const MAX_QUEUE_SIZE = 50

const sanitizePayload = (payload) => {
    if (!payload || typeof payload !== 'object') return {}

    return Object.entries(payload).reduce((acc, [key, value]) => {
        if (value !== undefined) {
            acc[key] = value
        }

        return acc
    }, {})
}

const flushQueuedEvents = () => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function' || eventQueue.length === 0) {
        return
    }

    while (eventQueue.length > 0) {
        const { eventName, payload } = eventQueue.shift()
        window.gtag('event', eventName, payload)
    }
}

const emitAnalyticsEvent = (eventName, payload = {}) => {
    const cleanedPayload = sanitizePayload(payload)

    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        flushQueuedEvents()
        window.gtag('event', eventName, cleanedPayload)
    } else if (isAnalyticsEnabled) {
        eventQueue.push({ eventName, payload: cleanedPayload })

        if (eventQueue.length > MAX_QUEUE_SIZE) {
            eventQueue.shift()
        }
    }

    if (import.meta.env.DEV) {
        console.info(`[Analytics] ${eventName}`, cleanedPayload)
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
