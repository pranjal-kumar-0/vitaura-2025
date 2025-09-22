import React from "react";
import Navbar from "./navbar/navbar";
// import InfoSection from './3_Info/infoSection';
import SponsorsSection from "./4_sponsors/sponsors";
import CountdownTimer from "./countdown/countdowntimer";
import ScrollAnimation from "./timeline/scrollcount";
import { MdArrowOutward } from "react-icons/md";
import Footer from "./footer/footer";
import TimeLine from "./timeline/fest-timeline";
import { TabsDemo } from "./organising/orgmain";
import video from "./video/video.mp4";
import { ExpandableCardDemo } from './events/events';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section 
      className="text-gray-400 body-font bg-black" 
      id="hero"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }} 
      viewport={{ once: true }}
    >
      <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center relative">
        <div className="flex flex-col items-center text-center mb-16 md:mb-0 md:w-1/2 md:text-left md:items-start lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16">
          <h1 className="title-font text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-4 font-medium text-white mt-14 md:mt-0">
            <span className="bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text font-spacemono">
              2025
            </span>
            <br className="inline-block" />
            <span className="bg-gradient-to-r from-[#F50062] to-[#b700ba] inline-block text-transparent bg-clip-text font-fluxbox">
              VITAURA
            </span>
            <br className="inline-block" />
            <div className="flex flex-col sm:flex-row items-center mt-4 group">
              {/* Left neon green side with the location icon and text */}
              <div className="transition bg-white flex items-center justify-center px-6 py-4 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none group-hover:bg-gradient-to-r group-hover:from-[#F50062] group-hover:to-[#b700ba] group-hover:text-white duration-1000 ease-in-out">
                <span className="text-black text-lg sm:text-xl font-bold font-spacemono group-hover:text-white">
                  VIT-AP University
                </span>
              </div>
              {/* Right white side with 'Coming Soon' text */}
              <div className="bg-gradient-to-r from-[#F50062] to-[#b700ba] text-white flex items-center justify-center px-[57px] py-2 md:px-6 md:py-[16px] rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none group-hover:bg-gradient-to-r group-hover:from-[#fff] group-hover:to-[#fff] group-hover:text-black transition duration-1000 ease-in-out">
                <span className="text-lg sm:text-xl font-bold font-spacemono">
                  2nd Nov'25
                </span>
              </div>
            </div>
          </h1>
          <p className="mb-8 leading-relaxed font-bold text-lg sm:text-xl font-spacemono">
            Join the Biggest Tech Fest ever at VIT-AP
          </p>
          <div className="flex justify-center">
            <a
              href="https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#ff9500] bg-black border-2 border-[#ff9500] py-2 px-6 sm:py-3 sm:px-6 md:py-4 md:px-8 focus:outline-none hover:bg-[#ff5900] hover:text-white hover:border-hotpink rounded text-lg sm:text-xl font-fluxbox font-bold transition duration-300 ease-in-out"
            >
              Register Now
              <MdArrowOutward className="ml-2" />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <video src={video} muted autoPlay loop className="w-full h-auto" />
        </div>
      </div>
    </motion.section>
  );
};

const LandingPageComponent = () => {
  const targetDate = new Date("2025-11-02T18:00:00");
  return (
    <div>
      <Navbar />
      <main>
        <div className="mt-10"></div>
        <section id="home">
          <HeroSection />
        </section>

        <CountdownTimer targetDate={targetDate} />

        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
          viewport={{ once: true }}
        >
          <ScrollAnimation />
        </motion.section>
        <motion.section 
          id="events"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} 
          viewport={{ once: true }}
        >
          <ExpandableCardDemo />
        </motion.section>
        {/* <NumbersSection /> */}
        <motion.section 
          id="timeline"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }} 
          viewport={{ once: true }}
        >
          <TimeLine />
        </motion.section>
        {/* <InfoSection /> */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }} 
          viewport={{ once: true }}
        >
          <TabsDemo />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }} 
          viewport={{ once: true }}
        >
          <SponsorsSection />
        </motion.div>
        <motion.footer 
          id="contact"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }} 
          viewport={{ once: true }}
        >
          <Footer />
        </motion.footer>
      </main>
    </div>
  );
};

export default LandingPageComponent;
