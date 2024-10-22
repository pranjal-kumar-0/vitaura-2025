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
            style={{
              fontSize: '2.75em',
              background: 'linear-gradient(to right, #F50062, #b700ba)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
            }}
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
            { date: "26th-27th October", time: "8:00PM - 8:00AM", event: "HackAura - Solve challenges overnight!", venue: "IIEC" },
            { date: "27th October", time: "10:00AM - 12:00PM", event: "Open Founder's Pitch - Present your innovative startup ideas.", venue: "CB-G09" },
            { date: "25th-27th October", time: "-", event: "Open Source", venue: "Online" },
            { date: "27th October", time: "10:00AM - 12:00PM", event: "Bug Bounty", venue: "CB-LABS" },
            { date: "27th October", time: "10:00AM - 4:00PM", event: "Gaming Arena - Show your gaming skills!", venue: "CB-LABS" },
            { date: "27th October", time: "2:00PM - 4:00PM", event: "Start-up Pitch - Pitch your startup ideas to investors.", venue: "Newton Hall" },
            { date: "27th October", time: "10:00AM - 11:00PM", event: "Capture The Flag - Test your cybersecurity skills!", venue: "IIEC" },
            { date: "27th October", time: "2:00PM - 4:00PM", event: "Optibyte - Programming challenge.", venue: "IIEC" },
            { date: "26th October", time: "6:00PM - 7:30PM", event: "Mind Maze - A test of wit and intellect.", venue: "CB-LABS" },
            { date: "27th October", time: "4:00PM - 7:30PM", event: "Cultural", venue: "AB2- Auditorium" },
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
