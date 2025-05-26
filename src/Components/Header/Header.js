import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-left">
                <img src="/images/logo2.png" alt="Sarrathi Logo" className="hero-logo" />
                <div className="header-text">
                    <h1 className="company-name">Sarrathi Construction</h1>
                    <div className="heading-underline"></div>
                    <h3>Arts of Construction</h3>
                    <h3>30+ Years of Experiences</h3>
                </div>
            </div>

            <nav className="header-right">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
