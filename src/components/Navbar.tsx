import React, { ReactNode, use } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

interface NavbarProps {
  children: ReactNode;
}

function Navbar({ children }: NavbarProps) {
  const { data: session, status } = useSession();

  const router = useRouter();

  return (
    <div className="relative">
      <main className="h-screen w-full">
        <header className="w-full border-b-[1px] border-neutral-700 px-20 py-4">
          <nav className="flex  items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <img
                src="/ABFrame_logo.png"
                alt=""
                className="h-[50px] w-[50px] rounded-md  border-[1px] border-emerald-700"
              />
              <h3 className="font-bold text-emerald-500">ABFrame</h3>
            </div>
            {/* <ul>
              <li>
                {status === "unauthenticated" ? (
                  <button
                    onClick={() => signIn("twitter")}
                    className="rounded-lg bg-emerald-500 p-2 text-xs"
                  >
                    Login with Twitter
                  </button>
                ) : session?.user.image ? (
                  <img
                    src={session.user.image}
                    className="h-[40px] w-[40px] rounded-full"
                    alt=""
                  />
                ) : (
                  <></>
                )}
              </li>
            </ul> */}
          </nav>
        </header>
        {children}
      </main>
    </div>
  );
}

export default Navbar;
