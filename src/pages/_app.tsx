import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Head from "next/head";

import { api } from "@/utils/api";

import { Gabarito, Inter, Harmattan } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const harmattan = Harmattan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <link rel="shortcut icon" href="/ABFrame_logo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={gabarito.className}>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
