import type { Metadata } from "next";
import localFont from "next/font/local";
import Cursor from "@/components/Cursor";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-32`}
      >
        <Navbar />
        {children}
        <Cursor />
      </body>
    </html>
  );
}
