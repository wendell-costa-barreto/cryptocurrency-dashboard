import { Geist, Geist_Mono, Roboto_Condensed, Lexend, Exo_2, Orbitron } from "next/font/google";
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
  return (
    <html lang="en">
      <body
        className={`${exo2.variable} ${robotoCondensed.variable} ${lexend.variable} ${orbitron.variable} antialiased overflow-x-hidden`}
      >
        <nav className="bg-gray-900 flex p-2 items-center justify-between border-b border-gray-600">
          <div className="flex items-center w-[85%]">
            <Link
              href="/"
              className={`text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 text-2xl font-bold ${orbitron.className} transition duration-300 ease-in-out`}

              aria-current="page"
            >
              Nexus
            </Link>
          </div>

          <div className={`hidden md:flex space-x-4 items-center`}>
            <Link
              href="/dashboard"
              className={`font-exo2 text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-medium transition duration-300 ease-in-out`}
            >
              Dashboard
            </Link>
            <Link
              href="/charts"
              className="font-exo2 text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-medium transition duration-300 ease-in-out"
            >
              Charts
            </Link>
            <Link
              href="/table"
              className="font-exo2 text-gray-100 hover:bg-gray-700 hover:text-white px-3 py-2 text-lg font-medium transition duration-300 ease-in-out"
            >
              Table
            </Link>
          </div>

          <div className="block md:hidden mr-[10%]">
            <Hamburguer />
          </div>
        </nav>

        {children}
        <Footer />
      </body>
    </html>
  );
}