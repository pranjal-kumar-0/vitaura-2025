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
      <h2 className="mb-8 text-7xl bg-gradient-to-r from-[#F50062] to-[#b700ba] text-transparent bg-clip-text font-fluxbox">Events</h2>

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
            <motion.div layoutId={`image-${card.title}-${id}`} className="aspect-[4/3] w-full">
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
    description: "Solve Challenges",
    title: "Hackaura",
    src: hackathon,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          Join us for a 12-hour hackathon where teams solve real-world challenges
          in Health, Cyber Security, Fintech, Industries, and Aerospace. Work with
          mentors to develop innovative solutions and compete in a fair, 2-level
          judged competition. Showcase your skills, collaborate with peers, and win
          exciting prizes! This is your chance to turn ideas into impactful tech solutions.
        </p>
      );
    },
  },

  {
    description: "Present your innovative startup ideas",
    title: "Founder's Pitch",
    src: founder,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          “Founder's Pitch” is an exciting competition where contestants are 
          assigned a company beforehand and must step into the shoes of a founder.
          They will face a series of questions and real-world scenarios designed to
          test their decision-making, problem-solving, and leadership skills across
          various business challenges. Contestants will be evaluated on their strategic
          thinking, adaptability, and overall approach to running the company.
        </p>
      );
    },
  },

  {
    description: "Join the challenge",
    title: "VITAURA Week Of Code",
    src: osc,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          The VITAURA Week of Code: Open Source Competition gives developers
          a chance to show their work on open-source projects. Participants
          present their projects, explain challenges they faced, and can choose
          to give a live demo. Judges score based on technical skill, creativity,
          teamwork, and overall contribution to the open-source community.
          The event celebrates collaboration in open-source development,
          with feedback provided and top projects awarded.
        </p>
      );
    },
  },

  {
    description: "Find the bugs",
    title: "Bug Bounty - Hunt",
    src: bug,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          The Bug Bounty Hunt will be a competition where participants review code,
          applications, or websites to identify errors, vulnerabilities, or logical bugs
          Participants will be challenged to find and report issues in a limited time,
          earning points based on the number and severity of bugs discovered.
        </p>
      );
    },
  },

  {
    description: "Show you gaming skills",
    title: "Gaming Arena",
    src: gaming,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          TGC Battlegrounds Tournament - Compete in BGMI, Valorant, Free Fire,
          and COD Mobile! Join the action, test your skills, and battle for glory!
        </p>
      );
    },
  },

  {
    description: "Pitch your startup ideas to investors",
    title: "Start-up Pitch",
    src: startup,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          Bring your innovative ideas to life at VITAURA's Start Up pitch!
          Prepare a concise pitch deck with a maximum of 6-7 slides that highlights
          your concept, business model, and market strategy. While a prototype
          is encouraged to showcase the feasibility of your solution, it is not mandatory.
          Impress the panel with your vision and get one step closer to turning your
          idea into reality.
        </p>
      );
    },
  },

  {
    description: "Test your cybersecurity skills",
    title: "Capture the Flag",
    src: ctf,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          Test your skills across domains like Cryptography, Networking,
          Web Exploitation, and more in this 3-hour competition.
          Solve 21 challenges, released hourly, and earn points based on difficulty.
          Teams of up to 3 members will compete, with a live leaderboard
          tracking the top performers. Show your expertise and claim victory!
        </p>
      );
    },
  },

  {
    description: "Code Optimization",
    title: "Opti-Byte",
    src: optibyte,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          The competition will consist of code optimization challenges,
          where participants are required to improve code efficiency,
          fix bugs, and enhance the architecture.
          The provided code may contain inaccuracies, poor structure
          or bugs, which participants are expected to resolve all the 
          problems in a span of 1.5 hours.
        </p>
      );
    },
  },

  {
    description: "A test of wit and intellect",
    title: "Mind Maze",
    src: mindmaze,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          Mind Maze is an exciting event designed to test participants'
          problem-solving and analytical skills through a variety of challenges.
          It features thought-provoking puzzles that require logical reasoning
          to piece together clues and reach a solution.
          Additionally, participants will tackle aptitude questions
          that assess general knowledge and reasoning abilities.
          The aptitude round will be conducted on HackerRank, offering a competitive
          platform to showcase problem-solving expertise. Join us in navigating
          this maze of engaging and skill-enhancing challenges!
        </p>
      );
    },
  },

  {
    description: "Get ready to get entertained",
    title: " Aurelia - Cultural Event",
    src: cultural,
    ctaText: "Register Now",
    ctaLink: "https://events.vitap.ac.in/e/vitaura-scope-internal-technical-symposium-1043f33d-0e33-4bdc-b44b-6110f483bf59",
    content: () => {
      return (
        <p style={{ textAlign: "left" }}>
          Aurelia is the ultimate stage at VITAURA'24 where raw talent
          meets electrifying performances! Whether you're a dancer with
          moves that mesmerize, a singer who hits every note, a rapper with
          rhymes that ignite, a dramatist who brings stories to life, or an
          artist of any other kind—this is your moment to step into
          the spotlight. From heart-pounding beats to soul-stirring performances,
          this event is all about embracing the diverse and vibrant talent within
          the VIT community. And it's not just about applause—it's about winning too!
          With a fantastic prize pool awaiting the top performers, the stakes are high,
          and the stage is set for unforgettable moments. So bring your passion,
          bring your energy, and get ready to leave the audience in awe at Aurelia!
        </p>
      );
    },
  },
  
];
