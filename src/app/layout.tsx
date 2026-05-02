import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GsapProvider from "@/components/GsapProvider";
import "./globals.css";
import "@/lib/gsap"; // Initialize GSAP and plugins

export const metadata: Metadata = {
  title: "Studio Lumina — Creative Digital Studio",
  description: "High-end design, motion, and frontend engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <GsapProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </GsapProvider>
      </body>
    </html>
  );
}