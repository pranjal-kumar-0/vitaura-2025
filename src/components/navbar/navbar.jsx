import React from 'react';
import img1 from '../../images/finalfinal.png'

const Navbar = () => {
  return (
    <header className="text-[#fff] body-font bg-black fixed bg-opacity-10 top-0 w-full z-[10000000] backdrop-blur-lg">
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center z-[10000000] p-1">
        <img src={img1} alt="" className='w-[250px]'/>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 hover:text-[#17FB8D] hover:font-bold font-fluxbox">Home</a>
          <a href="#" className="mr-5 hover:text-[#17FB8D] hover:font-bold font-fluxbox">Events</a>
          <a href="#" className="mr-5 hover:text-[#17FB8D] hover:font-bold font-fluxbox">About</a>
          <a href="#" className="mr-5 hover:text-[#17FB8D] hover:font-bold font-fluxbox">Contact</a>
        </nav>
        <button className="inline-flex items-center bg-gradient-to-r from-[#F50062] to-[#b700ba] border-0 py-2 px-4 focus:outline-none rounded-full text-white mt-4 md:mt-0 font-fluxbox text-[14px] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#F50062] hover:scale-105">
          <span className='place-content-center'>Register Now</span>
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
        </button>


      </div>
    </header>
  );
};

export default Navbar;
