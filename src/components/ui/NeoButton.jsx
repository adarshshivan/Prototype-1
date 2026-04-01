import { motion } from 'framer-motion'

const NeoButton = ({ children, variant = 'primary', className = '', disabled = false, ariaLabel, ...props }) => {
    const baseStyles = "relative px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 select-none disabled:opacity-50 disabled:cursor-not-allowed"

    const variants = {
        primary: "bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/20 dark:shadow-white/10 hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-white/20 disabled:hover:shadow-lg disabled:hover:shadow-black/20",
        secondary: "bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 shadow-sm hover:shadow-md disabled:hover:shadow-sm",
        outline: "bg-transparent border border-neutral-300 dark:border-neutral-700 text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50 disabled:border-neutral-200"
    }

    const selectedVariant = variants[variant] || variants.primary

    return (
        <motion.button
            whileHover={!disabled ? { scale: 1.02, y: -1 } : {}}
            whileTap={!disabled ? { scale: 0.96 } : {}}
            className={`${baseStyles} ${selectedVariant} ${className}`}
            disabled={disabled}
            aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
            {...props}
        >
            {children}
        </motion.button>
    )
}

export default NeoButton
