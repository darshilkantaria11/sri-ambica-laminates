"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { finishes, waLink } from "@/lib/site";
import { useIntro } from "./Providers";
import { SplitText } from "./Reveal";
import Button from "./Button";
import Magnetic from "./Magnetic";
import { Layers, Truck, Shield } from "./Icons";

const EASE = [0.22, 1, 0.36, 1];
const CYCLE_MS = 4800;

// Six finishes feature in the hero (the 7th lives on the catalogue page).
const heroFinishes = finishes.slice(0, 6);

const badges = [
  { icon: Truck, text: "Same-day delivery in Hyderabad" },
  { icon: Layers, text: "6 curated collections" },
  { icon: Shield, text: "Single sheets to bulk orders" },
];

function FinishSwitcher() {
  const { ready } = useIntro();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = heroFinishes.length;
  const current = heroFinishes[active];

  useEffect(() => {
    if (!ready || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), CYCLE_MS);
    return () => clearInterval(id);
  }, [ready, paused, active, n]);

  // Pointer-driven 3D tilt
  const boxRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 140, damping: 18 });
  const sy = useSpring(my, { stiffness: 140, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-9, 9]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);

  const onMove = (e) => {
    const el = boxRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
    setPaused(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={ready ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.96 }}
      transition={{ duration: 1.3, ease: EASE, delay: 0.25 }}
      className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px]"
    >
      {/* Tone glow that follows the active finish */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        animate={{ backgroundColor: current.tone }}
        transition={{ duration: 1.2 }}
      />

      <div
        ref={boxRef}
        onMouseMove={onMove}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={onLeave}
        className="relative"
        style={{ perspective: 1200 }}
      >
        {/* Peeking sheets behind the card */}
        {[1, 2].map((offset) => {
          const f = heroFinishes[(active + offset) % n];
          return (
            <div
              key={offset}
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-24px_rgba(16,24,40,0.5)]"
              style={{
                transform:
                  offset === 1
                    ? "translate(7%, 3%) rotate(5deg)"
                    : "translate(-8%, 2%) rotate(-6deg)",
                opacity: offset === 1 ? 0.95 : 0.8,
              }}
            >
              <Image
                src={f.img}
                alt=""
                fill
                sizes="(max-width: 1024px) 80vw, 460px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ivory/20" />
            </div>
          );
        })}

        {/* Main finish card */}
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-paper shadow-[0_40px_80px_-30px_rgba(16,24,40,0.55)] ring-1 ring-ink/10"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={current.id}
              className="absolute inset-0"
              initial={{ clipPath: "inset(0 0 0 100%)" }}
              animate={{ clipPath: "inset(0 0 0 0%)" }}
              exit={{ opacity: 0.98, transition: { duration: 1.25 } }}
              transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
            >
              <Image
                src={current.img}
                alt={`${current.name} laminate finish`}
                fill
                priority={active === 0}
                sizes="(max-width: 1024px) 80vw, 460px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* soft sheen */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-ink/20" />

          {/* top chip */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ivory/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink backdrop-blur">
            <span className="tabular-nums">0{active + 1}</span>
            <span className="h-3 w-px bg-ink/25" />
            <span className="text-ink/60">{current.type}</span>
          </div>

          {/* label */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/30 to-transparent p-5 pt-16 text-ivory">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                {current.code && (
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-amber">
                    {current.code}
                  </p>
                )}
                <p className="mt-1 font-display text-2xl font-medium leading-tight md:text-[1.7rem]">
                  {current.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* laminate "peel" corner */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 h-14 w-14 transition-all duration-500 ease-expo hover:h-20 hover:w-20"
            style={{
              background:
                "linear-gradient(315deg, #FBF8F2 0%, #FBF8F2 48%, rgba(16,24,40,0.28) 50%, rgba(16,24,40,0) 70%)",
              borderTopLeftRadius: "1.2rem",
            }}
          />
        </motion.div>
      </div>

      {/* Swatch chooser */}
      <div className="relative mt-11">
        <div className="flex items-center justify-center gap-2.5 md:gap-3">
          {heroFinishes.map((f, i) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${f.name}`}
              aria-pressed={i === active}
              className={`relative h-11 w-11 overflow-hidden rounded-full ring-offset-2 ring-offset-ivory transition-all duration-500 ease-expo md:h-12 md:w-12 ${
                i === active ? "scale-110 ring-2 ring-ink" : "opacity-80 ring-1 ring-ink/10 hover:scale-105 hover:opacity-100"
              }`}
            >
              <Image src={f.img} alt="" fill sizes="48px" className="object-cover" />
            </button>
          ))}
        </div>
        <div className="mx-auto mt-4 h-[3px] w-40 overflow-hidden rounded-full bg-ink/10">
          <motion.div
            key={`${active}-${paused}`}
            className="h-full origin-left rounded-full bg-brand-amber"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? 0 : 1 }}
            transition={{ duration: paused ? 0.3 : CYCLE_MS / 1000, ease: "linear" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { ready } = useIntro();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  // The sheet "falls" out of the hero — the story section below picks it up.
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 260]);
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, 7]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.6, 0.95], [1, 1, 0]);

  const rise = (delay) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section ref={ref} className="relative isolate overflow-hidden pt-28 md:pt-32 lg:min-h-[100svh]">
      {/* ambient background */}
      <motion.div
        aria-hidden="true"
        style={{ y: blobY }}
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[620px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(245,166,35,0.28),transparent)]"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: blobY }}
        className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[560px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(43,91,168,0.18),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:linear-gradient(to_right,rgba(16,24,40,0.05)_1px,transparent_1px)] [background-size:calc(100%/12)_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 md:px-10 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-12 lg:gap-8 lg:pb-16">
        <motion.div style={{ y: copyY, opacity: copyOpacity }} className="lg:col-span-7">
          <motion.div
            {...rise(0.1)}
            className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-ivory/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-ink/75 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-amber" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-amber" />
            </span>
            Premium laminates · Hyderabad
          </motion.div>

          <SplitText
            as="h1"
            play={ready}
            delay={0.2}
            stagger={0.085}
            text="Make every surface *worth touching.*"
            className="mt-7 font-display text-[clamp(2.9rem,7.2vw,6.6rem)] font-medium leading-[0.96] tracking-[-0.035em] text-balance"
          />

          <motion.p
            {...rise(0.9)}
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted md:text-lg"
          >
            Six curated laminate collections — wood grains, marbles, textures and bold colours — for
            carpenters, designers and retailers. Delivered the same day across Hyderabad, even for a
            single sheet.
          </motion.p>

          <motion.div {...rise(1.05)} className="mt-9 flex flex-wrap items-center gap-3.5">
            <Magnetic strength={0.2}>
              <Button href="/catalogue" size="lg">
                Explore collections
              </Button>
            </Magnetic>
            <Button
              variant="ghost"
              size="lg"
              icon={false}
              href={waLink("Hello Sri Ambica Laminates! I'd like to request laminate samples.")}
            >
              Request samples
            </Button>
          </motion.div>

          <motion.ul
            {...rise(1.25)}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-semibold text-ink/75"
          >
            {badges.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-soft text-brand-deep">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                {text}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          style={{ y: cardY, rotate: cardRotate, opacity: cardOpacity }}
          className="lg:col-span-5"
        >
          <FinishSwitcher />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex">
        <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-ink/45">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-ink/10">
          <span className="absolute inset-0 animate-scroll-cue bg-ink/60" />
        </span>
      </div>
    </section>
  );
}
