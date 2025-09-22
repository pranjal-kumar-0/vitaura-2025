import React, { useEffect, useRef } from "react";
import "./style.css";

const Timeline = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const line = lineRef.current;
    const timeline = timelineRef.current;
    const sections = sectionsRef.current;
    let full = false;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler() {
      const timelineRect = timeline.getBoundingClientRect();
      const dist = targetY - timelineRect.top;

      if (!full) {
        const timelineHeight = timeline.offsetHeight;
        const visiblePercentage = Math.min((dist / timelineHeight) * 100, 100);
        line.style.height = `${visiblePercentage}%`;
        if (visiblePercentage >= 100) {
          full = true;
        }
      }

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top + section.offsetHeight / 5 < targetY) {
          section.classList.add("show-me");
        }
      });
    }

    line.style.height = "0%";
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div style={{ color: "aquamarine" }} className="overflow-x-hidden">
      <div className="timeline_container" ref={timelineRef}>
        <div className="timeline_top-section">
        <h1
          className="mb-8 text-7xl bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text font-fluxbox"
        >
          Event Timeline
        </h1>

          <p
            style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '1.2em',
            }}
          >
            Explore the exciting events lined up for the Tech Fest! Below is a
            timeline that includes key competitions and challenges happening
            across various venues.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline__line" ref={lineRef}></div>

          {[
            { date: "1–2 Nov 2025", time: "08:00PM - 08:00AM", event: "HackAura – Flagship Hackathon", venue: "CB-305" },
            { date: "2 Nov 2025", time: "09:00AM - 12:00PM", event: "Code-a-Thon – DSA Coding", venue: "CB Computer Labs" },
            { date: "2 Nov 2025", time: "01:30PM - 03:00PM", event: "MindMaze – Technical Quiz", venue: "CB G09 & G20" },
            { date: "2 Nov 2025", time: "03:00PM - 05:00PM", event: "Startup Pitch", venue: "CB G09 & G20" },
            { date: "3 Nov 2025", time: "09:00AM - 11:00PM", event: "Capture the Flag (CTF)", venue: "CB Computer Labs" },
            { date: "2–3 Nov 2025", time: "08:00PM - 08:00AM", event: "ML HackAura", venue: "CB-305" },
            { date: "3 Nov 2025", time: "02:00PM - 05:00PM", event: "ArenaX – Gaming Arena", venue: "CB Computer Labs" },
            { date: "3 Nov 2025", time: "05:30PM - 08:00PM", event: "VITAURA Talent Night", venue: "AB2 Auditorium" },
          ].map((event, index) => (
            <div
              key={index}
              className="timeline__section"
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              <div className="timeline__section__bead"></div>
              <div className="timeline__section__content">
                <h2
                  style={{
                    fontSize: '1.5em',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '500',
                    background: 'linear-gradient(to right, #F50062, #b700ba)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {event.date}
                </h2>
                <h3
                  style={{
                    fontSize: '1.2em',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '400',
                    background: 'linear-gradient(to right, #F50062, #b700ba)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {event.time}
                </h3>
                <p
                  style={{
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.1em',
                  }}
                >
                  <strong>{event.event}</strong>
                </p>
                <p
                  style={{
                    color: 'lightgray',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1em',
                    fontStyle: 'italic',
                  }}
                >
                  Venue: {event.venue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
