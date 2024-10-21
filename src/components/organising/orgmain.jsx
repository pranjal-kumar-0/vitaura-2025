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

    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-[90rem] mx-auto w-full  items-start justify-start mb-40 font-spacemono">
      <Tabs tabs={tabs} />
    </div>
  );
}
