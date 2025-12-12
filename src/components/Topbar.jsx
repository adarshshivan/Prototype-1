import React from 'react';
import { Plus, Bell, Monitor, Moon } from 'lucide-react';

const Topbar = () => {
    return (
        <header className="topbar">
            <div className="topbar-left">
                {/* Mobile menu toggle could go here */}
            </div>

            <div className="topbar-right">
                <button className="btn btn-primary">
                    <Plus size={16} />
                    <span>New Menu</span>
                </button>

                <div className="topbar-divider"></div>

                <div className="topbar-actions">
                    <button className="icon-btn">
                        <Monitor size={20} />
                    </button>
                    <button className="icon-btn">
                        <Bell size={20} />
                    </button>
                    <div className="user-avatar">
                        <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
