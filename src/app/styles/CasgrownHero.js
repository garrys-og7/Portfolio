"use client";

import { motion } from "framer-motion";

export default function CasgrownHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-emerald-950 px-6">
      
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        
        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Casgrown Corporation
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300"
        >
          Growing Innovation. Empowering Tomorrow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#about"
            className="rounded-xl bg-emerald-600 px-8 py-3 text-white font-medium shadow-lg hover:bg-emerald-700 transition"
          >
            Learn More
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="rounded-xl border border-emerald-600 px-8 py-3 font-medium text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
