"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { asset } from "@/app/lib/asset";

const words = ["Aerospace.", "Engineer."];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 py-20 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.2), transparent 40%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 items-center">
        <div>
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
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Toby St. John
          </motion.h1>

          <div className="h-16 md:h-20 overflow-hidden mb-8">
            <motion.div
              animate={{ y: [0, -64, 0] }}
              transition={{
                duration: 4,
                times: [0, 0.5, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {words.concat(words[0]).map((w, i) => (
                <div
                  key={i}
                  className="h-16 md:h-20 flex items-center text-4xl md:text-6xl font-semibold text-white/50"
                >
                  {w}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="max-w-xl text-base md:text-lg text-white/70 leading-relaxed mb-8 space-y-4"
          >
            <p>
              Mechanical / Aerospace Engineering (Honours) student at UNSW with
              hands-on experience across mechatronics, embedded systems, and
              mechanical design.
            </p>
            <p>
              Recent internship work on motor-driven actuation, embedded
              firmware, and sensor telemetry for an autonomous wind-powered
              vessel. Personal projects span fixed-wing VTOL drones, morphing
              aerofoils, and LoRa-connected vineyard sensor networks.
            </p>
          </motion.div>

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

        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-black/40"
        >
          <video
            src={asset("/internship-clip.mp4")}
            className="w-full h-auto block"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <figcaption className="px-4 py-2.5 text-[11px] text-white/60 border-t border-white/5 font-mono uppercase tracking-wider">
            // in the workshop — aquaforce internship, hobart
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
