import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Typography";
import React from "react";

type Props = {
  title: string;
  label?: string;
  onClick?: any;
  children: React.ReactNode;
};

const TabsContent = ({ title, label, onClick, children }: Props) => {
  return (
    <div className="pt-6 pb-2 px-2 flex flex-col justify-between h-full">
      <div className="">
        <div className="space-y-2">
          <Heading variant="h4">{title}</Heading>
          <p className="text-muted-foreground">{label}</p>
        </div>
        <div className="pt-4">{children}</div>
      </div>
      <div className="pb-10">
        <Button onClick={onClick} className="w-full">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default TabsContent;
