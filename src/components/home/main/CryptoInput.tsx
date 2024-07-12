// CryptoInput.tsx
import { WalletMinimalIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type CryptoInputProps = {
  symbol: string;
  icon: string;
  balance: number;
  onChange: (value: number) => void;
};

const CryptoInput: React.FC<CryptoInputProps> = ({
  symbol,
  icon,
  balance,
  onChange,
}) => {
  const [value, setValue] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue || 0);
    onChange(newValue || 0);
  };

  return (
    <div className="border rounded-lg px-4 pt-4 pb-6 w-full">
      <div className="flex items-center">
        <div className="flex flex-col items-start">
          <input
            type="text"
            value={value}
            onChange={handleInputChange}
            className="text-2xl font-semibold outline-none w-full"
            placeholder="0"
          />
          <span className="text-gray-400">${(value * 2000).toFixed(2)}</span>{" "}
        </div>
        <div className="flex items-center ml-auto space-x-2">
          <Image width={16} height={16} src={icon} alt={symbol} />
          <span className="font-medium">{symbol}</span>
        </div>
      </div>
      <div className="flex  justify-end items-center gap-x-2 text-purple-600 cursor-pointer hover:text-purple-700">
        <span>{balance}</span>
        <span className="text-xs">
          <WalletMinimalIcon className="text-purple-600 w-5 h-5" />
        </span>
      </div>
    </div>
  );
};

export default CryptoInput;
