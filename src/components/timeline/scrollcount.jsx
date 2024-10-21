import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

  const counters = [
    { value: 10, label: "Events" },
    { value: 5000, label: "Registrations" },
    { value: 120000, label: "Prizes" },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center center",
        end: "+=150%",
        pin: true,
        scrub: 2,
        pinSpacing: true,
        markers: false, // Remove this line if you don't want to see ScrollTrigger markers
      },
    });

    const animationDuration = 5;
    const startDelay = 1;
    const endPause = 2;

    const customIncrement = (start, end, progress) => {
      return start + (end - start) * progress;
    };

    tl.addLabel("startCounters", `+=${startDelay}`);

    counters.forEach((counter, index) => {
      const duration = animationDuration;

      tl.to(
        counterRefs.current[index],
        {
          textContent: counter.value,
          duration: duration,
          snap: { textContent: 1 },
          ease: "none",
          onUpdate: function () {
            const targetValue = counter.value;
            const newValue = customIncrement(0, targetValue, this.progress());

            counterRefs.current[index].innerHTML = `
            <span class="whitespace-nowrap">${Math.ceil(
              newValue
            ).toLocaleString()}</span>
            <span class="ml-1 bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text">+</span>
          `;
          },
        },
        "startCounters"
      );
    });

    tl.addPause(`+=${endPause}`);

    tl.add(() => {
      ScrollTrigger.getById("counter-pin")?.kill(true);
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      className="font-spacemono text-white bg-black text-center py-20 min-h-screen flex flex-col justify-center"
      ref={sectionRef}
    >
      <h2 className="font-fluxbox bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Event Highlights
      </h2>
      <div className="flex flex-col sm:flex-row justify-around mt-8 sm:mt-12">
        {counters.map((counter, index) => (
          <div key={index} className="flex flex-col items-center mb-8 sm:mb-0">
            <span
              ref={(el) => (counterRefs.current[index] = el)}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold"
            >
              0
            </span>
            <p className="text-lg sm:text-xl mt-2">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollAnimation;
