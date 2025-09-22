import React from "react";
import { Tabs } from "../acertui/ui/tabs";
import Convenor2025 from "./convenor2025";
import Patrons2025 from "./patron2025";
import FacultyCoordinator2025 from "./faculty2025";
import Tech2025 from "./tech2025";
import CoPatron2025 from "./co-patron2025";

const RoleTabs2025 = () => {
  const tabs = [
    {
      title: "Patron",
      value: "Patron",
      content: <Patrons2025 />,
    },
    {
      title: "Co-Patron",
      value: "Co-Patron",
      content: <CoPatron2025 />,
    },
    {
      title: "Faculty Coordinator",
      value: "Faculty Coordinators",
      content: <FacultyCoordinator2025 />,
    },
    {
      title: "Convener",
      value: "Convener",
      content: <Convenor2025 />,
    },
    {
      title: "Technical Team",
      value: "Tech",
      content: <Tech2025 />,
    },
  ];

  return <Tabs tabs={tabs} containerClassName="justify-center" contentClassName="mt-4" layoutId="role-tabs" />;
};

export default RoleTabs2025;