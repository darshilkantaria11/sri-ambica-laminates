"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { collections } from "@/lib/site";
import { Eyebrow, Reveal, SplitText } from "./Reveal";
import { ArrowUpRight } from "./Icons";
import Button from "./Button";

function Card({ c, i }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  // Stagger columns on desktop for an editorial, uneven rhythm
  const offset = i % 3 === 1 ? "lg:mt-16" : i % 3 === 2 ? "lg:mt-8" : "";

  return (
    <Reveal delay={(i % 3) * 0.08} className={offset}>
      <Link
        href={`/catalogue#${c.id}`}
        className="group block"
        aria-label={`${c.name} collection — view catalogue`}
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-paper ring-1 ring-ink/10" ref={ref}>
          <motion.div style={{ y: imgY }} className="absolute -inset-y-[8%] inset-x-0">
            <Image
              src={c.cover}
              alt={`${c.name} catalogue cover`}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              className="object-cover transition-transform duration-[1200ms] ease-expo group-hover:scale-[1.06]"
            />
          </motion.div>

          <span
            className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1.5 text-[11px] font-bold tabular-nums tracking-[0.2em] backdrop-blur"
          >
            0{i + 1}
          </span>

          <span className="absolute right-4 top-4 grid h-12 w-12 -translate-y-2 scale-75 place-items-center rounded-full bg-ink text-ivory opacity-0 transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" />
          </span>

          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 transition-transform duration-700 ease-expo group-hover:scale-x-100"
            style={{ background: c.color }}
          />
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl font-medium tracking-tight md:text-[2rem]">{c.name}</h3>
            <p className="mt-1.5 max-w-[22rem] text-[15px] leading-relaxed text-muted">{c.tagline}</p>
          </div>
          <span
            className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full ring-4 ring-offset-0 transition-transform duration-500 ease-expo group-hover:scale-125"
            style={{ background: c.color, boxShadow: `0 0 0 4px ${c.color}22` }}
          />
        </div>
      </Link>
    </Reveal>
  );
}

export default function CollectionsShowcase() {
  return (
    <section className="relative px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Six collections</Eyebrow>
            <SplitText
              text="Find the surface that *finishes* your furniture."
              className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[17px] leading-relaxed text-muted">
              Open any catalogue as a PDF — every finish, code and colour in one place.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Card key={c.id} c={c} i={i} />
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <Button href="/catalogue" size="lg">
            Browse every catalogue
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
