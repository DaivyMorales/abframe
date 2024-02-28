import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <>
      {children}
    </>
  );
}

export default Navbar;
