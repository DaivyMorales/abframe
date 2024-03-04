import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <main className="min-h-screen w-screen">
      <header className="bg-[#242424] px-20 py-4">
        <nav className="flex  items-center justify-start gap-2 ">
          <img
            src="/ABFrame_logo.png"
            alt=""
            className="h-[50px] w-[50px] rounded-md  border-[1px] border-emerald-700"
          />
          <h3 className="font-bold text-emerald-500">ABFrame</h3>
        </nav>
      </header>
      {children}
    </main>
  );
}

export default Navbar;
