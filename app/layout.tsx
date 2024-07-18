import { DefaultLayout } from "@/components/layouts";
import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { ScrollTop } from "@/components/micros/scroll-top";

import { Analytics } from "./analytics";
import { inter } from "./fonts";
import "./globals.css";
import { ThemeProvider } from "./providers";

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
          <div className="mdpy-10 mx-auto max-w-2xl px-4 pt-6">
            <DefaultLayout>
              <Header />
              <main>{children}</main>
            </DefaultLayout>
            <Footer />
            <Analytics />
          </div>
          <ScrollTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
