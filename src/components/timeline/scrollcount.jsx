import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollAnimation = () => {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

  const counters = [
    { value: 10, label: "Events" },
    { value: 5000, label: "Registrations" },
    { value: 120000, label: "Prizes" },
  ];

  useEffect(() => {

    const tl = gsap.timeline();

    const animationDuration = 2.5;
    const startDelay = 0.3;
    const staggerDelay = 0.2; // Delay between each counter starting

    const customIncrement = (start, end, progress) => {
      return start + (end - start) * progress;
    };

    // Add initial entrance animation
    tl.addLabel("entrance", 0);

    // Make numbers scale in with bounce effect
    counters.forEach((counter, index) => {
      tl.fromTo(
        counterRefs.current[index].parentElement,
        {
          scale: 0,
          rotation: -10,
          opacity: 0
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "entrance"
      );
    });

    tl.addLabel("startCounters", `+=${startDelay}`);

    // Enhanced counter animations with stagger
    counters.forEach((counter, index) => {
      const delay = index * staggerDelay;

      // Add a quick scale pulse when counter starts
      tl.to(
        counterRefs.current[index].parentElement,
        {
          scale: 1.1,
          duration: 0.1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        },
        `startCounters+=${delay}`
      );

      // Main counting animation
      tl.to(
        counterRefs.current[index],
        {
          textContent: counter.value,
          duration: animationDuration,
          snap: { textContent: 1 },
          ease: "power2.out",
          onUpdate: function () {
            const targetValue = counter.value;
            const newValue = customIncrement(0, targetValue, this.progress());

            counterRefs.current[index].innerHTML = `
            <span class="whitespace-nowrap">${Math.ceil(
              newValue
            ).toLocaleString()}</span>
            <span class="-ml-2 bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text">+</span>
          `;
          },
          onComplete: () => {
            // Final celebration effect
            gsap.to(counterRefs.current[index].parentElement, {
              scale: 1.05,
              duration: 0.2,
              yoyo: true,
              repeat: 1,
              ease: "power2.inOut",
            });
          },
        },
        `startCounters+=${delay}`
      );
    });

    // No need for ScrollTrigger cleanup since we removed it
  }, []);

  return (
    <section
      className="font-spacemono text-white bg-black text-center py-20 min-h-screen flex flex-col justify-center relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#F50062]/20 to-[#b700ba]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#FF7B02]/20 to-[#FC4C05]/20 rounded-full blur-3xl"></div>

      <div className="mb-16 text-center relative z-10">
        {/* Center the heading */}
        <h1 className="font-fluxbox mb-0">
          <span className="bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text text-3xl lg:text-7xl md:text-5xl ">
            Event
          </span>
          <span className="text-3xl lg:text-8xl md:text-5xl"> </span>
          <span className="bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text text-3xl lg:text-7xl md:text-5xl "> Highlights
          </span>
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-around items-center mt-8 sm:mt-12 gap-8 sm:gap-4 relative z-10">
        {counters.map((counter, index) => (
          <div key={index} className="flex flex-col items-center mb-8 sm:mb-0 group">
            <div className="relative flex flex-col items-center">
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F50062]/10 to-[#b700ba]/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Number */}
              <span
                ref={(el) => (counterRefs.current[index] = el)}
                className="relative bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              >
                0
              </span>
            </div>
            
            {/* Label */}
            <p className="text-lg sm:text-xl mt-4 font-medium text-white/80 group-hover:text-white transition-colors duration-300">
              {counter.label}
            </p>
            
            {/* Decorative line */}
            <div className="w-16 h-1 bg-gradient-to-r from-[#F50062] to-[#b700ba] rounded-full mt-2 group-hover:w-24 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollAnimation;
