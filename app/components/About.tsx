"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects shipped", value: "10+" },
  { label: "Airframes built", value: "3" },
  { label: "Sensor nodes deployed", value: "12" },
  { label: "Years building", value: "6" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-emerald-400 mb-3">// about</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Aerospace, electronics, and the systems behind them.
          </h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              I&apos;m an engineer focused on aerial systems — fixed-wing drones,
              morphing wings, and the avionics that tie them together. I work
              end-to-end, from aerodynamic sketches through to flight-ready
              hardware and firmware.
            </p>
            <p>
              On the ground, I build weather-sensing networks: LoRa-linked nodes
              measuring wind, wetness, and microclimate — currently deployed
              across a vineyard in north-west Tasmania.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4 self-start"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                {s.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-white/50">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
