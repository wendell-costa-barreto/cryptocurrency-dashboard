'use client'

import { useState } from "react";
import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
    variable: "--font-roboto-condensed",
    subsets: ["latin"],
});
export default function Hamburguer() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
                className="w-6 h-6 z-10 mr-[-1.5rem] cursor-pointer" 
                onClick={() => setOpen(!open)}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H7.5"
                />
            </svg>

            {open && (
                <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center justify-center z-50">
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-5 right-5 text-white text-2xl cursor-pointer"
                    >
                        ✖
                    </button>
                    <nav className={`flex flex-col gap-6 text-white text-lg ${robotoCondensed.className}`}>
                        <Link onClick={()=> setOpen(false)} href="/" className="text-white text-2xl">Home</Link>
                        <Link onClick={()=> setOpen(false)} href="/dashboard" className="text-white text-2xl">Dashboard</Link>
                        <Link onClick={()=> setOpen(false)} href="/charts" className="text-white text-2xl">Charts</Link>
                        <Link onClick={()=> setOpen(false)} href="/table" className="text-white text-2xl">Table</Link>
                    </nav>
                </div>
            )}
        </>
    );
}
