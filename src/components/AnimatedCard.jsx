import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, delay = 0, className = '', style = {} }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: [0.23, 1, 0.32, 1] // cubic-bezier
            }}
            whileHover={{
                y: -5,
                transition: { duration: 0.2 }
            }}
            className={`glass-panel ${className}`}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;
