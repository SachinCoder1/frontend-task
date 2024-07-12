import React from "react";
import { ThemeModeToggle } from "./ThemeToggle";
import { Heading } from "./ui/Typography";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between">
      <div>
        <Heading variant="h2">Radiant</Heading>
      </div>
      <ThemeModeToggle />
    </div>
  );
};

export default Navbar;
