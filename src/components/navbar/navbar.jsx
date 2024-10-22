import React from "react";
import img1 from "../../images/finalfinal.png";
import { Link } from "react-scroll"; // For scrolling within the page
import { Link as RouterLink } from "react-router-dom"; // For navigation between pages

const Navbar = () => {
  return (
    <header className="text-[#fff] body-font bg-black fixed bg-opacity-10 top-0 w-full z-[10000000] backdrop-blur-lg">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center z-[10000000] p-1">
        <img src={img1} alt="" className="w-[250px]" />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="mr-5 hover:bg-gradient-to-r hover:from-[#FF7B02] hover:to-[#FC4C05] hover:text-transparent hover:bg-clip-text hover:font-bold font-fluxbox cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="mr-5 hover:bg-gradient-to-r hover:from-[#FF7B02] hover:to-[#FC4C05] hover:text-transparent hover:bg-clip-text hover:font-bold font-fluxbox cursor-pointer"
          >
            Events
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="mr-5 hover:bg-gradient-to-r hover:from-[#FF7B02] hover:to-[#FC4C05] hover:text-transparent hover:bg-clip-text hover:font-bold font-fluxbox cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="mr-5 hover:bg-gradient-to-r hover:from-[#FF7B02] hover:to-[#FC4C05] hover:text-transparent hover:bg-clip-text hover:font-bold font-fluxbox cursor-pointer"
          >
            Contact
          </Link>
          {/* Changed Merchandise Link to RouterLink */}
          <RouterLink
            to="/merchandise"
            className="mr-5 hover:bg-gradient-to-r hover:from-[#FF7B02] hover:to-[#FC4C05] hover:text-transparent hover:bg-clip-text hover:font-bold font-fluxbox cursor-pointer"
          >
            Merchandise
          </RouterLink>
        </nav>
        <a
          href="https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gradient-to-r from-[#F50062] to-[#b700ba] border-0 py-2 px-4 focus:outline-none rounded-full text-white mt-4 md:mt-0 font-fluxbox text-[14px] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#F50062] hover:scale-105"
        >
          <span className="place-content-center">Register Now</span>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
