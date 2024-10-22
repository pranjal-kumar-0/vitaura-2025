import React, { useState, useEffect } from "react";

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

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [targetDate]);

  return (
    <div className="text-center p-4 sm:p-6 md:p-8 lg:p-10">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-fluxbox 
                   bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent 
                   bg-clip-text mb-4"
      >
        Excitement Building:
      </h2>
      <div
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-spacemono 
                   bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent 
                   bg-clip-text mt-4"
      >
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </div>
    </div>
  );
};

export default CountdownTimer;
