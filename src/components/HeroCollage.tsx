"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  name?: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
  images: string[];

  whatsappHref?: string;
  reelSrc?: string;
  reelPoster?: string;
};

export default function HeroCollage({
  name = "Bijalsangnaach",
  subtitle = "National Award-Winning International Kathak Performer & Academy",
  ctaHref = "/about",
  ctaLabel = "Know More",
  images,

  whatsappHref,
  reelSrc,
  reelPoster,
}: Props) {
  // ✅ 12 tiles only (4 cols × 3 rows)
  const TILE_COUNT = 12;

  const tiles = React.useMemo(() => {
    const safe = images?.length ? images : ["/hero.jpg"];
    // if you provide <12 images, it repeats to fill 12
    return Array.from({ length: TILE_COUNT }, (_, i) => safe[i % safe.length]);
  }, [images]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* ✅ 12-tile grid: 3×4 on mobile, 4×3 on bigger screens */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 sm:grid-cols-4 sm:grid-rows-3">
        {tiles.map((src, idx) => (
          <div key={`${src}-${idx}`} className="relative overflow-hidden">
            <Image
              src={src}
              alt="Kathak collage"
              fill
              sizes="(min-width: 640px) 25vw, 33vw"
className={`object-cover tile-soft tile-${(idx % 6) + 1} ${tileFocus(idx)}`}
              priority={idx < 6}
            />
            {/* slight dark filter for consistency */}
            <div className="absolute inset-0 bg-black/10" />
          </div>
        ))}
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0),rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.75)_100%)]" />

      {/* Center content */}
      <div className="relative z-10 flex h-screen items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <motion.div
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber-200/80 bg-black/50"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -4, 4, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-2xl" aria-hidden="true">
              💃
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-white text-4xl md:text-6xl lg:text-7xl tracking-wide drop-shadow-[0_6px_18px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            {name}
          </motion.h1>

          <motion.p
            className="mt-4 text-sm md:text-base text-white/85 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex items-center justify-center gap-3 flex-col sm:flex-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3 }}
          >
            <Link
              href="/register"
              className="inline-block rounded-full bg-amber-300 px-8 py-3 font-semibold text-black hover:bg-amber-200 transition"
            >
              Register
            </Link>

            <Link
              href={ctaHref}
              className="inline-block rounded-full border border-white/25 bg-white/10 px-8 py-3 font-semibold text-white hover:bg-white/15 transition"
            >
              {ctaLabel}
            </Link>
          </motion.div>

          {whatsappHref && (
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-3 text-white/95"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.5 }}
            >
              <SocialPill href={whatsappHref} label="Message us on WhatsApp" />
            </motion.div>
          )}

          {reelSrc && (
            <div className="mt-10 lg:hidden">
              <ReelCard src={reelSrc} poster={reelPoster} className="mx-auto w-40 sm:w-48" />
            </div>
          )}
        </div>
      </div>

      {reelSrc && (
        <div className="absolute bottom-10 right-10 z-10 hidden lg:block">
          <ReelCard src={reelSrc} poster={reelPoster} className="w-56 xl:w-64" />
        </div>
      )}

      {/* ✅ Softer zoom (less “cut”) */}
      <style jsx global>{`
        .tile-soft {
          transform: scale(1.01);
          will-change: transform;
        }

        @keyframes softA {
          0% { transform: scale(1.01) translate(0, 0); }
          50% { transform: scale(1.04) translate(-0.6%, -0.4%); }
          100% { transform: scale(1.01) translate(0, 0); }
        }
        @keyframes softB {
          0% { transform: scale(1.01) translate(0, 0); }
          50% { transform: scale(1.045) translate(0.6%, -0.4%); }
          100% { transform: scale(1.01) translate(0, 0); }
        }
        @keyframes softC {
          0% { transform: scale(1.01) translate(0, 0); }
          50% { transform: scale(1.05) translate(-0.5%, 0.5%); }
          100% { transform: scale(1.01) translate(0, 0); }
        }

        .tile-1 { animation: softA 20s ease-in-out infinite; }
        .tile-2 { animation: softB 22s ease-in-out infinite; }
        .tile-3 { animation: softC 24s ease-in-out infinite; }
        .tile-4 { animation: softB 21s ease-in-out infinite; }
        .tile-5 { animation: softC 23s ease-in-out infinite; }
        .tile-6 { animation: softA 25s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function ReelCard({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const tryPlay = () => {
      video.play().catch(() => {
        // Autoplay blocked (e.g. low-power mode) -- user can tap to play.
      });
    };
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    return () => video.removeEventListener("loadeddata", tryPlay);
  }, []);

  return (
    <div
      className={`relative aspect-[9/16] overflow-hidden rounded-3xl border border-amber-200/30 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${className}`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover motion-reduce:hidden"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onClick={(e) => {
          const v = e.currentTarget;
          if (v.paused) v.play().catch(() => {});
        }}
      />
      {poster && (
        <Image
          src={poster}
          alt="Bijal dancing Kathak"
          fill
          sizes="256px"
          className="hidden object-cover motion-reduce:block"
        />
      )}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
        <p className="text-[11px] font-medium tracking-wide text-white/90">Kathak in motion</p>
      </div>
    </div>
  );
}

function SocialPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs hover:bg-white/25 transition"
    >
      <span>{label}</span>
    </a>
  );
}

function tileFocus(idx: number) {
  // Adjust these based on which tiles look cut in YOUR collage.
  // idx is 0..11 (12 tiles).
  const map: Record<number, string> = {
    0: "object-[50%_30%]", // top-left
    1: "object-[50%_35%]",
    2: "object-[50%_25%]",
    3: "object-[50%_35%]",

    4: "object-[50%_25%]",
    5: "object-[50%_20%]",
    6: "object-[50%_35%]",
    7: "object-[50%_25%]",

    8: "object-[50%_15%]", // bottom row often needs higher focus
    9: "object-[50%_20%]",
    10: "object-[50%_25%]",
    11: "object-[50%_20%]", // bottom-right portrait (keep face visible)
  };

  return map[idx] || "object-center";
}

