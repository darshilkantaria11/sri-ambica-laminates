"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { collections, waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ArrowUpRight, Book, Whatsapp } from "./Icons";

function Row({ c, i }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const flip = i % 2 === 1;

  return (
    <article id={c.id} ref={ref} className="scroll-mt-28 py-10 md:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
          {/* Cover opens the PDF (Google Drive) in a new tab */}
          <a
            href={c.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full max-w-md overflow-hidden rounded-[2rem] bg-paper shadow-[0_40px_80px_-40px_rgba(16,24,40,0.55)] ring-1 ring-ink/10 lg:max-w-none"
            aria-label={`Open the ${c.name} catalogue PDF in a new tab`}
          >
            <div className="relative aspect-[3/4]">
              <motion.div style={{ y }} className="absolute -inset-y-[7%] inset-x-0">
                <Image
                  src={c.cover}
                  alt={`${c.name} catalogue cover`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover transition-transform duration-[1400ms] ease-expo group-hover:scale-[1.05]"
                />
              </motion.div>
              <span className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-ivory/95 py-3 text-sm font-bold opacity-0 backdrop-blur transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100">
                <Book className="h-4 w-4" /> Open catalogue
              </span>
            </div>
          </a>
        </Reveal>

        <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-display text-6xl font-medium leading-none tabular-nums text-outline-soft md:text-8xl">
                0{i + 1}
              </span>
              <span className="h-px flex-1 bg-ink/10" />
              <span className="h-3.5 w-3.5 rounded-full" style={{ background: c.color }} />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.035em]">
              {c.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 font-display text-2xl italic text-brand-blue md:text-3xl">{c.tagline}</p>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{c.blurb}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-9 flex flex-wrap gap-3">
            <a
              href={c.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[15px] font-semibold text-ivory transition-colors duration-300 hover:bg-brand-blue"
            >
              <Book className="h-4 w-4" /> Open catalogue PDF
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={waLink(`Hello Sri Ambica Laminates! I'd like samples / pricing from the ${c.name} collection.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-4 text-[15px] font-semibold text-[#17803f] transition-colors hover:bg-[#1E9E52]/10"
            >
              <Whatsapp className="h-4 w-4" /> Ask about {c.name}
            </a>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function CatalogueGrid() {
  return (
    <>
      {/* quick-jump chips */}
      <div className="sticky top-[4.6rem] z-30 px-3 md:top-[5.2rem]">
        <div className="no-scrollbar mx-auto flex max-w-fit gap-2 overflow-x-auto rounded-full border border-ink/10 bg-ivory/85 p-1.5 shadow-[0_14px_40px_-22px_rgba(16,24,40,0.45)] backdrop-blur-xl">
          {collections.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.12em] transition-colors hover:bg-ink hover:text-ivory"
            >
              <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
              {c.name}
            </a>
          ))}
        </div>
      </div>

      <div className="divide-y divide-ink/10">
        {collections.map((c, i) => (
          <Row key={c.id} c={c} i={i} />
        ))}
      </div>
    </>
  );
}
