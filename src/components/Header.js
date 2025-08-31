import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="UISEL PTE LTD" />
          <span className="logo-text">UISEL PTE Ltd</span>
        </Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/#services">Services <span className="dropdown-arrow">▼</span></Link>
        <Link to="/trades">Trades</Link>
        <Link to="/#contact">Contact us</Link>
      </nav>
      <div className="language">
        <span>🌐 Language</span> <span className="dropdown-arrow">▼</span>
      </div>
    </header>
  );
}

export default Header;