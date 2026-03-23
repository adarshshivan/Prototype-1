/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { STORAGE_KEYS, THEME } from '../constants/config';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') {
            return THEME.LIGHT;
        }

        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        if (savedTheme) {
            return savedTheme;
        }
        // Check for saved theme or system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT;
    });

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const root = window.document.documentElement;
        root.setAttribute('data-theme', theme);
        root.classList.toggle('dark', theme === THEME.DARK);
        localStorage.setItem(STORAGE_KEYS.THEME, theme);
    }, [theme]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);

        if (savedTheme) {
            return;
        }

        const handleChange = (event) => {
            setTheme(event.matches ? THEME.DARK : THEME.LIGHT);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

// Export the hook separately to satisfy react-refresh/only-export-components
export { useTheme };
