import type { Metadata } from "next";
import { poppins } from "./ui/fonts";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jobs Social Media",
  description:
    "Jobs Social Media is a platform for job seekers to find jobs and for employers to find candidates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <ToastContainer className="text-sm" />
      </body>
    </html>
  );
}
