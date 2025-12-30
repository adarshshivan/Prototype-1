import React from 'react';
import { motion } from 'framer-motion';

const GlassChart = () => {
    // Simple cubic bezier curve data for a smooth chart look
    const pathData = "M0,100 C20,100 40,60 60,60 C80,60 100,80 120,80 C140,80 160,30 180,30 C200,30 220,50 240,50 C260,50 280,10 300,10";

    return (
        <div style={{ width: '100%', height: '120px', position: 'relative', overflow: 'hidden' }}>
            <svg viewBox="0 0 300 120" style={{ width: '100%', height: '100%' }}>
                <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Filled Area */}
                <motion.path
                    d={`${pathData} L300,120 L0,120 Z`}
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Line Stroke */}
                <motion.path
                    d={pathData}
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Interactive Dots using motion */}
                {[60, 180, 300].map((cx, i) => (
                    <motion.circle
                        key={i}
                        cx={cx}
                        cy={i === 0 ? 60 : i === 1 ? 30 : 10}
                        r="4"
                        fill="#fff"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + (i * 0.2), type: "spring" }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default GlassChart;
