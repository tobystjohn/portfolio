"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/app/lib/projects";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { asset } from "@/app/lib/asset";

export default function ScrollVideoHero({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onMeta = () => setDuration(v.duration || 0);
    v.addEventListener("loadedmetadata", onMeta);
    if (v.readyState >= 1) onMeta();
    return () => v.removeEventListener("loadedmetadata", onMeta);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isMobile) {
      v.play().catch(() => {});
      return;
    }
    if (!duration) return;
    const unsub = scrollYProgress.on("change", (p) => {
      const t = Math.max(0, Math.min(duration - 0.01, p * duration));
      if (Math.abs(v.currentTime - t) > 0.03) v.currentTime = t;
    });
    return () => unsub();
  }, [duration, scrollYProgress, isMobile]);

  const introOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  const midOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.55, 0.7], [0, 1, 1, 0]);
  const endOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  return (
    <section ref={ref} className="relative h-[350vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={project.hero.src ? asset(project.hero.src) : undefined}
          poster={project.hero.poster ? asset(project.hero.poster) : undefined}
          muted
          playsInline
          preload="auto"
          autoPlay={isMobile}
          loop={isMobile}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70 pointer-events-none" />

        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-20 pointer-events-none"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="font-mono text-xs text-white/60 mb-4 flex items-center gap-2 pointer-events-auto">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#work" className="hover:text-emerald-400 transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span className="text-white/80">{project.title}</span>
            </div>

            <p className="font-mono text-sm text-emerald-400 mb-3 drop-shadow-lg">
              // {project.category}
            </p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4 text-white drop-shadow-2xl">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-xl md:text-3xl font-semibold text-emerald-400 mb-6 drop-shadow-lg">
                {project.subtitle}
              </p>
            )}
            <p className="max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-lg">
              {project.tagline}
            </p>
            <p className="mt-10 font-mono text-xs uppercase tracking-widest text-white/60">
              Scroll to watch the takeoff ↓
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: midOpacity }}
          className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
        >
          <div className="text-center">
            <p className="font-mono text-sm text-emerald-400 mb-4">// takeoff</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl max-w-4xl">
              Vertical lift.
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto drop-shadow-lg">
              Three motors spin up. Two front tilt-rotors and a fixed rear lift
              the airframe off unprepared ground.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: endOpacity }}
          className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
        >
          <div className="text-center">
            <p className="font-mono text-sm text-emerald-400 mb-4">// cruise</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl max-w-4xl">
              Tilt-rotor transition.
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto drop-shadow-lg">
              Front rotors tilt forward. The V-tail stabilises a 60–70 km/h
              cruise for 4+ hour missions.
            </p>
          </div>
        </motion.div>

        <div className="absolute bottom-8 right-8 md:right-16 pointer-events-none">
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              className="h-full bg-emerald-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
