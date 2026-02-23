// Framer Motion animation configuration
export const animationConfig = {
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    },

    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    },

    slideInLeft: {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    },

    slideInRight: {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    },

    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    },

    transition: {
        default: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
        smooth: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        quick: { duration: 0.2, ease: 'easeOut' }
    }
}
