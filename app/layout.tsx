import type { Metadata } from "next";
import { Bangers } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const bangers = Bangers({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marvel World",
  description: "A website for marvel fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bangers.className} antialiased`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
