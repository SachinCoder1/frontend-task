import React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

type APRItemProps = {
  iconSrc?: string;
  name: string;
  value: string;
  className?: string;
};

export const APRItem = ({ iconSrc, name, value, className }: APRItemProps) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center px-4 py-2 rounded-lg text-xs",
        className
      )}
    >
      <div className="flex items-center space-x-2">
        {iconSrc && <Image width={16} height={16} src={iconSrc} alt={name} />}
        <span>{name}</span>
      </div>
      <span className="font-semibold">{value}</span>
    </div>
  );
};

type Props = {};

const APR = (props: Props) => {
  return (
    <div className="pt-4">
      <APRItem name="Health Factor" value="0.00" />
      <APRItem
        iconSrc="/currencies/ETH.svg"
        name="RDNT APR"
        value="45.52%"
        className="bg-secondary"
      />
      <APRItem iconSrc="/currencies/ETH.svg" name="ETH APR" value="0%" />
      <APRItem name="Projected APR" value="0%" className="bg-secondary" />
    </div>
  );
};

export default APR;
