
"use client";

import React from 'react';
import { motion } from 'framer-motion'; 
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, BarChart3, Zap, Monitor, Clock, Brain, Smartphone } from 'lucide-react';
import { redirect } from 'next/navigation';

export default function ModernHomepage() {

  // ✨ Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  // ✨ Animation variants for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // ✨ Animation variants for features/stats cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      }
    }
  };

  // ✨ Animation for the hero title
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.3 } }
  };

  // ✨ Animation for the hero description
  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.8, ease: "easeOut" } }
  };

  // ✨ Animation for the hero button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.9 } },
    hover: { scale: 1.05, boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)" }, // Added a subtle glow
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated background - already dope with CSS */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto px-6"
          initial="hidden"
          animate="visible"
          variants={sectionVariants} // Controls the overall fade-in and staggering
        >
          <div className="space-y-8">
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
              variants={titleVariants}
            >
              Stay Updated on
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Crypto Markets
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={descriptionVariants}
            >
              Utilize our advanced dashboard to visualize real-time market data with cutting-edge analytics
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
              variants={itemVariants} // Inherits stagger from parent, fades in
            >
              <motion.button
                              onClick={() => redirect("/dashboard")}

                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg text-white transition-all duration-300 shadow-2xl overflow-hidden" // Added text-white for clarity
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Check Real-Time Data
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating elements - added motion for a subtle intro */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
          className="absolute top-1/4 left-8"
        >
          <TrendingUp className="w-16 h-16 text-purple-400 animate-bounce" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          className="absolute bottom-1/4 right-8"
        >
          <BarChart3 className="w-16 h-16 text-blue-400 animate-bounce delay-1000" />
        </motion.div>
      </section>

      {/* Features Grid */}
      <motion.section
        className="relative py-32 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animates when it enters the viewport
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Advanced Market Intelligence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the future of crypto analytics with our cutting-edge platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Market Insights",
                description: "Real-time cryptocurrency prices and market trends with accurate data on thousands of digital assets.",
                gradient: "from-purple-500/20 to-purple-700/20",
                border: "border-purple-500/30"
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "UX-Oriented Design",
                description: "Clean, visually appealing interface focused on simplicity and ease of use for all experience levels.",
                gradient: "from-blue-500/20 to-blue-700/20",
                border: "border-blue-500/30"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Advanced Analytics",
                description: "Interactive charts, historical trends, and predictive indicators for comprehensive market analysis.",
                gradient: "from-indigo-500/20 to-indigo-700/20",
                border: "border-indigo-500/30"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`group relative p-8 bg-gradient-to-br ${feature.gradient} backdrop-blur-lg border ${feature.border} rounded-2xl`} // Removed Tailwind hover scale here
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }} // Scale and glow on hover
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="relative py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Real-Time Updates", subtitle: "Data refreshes every 25 seconds", color: "text-orange-400" },
              { icon: <Brain className="w-8 h-8" />, title: "Advanced Analysis", subtitle: "In-depth market insights", color: "text-pink-400" },
              { icon: <Smartphone className="w-8 h-8" />, title: "Responsive Design", subtitle: "Perfect on all devices", color: "text-purple-400" },
              { icon: <Zap className="w-8 h-8" />, title: "Lightning Fast", subtitle: "Optimized performance", color: "text-blue-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={cardVariants} // Using cardVariants for consistency
                whileHover={{ scale: 1.1, y: -5 }} // Subtle lift on hover
              >
                <div className={`inline-flex p-4 ${stat.color} bg-white/5 rounded-2xl mb-4`}> {/* Removed Tailwind hover scale here */}
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-400 text-sm">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative py-32 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
            <motion.div
              className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg border border-white/10 rounded-3xl p-12"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Be Updated on the Market
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Compare real time data on the market with your own digital wallet.
              </p>
              <motion.button
                onClick={() => redirect("/login")}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg text-white transition-all duration-300 shadow-2xl overflow-hidden" // Added text-white
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Sign up now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Final Section */}
      <motion.section
        className="relative py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div className="max-w-6xl mx-auto text-center" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Versatility and Diversity
          </h2>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Nexus dashboard provides advanced data visualization gathered from multiple sources to deliver comprehensive information.
            Track Bitcoin, altcoins, prices, changes, OHLC data, and more across different currencies.
          </p>
        </motion.div>
      </motion.section>

  <Footer /> 
    </div>
  );
};

