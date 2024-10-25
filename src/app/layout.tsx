import type { Metadata } from "next";
import { myFont } from "@/components/font/fonts";
import Cursor from "@/components/Cursor";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Truong Tuoc Phi",
  description: "PORTFOLIO | TRUONG TUOC PHI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased px-28 max-w-[1920px] mx-auto`}
      >
        <Cursor />
        <Navbar />
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
