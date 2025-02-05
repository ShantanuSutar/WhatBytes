import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatBytes",
  description: "Dashboard App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className=" flex w-full lg:flex-row flex-col">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
