import { ReactNode } from "react";
import type { Metadata } from "next";

import { ToastProvider } from "@/lib/providers/toast-provider";

import { Container } from "@/components/container";

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
      <body className="flex h-screen flex-col scroll-smooth font-display antialiased">
        <header>
          <Container>Header Section</Container>
        </header>

        <main className="relative overflow-hidden">
          <Container>
            {children}
            <ToastProvider />
          </Container>
        </main>

        <footer className="mt-auto">
          <Container>Footer Section</Container>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
