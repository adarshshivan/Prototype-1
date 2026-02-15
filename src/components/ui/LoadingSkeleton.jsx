import { motion } from 'framer-motion'

const LoadingSkeleton = ({ className = '', count = 1, variant = 'card' }) => {
    const variants = {
        card: 'w-full h-48 rounded-xl',
        text: 'w-full h-4 rounded',
        textShort: 'w-3/4 h-4 rounded',
        circle: 'w-12 h-12 rounded-full',
        button: 'w-24 h-10 rounded-lg'
    }

    const selectedVariant = variants[variant] || variants.card

    const shimmer = {
        initial: { backgroundPosition: '200% 0' },
        animate: { backgroundPosition: '-200% 0' },
        transition: { duration: 1.5, repeat: Infinity }
    }

    return (
        <div className="space-y-4">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    variants={shimmer}
                    initial="initial"
                    animate="animate"
                    className={`${selectedVariant} ${className} bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 bg-[length:200%_100%]`}
                />
            ))}
        </div>
    )
}

export default LoadingSkeleton
