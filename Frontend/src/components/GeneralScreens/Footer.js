import React from 'react';
import '../../Css/Footer.css'; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Bytes & Bites. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
