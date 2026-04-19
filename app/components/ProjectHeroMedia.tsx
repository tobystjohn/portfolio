"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/app/lib/projects";
import { asset } from "@/app/lib/asset";
import PhotoGallery from "./PhotoGallery";

export default function ProjectHeroMedia({
  hero,
  accent,
}: {
  hero: Project["hero"];
  accent: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  if (hero.type === "video" && hero.src) {
    return (
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={asset(hero.src)}
        poster={hero.poster ? asset(hero.poster) : undefined}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    );
  }

  if (hero.type === "image" && hero.src) {
    return (
      <div className="absolute inset-0 bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(hero.src)}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-60"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(hero.src)}
          alt=""
          className="absolute inset-0 w-full h-full object-contain object-center drop-shadow-[0_25px_60px_rgba(0,0,0,0.75)]"
        />
      </div>
    );
  }

  if (hero.type === "gallery" && hero.images && hero.images.length > 0) {
    return <PhotoGallery images={hero.images} />;
  }

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${accent}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, rgba(16,185,129,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.2), transparent 40%), linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #1e3a5f 100%)",
      }}
    />
  );
}
