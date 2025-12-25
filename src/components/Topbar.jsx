import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Topbar = () => {
    return (
        <header className="topbar">
            {/* Search Bar Removed */}

            <div className="topbar-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <button className="icon-btn" style={{
                    position: 'relative',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#94a3b8'
                }}>
                    <Bell size={20} />
                    <span style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#f472b6',
                        border: '2px solid #0f172a'
                    }}></span>
                </button>

                <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                    <div className="avatar" style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #8b5cf6, #f472b6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '0.9rem'
                    }}>
                        JD
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
