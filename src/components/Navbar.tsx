import React from "react";
import { ThemeModeToggle } from "./ThemeToggle";
import { Heading, headingClasses } from "./ui/Typography";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between">
      <div>
        <Link href={"/"} className={cn(headingClasses["h2"])}>Radiant</Link>
      </div>
      <ThemeModeToggle />
    </div>
  );
};

export default Navbar;
