"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const words = ["Aerospace.", "Builder.", "Engineer."];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.2), transparent 40%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-mono text-sm text-emerald-400 mb-6"
        >
          // hello, i&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-4"
        >
          Toby St. John
        </motion.h1>

        <div className="h-20 md:h-28 overflow-hidden mb-8">
          <motion.div
            animate={{ y: [0, -80, -160, 0] }}
            transition={{
              duration: 6,
              times: [0, 0.33, 0.66, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {words.concat(words[0]).map((w, i) => (
              <div
                key={i}
                className="h-20 md:h-28 flex items-center text-5xl md:text-7xl font-semibold text-white/50"
              >
                {w}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-xl text-lg text-white/70 leading-relaxed mb-12"
        >
          I design autonomous UAVs, morphing aerodynamic surfaces, IoT sensor
          networks, and electromagnetic systems — rapid cycles of design,
          build, test, iterate.
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          href="#work"
          className="inline-flex items-center gap-2 font-mono text-sm text-white/60 hover:text-emerald-400 transition-colors"
        >
          See my work
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
