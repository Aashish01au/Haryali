import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Dashboard } from "./navbar/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HAryali",
  description: "Admin DashBoard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <Dashboard/>

        {children}
        </body>
    </html>
  );
}
