// components/AuthForm.js
"use client";

import { useState } from "react";
import { useAuth } from "@/utils/auth";
import { useSignUpState } from "@/utils/auth";
import { Mail, Lock, User, ArrowRight, Sparkles, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { signIn, signUp } = useAuth();
  const { isSignUp, setIsSignUp } = useSignUpState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data, error } = isSignUp
        ? await signUp(email, password, username)
        : await signIn(email, password);

      if (error) throw error;

      if (isSignUp) {
        setMessage("Check your email for verification link! 📧");
      } else {
        setMessage("Welcome back!");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-[#200b3b] to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-600/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Glass card */}
        <div className="bg-slate-800/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-purple-900/20 hover:shadow-purple-900/30 transition-all duration-300">
          {/* Header section */}
          <motion.div
            className="text-center mb-8"
            key={isSignUp ? "signup" : "signin"}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl mb-4 shadow-lg shadow-purple-600/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                key={isSignUp ? "sparkles" : "shield"}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                {isSignUp ? (
                  <Sparkles className="w-8 h-8 text-white" />
                ) : (
                  <Shield className="w-8 h-8 text-white" />
                )}
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-3"
              initial={{ opacity: 0, x: isSignUp ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {isSignUp ? "Join the Revolution" : "Welcome Back"}
            </motion.h1>

            <motion.p
              className="text-slate-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {isSignUp
                ? "Start your crypto journey today"
                : "Continue building your portfolio"}
            </motion.p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {/* Username field for signup */}
            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <label className="block text-sm font-semibold text-slate-300 ml-1">
                    Username
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
                    </div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-slate-800/60 border border-slate-600/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 hover:border-slate-500/70"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-slate-300 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/60 border border-slate-600/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 hover:border-slate-500/70"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </motion.div>

            {/* Password field */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label className="block text-sm font-semibold text-slate-300 ml-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/60 border border-slate-600/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 hover:border-slate-500/70"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </motion.div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="group relative w-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white font-bold py-4 px-6 rounded-2xl hover:from-purple-700 hover:via-purple-800 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed shadow-lg shadow-purple-600/30 hover:shadow-purple-600/40"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <div className="flex items-center justify-center space-x-3">
                <motion.span
                  className="text-lg"
                  key={`${isSignUp ? "signup" : "signin"}-${loading}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {loading
                    ? "Processing..."
                    : isSignUp
                    ? "Create Account"
                    : "Sign In"}
                </motion.span>
                {!loading && (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
                {loading && (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                )}
              </div>
            </motion.button>
          </motion.form>

          {/* Message display */}
          <AnimatePresence mode="wait">
            {message && (
              <motion.div
                className={`mt-6 p-4 rounded-2xl text-center font-medium ${
                  message.includes("error") ||
                  message.includes("Error") ||
                  message.includes("Invalid")
                    ? "bg-red-500/10 text-red-300 border border-red-500/20 backdrop-blur-sm"
                    : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 backdrop-blur-sm"
                }`}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle auth mode */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <motion.button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-slate-400 hover:text-purple-400 transition-colors duration-200 font-medium group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                key={isSignUp ? "hasAccount" : "newUser"}
                initial={{ opacity: 0, x: isSignUp ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <span className="text-purple-400 group-hover:text-purple-300 underline underline-offset-2">
                      Sign in here
                    </span>
                  </>
                ) : (
                  <>
                    New to our platform?{" "}
                    <span className="text-purple-400 group-hover:text-purple-300 underline underline-offset-2">
                      Create account
                    </span>
                  </>
                )}
              </motion.span>
            </motion.button>
          </motion.div>
        </div>

        {/* Footer text */}
        <div className="text-center mt-6">
          <p className="text-slate-500 text-sm">Secure • Fast • Professional</p>
        </div>
      </div>
    </div>
  );
}
