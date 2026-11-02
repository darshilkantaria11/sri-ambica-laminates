"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { finishes } from "@/lib/site";
import { Eyebrow, SplitText } from "./Reveal";

/**
 * Pinned horizontal gallery on desktop — vertical scroll drives the sheets sideways.
 * On mobile it falls back to a native swipeable rail (no scroll-jacking on touch).
 */
function FinishCard({ f, i }) {
  return (
    <figure className="group relative w-[74vw] shrink-0 snap-center sm:w-[44vw] lg:w-[26rem]">
      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-paper shadow-[0_30px_60px_-34px_rgba(16,24,40,0.55)] ring-1 ring-ink/10 ${
          i % 2 ? "lg:translate-y-10" : ""
        }`}
      >
        <Image
          src={f.img}
          alt={`${f.name} laminate`}
          fill
          sizes="(max-width: 640px) 74vw, (max-width: 1024px) 44vw, 416px"
          className="object-cover transition-transform duration-[1400ms] ease-expo group-hover:scale-[1.07]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>
      <figcaption className={`mt-5 flex items-baseline justify-between gap-3 ${i % 2 ? "lg:translate-y-10" : ""}`}>
        <span className="font-display text-xl font-medium tracking-tight text-ivory">{f.name}</span>
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ivory/55">
          {f.code ?? f.type}
        </span>
      </figcaption>
    </figure>
  );
}

function Desktop() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-62%"]);
  const barScale = useTransform(scrollYProgress, [0, 1], [0.04, 1]);

  return (
    <div ref={ref} className="relative hidden h-[330vh] lg:block">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-10">
          <Eyebrow className="!text-ivory/70">The finishes</Eyebrow>
          <SplitText
            text="Real textures. *Real* grain. Real depth."
            accent="italic text-brand-amber"
            className="mt-5 max-w-3xl font-display text-6xl font-medium leading-[1.02] tracking-[-0.03em] text-ivory"
          />
        </div>

        <motion.div style={{ x }} className="mt-14 flex w-max gap-10 pl-10 pr-[20vw]">
          {finishes.map((f, i) => (
            <FinishCard key={f.id} f={f} i={i} />
          ))}
        </motion.div>

        <div className="mx-auto mt-12 flex w-full max-w-7xl items-center gap-5 px-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ivory/50">Scroll</span>
          <div className="h-px flex-1 bg-ivory/15">
            <motion.div style={{ scaleX: barScale }} className="h-px origin-left bg-brand-amber" />
          </div>
          <span className="text-[11px] font-bold tabular-nums tracking-[0.25em] text-ivory/50">
            {String(finishes.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

function Mobile() {
  return (
    <div className="py-20 lg:hidden">
      <div className="px-5">
        <Eyebrow className="!text-ivory/70">The finishes</Eyebrow>
        <SplitText
          text="Real textures. *Real* grain. Real depth."
          accent="italic text-brand-amber"
          className="mt-5 font-display text-[2.6rem] font-medium leading-[1.04] tracking-[-0.03em] text-ivory"
        />
      </div>
      <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4">
        {finishes.map((f, i) => (
          <FinishCard key={f.id} f={f} i={i} />
        ))}
      </div>
      <p className="mt-4 px-5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/45">Swipe →</p>
    </div>
  );
}

export default function FinishRail() {
  return (
    <section className="relative bg-ink text-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_50%_at_80%_0%,rgba(245,166,35,0.16),transparent),radial-gradient(50%_50%_at_0%_100%,rgba(43,91,168,0.28),transparent)]"
      />
      <Desktop />
      <Mobile />
    </section>
  );
}
