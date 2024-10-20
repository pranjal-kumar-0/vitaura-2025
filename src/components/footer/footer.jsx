import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import './footer.css'; // Ensure the CSS file path is correct
import logo from '../../images/finalfinal.png'; // Import your logo
import ecell from '../../images/logo-for-ec-without-background-white-1@2x.png'
import uniquest from '../../images/uniquest-removebg-preview.png'


const Footer = () => {
  return (
    <footer className="footer bg-black text-gray-400 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">

        {/* Left Column */}
        <div className="footer-column mb-2 md:mb-0">
          <div className="l-logo mb-4">
            <img src={uniquest} alt="Uniquest" className='uniquest-logo'/> {/* Add class "uniquest-logo" */}
          </div>
          <div className="footer-social mb-4 flex space-x-4 text-left">
            <a href="https://www.linkedin.com/company/uni-quest/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/uniquest_vitap/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={30} />
            </a>
          </div>
          <div className="footer-contact mb-4 text-left">
            <p className="text-sm">Contact Us: <a href="mailto:uniquest.club@vitap.ac.in" className="text-[#ff9500] hover:text-white">uniquest.club@vitap.ac.in</a></p>
          </div>
          <div className="footer-rights text-left text-sm">
            <p className="font-spacemono">© 2024 Uniquest Club VIT-AP. All Rights Reserved.</p>
          </div>
        </div>

        {/* Center Column */}
        <div className="footer-column mb-8 md:mb-0">
          <div className="footer-logo mb-8">
            <img src={logo} alt="VITAURA'24 Logo" /> {/* Use actual logo */}
          </div>
          <div className="footer-social mb-4 flex space-x-4 text-left">
            <a href="https://www.linkedin.com/company/vitaura-24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/vitap.vitaura/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={30} />
            </a>
          </div>
          <div className="footer-contact mb-4 text-left">
            <p className="text-sm">Contact Us: <a href="mailto:contact@vitaura24.com" className="text-[#ff9500] hover:text-white">contact@vitaura24.com</a></p>
          </div>
          <div className="footer-rights text-left text-sm">
            <p className="font-spacemono">© 2024 VITAURA-24. All Rights Reserved.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-column mb-8 md:mb-0">
          <div className="r-logo mb-6">
            <img src={ecell} alt="ECell Logo" className='ecell-logo'/> {/* Add class "ecell-logo" */}
          </div>
          <div className="footer-social mb-4 flex space-x-4 text-left">
            <a href="https://www.linkedin.com/company/entrepreneurship-club-vit-ap/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/entrepreneurshipclub_vitap/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram size={30} />
            </a>
          </div>
          <div className="footer-contact mb-4 text-left">
            <p className="text-sm">Contact Us:</p>
            <p className="text-sm"><a href="mailto:entrepreneurship.club@vitap.ac.in" className="text-[#ff9500] hover:text-white">entrepreneurship.club@vitap.ac.in</a></p>
          </div>
          <div className="footer-rights text-left text-sm">
            <p className="font-spacemono">© 2024 Entrepreneurship Club VIT-AP.</p>
            <p className="font-spacemono">All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
