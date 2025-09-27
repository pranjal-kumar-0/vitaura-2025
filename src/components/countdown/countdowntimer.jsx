import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <motion.div
      className="text-center p-4 sm:p-6 md:p-8 lg:p-10 bg-black"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-fluxbox
                   bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent
                   bg-clip-text mb-8"
      >
        Excitement Building:
      </h2>

      <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col items-center mx-2 sm:mx-4">
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-spacemono
                       bg-gradient-to-r from-[#FFFF00] via-[#FFA500] to-[#FF6B35] text-transparent
                       bg-clip-text mb-2"
          >
            {String(timeLeft.days || 0).padStart(2, '0')}
          </div>
          <span className="text-lg sm:text-xl md:text-2xl text-white font-fluxbox uppercase tracking-wider">
            Days
          </span>
        </div>

        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-spacemono">
          :
        </span>

        <div className="flex flex-col items-center mx-2 sm:mx-4">
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-spacemono
                       bg-gradient-to-r from-[#FFFF00] via-[#FFA500] to-[#FF6B35] text-transparent
                       bg-clip-text mb-2"
          >
            {String(timeLeft.hours || 0).padStart(2, '0')}
          </div>
          <span className="text-lg sm:text-xl md:text-2xl text-white font-fluxbox uppercase tracking-wider">
            Hours
          </span>
        </div>

        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-spacemono">
          :
        </span>

        <div className="flex flex-col items-center mx-2 sm:mx-4">
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-spacemono
                       bg-gradient-to-r from-[#FFFF00] via-[#FFA500] to-[#FF6B35] text-transparent
                       bg-clip-text mb-2"
          >
            {String(timeLeft.minutes || 0).padStart(2, '0')}
          </div>
          <span className="text-lg sm:text-xl md:text-2xl text-white font-fluxbox uppercase tracking-wider">
            Minutes
          </span>
        </div>

        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-spacemono">
          :
        </span>

        <div className="flex flex-col items-center mx-2 sm:mx-4">
          <div
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-spacemono
                       bg-gradient-to-r from-[#FFFF00] via-[#FFA500] to-[#FF6B35] text-transparent
                       bg-clip-text mb-2"
          >
            {String(timeLeft.seconds || 0).padStart(2, '0')}
          </div>
          <span className="text-lg sm:text-xl md:text-2xl text-white font-fluxbox uppercase tracking-wider">
            Seconds
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;