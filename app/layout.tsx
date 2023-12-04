import React, { ReactNode } from "react";
import type { Metadata } from "next";

import { TanstackProvider } from "@/lib/providers/tanstack-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { ToastProvider } from "@/lib/providers/toast-provider";

import "@/app/styles/globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon/png",
  },
  title: "Next.JS Starter Template App",
  description:
    "Starter template for Next.JS projects using TypeScript and Shadcn/UI.",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="scroll-smooth font-opensans antialiased">
        <TanstackProvider>
          {children}
          <ToastProvider />
        </TanstackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
