"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Zap,
  Monitor,
  Clock,
  Brain,
  Smartphone,
} from "lucide-react";

export default function SleekHomepage() {
  // Animation variants (more subtle, smooth easing)
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 180, damping: 15, delay: 0.6 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(168, 85, 247, 0.3)",
      background:
        "linear-gradient(135deg, rgba(168,85,247,0.7) 0%, rgba(99,102,241,0.7) 100%)",
    },
    tap: { scale: 0.95 },
  };

  // Icon styling helper: thin stroke, grayscale with accent on hover
  const IconWrapper = ({
    children}) => (
    <div className="text-gray-400 group-hover:text-purple-500 transition-colors duration-300">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-inter overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center max-w-5xl mx-auto">
        {/* Simplified background blobs */}
        <div
          aria-hidden="true"
          className="absolute top-16 left-10 w-60 h-60 rounded-full bg-gradient-to-tr from-purple-700 to-indigo-600 opacity-20 blur-3xl animate-slow-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-700 to-blue-600 opacity-15 blur-3xl animate-slow-pulse delay-500"
          style={{ animationDuration: "6s" }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="space-y-6 max-w-3xl z-10"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent tracking-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Stay Updated on{" "}
            <span className="block bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Crypto Markets
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto leading-relaxed tracking-wide"
          >
            Visualize real-time market data with advanced analytics on a sleek,
            modern dashboard built for crypto enthusiasts.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-8"
          >
            <motion.button
              onClick={() => (window.location.href = "/dashboard")}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative px-10 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-semibold text-white shadow-lg backdrop-blur-md border border-white/20 overflow-hidden"
              style={{ WebkitFontSmoothing: "antialiased" }}
            >
              <span className="relative flex items-center gap-3 z-10">
                Check Real-Time Data
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <motion.section
        className="relative py-28 px-6 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Advanced Market Intelligence
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Experience the future of crypto analytics with our cutting-edge platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <TrendingUp strokeWidth={1.5} />,
              title: "Market Insights",
              description:
                "Real-time cryptocurrency prices and market trends with accurate data on thousands of digital assets.",
            },
            {
              icon: <Monitor strokeWidth={1.5} />,
              title: "UX-Oriented Design",
              description:
                "Clean, visually appealing interface focused on simplicity and ease of use for all experience levels.",
            },
            {
              icon: <BarChart3 strokeWidth={1.5} />,
              title: "Advanced Analytics",
              description:
                "Interactive charts, historical trends, and predictive indicators for comprehensive market analysis.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-gray-900 bg-opacity-50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm hover:border-purple-500 transition-colors duration-400 cursor-default"
            >
              <div className="mb-6 text-purple-400">
                <IconWrapper>{feature.icon}</IconWrapper>
              </div>
              <h3 className="text-2xl font-semibold mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="relative py-24 px-6 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            {
              icon: <Clock strokeWidth={1.5} />,
              title: "Real-Time Updates",
              subtitle: "Data refreshes every 25 seconds",
              color: "text-orange-400",
            },
            {
              icon: <Brain strokeWidth={1.5} />,
              title: "Advanced Analysis",
              subtitle: "In-depth market insights",
              color: "text-pink-400",
            },
            {
              icon: <Smartphone strokeWidth={1.5} />,
              title: "Responsive Design",
              subtitle: "Perfect on all devices",
              color: "text-purple-400",
            },
            {
              icon: <Zap strokeWidth={1.5} />,
              title: "Lightning Fast",
              subtitle: "Optimized performance",
              color: "text-blue-400",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group cursor-default"
              whileHover={{ scale: 1.07, y: -3 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div
                className={`mx-auto inline-flex p-5 rounded-3xl bg-white/5 mb-4 ${stat.color} transition-colors duration-300 group-hover:bg-white/20`}
              >
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{stat.title}</h3>
              <p className="text-gray-400 text-sm tracking-wide">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative py-28 px-6 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="relative rounded-3xl bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border border-white/10 p-12 shadow-lg">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-tight"
          >
            Be Updated on the Market
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-10 max-w-xl mx-auto tracking-wide leading-relaxed"
          >
            Compare real-time data on the market with your own digital wallet —
            stay ahead with seamless insights.
          </motion.p>

          <motion.button
            onClick={() => (window.location.href = "/login")}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative px-10 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-semibold text-white shadow-lg backdrop-blur-md border border-white/20 overflow-hidden"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            <span className="relative flex items-center gap-3 z-10">
              Sign up now
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
          </motion.button>
        </div>
      </motion.section>

      {/* Final Section */}
      <motion.section
        className="relative py-20 px-6 max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent tracking-wide">
            Versatility and Diversity
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed tracking-wide">
            Nexus dashboard provides advanced data visualization gathered from
            multiple sources to deliver comprehensive information. Track Bitcoin,
            altcoins, prices, changes, OHLC data, and more across different currencies.
          </p>
        </motion.div>
      </motion.section>

      <Footer />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
          @keyframes slow-pulse {
            0%, 100% {
              opacity: 0.15;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(1.05);
            }
          }
          .animate-slow-pulse {
            animation-name: slow-pulse;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </div>
  );
}
