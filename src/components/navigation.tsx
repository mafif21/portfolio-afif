"use client";

import NextLink from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { routes } from "@/data/routes";
import { useState } from "react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden items-center md:flex justify-center my-8">
      <nav className="flex font-medium text-sm px-8 rounded-full bg-secondary/30 gap-5">
        {routes.map((route) => (
          <NextLink
            key={route.path}
            href={route.path}
            className="px-4 py-3"
            onClick={() => setOpen(true)}
          >
            {route.label}
          </NextLink>
        ))}
      </nav>
    </div>
  );
};
