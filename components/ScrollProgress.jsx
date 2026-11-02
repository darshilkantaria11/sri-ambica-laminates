"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin brand-coloured reading progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[90] h-[3px] origin-left bg-gradient-to-r from-brand-blue via-brand-amber to-brand-blue"
    />
  );
}
