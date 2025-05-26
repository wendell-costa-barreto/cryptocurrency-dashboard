'use client';

import { Geist, Geist_Mono, Roboto_Condensed, Lexend, Exo_2, Orbitron } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import "./globals.css";
import Hamburguer from "@/components/ui/Hamburguer";
import { useAuth, useSignUpState } from "@/utils/auth";
import ModernNavbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const exo2 = Exo_2({ 
  variable: "--font-exo2",
  subsets: ['latin'],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const {user } = useAuth();
  const { isSignUp, setIsSignUp } = useSignUpState();
    return (
    <html lang="en">
      <body
        className={`${exo2.variable} ${robotoCondensed.variable} ${lexend.variable} ${orbitron.variable} antialiased overflow-x-hidden`}
      >
       <ModernNavbar user={user}/>

        {children}
      </body>
    </html>
  );
}