"use client";

import React, { useState } from "react";
import { Button } from "./Button";

type Tab = {
  text: string;
  value: string;
};

type TabsProps = {
  tabs: Tab[];
  onTabChange: (value: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  const handleTabClick = (value: string) => {
    setSelectedTab(value);
    onTabChange(value);
  };

  return (
    <div className="flex gap-x-4 bg-secondary py-1 px-1 rounded-2xl w-fit">
      {tabs.map((tab) => (
        <Button
          variant={"outline"}
          key={tab.value}
          onClick={() => handleTabClick(tab.value)}
          className={`py-2 lg:px-12 px-4 rounded-2xl ${
            selectedTab === tab.value ? "bg-background shadow-md" : "bg-transparent border-none hover:text-black"
          }`}
        >
          {tab.text}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
