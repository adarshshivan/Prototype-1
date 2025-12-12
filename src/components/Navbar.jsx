import React from 'react';
import '../App.css'; // Ensure we have access to styles if needed, though we'll likely style in App.css or a module

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>MyApp</h2>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
