"use client";

import React, { useState } from "react";
import Tabs from "@/components/ui/Tabs";
import TabsContent from "./TabsContent";
import CryptoInput from "./CryptoInput";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store";
import APRItem from "./AprItem";
import APR from "./APR";
import { setInputValue } from "@/store/slices/leverageSlice";

const Right: React.FC = () => {
  const { currency, currencySrc, walletBalance } = useSelector(
    (state: RootState) => state.leverage
  );
  const dispatch = useAppDispatch();

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
    dispatch(setInputValue(value));
  };

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
            <APR />
          </TabsContent>
        </div>
      )}
      {tabValue === "borrow" && (
        <TabsContent
          title="1-Click Leverage"
          label="Increase the yield potential of your tokens with up to 4x leverage. This process borrows a user’s tokens and automatically deposits the borrowed amount, repeating these steps until your desired amount of leverage is acquired."
        >
          <CryptoInput
            symbol={currency}
            icon={currencySrc}
            balance={walletBalance}
            onChange={handleValueChange}
          />
          <APR />
        </TabsContent>
      )}
      {tabValue === "withdraw" && <div>withdraw</div>}
      {tabValue === "repay" && <div>repay</div>}
    </div>
  );
};

export default Right;
