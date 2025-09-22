import React from "react";
import { Tabs } from "../acertui/ui/tabs";
import Convenor from "./convenor";
import Patrons from "./patron";
import FacultyCoordinator from "./faculty";
import Tech from "./tech";
import CoPatron from "./co-patron";

const RoleTabs = () => {
  const tabs = [
    {
      title: "Patron",
      value: "Patron",
      content: <Patrons />,
    },
    {
      title: "Co-Patron",
      value: "Co-Patron",
      content: <CoPatron />,
    },
    {
      title: "Faculty Coordinator",
      value: "Faculty Coordinators",
      content: <FacultyCoordinator />,
    },
    {
      title: "Convener",
      value: "Convener",
      content: <Convenor />,
    },
    {
      title: "Technical Team",
      value: "Tech",
      content: <Tech />,
    },
  ];

  return <Tabs tabs={tabs} containerClassName="justify-center" contentClassName="mt-4" />;
};

export function TabsDemo() {
  const yearTabs = [
    {
      title: "2024",
      value: "2024",
      content: <RoleTabs />,
    },
    {
      title: "2025",
      value: "2025",
      content: <RoleTabs />,
    },
  ];

  return (
    <div className="px-5 lg:px-0 min-h-screen md:min-h-[0] relative flex flex-col max-w-[90rem] mx-auto w-full items-center justify-center font-spacemono">
      <div>
        <h1 className="bg-gradient-to-r from-[#F50062] to-[#b700ba] inline-block text-transparent bg-clip-text text-6xl md:text-7xl font-fluxbox mb-8">
          Organising Committee
        </h1>
      </div>
      <Tabs tabs={yearTabs} containerClassName="justify-center" contentClassName="mt-8" />
    </div>
  );
}
