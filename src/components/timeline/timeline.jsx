import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const sectionRef = useRef(null);
  const counterRefs = useRef([]);

  const counters = [
    { value: 5, label: "Speakers", suffix: "+" },
    { value: 10, label: "Events", suffix: "+" },
    { value: 1000, label: "Attendees", suffix: "+" },
    { value: 150000, label: "Prizes", suffix: "" },
  ];

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "center center",
      end: "+=300%",
      pin: true,
      scrub: true,
      pinSpacing: true,
      onLeave: () => ScrollTrigger.refresh(),
    },
  });

  // Smooth easing settings
  const smoothEase = gsap.parseEase("power2.out"); // Experiment with different easing types like 'power2.out', 'expo.out', 'back.out(1.7)', etc.

  // Animation settings for fine-tuning
  const animationDuration = 5; // Increase for slower increments, decrease for faster increments
  const startDelay = 1.5; // Time before the counters start incrementing
  const endPause = 2; // How long to pause before releasing the pin

  // Delay before counters start incrementing
  tl.addLabel("startCounters", `+=${startDelay}`);

  // Counter Animation
  counters.forEach((counter, index) => {
    tl.to(
      counterRefs.current[index],
      {
        textContent: counter.value,
        duration: animationDuration,
        snap: { textContent: 1 },
        ease: smoothEase,
        onUpdate: () => {
          counterRefs.current[index].textContent = Math.ceil(
            counterRefs.current[index].textContent
          );
        },
      },
      "startCounters"
    );
  });

  // Pause after the last counter finishes
  tl.addPause(`+=${endPause}`);

  // Release pin
  tl.add(() => {
    ScrollTrigger.getById("counter-pin")?.kill(true);
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <section
      ref={sectionRef}
      style={{
        color: "#fff",
        backgroundColor: "#000", // Make background exactly black
        textAlign: "center",
        padding: "100px 0",
        minHeight: "100vh", // Ensure section takes full screen height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontSize: "4rem", marginBottom: "40px" }}>
        Event Highlights
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
        }}
      >
        {counters.map((counter, index) => (
          <div key={index}>
            <span
              ref={(el) => (counterRefs.current[index] = el)}
              style={{ fontSize: "6rem", display: "block" }} // Larger font size for emphasis
            >
              0
            </span>
            <p style={{ fontSize: "1.5rem" }}>
              {counter.label} {counter.suffix}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollAnimation;
