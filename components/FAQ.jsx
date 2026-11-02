"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/site";
import { Eyebrow, Reveal, SplitText } from "./Reveal";
import { Plus } from "./Icons";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Good to know</Eyebrow>
          <SplitText
            text="Questions, *answered.*"
            className="mt-6 font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.03em]"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-muted">
              Can&apos;t find what you need? Message us — a real person will reply.
            </p>
          </Reveal>
        </div>

        <ul className="lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 0.04} y={16} className="border-b border-ink/10 first:border-t">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl font-medium tracking-tight md:text-2xl">{f.q}</span>
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-expo ${
                        isOpen ? "rotate-45 border-ink bg-ink text-ivory" : "border-ink/20 group-hover:border-ink"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-7 text-[16px] leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
