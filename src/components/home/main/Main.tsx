"use client";

import React, { useState } from "react";
import Tabs from "@/components/ui/Tabs";
import TabsContent from "./TabsContent";
import CryptoInput from "./CryptoInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Main: React.FC = () => {
  const { currency, currencySrc, walletBalance } = useSelector(
    (state: RootState) => state.leverage
  );
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
    <div className="p-4 h-full">
      <Tabs tabs={tabs} onTabChange={handleTabChange} />
      {tabValue === "deposit" && (
        <div className="h-full">
          <TabsContent
            title="Deposit ETH"
            label="Enter your desired amount to deposit."
          >
            <CryptoInput
              symbol={currency}
              icon={currencySrc}
              balance={walletBalance}
              onChange={handleValueChange}
            />
          </TabsContent>
        </div>
      )}
      {tabValue === "borrow" && (
        <TabsContent
          title="Borrow ETH"
          label="Enter your desired amount to Borrow."
        >
          <CryptoInput
            symbol={currency}
            icon={currencySrc}
            balance={walletBalance}
            onChange={handleValueChange}
          />
        </TabsContent>
      )}
      {tabValue === "withdraw" && (
        <TabsContent
          title="Withdraw ETH"
          label="Enter your desired amount to withdraw."
        >
          <CryptoInput
            symbol={currency}
            icon={currencySrc}
            balance={walletBalance}
            onChange={handleValueChange}
          />
        </TabsContent>
      )}
      {tabValue === "repay" && <div>repay</div>}
    </div>
  );
};

export default Main;
