import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hoverEffect = true, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
            whileHover={hoverEffect ? {
                y: -5,
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.3)'
            } : {}}
            className={`glass-panel rounded-2xl p-6 relative overflow-hidden group ${className}`}
        >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Border Glow */}
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    )
}

export default GlassCard
