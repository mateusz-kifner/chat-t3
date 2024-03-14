import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <TRPCReactProvider>
      <SessionProvider session={session}>
        <main className={`font-sans ${inter.variable}`}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </TRPCReactProvider>
  );
};

export default MyApp;
