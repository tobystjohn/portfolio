"use client";

import { motion } from "framer-motion";
import { asset } from "@/app/lib/asset";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-emerald-400 mb-3">// in the workshop</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
            Hands-on, end-to-end.
          </h2>
          <p className="text-white/70 leading-relaxed">
            From CAD to firmware to flight line — building real hardware in real workshops.
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-white/10 bg-black/40"
        >
          <video
            src={asset("/internship-clip.mp4")}
            className="w-full h-auto"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <figcaption className="px-4 py-3 text-xs text-white/60 border-t border-white/5 font-mono uppercase tracking-wider">
            // in the workshop — AquaForce internship, Hobart
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
