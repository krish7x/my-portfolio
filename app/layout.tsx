import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers";
import { Analytics } from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krishna Kumar",
  description: "Welcome to Krishnakumar's portfolio",
  keywords:
    "software engineer, portfolio, software developer, frontend developer",
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
        className={`antialiased bg-white dark:bg-slate-950  text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider>
          <div className="max-w-2xl mx-auto py-10 px-4">
            {children}
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
