import React, { useState, useEffect } from 'react';

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
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [targetDate]);

  return (
    <div className="text-center">
      <h2
        style={{
          fontSize: '5.5em', // Increased heading size
          background: 'linear-gradient(to right, #FF7B02, #FC4C05)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontFamily: 'fluxbox'
        }}
      >
        Time left for the event
      </h2>
      <div
        style={{
          fontSize: '5.5em', // Increased counter size
          background: 'linear-gradient(to right, #F50062, #b700ba)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontFamily: 'spacemono', // Font for numbers
        }}
        className="mt-4"
      >
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
    </div>
  );
};

export default CountdownTimer;
