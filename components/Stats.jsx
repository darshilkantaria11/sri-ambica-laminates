"use client";

import { stats } from "@/lib/site";
import { Reveal } from "./Reveal";
import Counter from "./Counter";

export default function Stats() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[2rem] bg-ink/10 ring-1 ring-ink/10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} y={20} className="bg-ivory p-7 md:p-10">
            <div className="font-display text-[clamp(2.6rem,6vw,5rem)] font-medium leading-none tracking-[-0.04em]">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 flex items-center gap-2.5 text-sm font-semibold text-muted md:text-base">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
