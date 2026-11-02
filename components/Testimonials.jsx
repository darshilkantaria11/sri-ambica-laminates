"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/site";
import { Eyebrow, Reveal } from "./Reveal";
import { Quote, Star } from "./Icons";

const EASE = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[i];

  return (
    <section className="relative overflow-hidden bg-brand-deep px-5 py-24 text-ivory md:px-10 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_60%_at_85%_10%,rgba(245,166,35,0.22),transparent),radial-gradient(40%_50%_at_5%_100%,rgba(255,255,255,0.08),transparent)]"
      />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <Eyebrow className="!text-ivory/70">Kind words</Eyebrow>
        </Reveal>

        <div
          className="mt-8 grid items-start gap-8 md:grid-cols-[auto_1fr] md:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="h-14 w-14 text-brand-amber md:h-24 md:w-24" />

          <div className="min-h-[15rem] md:min-h-[17rem]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <div className="flex gap-1 text-brand-amber" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-5 w-5" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-[clamp(1.6rem,3.4vw,2.9rem)] font-medium leading-[1.18] tracking-[-0.02em] text-balance">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 text-sm font-semibold">
                  {t.author}
                  <span className="ml-3 font-medium text-ivory/55">{t.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3">
          {testimonials.map((_, n) => (
            <button
              key={n}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show testimonial ${n + 1}`}
              aria-current={n === i}
              className="group py-3"
            >
              <span
                className={`block h-[3px] rounded-full transition-all duration-700 ease-expo ${
                  n === i ? "w-14 bg-brand-amber" : "w-6 bg-ivory/30 group-hover:bg-ivory/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
