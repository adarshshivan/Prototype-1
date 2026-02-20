// Simple analytics utility for tracking user interactions
export const analytics = {
    trackEvent: (eventName, eventData = {}) => {
        if (process.env.NODE_ENV === 'production') {
            console.log(`[Analytics] Event: ${eventName}`, eventData)
            // Add your analytics service integration here
        }
    },

    trackPageView: (pageName) => {
        if (process.env.NODE_ENV === 'production') {
            console.log(`[Analytics] Page View: ${pageName}`)
        }
    },

    trackUserAction: (action, metadata = {}) => {
        if (process.env.NODE_ENV === 'production') {
            console.log(`[Analytics] User Action: ${action}`, metadata)
        }
    }
}
