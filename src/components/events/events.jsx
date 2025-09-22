"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./use-outside-click";
import hackathon from "./events/Hackthon.png";
import founder from "./events/osc.png";
import osc from "./events/cyber security.png";
import bug from "./events/Founder pitch.png";
import gaming from "./events/Gaming.png";
import startup from "./events/Start up pitch.png";
import ctf from "./events/Capture the flag.png";
import optibyte from "./events/Opibyte.png";
import mindmaze from "./events/Mind Maze.png";
import cultural from "./events/Cultural.png";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <h2 className="mb-8 text-7xl bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text font-fluxbox">
        Events
      </h2>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                {/* Replaced next/image with a standard img tag */}
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-1 md:grid-cols-4 justify-items-center gap-4 mx-auto">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer max-w-[180px] mx-auto" // reduced max width
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="aspect-[4/3] w-full"
              >
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-full w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-sm" // reduced font size
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center text-sm" // reduced font size
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Solve real-world problems",
    title: "HackAura – Flagship Hackathon",
    src: hackathon,
    ctaText: "Register Now",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Workshop:</b> Intro to Hackathons & Problem Solving
        </p>
        <p>
          <b>Venue:</b> CB-305
        </p>
        <p>
          <b>Date:</b> 1–2 Nov 2025 (08:00 pm – 08:00 am)
        </p>
        <p>
          <b>Duration:</b> 12 Hrs | <b>Fees:</b> ₹149/- per team (Team of 4)
        </p>
        <p>
          Teams solve startup & social problems. Winning teams gain recognition,
          internship offers, and mentorship.
        </p>
        <p>
          <b>Why?</b> Real-world problem solving, innovation & startup culture.
        </p>
        <p>
          <b>Expected Outcome:</b> Learn to go from ideation to prototype.
          Problem statements from industry + incubated startups.
        </p>
        <p>
          <b>Expected Participants:</b> 100–200 teams
        </p>
      </div>
    ),
  },
  {
    description: "Competitive coding challenge",
    title: "Code-a-Thon – DSA Coding",
    src: osc,
    ctaText: "Register Now",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Workshop:</b> Cracking DSA & Competitive Programming Basics
        </p>
        <p>
          <b>Venue:</b> CB Computer Labs
        </p>
        <p>
          <b>Date:</b> 2 Nov 2025 (09:00 am – 12:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team of 2)
        </p>
        <p>
          Logic + Data Structures contest for both freshers & advanced coders.
        </p>
        <p>
          <b>Expected Outcome:</b> Problem-solving speed, placement readiness
        </p>
        <p>
          <b>Expected Participants:</b> 80–100 students
        </p>
      </div>
    ),
  },
  {
    description: "Tech trivia and puzzles",
    title: "MindMaze – Technical Quiz",
    src: mindmaze,
    ctaText: "Register Now",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Workshop:</b> Fun with Tech Trivia
        </p>
        <p>
          <b>Venue:</b> CB G09 & G20
        </p>
        <p>
          <b>Date:</b> 2 Nov 2025 (01:30 pm – 03:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team of 2)
        </p>
        <p>Quiz on CS, tech trends, puzzles & problem-solving.</p>
        <p>
          <b>Outcome:</b> Builds awareness, quick thinking, and teamwork.
        </p>
        <p>
          <b>Expected Participants:</b> 80–100 students
        </p>
      </div>
    ),
  },
  {
    description: "Pitch your ideas like a founder",
    title: "Startup Pitch",
    src: startup,
    ctaText: "Register Now",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Workshop:</b> How to Pitch Like a Founder
        </p>
        <p>
          <b>Venue:</b> CB G09 & G20
        </p>
        <p>
          <b>Date:</b> 2 Nov 2025 (03:00 pm – 05:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team of 2)
        </p>
        <p>
          Pitch startup ideas before a jury; chance for mentorship + incubation.
        </p>
        <p>
          <b>Outcome:</b> Learn pitching, validation, communication skills.
        </p>
        <p>
          <b>Expected Participants:</b> 40–50 teams
        </p>
      </div>
    ),
  },
  {
    description: "Cybersecurity CTF challenge",
    title: "Capture the Flag (CTF)",
    src: ctf,
    ctaText: "Register Now",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Workshop:</b> Intro to Cybersecurity & CTF Basics
        </p>
        <p>
          <b>Venue:</b> CB Computer Labs
        </p>
        <p>
          <b>Date:</b> 3 Nov 2025 (09:00 am – 11:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team of 2)
        </p>
        <p>Solve real security puzzles, exploit vulns & defend systems.</p>
        <p>
          <b>Outcome:</b> Learn ethical hacking, vulnerability analysis.
        </p>
        <p>
          <b>Expected Participants:</b> 80–100 students
        </p>
      </div>
    ),
  },
  {
    description: "Hands-on AI & ML Hackathon",
    title: "ML HackAura",
    src: optibyte,
    ctaText: "Register Now",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Workshop:</b> ML in Action – Data to Deployment
        </p>
        <p>
          <b>Venue:</b> CB-305
        </p>
        <p>
          <b>Date:</b> 2–3 Nov 2025 (08:00 pm – 08:00 am)
        </p>
        <p>
          <b>Fees:</b> ₹149/- per team (Team Size: 1–2)
        </p>
        <p>
          Build ML models for real-world use cases: health, finance,
          sustainability.
        </p>
        <p>
          <b>Outcome:</b> Learn dataset handling, model building, ML deployment.
        </p>
        <p>
          <b>Expected Participants:</b> 80–100 students
        </p>
      </div>
    ),
  },
  {
    description: "Gaming competition",
    title: "ArenaX – Gaming Arena",
    src: gaming,
    ctaText: "Register Now",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Venue:</b> CB Computer Labs
        </p>
        <p>
          <b>Date:</b> 3 Nov 2025 (02:00 pm – 05:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team 2)
        </p>
        <p>Games: BGMI, Valorant, FIFA, COD. With live leaderboard.</p>
        <p>
          <b>Outcome:</b> Teamwork, fast decision-making, competitiveness.
        </p>
        <p>
          <b>Expected Participants:</b> 120–150 students
        </p>
      </div>
    ),
  },
  {
    description: "Cultural evening showcase",
    title: "VITAURA Talent Night",
    src: cultural,
    ctaText: "Join Us",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Venue:</b> AB2 Auditorium
        </p>
        <p>
          <b>Date:</b> 3 Nov 2025 (05:30 pm – 08:00 pm)
        </p>
        <p>Showcase your talent in music, dance, stand-up, rap, or drama!</p>
        <p>
          <b>Why?</b> Adds a cultural & community spirit to VITAURA.
        </p>
        <p>
          <b>Expected Outcome:</b> Student bonding, creativity & inclusivity.
        </p>
        <p>
          <b>Expected Participants:</b> 80–100 students
        </p>
      </div>
    ),
  },
];
