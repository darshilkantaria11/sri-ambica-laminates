"use client";

import { motion } from "framer-motion";
import { Eyebrow, SplitText } from "./Reveal";

/** Shared hero for inner pages. Title supports *accent* words. */
export default function PageHeader({ eyebrow, title, text, children }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-48">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(245,166,35,0.28),transparent)]"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(16,24,40,0.045)_1px,transparent_1px)] [background-size:calc(100%/12)_100%] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
      />
      <div className="relative mx-auto max-w-7xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SplitText
          as="h1"
          text={title}
          delay={0.15}
          stagger={0.07}
          className="mt-7 max-w-5xl font-display text-[clamp(2.9rem,7vw,6.2rem)] font-medium leading-[0.98] tracking-[-0.035em] text-balance"
        />
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted md:text-xl"
          >
            {text}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
