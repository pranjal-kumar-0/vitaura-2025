import React from "react";
import { Tabs } from "../acertui/ui/tabs";
import Convenor from "./convenor";
import Patrons from "./patron";
import Copatrons from "./copatron";

export function TabsDemo() {
  const tabs = [
    {
      title: "Patron",
      value: "Patron",
      content: <Patrons />,
    },
    {
      title: "Co Patron",
      value: "Co Patron",
      content: <Copatrons />,
    },
    {
      title: "Convenor",
      value: "Convenor",
      content: <Convenor />,
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-[90rem] mx-auto w-full mb-40 mt-20 items-start justify-start font-spacemono">
      <div className="w-full text-center mb-10">
        <h1 className="bg-gradient-to-r from-[#F50062] to-[#b700ba] inline-block text-transparent bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-fluxbox">
          Organising Committee
        </h1>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}
