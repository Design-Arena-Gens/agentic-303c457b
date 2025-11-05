import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

export const metadata: Metadata = {
  title: "PetWorld STARTUP | Smart Pet Care for Modern Families",
  description:
    "PetWorld STARTUP delivers intelligent care plans, smart tracking, and joyful experiences for pets and their humans."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} bg-soft-radial bg-slate-950 text-white`}
      >
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
            <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
