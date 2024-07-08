import "./globals.css";
import { Inter } from "next/font/google";

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
        className={`${inter.className} h-screen w-full border-b border-custom-1 bg-custom-2`}
      >
        {children}
      </body>
    </html>
  );
}
