import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex items-center h-9 w-20 rounded-full glass-panel border border-white/10 px-2 cursor-pointer overflow-hidden transition-all duration-500 ease-out"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/40 via-[var(--secondary)]/35 to-[var(--accent-pink)]/35 opacity-0"
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />

      <div className="relative flex-1 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
        <span className={`transition-opacity duration-300 ${isDark ? 'opacity-50' : 'opacity-100'}`}>
          Light
        </span>
        <span className={`transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-50'}`}>
          Dark
        </span>
      </div>

      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        className={`absolute top-1 left-1 w-7 h-7 rounded-full flex items-center justify-center ${
          isDark
            ? 'bg-[rgba(15,23,42,0.96)] shadow-[0_0_20px_rgba(148,163,184,0.55)]'
            : 'bg-white shadow-[0_0_18px_rgba(148,163,184,0.35)]'
        }`}
        animate={{ x: isDark ? 32 : 0 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -20, y: -6 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              exit={{ opacity: 0, rotate: 20, y: 6 }}
              transition={{ duration: 0.25 }}
              className="text-[var(--secondary)]"
            >
              <Moon size={14} />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 20, y: 6 }}
              animate={{ opacity: 1, rotate: 0, y: 0 }}
              exit={{ opacity: 0, rotate: -20, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-[var(--accent-yellow)]"
            >
              <Sun size={14} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  )
}

export default ThemeToggle
