import Image from "next/image";
import { collections } from "@/lib/site";

const logos = [
  { src: "/img/logo-priwon.png", alt: "Priwon Laminate", w: 441, h: 125 },
  { src: "/img/logo-paxora.png", alt: "Paxora", w: 970, h: 257 },
  { src: "/img/logo-woodmaa.png", alt: "Wood-Maa Laminate", w: 425, h: 254 },
  { src: "/img/logo-rangrez.png", alt: "Rangrez", w: 395, h: 145 },
];

function Row({ ariaHidden }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {collections.map((c, i) => (
        <span key={c.id} className="flex items-center">
          <span
            className={`px-6 font-display text-[clamp(3rem,7vw,6.5rem)] font-medium leading-none tracking-tight md:px-10 ${
              i % 2 ? "text-outline-soft" : "text-ink"
            }`}
          >
            {c.name}
          </span>
          <span className="text-3xl text-brand-amber md:text-5xl">✦</span>
        </span>
      ))}
    </div>
  );
}

/** Slow-drifting typographic band + a quiet strip of partner logos. */
export default function BrandMarquee() {
  return (
    <section aria-label="Our collections" className="relative border-y border-ink/10 bg-paper py-10 md:py-14">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <Row />
          <Row ariaHidden />
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 opacity-80 md:mt-14">
        {logos.map((l) => (
          <Image
            key={l.src}
            src={l.src}
            alt={l.alt}
            width={l.w}
            height={l.h}
            className="h-7 w-auto grayscale transition-all duration-500 hover:grayscale-0 md:h-9"
          />
        ))}
      </div>
    </section>
  );
}
