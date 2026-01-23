import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hoverEffect = true, delay = 0, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
            whileHover={hoverEffect ? {
                y: -2
            } : {}}
            className={`bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 transition-colors duration-200 ${className}`}
            {...props}
        >
            <div>
                {children}
            </div>
        </motion.div>
    )
}

export default GlassCard
