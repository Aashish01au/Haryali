import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Dashboard from "./NavBar/page";
import { HeaderPage } from "./Header/page";
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
        <HeaderPage/>
    <Dashboard/>
           {children}
        </body>
    </html>
  );
}
