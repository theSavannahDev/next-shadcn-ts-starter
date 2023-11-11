import React, { ReactNode } from "react";
import type { Metadata } from "next";

import "@/app/styles/globals.css";

type Children = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Next.JS Starter Template App",
  description:
    "Starter template for Next.JS projects using TypeScript and Shadcn/UI.",
};

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body className="scroll-smooth font-opensans antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
