import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png' // Assuming styles are in a separate CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="UISEL PTE LTD" />
        <span className="logo-text">UISEL PTE Ltd</span>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#trades">Trades</a>
        <a href="#blog">Blogs</a>
        <a href="#contact">Contact us</a>
      </nav>
      <div className="language">
        <span>🌐 Language</span> <span className="dropdown-arrow">▼</span>
      </div>
    </header>
  );
}

export default Header;