import { DefaultLayout } from "@/components/layouts";
import Header from "@/components/layouts/header";
import { ScrollTop } from "@/components/micros/scroll-top";
import { Inter } from "next/font/google";

import { Analytics } from "./analytics";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({
  subsets: ["cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Krishna Kumar",
  description: "Welcome to Krishnakumar's portfolio",
  keywords:
    "software engineer, portfolio, software developer, frontend developer krish7x Krishnakumar,Krishnakumar ganesh",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/krish.png"
        ></link>
      </head>
      <body
        className={`bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider>
          <div className="mdpy-10 mx-auto max-w-2xl px-4 py-6">
            <DefaultLayout>
              <Header />
              <main>{children}</main>
            </DefaultLayout>
            <Analytics />
          </div>
          <ScrollTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
