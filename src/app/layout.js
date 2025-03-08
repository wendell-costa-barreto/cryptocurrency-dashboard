import { Geist, Geist_Mono, Roboto_Condensed } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Footer";
import "./globals.css";
import Hamburguer from "@/components/ui/Hamburguer";

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



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <nav className="bg-gray-900 flex p-2 items-center justify-between border-b border-gray-600">
          <div className="flex items-center w-[85%]">
            <Link
              href="/"
              className={`${robotoCondensed.variable} text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 text-2xl font-bold`}
              aria-current="page"
            >
              Nexus
            </Link>
          </div>

          {/* Navigation Links - Hidden on Small & Medium Screens */}
          <div className={`${robotoCondensed.variable} hidden md:flex space-x-4 items-center`}>
            <Link
              href="/dashboard"
              className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-medium transition duration-300 ease-in-out"
            >
              Dashboard
            </Link>
            <Link
              href="/graphics"
              className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-medium transition duration-300 ease-in-out"
            >
              Graphics
            </Link>
            <Link
              href="#"
              className="text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-medium transition duration-300 ease-in-out"
            >
              Projects
            </Link>
          </div>

          <div className="block md:hidden">
            <Hamburguer />
          </div>
        </nav>

        {children}
        <Footer />
      </body>
    </html>
  );
}
