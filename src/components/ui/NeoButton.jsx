import { motion } from 'framer-motion'

const NeoButton = ({ children, variant = 'primary', className = '', ...props }) => {
    const isPrimary = variant === 'primary'

    const baseStyles = "relative px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"

    const variants = {
        primary: {
            background: 'linear-gradient(135deg, var(--primary) 0%, #7b2cbf 100%)',
            color: 'white',
            boxShadow: '0 4px 15px var(--primary-glow)',
            border: '1px solid rgba(255,255,255,0.1)'
        },
        secondary: {
            background: 'rgba(148, 163, 184, 0.12)',
            color: 'var(--secondary)',
            boxShadow: 'none',
            border: '1px solid rgba(0, 245, 212, 0.3)'
        }
    }

    const selectedVariant = variants[variant] || variants.primary

    return (
        <motion.button
            whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${className}`}
            style={selectedVariant}
            {...props}
        >
            {/* Button Glow on Hover */}
            {isPrimary && (
                <motion.div
                    className="absolute inset-0 bg-white opacity-0"
                    whileHover={{ opacity: 0.1 }}
                />
            )}

            {children}
        </motion.button>
    )
}

export default NeoButton
