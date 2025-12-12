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
    Code
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
                <div className="logo-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                </div>
                <span className="logo-text">LeveledCV</span>
                <button className="sidebar-collapse-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <line x1="9" y1="3" x2="9" y2="21" />
                    </svg>
                </button>
            </div>

            <div className="sidebar-content">
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
