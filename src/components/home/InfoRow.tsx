import React from "react";
import Tooltip from "../ui/Tooltip";
import { InfoIcon } from "lucide-react";

type Props = {
  label: string;
  value: string;
  unit?: string;
  tooltip?: string;
};
const InfoRow = ({ label, value, unit, tooltip }: Props) => {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground flex items-center gap-x-1">
        {label}{" "}
        {tooltip && (
          <Tooltip tip={tooltip} title={label}>
            <InfoIcon className="text-muted-foreground w-4 h-4" />
          </Tooltip>
        )}
      </span>
      <span>
        <span className="text-muted-foreground">{value} </span>
        {unit && <span className="font-semibold"> {unit}</span>}
      </span>
    </div>
  );
};

export default InfoRow;
