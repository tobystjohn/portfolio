"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { asset } from "@/app/lib/asset";

export default function LaunchHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
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
    if (!v || !duration) return;
    // iOS Safari needs a play/pause kick before currentTime can be set reliably.
    const unlock = () => {
      v.play()
        .then(() => v.pause())
        .catch(() => {});
    };
    unlock();
    let raf = 0;
    let target = 0;
    const tick = () => {
      const diff = target - v.currentTime;
      if (Math.abs(diff) > 0.02) {
        v.currentTime += diff * 0.25;
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };
    const unsub = scrollYProgress.on("change", (p) => {
      target = Math.max(0, Math.min(duration - 0.01, p * duration));
      if (!raf) raf = requestAnimationFrame(tick);
    });
    return () => {
      unsub();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [duration, scrollYProgress]);

  const ignitionOpacity = useTransform(scrollYProgress, [0, 0.08, 0.22, 0.3], [1, 1, 1, 0]);
  const liftoffOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0]);
  const ascentOpacity = useTransform(scrollYProgress, [0.4, 0.48, 0.55, 0.62], [0, 1, 1, 0]);
  const nameOpacity = useTransform(scrollYProgress, [0.32, 0.45], [0, 1]);
  const nameY = useTransform(scrollYProgress, [0.32, 0.45], [30, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.05, 0.3, 0.42], [1, 1, 1, 0]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 0.3, 0.3, 0.7]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[140vh] bg-black"
      aria-label="Opening sequence"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={asset("/openingvideo.mp4")}
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          autoPlay={false}
          loop={false}
        />

        <motion.div
          style={{ opacity: vignetteOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"
        />

        <motion.p
          style={{ opacity: ignitionOpacity }}
          className="absolute left-6 md:left-16 bottom-16 font-mono text-sm md:text-base text-white/80 tracking-[0.2em] uppercase drop-shadow-lg"
        >
          // ignition
        </motion.p>

        <motion.p
          style={{ opacity: liftoffOpacity }}
          className="absolute left-6 md:left-16 bottom-16 font-mono text-sm md:text-base text-emerald-400 tracking-[0.25em] uppercase drop-shadow-lg"
        >
          // liftoff
        </motion.p>

        <motion.p
          style={{ opacity: ascentOpacity }}
          className="absolute left-6 md:left-16 bottom-16 font-mono text-sm md:text-base text-white/80 tracking-[0.2em] uppercase drop-shadow-lg"
        >
          // ascent
        </motion.p>

        <motion.div
          style={{ opacity: nameOpacity, y: nameY }}
          className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:pl-16 md:pr-[50%] pointer-events-none"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-emerald-400 drop-shadow-2xl leading-[0.95]">
            Toby St. John
          </h1>
          <p className="mt-4 text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl leading-[0.95]">
            Aerospace.
            <br />
            Engineer.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none"
        >
          <motion.span
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="font-mono text-base md:text-2xl font-bold uppercase tracking-[0.4em] text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]"
          >
            Scroll to launch
          </motion.span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="text-emerald-400 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]"
          >
            <ArrowDown size={32} strokeWidth={2.5} />
          </motion.span>
        </motion.div>

        <div className="absolute bottom-8 right-8 md:right-16 pointer-events-none">
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
              className="h-full bg-emerald-400"
            />
          </div>
        </div>

        <div className="absolute top-6 left-6 md:top-8 md:left-16 pointer-events-auto">
          <Link
            href="/"
            className="font-mono text-sm tracking-tight text-white/80 hover:text-emerald-400 transition-colors drop-shadow"
          >
            toby.st-john
          </Link>
        </div>
      </div>
    </section>
  );
}
