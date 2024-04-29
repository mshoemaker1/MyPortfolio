import type { Metadata } from "next";
import "./globals.css";
import { sourceSans } from "./fonts";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Meg Shoemaker",
  description: "UX Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
