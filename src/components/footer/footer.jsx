import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import "./footer.css"; // Ensure the CSS file path is correct
import logo from "../../images/finalfinal.png"; // Import your logo

const Footer = () => {
  return (
    <footer className="mt-10 text-gray-200 body-font bg-stone-900">
      <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
        {/* Logo Only */}
        <a className="flex items-center md:justify-start justify-center">
          <img src={logo} alt="VITAURA'24 Logo" className="w-52" />{" "}
          {/* Ensuring aspect ratio */}
        </a>

        {/* Copyright Section */}
        <p className=" bg-gradient-to-r from-[#F50062] to-[#b700ba] font-bold text-transparent bg-clip-text text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-spacemono">
          VITAURA© 2025 —
          <a
            href="mailto:contact@vitaura24.com"
            className="bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text ml-1 font-spacemono"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@vitaura24.com
          </a>
        </p>

        {/* Social Media Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.linkedin.com/company/vitaura-24"
            className="text-gray-500 hover:text-gray-700"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/vitap.vitaura/"
            className="ml-3 text-gray-500 hover:text-gray-700"
          >
            <FaInstagram size={20} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
