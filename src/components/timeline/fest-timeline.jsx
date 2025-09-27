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
          const elementHeight = rect.height;
          const visibleTop = Math.max(0, rect.top);
          const visibleBottom = Math.min(window.innerHeight, rect.bottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityPercent = (visibleHeight / elementHeight) * 100;

          if (visibilityPercent > 80) {
            section.classList.add("focused-event");
          } else if (visibilityPercent < 20) {
            section.classList.remove("focused-event");
          }
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
          className="mb-8 text-4xl md:text-7xl bg-gradient-to-r from-[#FF7B02] to-[#FC4C05] text-transparent bg-clip-text font-fluxbox"
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
            { date: "1–26 Oct 2025", time: "08:00PM - 08:00AM", event: "HackAura – Flagship Hackathon", venue: "CB-305", description: "24-hour coding marathon to build innovative solutions. Compete for prizes and network with experts." },
            { date: "26 Oct 2025", time: "09:00AM - 12:00PM", event: "Code-a-Thon – DSA Coding", venue: "CB Computer Labs", description: "Competitive programming contest focusing on data structures and algorithms under time constraints." },
            { date: "26 Oct 2025", time: "01:30PM - 03:00PM", event: "MindMaze – Technical Quiz", venue: "CB G09 & G20", description: "Fast-paced quiz competition covering programming, electronics, and emerging technologies." },
            { date: "26 Oct 2025", time: "03:00PM - 05:00PM", event: "Startup Pitch", venue: "CB G09 & G20", description: "Present startup ideas to investors and mentors for feedback and potential funding." },
            { date: "27 Oct 2025", time: "09:00AM - 11:00PM", event: "Capture the Flag (CTF)", venue: "CB Computer Labs", description: "Cybersecurity challenge to find hidden flags and solve complex security puzzles." },
            { date: "2–27 Oct 2025", time: "08:00PM - 08:00AM", event: "ML HackAura", venue: "CB-305", description: "Machine learning hackathon to build AI models and applications with cutting-edge techniques." },
            { date: "27 Oct 2025", time: "02:00PM - 05:00PM", event: "ArenaX – Gaming Arena", venue: "CB Computer Labs", description: "Showcase gaming skills in various esports titles with exciting prizes." },
            { date: "27 Oct 2025", time: "05:30PM - 08:00PM", event: "VITAURA Talent Night", venue: "AB2 Auditorium", description: "Evening of entertainment with music, dance, comedy, and student performances." },
          ].map((event, index) => (
            <div
              key={index}
              className="timeline__section"
              ref={(el) => (sectionsRef.current[index] = el)}
            >
              <div className="timeline__section__bead"></div>
              <div className="timeline__section__content">
                <div className="event-header">
                  <h2 className="event-date">
                    {event.date}
                  </h2>
                  <h3 className="event-time">
                    {event.time}
                  </h3>
                </div>
                <div className="event-body">
                  <h4 className="event-title">
                    {event.event}
                  </h4>
                  <p className="event-venue">
                    📍 {event.venue}
                  </p>
                  <p className="event-description">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
