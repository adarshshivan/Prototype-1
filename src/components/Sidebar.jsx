import React, { useState } from 'react';
import {
    LayoutDashboard,
    FileText,
    Briefcase,
    User,
    Settings,
    HelpCircle,
    MessageSquare,
    Files,
    Code,
    Wallet
} from 'lucide-react';
import { motion } from 'framer-motion';
import '../index.css';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');

    const menuItems = [
        { label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { label: 'Projects', icon: <FileText size={20} /> },
        { label: 'Tasks', icon: <Briefcase size={20} /> },
    ];

    const dataItems = [
        { label: 'Clients', icon: <User size={20} /> },
        { label: 'Documents', icon: <FileText size={20} /> },
        { label: 'Reports', icon: <Briefcase size={20} /> },
        { label: 'Assets', icon: <Files size={20} /> },
        { label: 'Messages', icon: <MessageSquare size={20} /> },
        { label: 'Dev Tools', icon: <Code size={20} /> },
        { label: 'Settings', icon: <Settings size={20} /> },
    ];

    const NavItem = ({ item }) => {
        const isActive = activeItem === item.label;
        return (
            <motion.a
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveItem(item.label); }}
                className={`nav-item ${isActive ? 'active' : ''}`}
                whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.03)' }}
                whileTap={{ scale: 0.98 }}
                style={{ position: 'relative', overflow: 'hidden' }}
            >
                {isActive && (
                    <motion.div
                        layoutId="activePill"
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            right: 0,
                            background: 'var(--glass-highlight)',
                            borderRadius: 'inherit',
                            zIndex: -1
                        }}
                    />
                )}
                <span className="nav-icon" style={{ zIndex: 1 }}>{item.icon}</span>
                <span className="nav-label" style={{ zIndex: 1 }}>{item.label}</span>
            </motion.a>
        );
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <motion.div
                    className="logo-icon text-primary"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                    <Wallet size={28} color="#7c3aed" />
                </motion.div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="logo-text" style={{
                        background: 'var(--primary-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '1.5rem',
                        fontWeight: '800'
                    }}>
                        Portfolio
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>
                        DASHBOARD
                    </span>
                </div>
            </div>

            <div className="sidebar-content" style={{ flex: 1, overflowY: 'auto', paddingRight: '5px' }}>
                <div className="sidebar-section">
                    <h4 className="section-title">Main</h4>
                    <nav className="sidebar-nav">
                        {menuItems.map((item) => (
                            <NavItem key={item.label} item={item} />
                        ))}
                    </nav>
                </div>

                <div className="sidebar-section">
                    <h4 className="section-title">Workspace</h4>
                    <nav className="sidebar-nav">
                        {dataItems.map((item) => (
                            <NavItem key={item.label} item={item} />
                        ))}
                    </nav>
                </div>
            </div>

            <div className="sidebar-footer">
                <a href="#" className="nav-item">
                    <span className="nav-icon"><HelpCircle size={20} /></span>
                    <span className="nav-label">Help & Center</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="avatar" style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white' }}>JD</div>
                    <span className="nav-label">John Doe</span>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
