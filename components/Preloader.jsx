"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useIntro } from "./Providers";

const EASE = [0.22, 1, 0.36, 1];
const TOTAL_MS = 1900;

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export default function Preloader() {
  const { setReady } = useIntro();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("sal-intro") === "1";
    } catch {}

    // Only play the full intro once per browser session.
    if (seen) {
      setVisible(false);
      setReady(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let raf;

    const finish = () => {
      try {
        sessionStorage.setItem("sal-intro", "1");
      } catch {}
      document.documentElement.style.overflow = "";
      setVisible(false);
      setReady(true);
    };

    const tick = (now) => {
      const t = Math.min(1, (now - start) / TOTAL_MS);
      setProgress(Math.round(easeOut(t) * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else finish();
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, [setReady]);

  const letters = "Sri Ambica".split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory"
          exit={{ y: "-100%", transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              <Image
                src="/logo.png"
                alt="Sri Ambica Laminates"
                width={132}
                height={85}
                priority
                className="h-auto w-24 md:w-32"
              />
            </motion.div>

            <div className="mt-7 overflow-hidden pb-2 font-display text-[2.6rem] font-medium leading-none tracking-tight md:text-6xl">
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.35 + i * 0.045 }}
                >
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </div>

            <div className="mt-2 overflow-hidden">
              <motion.div
                className="pl-[0.55em] text-[11px] font-bold uppercase tracking-[0.55em] text-ink/60 md:text-xs"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
              >
                Laminates
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-14 left-1/2 w-56 -translate-x-1/2">
            <div className="h-px w-full bg-ink/10">
              <div
                className="h-px bg-brand-amber"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-[11px] font-semibold tabular-nums text-ink/50">
              <span>Preparing surfaces</span>
              <span>{progress}%</span>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-amber to-brand-blue" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
