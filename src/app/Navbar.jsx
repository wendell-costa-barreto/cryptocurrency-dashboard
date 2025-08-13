"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = ["Dashboard", "Portfolio"];

const ModernNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative bg-black/95 backdrop-blur-xl border-b border-purple-600/30">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-6 -left-6 w-28 h-28 bg-purple-600/10 rounded-sm blur-xl animate-pulse"></div>
        <div className="absolute -top-3 right-1/3 w-20 h-20 bg-blue-600/10 rounded-sm blur-lg animate-pulse delay-1000"></div>
        <div className="absolute -bottom-3 right-10 w-24 h-24 bg-indigo-600/10 rounded-sm blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-exo2 font-bold tracking-tight text-white cursor-pointer select-none"
        >
          Nexus
          <div className="h-[2px] w-full bg-gradient-to-r from-purple-600 to-blue-600 mt-1 rounded-sm" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex flex-1 justify-center space-x-8 font-lexend text-gray-300">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group px-3 py-2 rounded-sm transition-colors duration-200 hover:text-white hover:bg-white/10"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-sm"></span>
            </Link>
          ))}
        </div>

        {/* Login button */}
        {!user && (
          <Link
            href="/login"
            className="hidden lg:inline-block px-5 py-2 border border-purple-600 text-purple-400 rounded-sm font-roboto-condensed hover:bg-purple-700 hover:text-white transition-colors duration-300"
          >
            Login
          </Link>
        )}

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="lg:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-600/30 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-60 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-3 font-lexend text-gray-300">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)} // close menu on click
              className="block px-3 py-2 rounded-sm hover:bg-white/10 hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}

          {!user && (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="mt-2 block px-4 py-2 text-center border border-purple-600 rounded-sm font-roboto-condensed text-purple-400 hover:bg-purple-700 hover:text-white transition-colors duration-300"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default ModernNavbar;
