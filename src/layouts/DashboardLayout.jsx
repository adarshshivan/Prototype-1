import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { motion } from 'framer-motion';

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-wrapper">
                <Topbar />
                <motion.main
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="main-content-area"
                >
                    {children}
                </motion.main>
            </div>
        </div>
    );
};

export default DashboardLayout;
