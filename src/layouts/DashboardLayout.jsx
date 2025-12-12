import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="main-wrapper">
                <Topbar />
                <main className="main-content-area">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
