// APRComponent.tsx
import Image from "next/image";
import React from "react";

type APRItem = {
  icon: string;
  label: string;
  value: string;
  bgColor?: string;
};

type APRProps = {
  healthFactor: string;
  items: APRItem[];
};

const APR: React.FC<APRProps> = ({ healthFactor, items }) => {
  return (
    <div className="w-full p-4">
      <div className="flex justify-between mb-4">
        <span className="font-medium">Health Factor</span>
        <span>{healthFactor}</span>
      </div>
      {items.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between items-center p-4 rounded-lg ${
            item.bgColor ? item.bgColor : "bg-gray-100"
          } mb-2`}
        >
          <div className="flex items-center space-x-2">
            {item.icon && (
              <Image width={16} height={16} src={item.icon} alt={item.label} />
            )}
            <span>{item.label}</span>
          </div>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default APR;
