import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
          <div className="horizontal-line"></div>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <div className="horizontal-line"></div>
          <li><Link to="/lakes" onClick={handleLinkClick}>Lakes</Link></li>
          <div className="horizontal-line"></div>
          <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
          <div className="horizontal-line"></div>
          <li><Link to="/rates" onClick={handleLinkClick}>Rates</Link></li>
          <div className="horizontal-line"></div>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
        {menuOpen && <div className="close-icon" onClick={toggleMenu}>✖</div>}
      </div>
    </nav>
  );
};

export default NavBar;