"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { scenes } from "@/lib/site";
import { Eyebrow, Reveal, SplitText } from "./Reveal";

function Tile({ s, i }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <Reveal delay={(i % 3) * 0.07} className="mb-5 break-inside-avoid md:mb-7">
      <figure className="group">
        <div ref={ref} className={`relative overflow-hidden rounded-[1.4rem] bg-paper ring-1 ring-ink/10 ${s.ratio}`}>
          <motion.div style={{ y }} className="absolute -inset-y-[7%] inset-x-0">
            <Image
              src={s.img}
              alt={s.label}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
              className="object-cover transition-transform duration-[1400ms] ease-expo group-hover:scale-[1.06]"
            />
          </motion.div>
          <figcaption className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-ivory/90 px-4 py-2 text-xs font-bold tracking-wide opacity-0 backdrop-blur transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100">
            {s.label}
          </figcaption>
        </div>
      </figure>
    </Reveal>
  );
}

export default function InSpaces() {
  return (
    <section className="relative px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>In real rooms</Eyebrow>
          <SplitText
            text="From a plain board to *a room people remember.*"
            className="mt-6 font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted">
              Wardrobes, wall panels, kitchens, consoles, offices — laminate does the heavy lifting of looking beautiful.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 md:gap-7 lg:columns-3">
          {scenes.map((s, i) => (
            <Tile key={s.img} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
