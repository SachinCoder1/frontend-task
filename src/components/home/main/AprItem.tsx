// APRItem.tsx
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type APRItemProps = {
  iconSrc?: string;
  name: string;
  value: string;
  className?: string;
};

const APRItem: React.FC<APRItemProps> = ({
  iconSrc,
  name,
  value,
  className,
}) => {
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

export default APRItem;
