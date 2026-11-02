"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/** Fade + rise when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.9,
  className = "",
  as = "div",
  once = true,
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
}

/**
 * Word-by-word masked headline reveal.
 * Wrap words in *asterisks* to render them as accent italics:
 *   <SplitText text="Make every surface *worth touching.*" />
 * Pass `play` (boolean) to control it manually (used by the hero while the
 * preloader is showing); leave it undefined to animate on scroll.
 */
export function SplitText({
  text,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 0.06,
  accent = "italic text-brand-blue",
  play,
}) {
  const Tag = motion[as] || motion.h2;

  const words = [];
  text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .forEach((part) => {
      const em = part.startsWith("*") && part.endsWith("*");
      const clean = em ? part.slice(1, -1) : part;
      clean
        .split(" ")
        .filter(Boolean)
        .forEach((w) => words.push({ w, em }));
    });

  const parent = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const child = {
    hidden: { y: "115%", rotate: 3 },
    show: { y: "0%", rotate: 0, transition: { duration: 1, ease: EASE } },
  };

  const trigger =
    play === undefined
      ? { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } }
      : { animate: play ? "show" : "hidden" };

  return (
    <Tag
      className={className}
      variants={parent}
      initial="hidden"
      aria-label={text.replace(/\*/g, "")}
      {...trigger}
    >
      {words.map(({ w, em }, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="mr-[0.24em] inline-block overflow-hidden pb-[0.14em] align-bottom -mb-[0.14em]"
        >
          <motion.span variants={child} className={`inline-block ${em ? accent : ""}`}>
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Small uppercase label with an amber dot. */
export function Eyebrow({ children, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-ink/70 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
      {children}
    </div>
  );
}
