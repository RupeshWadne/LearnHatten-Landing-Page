import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const poppins = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Learnhatten Landing Page",
  description: "Earn crypto tby learning crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(poppins.className, "antialiased bg-[#c3cfe2] dark:bg-[#111]")}>
        {children}
      </body>
    </html>
  );
}
