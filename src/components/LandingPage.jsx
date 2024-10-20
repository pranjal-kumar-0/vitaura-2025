import React from 'react';
import Navbar from './navbar/navbar';
// import InfoSection from './3_Info/infoSection';
import SponsorsSection from './4_sponsors/sponsors';
import CountdownTimer from './countdown/countdowntimer';
import ScrollAnimation from "./timeline/scrollcount";
import { MdArrowOutward } from "react-icons/md";
import Footer from "./footer/footer"
import TimeLine from "./timeline/fest-timeline"


const HeroSection = () => {
  return (
    <section className="text-gray-400 body-font bg-black">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center relative">
          <h1 className="title-font text-9xl lg:text-9xl mb-4 font-medium text-white">
            <span className="bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text font-spacemono">
              2024
            </span>
            <br className="inline-block" />
            <span className="bg-gradient-to-r from-[#F50062] to-[#b700ba] inline-block text-transparent bg-clip-text font-fluxbox">
              VITAURA
            </span>
            <br className="inline-block" />
            <div className="flex items-center mt-4 group">
              {/* Left neon green side with the location icon and text */}
              <div className="transition bg-white flex items-center justify-center px-6 py-4 rounded-l-lg  group-hover:bg-gradient-to-r group-hover:from-[#F50062] group-hover:to-[#b700ba] group-hover:text-white duration-1000 ease-in-out">
                <span className="text-black text-xl font-bold font-spacemono group-hover:text-white">
                  VIT-AP University
                </span>
              </div>
              {/* Right white side with 'Coming Soon' text */}
              <div className="bg-gradient-to-r from-[#F50062] to-[#b700ba] text-white flex items-center justify-center px-6 py-4 rounded-r-lg group-hover:bg-gradient-to-r group-hover:from-[#fff] group-hover:to-[#fff] group-hover:text-black transition duration-1000 ease-in-out">
                <span className="text-xl font-bold font-spacemono">
                  28th Oct'24
                </span>
              </div>
            </div>
          </h1>
          <p className="mb-8 leading-relaxed font-bold text-xl font-spacemono">
            Join the Biggest Tech Fest ever in VIT-AP
          </p>
          <div className="flex justify-center">
            <button className="inline-flex items-center text-[#ff9500] bg-black border-2 border-[#ff9500] py-2 px-6 lg:py-4 lg:px-8 focus:outline-none hover:bg-[#ff5900] hover:text-white hover:border-hotpink rounded lg:text-xl font-fluxbox font-bold transition duration-300 ease-in-out">
              Register Now
              <MdArrowOutward className="ml-2" />
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x820"
            width="720"
            height="820"
          />
        </div>
      </div>
    </section>
  );
};

const LandingPageComponent = () => {
  const targetDate = new Date('2024-10-28T08:00:00');
  return (
    <div>
      <Navbar />
      <main>
        <div className="mt-10"></div>
        <HeroSection />
        <CountdownTimer targetDate={targetDate} />
        <ScrollAnimation />
        {/* <NumbersSection /> */}
        <TimeLine />
        {/* <InfoSection /> */}
        <SponsorsSection />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPageComponent;
