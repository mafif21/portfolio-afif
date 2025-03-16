"use client";

import { HTMLAttributes, ReactNode } from "react";
import { Header } from "./header";
import { Container } from "../container";

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  containerVariant?:
    | "constrainedPadded"
    | "narrowConstrainedPadded"
    | "fullMobileConstrainedPadded"
    | "breakpointPadded"
    | "fullMobileBreakpointPadded";
}

export const Layout = ({
  children,
  className: classname,
  containerVariant = "constrainedPadded",
  ...props
}: LayoutProps) => {
  return (
    <div {...props}>
      <Header />
      <main className={`my-20 ${classname || ""}`}>
        <Container variant={containerVariant}>{children}</Container>
      </main>
    </div>
  );
};
