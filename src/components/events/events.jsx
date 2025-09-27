"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useOutsideClick } from "./use-outside-click";
import hackathon from "./events/Hackthon.png";
import osc from "./events/cyber security.png";
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
    <div className="min-h-screen bg-black py-12 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-7xl bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text font-fluxbox text-center"
      >
        Events
      </motion.h2>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.7 } }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 p-4 flex items-center justify-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.7 },
              }}
              whileHover={{ scale: 1.1, backgroundColor: "#ef4444", transition: { duration: 0.15, ease: "easeOut" } }}
              whileTap={{ scale: 0.9, transition: { duration: 0.15, ease: "easeOut" } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-black rounded-full h-8 w-8 shadow-lg border border-neutral-600 z-20"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full max-w-[550px] h-fit max-h-[85vh] flex flex-col bg-black rounded-3xl overflow-hidden shadow-2xl"
              style={{
                boxShadow: `0 0 0 2px ${
                  active.color.includes('indigo') ? '#6366f1' :
                  active.color.includes('green') ? '#10b981' :
                  active.color.includes('red') && active.color.includes('pink') ? '#ef4444' :
                  active.color.includes('orange') ? '#f97316' :
                  active.color.includes('cyan') ? '#06b6d4' :
                  active.color.includes('yellow') ? '#eab308' :
                  active.color.includes('pink') && active.color.includes('rose') ? '#ec4899' :
                  '#f50062'
                }, 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`
              }}
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className={`relative`}>
                {/* Replaced next/image with a standard img tag */}
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-40 sm:h-52 lg:h-52 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${active.color}`}></div>
              </motion.div>

              <div>
                <div className="flex flex-col items-center p-4 md:p-6">
                  <div className="text-center">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white text-lg md:text-xl mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-300 text-sm md:text-base mb-4"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.7 },
                    }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.15, ease: "easeOut" } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.15, ease: "easeOut" } }}
                  >
                    <Link
                      to="/coming-soon"
                      className={`inline-block px-4 md:px-6 py-2 md:py-3 text-sm rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r ${active.color} cursor-pointer text-center`}
                    >
                      {active.ctaText === "Join Us" ? "Join Us" : "Register Now"}
                    </Link>
                  </motion.div>
                </div>
                <div className="pt-4 relative px-4 md:px-6 pb-4 md:pb-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.7 },
                    }}
                    className="text-neutral-200 text-sm md:text-base lg:text-base h-auto max-h-[300px] pb-10 flex flex-col items-start gap-4 overflow-y-auto"
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
      <ul className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 mx-auto">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(245, 0, 98, 0.3), 0 10px 10px -5px rgba(183, 0, 186, 0.2)", transition: { duration: 0.15, ease: "easeOut" } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.15, ease: "easeOut" } }}
            className={`p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer max-w-[180px] mx-auto shadow-lg border-2 border-transparent bg-gradient-to-br ${card.color} p-[2px]`}
          >
            <div className="flex gap-4 flex-col w-full bg-black rounded-lg p-4">
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
                  className="font-medium text-white text-center text-sm" // reduced font size
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-300 text-center text-sm" // reduced font size
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
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
      className="h-4 w-4 text-white"
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
    color: "from-indigo-500 to-blue-600",
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
          <b>Date:</b> 25–26 Oct 2025 (08:00 pm – 08:00 am)
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
      </div>
    ),
  },
  {
    description: "Competitive coding challenge",
    title: "Code-a-Thon – DSA Coding",
    src: osc,
    color: "from-green-500 to-teal-600",
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
          <b>Date:</b> 26 Oct 2025 (09:00 am – 12:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team of 2)
        </p>
        <p>
          Logic + Data Structures contest for both freshers & advanced coders.
        </p>
      </div>
    ),
  },
  {
    description: "Tech trivia and puzzles",
    title: "MindMaze – Technical Quiz",
    src: mindmaze,
    color: "from-red-400 to-pink-500",
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
          <b>Date:</b> 26 Oct 2025 (01:30 pm – 03:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team of 2)
        </p>
        <p>Quiz on CS, tech trends, puzzles & problem-solving.</p>
      </div>
    ),
  },
  {
    description: "Pitch your ideas like a founder",
    title: "Startup Pitch",
    src: startup,
    color: "from-orange-500 to-red-600",
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
          <b>Date:</b> 26 Oct 2025 (03:00 pm – 05:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team of 2)
        </p>
        <p>
          Pitch startup ideas before a jury; chance for mentorship + incubation.
        </p>
      </div>
    ),
  },
  {
    description: "Cybersecurity CTF challenge",
    title: "Capture the Flag (CTF)",
    src: ctf,
    color: "from-red-500 to-pink-600",
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
          <b>Date:</b> 27 Oct 2025 (09:00 am – 11:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team of 2)
        </p>
        <p>Solve real security puzzles, exploit vulns & defend systems.</p>
      </div>
    ),
  },
  {
    description: "Hands-on AI & ML Hackathon",
    title: "ML HackAura",
    src: optibyte,
    color: "from-cyan-500 to-blue-600",
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
          <b>Date:</b> 2–27 Oct 2025 (08:00 pm – 08:00 am)
        </p>
        <p>
          <b>Fees:</b> ₹149/- per team (Team Size: 1–2)
        </p>
        <p>
          Build ML models for real-world use cases: health, finance,
          sustainability.
        </p>
      </div>
    ),
  },
  {
    description: "Gaming competition",
    title: "ArenaX – Gaming Arena",
    src: gaming,
    color: "from-yellow-500 to-orange-600",
    ctaText: "Register Now",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Venue:</b> CB Computer Labs
        </p>
        <p>
          <b>Date:</b> 27 Oct 2025 (02:00 pm – 05:00 pm)
        </p>
        <p>
          <b>Fees:</b> ₹99/- per person (Solo/Team 2)
        </p>
        <p>Games: BGMI, Valorant, FIFA, COD. With live leaderboard.</p>
      </div>
    ),
  },
  {
    description: "Cultural evening showcase",
    title: "VITAURA Talent Night",
    src: cultural,
    color: "from-pink-500 to-rose-600",
    ctaText: "Join Us",
    ctaLink:
      "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium",
    content: () => (
      <div style={{ textAlign: "left" }}>
        <p>
          <b>Venue:</b> AB2 Auditorium
        </p>
        <p>
          <b>Date:</b> 27 Oct 2025 (05:30 pm – 08:00 pm)
        </p>
        <p>Showcase your talent in music, dance, stand-up, rap, or drama!</p>
        <p>
          <b>Why?</b> Adds a cultural & community spirit to VITAURA.
        </p>
      </div>
    ),
  },
];
