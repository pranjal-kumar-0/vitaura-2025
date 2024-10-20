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
    { value: 150000, label: "Prizes" },
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
      },
    });

    const smoothEase = gsap.parseEase("power4.out");
    const animationDuration = 5; // Adjusted to balance timing for all counters
    const startDelay = 1;
    const endPause = 2;

    // Adjusted customIncrement function
    const customIncrement = (start, end, progress) => {
      return start + (end - start) * progress; // Use progress directly for consistent growth
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

            counterRefs.current[index].textContent = `${Math.ceil(
              newValue
            ).toLocaleString()}+`; // Format with commas
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
      className="font-spacemono"
      ref={sectionRef}
      style={{
        color: "#fff",
        backgroundColor: "#000",
        textAlign: "center",
        padding: "100px 0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2
        style={{ fontSize: "4rem", marginBottom: "40px" }}
        className="font-fluxbox"
      >
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
              style={{ fontSize: "6rem", display: "block" }}
            >
              0
            </span>
            <p style={{ fontSize: "1.5rem" }}>{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollAnimation;
