import React, { useEffect, useRef } from "react";
import "./style.css";

const Timeline = () => {
  const timelineRef = useRef(null); // Reference to timeline
  const lineRef = useRef(null); // Reference to timeline line
  const sectionsRef = useRef([]); // References to all sections

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
        // Calculate the percentage of the timeline that is visible
        const timelineHeight = timeline.offsetHeight;
        const visiblePercentage = Math.min((dist / timelineHeight) * 100, 100);

        // Set the height of the line based on scroll
        line.style.height = `${visiblePercentage}%`;

        // Once the user scrolls past the entire timeline, stop increasing the line
        if (visiblePercentage >= 100) {
          full = true;
        }
      }

      // Show sections progressively as they come into view
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top + section.offsetHeight / 5 < targetY) {
          section.classList.add("show-me");
        }
      });
    }

    line.style.height = "0%"; // Initially set the line height to 0%
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div style={{ color: "aquamarine" }} className="overflow-x-hidden">
      <div className="timeline_container" ref={timelineRef}>
        <div className="timeline_top-section ">
          <h1
            style={{
              fontSize: '2.75em',
              background: 'linear-gradient(to right, #F50062, #b700ba)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'fluxbox, sans-serif'
            }}
          >
            Event Timeline
          </h1>
          <p
            style={{
              color: 'white',
              fontFamily: 'fluxbox, sans-serif'
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
            { date: "27th-28th October", time: "8PM - 8AM", event: "Hackathon - Solve challenges overnight!", venue: "IIEC" },
            { date: "28th October", time: "9AM - 1PM", event: "Founders Pitch - Present your innovative startup ideas.", venue: "IIEC Cabin" },
            { date: "28th October", time: "10:30AM - 1:30PM", event: "CTF - Test your cybersecurity skills!", venue: "IIEC Cabin" },
            { date: "28th October", time: "11AM - 1PM", event: "Mind Maze - A test of wit and intellect.", venue: "GO2, AB1" },
            { date: "28th October", time: "2PM - 4PM", event: "Start-up Pitch - Pitch your startup ideas to investors.", venue: "IIEC Cabin" },
            { date: "28th October", time: "2PM - 4PM", event: "BBH - Battle of Business Hustlers.", venue: "GO2, AB1" },
            { date: "28th October", time: "2PM - 7PM", event: "Gaming Arena - Show your gaming skills!", venue: "GO2, AB1" },
            { date: "28th October", time: "4:30PM - 7PM", event: "Optibyte - Programming challenge.", venue: "GO2, AB1" },
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
                    fontFamily: 'spacemono, monospace', // Font for date
                    background: 'linear-gradient(to right, #F50062, #b700ba)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  {event.date}
                </h2>
                <h3
                  style={{
                    fontSize: '1.2em',
                    fontFamily: 'spacemono, monospace', // Font for time
                    background: 'linear-gradient(to right, #F50062, #b700ba)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  {event.time}
                </h3>
                <p
                  style={{
                    color: 'white',
                    fontFamily: 'fluxbox, sans-serif', // Font for text
                    display: 'inline' // Keep event.event and venue in a single line
                  }}
                >
                  {event.event} <br/>Venue: {event.venue}
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
