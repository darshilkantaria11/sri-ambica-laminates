"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { directionsUrl, waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import Button from "./Button";
import Magnetic from "./Magnetic";

export default function CTABand({
  title = "Ready to transform your space?",
  text = "Tell us about your project — we'll suggest finishes, confirm availability and arrange delivery.",
}) {
  return (
    <section className="px-5 pb-10 md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-ink px-6 py-20 text-center text-ivory md:px-16 md:py-28">
        <Image
          src="/img/scene-office.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <motion.div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-amber/30 blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.4rem,5.6vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ivory/75">{text}</p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={0.2}>
              <Button variant="amber" size="lg" href={waLink("Hello Sri Ambica Laminates! I'd like a free consultation.")}>
                Get a free consultation
              </Button>
            </Magnetic>
            <Button
              variant="outlineLight"
              size="lg"
              icon={false}
              href={directionsUrl}
            >
              Visit the showroom
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
