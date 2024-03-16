import React, { ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  return (
    <div className="relative">
      <main className="min-h-screen w-screen">
        <header className="bg-[#242424] px-20 py-4">
          <nav className="flex  items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/ABFrame_logo.png"
                alt=""
                className="h-[50px] w-[50px] rounded-md  border-[1px] border-emerald-700"
              />
              <h3 className="font-bold text-emerald-500">ABFrame</h3>
            </div>
            <ul>
              <li>
                <button className="bg-emerald-500">Create test</button>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </main>
    </div>
  );
}

export default Navbar;
