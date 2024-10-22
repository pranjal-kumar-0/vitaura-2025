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
    <div className="px-5 lg:px-0 min-h-screen md:min-h-[0] relative flex flex-col max-w-[90rem] mx-auto w-full items-center justify-center font-spacemono">
      <div>
        <h1 className="bg-gradient-to-r from-[#F50062] to-[#b700ba] inline-block text-transparent bg-clip-text text-6xl md:text-8xl font-fluxbox mb-6">
          Organising Committee
        </h1>
      </div>
      <Tabs tabs={tabs} />
    </div>
  );
}
