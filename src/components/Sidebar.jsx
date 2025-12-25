import React from 'react';
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
import '../index.css';

const Sidebar = () => {
    const menuItems = [
        { label: 'Menu 1', icon: <LayoutDashboard size={20} />, active: true },
        { label: 'Menu 2', icon: <FileText size={20} /> },
        { label: 'Menu 3', icon: <Briefcase size={20} /> },
    ];

    const dataItems = [
        { label: 'Menu 4', icon: <User size={20} /> },
        { label: 'Menu 5', icon: <FileText size={20} /> },
        { label: 'Menu 6', icon: <Briefcase size={20} /> },
        { label: 'Menu 7', icon: <Files size={20} /> },
        { label: 'Menu 8', icon: <MessageSquare size={20} /> },
        { label: 'Menu 9', icon: <Code size={20} /> },
        { label: 'Menu 10', icon: <Settings size={20} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-icon text-primary">
                    <Wallet size={28} color="#8b5cf6" />
                </div>
                <span className="logo-text">Portfolio</span>
            </div>

            <div className="sidebar-content" style={{ flex: 1, overflowY: 'auto' }}>
                <div className="sidebar-section">
                    <h4 className="section-title">Main</h4>
                    <nav className="sidebar-nav">
                        {menuItems.map((item, index) => (
                            <a key={index} href="#" className={`nav-item ${item.active ? 'active' : ''}`}>
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="sidebar-section">
                    <h4 className="section-title">Your Data</h4>
                    <nav className="sidebar-nav">
                        {dataItems.map((item, index) => (
                            <a key={index} href="#" className="nav-item">
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="sidebar-footer">
                <a href="#" className="nav-item">
                    <span className="nav-icon"><HelpCircle size={20} /></span>
                    <span className="nav-label">Feedback</span>
                </a>
                <a href="#" className="nav-item">
                    <span className="nav-icon"><User size={20} /></span>
                    <span className="nav-label">Profile</span>
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
