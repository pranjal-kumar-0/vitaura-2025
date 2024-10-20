import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './footer.css'; // Ensure the CSS file path is correct
import logo from '../../images/finalfinal.png'; // Import your logo

const Footer = () => {
  return (
    <footer className="footer bg-black text-gray-400 py-10">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="footer-logo mb-4">
          <img src={logo} alt="VITAURA'24 Logo" /> {/* Use actual logo */}
        </div>

        {/* Social Media Links */}
        <div className="footer-social mb-4 flex space-x-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/vitap.vitaura/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="footer-contact mb-4 text-center">
          <p className="text-sm">Contact Us: <a href="mailto:contact@vitaura24.com" className="text-[#ff9500] hover:text-white">contact@vitaura24.com</a></p>
        </div>

        {/* Copyright Information */}
        <div className="footer-rights text-center text-sm mt-4">
          <p className="font-spacemono">© 2024 VITAURA-24. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
