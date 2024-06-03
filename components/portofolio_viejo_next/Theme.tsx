"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Theme = () => {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {theme === "light" ? (
          <Image src="/assets/theme/sun.svg" width={23} height={23} alt="sun" 
          />
        ) : (
          <Image
            src="/assets/theme/moon.svg"
            alt="moon"
            width={23}
            height={23}
            className="dark:invert"
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex gap-3"
          onClick={() => setTheme("light")}
        >
          <Image src="/assets/theme/sun.svg" width={18} height={18} alt="sun" className="dark:invert"/>
          <Label>Light</Label>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-3"
          onClick={() => setTheme("dark")}
        >
          <Image
            src="/assets/theme/moon.svg"
            alt="moon"
            width={18}
            height={18}
            className="dark:invert"
          />
          <Label>Dark</Label>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
