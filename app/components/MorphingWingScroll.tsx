"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { asset } from "@/app/lib/asset";

function ScrubVideo({
  src,
  progress,
  loop,
}: {
  src: string;
  progress: MotionValue<number>;
  loop: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

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
    if (loop) {
      v.pause();
      try {
        v.currentTime = 0;
      } catch {}
      return;
    }
    if (!duration) return;
    const unsub = progress.on("change", (p) => {
      const clamped = Math.max(0, Math.min(1, p));
      const t = Math.max(0, Math.min(duration - 0.01, clamped * duration));
      if (Math.abs(v.currentTime - t) > 0.03) v.currentTime = t;
    });
    return () => unsub();
  }, [duration, progress, loop]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover"
      src={src}
      muted
      playsInline
      preload="auto"
      autoPlay={false}
      loop={false}
    />
  );
}

export default function MorphingWingScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // First half (0 → 0.5) drives the flap video
  const flapProgress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  // Second half (0.5 → 1) drives the thickness video
  const thicknessProgress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const introOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const flapVisible = useTransform(scrollYProgress, [0.05, 0.12, 0.5, 0.58], [0, 1, 1, 0]);
  const flapLabelOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.18, 0.45, 0.55],
    [0, 1, 1, 0]
  );

  const thicknessVisible = useTransform(scrollYProgress, [0.48, 0.58, 0.95, 1], [0, 1, 1, 1]);
  const thicknessLabelOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.65, 0.85, 0.95],
    [0, 1, 1, 0]
  );

  const outroOpacity = useTransform(scrollYProgress, [0.92, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[400vh] bg-black border-y border-white/5"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ opacity: flapVisible }} className="absolute inset-0">
          <ScrubVideo src={asset("/morphing-wing/flap.mp4")} progress={flapProgress} loop={isMobile} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 pointer-events-none" />
        </motion.div>

        <motion.div style={{ opacity: thicknessVisible }} className="absolute inset-0">
          <ScrubVideo
            src={asset("/morphing-wing/change_in_thickness.mp4")}
            progress={thicknessProgress}
            loop={isMobile}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 pointer-events-none" />
        </motion.div>

        <motion.div
          style={{ opacity: introOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/70"
        >
          <div className="text-center px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-4">
              // dual-surface morphing
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl mb-6">
              Two servos.
              <br />
              One continuous wing.
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto">
              Scroll to watch each mechanism actuate in real time.
            </p>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-white/40">
              ↓
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: flapLabelOpacity }}
          className="absolute bottom-16 left-0 right-0 px-6 md:px-16 pointer-events-none"
        >
          <div className="max-w-6xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-3 drop-shadow-lg">
              // 01 / lower surface
            </p>
            <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl mb-3">
              Flap Morph
            </h3>
            <p className="text-base md:text-lg text-white/80 max-w-xl drop-shadow-lg">
              A rack-and-gear pulls the lower skin inward, deflecting the
              trailing edge 0°–40° without breaking the surface.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: thicknessLabelOpacity }}
          className="absolute bottom-16 left-0 right-0 px-6 md:px-16 pointer-events-none"
        >
          <div className="max-w-6xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3 drop-shadow-lg">
              // 02 / upper surface
            </p>
            <h3 className="text-3xl md:text-5xl font-bold text-white drop-shadow-2xl mb-3">
              Thickness Morph
            </h3>
            <p className="text-base md:text-lg text-white/80 max-w-xl drop-shadow-lg">
              A cam-and-gear sweeps maximum thickness across NACA 4415 → 4422,
              trading lift and drag per flight phase.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: outroOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/70"
        >
          <div className="text-center px-6">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-4">
              // combined result
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl mb-6">
              L/D 14.24 at cruise.
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto">
              Decoupled camber and thickness control across takeoff, cruise, and
              landing.
            </p>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="w-40 h-1 bg-white/10 rounded-full overflow-hidden">
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
