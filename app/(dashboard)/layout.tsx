import { ReactNode } from "react";

import { Container } from "@/components/generic/container";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Container>
      <div className="min-h-screen">
        <header>Header Section</header>
        <main>{children}</main>
        <footer>Footer Section</footer>
      </div>
    </Container>
  );
};

export default DashboardLayout;
