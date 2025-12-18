"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import {
  Cpu,
  Brain,
  Smartphone,
  Monitor,
  Code,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      
      {/* Header Section */}
      <section className="relative px-6 py-24 text-center">
        {/* Animated Background Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-200/40 via-transparent to-emerald-400/20 blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400"
        >
          Innovative solutions designed to scale your business.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <ServiceCard
            title="AI Agents"
            description="Autonomous AI systems that automate workflows and intelligent decision-making."
            icon={<Cpu />}
            delay={0.0}
          />

          <ServiceCard
            title="Agentic AI"
            description="Goal-driven AI architectures capable of reasoning, planning, and execution."
            icon={<Brain />}
            delay={0.1}
          />

          <ServiceCard
            title="Full-Stack Mobile Development"
            description="Scalable iOS and Android applications built with modern frameworks."
            icon={<Smartphone />}
            delay={0.2}
          />

          <ServiceCard
            title="Desktop Application Development"
            description="High-performance, cross-platform desktop solutions for modern businesses."
            icon={<Monitor />}
            delay={0.3}
          />

          <ServiceCard
            title="Custom Software Development"
            description="Tailored software engineered to match your unique business requirements."
            icon={<Code />}
            delay={0.4}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl rounded-3xl bg-emerald-600 px-8 py-16 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold">
            Let’s Build the Future Together
          </h2>
          <p className="mt-4 text-emerald-100">
            Partner with Casgrown Corporation to create intelligent, scalable solutions.
          </p>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block mt-8 rounded-xl bg-white px-8 py-3 font-medium text-emerald-700 shadow-md"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}
