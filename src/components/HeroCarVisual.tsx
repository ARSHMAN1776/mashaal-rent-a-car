"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Kinetic hero visual: the V8 flagship photo floating over layered,
 * staggered "speed line" streaks, with a pulsing ground shadow and a
 * slow light sweep across the body — reads as motion/speed without
 * needing video. Radial mask feathers the product photo's plain
 * background into the dark hero rather than showing a hard edge.
 */
export function HeroCarVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg lg:max-w-none">
      <div className="absolute inset-0 -z-10 rounded-full bg-gold/[0.08] blur-[100px]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
        <span
          className="absolute left-0 top-[28%] h-[2px] w-2/3 animate-speed-line bg-gradient-to-r from-transparent via-gold-light/70 to-transparent [--speed-line-opacity:0.6] [animation-duration:2.6s]"
        />
        <span
          className="absolute left-0 top-[46%] h-px w-1/2 animate-speed-line bg-gradient-to-r from-transparent via-gold/60 to-transparent [--speed-line-opacity:0.45] [animation-delay:0.5s] [animation-duration:1.9s]"
        />
        <span
          className="absolute left-0 top-[64%] h-[3px] w-3/4 animate-speed-line bg-gradient-to-r from-transparent via-gold-light/50 to-transparent [--speed-line-opacity:0.35] [animation-delay:0.9s] [animation-duration:3.2s]"
        />
      </div>

      <motion.div
        className="absolute bottom-[10%] left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-full bg-black/50 blur-xl"
        animate={
          reduceMotion ? undefined : { scaleX: [1, 0.85, 1], opacity: [0.5, 0.3, 0.5] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-[6%]"
        animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="relative h-full w-full"
          style={{
            maskImage:
              "radial-gradient(ellipse 62% 62% at 50% 58%, black 55%, transparent 92%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 62% 62% at 50% 58%, black 55%, transparent 92%)",
          }}
        >
          <Image
            src="/cars/v8.png"
            alt="Toyota Land Cruiser V8 — Mashaal Rent A Car flagship"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-contain"
          />
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -inset-y-10 left-0 w-1/3 animate-shine-sweep bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-[2%] right-[2%] rounded-full border border-gold-dim/50 bg-ink/70 px-4 py-2 backdrop-blur-sm">
        <p className="tracked-label text-[9px] text-gold-light">
          Flagship — V8
        </p>
      </div>
    </div>
  );
}
