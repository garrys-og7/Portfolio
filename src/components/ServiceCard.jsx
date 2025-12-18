"use client";

import { motion } from "framer-motion";


export default function ServiceCard({
  title,
  description,
  icon,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ scale: 1.03 }}
      className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm hover:shadow-lg transition"
      aria-label={title}
    >
      <div className="mb-4 text-emerald-600 dark:text-emerald-400 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
