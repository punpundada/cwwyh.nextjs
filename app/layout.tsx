'use client'
import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });
import { Provider } from "react-redux";
import { Store } from "@/redux/store";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-app-background h-screen">
        <Navbar />
        {
          <div className="">
            <ToastContainer />
            <Provider store={Store}>{children}</Provider>
          </div>
        }
      </body>
    </html>
  );
}
