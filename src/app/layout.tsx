import type { Metadata } from "next";
import { myFont } from "@/app/font";
import Cursor from "@/components/ui/Cursor";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { cn } from "@/lib/utils";

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
      <body className={cn(myFont.className, "px-28 max-w-[1920px] mx-auto")}>
        <PageWrapper>
          <Cursor />
          <Navbar />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
