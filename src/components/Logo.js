import React from 'react';
import WGSLogo from './../images/WGSLogo.jpg';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
        <img src={WGSLogo} alt="Logo" className="logo-image"/>
    </div>
  );
};

export default Logo;