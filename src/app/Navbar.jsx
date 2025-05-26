import React, { useState } from "react";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import Link from "next/link";

const ModernNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-black/95 backdrop-blur-xl border-b border-purple-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -top-2 right-1/3 w-16 h-16 bg-blue-500/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute -bottom-2 right-8 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo section */}
          <div className="flex items-center group cursor-pointer">
            <div className="ml-3">
              <Link
                href="/"
                className="text-2xl font-bold text-white tracking-tight"
              >
                Nexus
              </Link>
              <div className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent mt-0.5"></div>
            </div>
          </div>

          {/* Desktop navigation - always visible on larger screens */}
          <div className="hidden lg:flex items-center space-x-5 flex-1 justify-center">
            {["Dashboard", "Portfolio"].map((item, index) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "")}`}
                className="relative group px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10 text-lg font-medium">
                  {item}
                </span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Login button - always visible on desktop */}
          {!user && (
            <div className="hidden lg:block">
              <Link
                href="/login"
                className="relative group px-6 py-2.5 bg-transparent border border-purple-500/50 text-purple-300 rounded-lg font-medium hover:border-purple-500 hover:text-white transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Login</span>
              </Link>
            </div>
          )}

          {/* Mobile menu button - visible on smaller screens */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-purple-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu - only visible on smaller screens */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 z-20 transition-all duration-500 transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-b border-purple-500/20 ">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="space-y-1">
              {["Dashboard", "Charts", "Table", "Digital Wallet"].map(
                (item, index) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "")}`}
                    className="group flex items-center px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="font-medium">{item}</span>
                  </Link>
                )
              )}

              {!user && (
                <div className="pt-4 mt-4 border-t border-purple-500/20">
                  <Link
                    href="/login"
                    className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-purple-300 rounded-lg font-medium hover:from-purple-600/30 hover:to-blue-600/30 hover:text-white transition-all duration-300"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavbar;
