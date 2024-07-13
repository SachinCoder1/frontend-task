"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/Button";

export function ThemeModeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'dark' || (theme === 'system' && systemTheme === 'dark')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div>
      <Button
        onClick={handleTheme}
        variant="outline"
        size="icon"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
