"use client";

import React, { useState } from "react";
import Tabs from "@/components/ui/Tabs";
import TabsContent from "./TabsContent";
import CryptoInput from "./CryptoInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import APR from "./APR";
import APRItem from "./AprItem";

const Right: React.FC = () => {
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

  const items = [
    {
      icon: "/currencies/ETH.svg",
      label: "RDNT APR",
      value: "45.54%",
      bgColor: "bg-gray-200",
    },
    {
      icon: "/currencies/ETH.svg",
      label: "ETH APR",
      value: "0%",
      bgColor: "bg-gray-100",
    },
    { icon: "", label: "Projected APR", value: "0%" },
  ];

  return (
    <div className="p-4 h-full">
      <Tabs tabs={tabs} onTabChange={handleTabChange} />
      {tabValue === "deposit" && (
        <div className="h-full">
          <TabsContent
            title="1-Click Leverage"
            label="Increase the yield potential of your tokens with up to 4x leverage. This process deposits a user’s tokens and automatically borrows against them, repeating these steps until your desired amount of leverage is acquired."
          >
            <CryptoInput
              symbol={currency}
              icon={currencySrc}
              balance={walletBalance}
              onChange={handleValueChange}
            />
            <div className="pt-4">

            <APRItem name="Health Factor" value="0.00" />
            <APRItem iconSrc="/currencies/ETH.svg" name="RDNT APR" value="45.52%" className="bg-secondary" />
            <APRItem iconSrc="/currencies/ETH.svg" name="ETH APR" value="0%" />
            <APRItem name="Projected APR" value="0%" className="bg-secondary" />
            </div>
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
