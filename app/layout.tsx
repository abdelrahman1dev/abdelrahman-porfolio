import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";



export const metadata: Metadata = {
  title: "Abdelrahman Mohamed - Creative Developer",
  description: "Portfolio of Abdelrahman Mohamed, a front-end developer specializing in crafting engaging and user-friendly web experiences using React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Toaster />


      <Nav />
 
      
      <body
        className={`antialiased`}
        style={{ backgroundColor: "var(--bg-color, #020617)" }}
      >
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
