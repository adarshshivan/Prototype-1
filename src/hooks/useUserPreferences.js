import { useLocalStorage } from './useLocalStorage'

export function useUserPreferences() {
    const [preferences, setPreferences] = useLocalStorage('userPreferences', {
        sidebarCollapsed: false,
        compactMode: false,
        highContrast: false,
        language: 'en',
        notifications: true,
        autoSave: true
    })

    const updatePreference = (key, value) => {
        setPreferences((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    return {
        preferences,
        updatePreference,
        setSidebarCollapsed: (collapsed) => updatePreference('sidebarCollapsed', collapsed),
        setCompactMode: (compact) => updatePreference('compactMode', compact),
        setHighContrast: (contrast) => updatePreference('highContrast', contrast),
        setLanguage: (language) => updatePreference('language', language),
        setNotifications: (enabled) => updatePreference('notifications', enabled)
    }
}
