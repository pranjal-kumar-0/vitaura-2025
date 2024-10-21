import React from "react";
import { Tabs } from "../acertui/ui/tabs";
import Convenor from "./convenor";
import Patrons from "./patron";

export function TabsDemo() {
  const tabs = [
    {
      title: "Patron",
      value: "Patron",
      content: <Patrons />,
    },
    {
      title: "Convenor",
      value: "Convenor",
      content: <Convenor />,
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-[90rem] mx-auto w-full mb-10  items-start justify-start  font-spacemono">
      <div>
        <h1 className="bg-gradient-to-r from-[#F50062] to-[#b700ba] inline-block text-transparent bg-clip-text text-8xl font-fluxbox mb-3">Organising Comitee</h1>
      </div>
      <Tabs tabs={tabs} />
      {/* mb-40 */}
    </div>
  );
}
