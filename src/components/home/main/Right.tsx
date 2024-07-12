"use client";

import React, { useState } from "react";
import Tabs from "@/components/ui/Tabs";
import TabsContent from "./TabsContent";
import CryptoInput from "./CryptoInput";

const Right: React.FC = () => {
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

  const handleValueChange = (value: number) => {
    console.log("Input value:", value);
  };

  return (
    <div className="p-4">
      <Tabs tabs={tabs} onTabChange={handleTabChange} />
      {tabValue === "deposit" && (
        <div>
          <TabsContent
            title="1-Click Leverage"
            label="Increase the yield potential of your tokens with up to 4x leverage. This process deposits a user’s tokens and automatically borrows against them, repeating these steps until your desired amount of leverage is acquired."
          >
            <CryptoInput
              symbol="ETH"
              icon={"/currencies/ETH.svg"}
              balance={5}
              onChange={handleValueChange}
            />
          </TabsContent>
        </div>
      )}
      {tabValue === "borrow" && <div>borrow</div>}
      {tabValue === "withdraw" && <div>withdraw</div>}
      {tabValue === "repay" && <div>repay</div>}
    </div>
  );
};

export default Right;
