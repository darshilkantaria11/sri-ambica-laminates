"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eyebrow } from "./Reveal";

const TEXT =
  "A plain board becomes a statement the moment the right laminate meets it. We bring Hyderabad's carpenters, designers and retailers *wood grains, marbles, textures and bold colours* — curated, dependable, and delivered the same day.";

function Word({ children, progress, range, accent }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span style={{ opacity }} className={accent ? "italic text-brand-blue" : ""}>
        {children}
      </motion.span>
    </span>
  );
}

/** Large paragraph whose words light up as you scroll through it. */
export default function Statement() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });

  const words = [];
  TEXT.split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .forEach((part) => {
      const em = part.startsWith("*") && part.endsWith("*");
      (em ? part.slice(1, -1) : part)
        .split(" ")
        .filter(Boolean)
        .forEach((w) => words.push({ w, em }));
    });

  const n = words.length;

  return (
    <section ref={ref} className="relative px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>The idea</Eyebrow>
        <p className="mt-8 font-display text-[clamp(1.9rem,4.6vw,4.2rem)] font-medium leading-[1.12] tracking-[-0.02em]">
          {words.map(({ w, em }, i) => {
            const start = (i / n) * 0.9;
            const end = start + 0.9 / n + 0.06;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, Math.min(end, 1)]} accent={em}>
                {w}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}
