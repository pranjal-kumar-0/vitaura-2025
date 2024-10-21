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
    <div className="hidden min-h-screen md:min-h-[0] md:relative md:flex md:flex-col md:max-w-[90rem] md:mx-auto md:w-full md:mb-[1000px] lg:mb-[700px] md:items-center md:justify-center md:font-spacemono">
      <div>
        <h1 className="bg-gradient-to-r from-[#F50062] to-[#b700ba] inline-block text-transparent bg-clip-text text-5xl sm:text-8xl font-fluxbox mb-6">
          Organising Committee
        </h1>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}
