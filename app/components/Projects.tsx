"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Plane, Wind, Zap, ArrowUpRight } from "lucide-react";
import { projects } from "@/app/lib/projects";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "fixed-wing-drone": Plane,
  "morphing-wing": Plane,
  "weather-station": Wind,
  solenoid: Zap,
};

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-emerald-400 mb-3">// selected work</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            What I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = iconMap[p.slug] ?? Plane;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-white/20 transition-colors block h-full"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <Icon className="text-emerald-400" size={28} />
                      <ArrowUpRight
                        size={20}
                        className="text-white/30 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                    <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-2">
                      {p.category}
                    </p>
                    <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{p.cardBlurb}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
