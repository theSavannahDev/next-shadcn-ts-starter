import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <div className="container mx-auto w-full max-w-7xl">{children}</div>;
};
