import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <p>Copyright &copy; {currentYear} Wilson's Guide Service. All rights reserved.</p>
    </footer>
  );
};

export default Footer;