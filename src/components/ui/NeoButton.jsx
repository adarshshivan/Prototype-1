import { motion } from 'framer-motion'

const NeoButton = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "relative px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"

    const variants = {
        primary: "bg-black text-white hover:bg-neutral-900",
        secondary: "bg-neutral-100 text-black hover:bg-neutral-200"
    }

    const selectedVariant = variants[variant] || variants.primary

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${selectedVariant} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    )
}

export default NeoButton
