import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/lakes">Lakes</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/rates">Rates</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;