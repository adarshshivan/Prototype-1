import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hoverEffect = true, delay = 0, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={hoverEffect ? {
                y: -4,
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
            } : {}}
            data-component="glass-card"
            className={`bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-100 dark:border-neutral-800/50 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
            {...props}
        >
            <div>
                {children}
            </div>
        </motion.div>
    )
}

export default GlassCard
