import React from 'react';
import 'C:/Users/karth/OneDrive/Desktop/Mern-Blog-main/Frontend/src/Css/Footer.css'; 
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
