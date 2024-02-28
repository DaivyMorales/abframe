import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "@/utils/api";

import { Gabarito } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={gabarito.className}>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
