import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <div className="lg:px-32">
      {children}
    </div>
  );
}

export default Navbar;
