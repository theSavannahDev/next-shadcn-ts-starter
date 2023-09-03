import React, { ReactNode } from "react";
import type { Metadata } from "next";

import "@/app/styles/globals.css";

type Children = {
  children: ReactNode;
};

export const metadata: Metadata = {
  icons: {
    icon: "/logo.png",
    shortcut: "/logo/png",
  },
  title: "Next.JS Starter Template App",
  description:
    "Starter template for Next.JS projects using TypeScript and Shadcn/UI.",
};

const RootLayout = ({ children }: Children) => {
  return (
    <html lang="en">
      <body className="font-opensans scroll-smooth antialiased">
        <header>Header Section</header>

        <main>{children}</main>

        <footer>Footer Section</footer>
      </body>
    </html>
  );
};

export default RootLayout;
