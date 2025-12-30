import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="icon-btn"
            style={{
                position: 'relative',
                overflow: 'hidden',
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                border: '1px solid var(--border-glass)',
                cursor: 'pointer',
                color: theme === 'dark' ? '#fbbf24' : '#64748b'
            }}
            aria-label="Toggle Theme"
        >
            <div style={{
                position: 'absolute',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                transform: theme === 'dark' ? 'translateY(0) rotate(0)' : 'translateY(40px) rotate(90deg)',
                opacity: theme === 'dark' ? 1 : 0
            }}>
                <Moon size={20} />
            </div>

            <div style={{
                position: 'absolute',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                transform: theme === 'light' ? 'translateY(0) rotate(0)' : 'translateY(-40px) rotate(-90deg)',
                opacity: theme === 'light' ? 1 : 0,
                color: '#f59e0b'
            }}>
                <Sun size={20} />
            </div>
        </button>
    );
};

export default ThemeToggle;
