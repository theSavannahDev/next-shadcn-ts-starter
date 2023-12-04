import { ReactNode } from "react";

import { Container } from "@/components/generic/container";

type LandingLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: LandingLayoutProps) => {
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

export default AuthLayout;
