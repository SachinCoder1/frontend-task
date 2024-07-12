"use client";

import React, { useState } from "react";
import Tabs from "@/components/ui/Tabs";

const Main: React.FC = () => {
  const [tabValue, setTabValue] = useState("deposit");
  const tabs = [
    { text: "Deposit", value: "deposit" },
    { text: "Borrow", value: "borrow" },
    { text: "Withdraw", value: "withdraw" },
    { text: "Repay", value: "repay" },
  ];

  const handleTabChange = (value: string) => {
    console.log("Selected Tab:", value);
    setTabValue(value);
  };

  return (
    <div className="p-4">
      <Tabs tabs={tabs} onTabChange={handleTabChange} />
      {tabValue === "deposit" && <div>deposit</div>}
      {tabValue === "borrow" && <div>borrow</div>}
      {tabValue === "withdraw" && <div>withdraw</div>}
      {tabValue === "repay" && <div>repay</div>}
    </div>
  );
};

export default Main;
