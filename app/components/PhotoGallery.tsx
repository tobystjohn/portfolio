"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type GalleryItem = {
  src: string;
  caption?: string;
  label?: string;
};

const captionMap: Record<string, { caption: string; label: string }> = {
  "/weather-station/Weather_station_in_202604181747.jpeg": {
    label: "Field deployment",
    caption: "Agri-Sync node — in a working vineyard, powered by a 10 W solar panel.",
  },
  "/weather-station/Weather_station_in_202604181747-2.jpeg": {
    label: "Canopy-level sensing",
    caption: "Anemometer, wind vane, radiation shield, and leaf probe at vine height.",
  },
  "/weather-station/Image_of_weather_202604181750.jpeg": {
    label: "On the bench",
    caption: "Firmware, RF protocol, and calibration — full-stack solo build.",
  },
  "/weather-station/leaf-sensor.jpg": {
    label: "Leaf wetness sensor",
    caption: "CWT LEAF-TH-V5 — surface temperature & humidity at the vine canopy.",
  },
  "/morphing-wing/hero-wing-dashboard.jpg": {
    label: "'The DEVIL' — final model",
    caption: "Dual-surface morphing aerofoil on its test stand, paired with the live stall-monitor dashboard.",
  },
  "/morphing-wing/wing-on-stand.png": {
    label: "Continuous surface morph",
    caption: "The morphed lower skin — a smooth, gapless trailing edge driven by the rack-and-gear actuator.",
  },
  "/morphing-wing/wing-with-dashboard.png": {
    label: "Integrated system",
    caption: "Wing, servo housings, and the custom web dashboard running live from the tri-axis tilt sensor.",
  },
  "/morphing-wing/morph-comparison.png": {
    label: "Cruise vs landing",
    caption: "NACA 4415 morphed from neutral cruise (left) to maximum landing configuration (right).",
  },
  "/morphing-wing/naca-profiles.png": {
    label: "NACA 4415 → 4422",
    caption: "The cam-and-gear thickness mechanism sweeps through a family of NACA profiles in a single wing.",
  },
  "/morphing-wing/dashboard-ui.png": {
    label: "Live stall monitor",
    caption: "HTML/CSS web dashboard — attitude, max camber, and flap morph from an MMA8452Q at 0.02°.",
  },
  "/morphing-wing/prototype-stack.jpg": {
    label: "Iteration stack",
    caption: "Nearly every component was redesigned — CAD predictions rarely survived contact with a print bed.",
  },
  "/morphing-wing/wind-tunnel-test.png": {
    label: "UNSW wind tunnel",
    caption: "17 m/s, Re ≈ 1.7 × 10⁵ — final runs measured L/D 14.24 at 5° cruise morph.",
  },
  "/morphing-wing/team-photo.jpg": {
    label: "Stream 2 — Group S",
    caption: "DESN1000 team with 'The DEVIL' at final demonstration.",
  },
};

export default function PhotoGallery({
  images,
  interval = 5500,
}: {
  images: string[];
  interval?: number;
}) {
  const [available, setAvailable] = useState<GalleryItem[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      images.map(
        (src) =>
          new Promise<GalleryItem | null>((resolve) => {
            const img = new Image();
            img.onload = () =>
              resolve({
                src,
                ...(captionMap[src] ?? {}),
              });
            img.onerror = () => resolve(null);
            img.src = src;
          })
      )
    ).then((results) => {
      if (cancelled) return;
      setAvailable(results.filter((s): s is GalleryItem => s !== null));
    });
    return () => {
      cancelled = true;
    };
  }, [images]);

  useEffect(() => {
    if (available.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % available.length);
    }, interval);
    return () => clearInterval(id);
  }, [available, interval]);

  if (available.length === 0) {
    return (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(16,185,129,0.35), transparent 50%), radial-gradient(circle at 70% 80%, rgba(59,130,246,0.3), transparent 50%), linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #065f46 100%)",
        }}
      />
    );
  }

  const current = available[index];

  return (
    <div className="absolute inset-0 bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={current.src}
          initial={{ opacity: 0, scale: 1.0, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1.0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(14px)" }}
          transition={{ duration: 1.6, ease: [0.4, 0.0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1.28 }}
            transition={{ duration: interval / 1000 + 2, ease: "linear" }}
            className="absolute inset-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.src}
              alt={current.label ?? ""}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`caption-${current.src}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute top-28 md:top-32 right-6 md:right-16 left-6 md:left-auto max-w-sm z-10 pointer-events-none text-left md:text-right"
        >
          {current.label && (
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-400 mb-2 drop-shadow-lg">
              // {current.label}
            </p>
          )}
          {current.caption && (
            <p className="text-white/90 text-base md:text-lg font-medium drop-shadow-2xl">
              {current.caption}
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 pointer-events-none">
        <span className="font-mono text-xs text-white/60 drop-shadow-lg">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex gap-1.5">
          {available.map((_, i) => (
            <span
              key={i}
              className={`h-0.5 rounded-full transition-all duration-700 ease-out ${
                i === index
                  ? "w-12 bg-emerald-400"
                  : i < index
                  ? "w-6 bg-white/50"
                  : "w-6 bg-white/15"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-white/40 drop-shadow-lg">
          {String(available.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
