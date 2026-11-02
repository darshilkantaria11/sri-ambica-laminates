"use client";

import { useEffect, useRef } from "react";
import { clamp, seg, useElementSize, useLineProgress } from "@/lib/scroll";
import { process as steps } from "@/lib/site";
import { Eyebrow } from "./Reveal";
import Button from "./Button";
import { waLink } from "@/lib/site";

/**
 * Second scroll story — the truck from the previous scene "hands over" to a road
 * that draws itself down the page, lighting up each step of ordering as a pin travels along it.
 */
export default function ProcessPath() {

  // One continuous road that weaves between the cards. It is authored in a 100 x 400 grid
  // and scaled into real pixels, so strokes stay uniform at every screen size.
  const boxRef = useRef(null);
  const p = useLineProgress(boxRef, 0.62);
  const { w: W, h: H } = useElementSize(boxRef);
  const sx = W / 100;
  const sy = H / 400;
  const pts = [
    [50, 0],
    [50, 25, 38, 25, 38, 50],
    [38, 100, 62, 100, 62, 150],
    [62, 200, 38, 200, 38, 250],
    [38, 300, 62, 300, 62, 350],
    [62, 380, 50, 380, 50, 400],
  ];
  const d = pts
    .map((c, i) => {
      const px = c.map((v, k) => (k % 2 === 0 ? v * sx : v * sy).toFixed(1));
      return i === 0 ? `M${px[0]} ${px[1]}` : `C${px.join(" ")}`;
    })
    .join(" ");
  const draw = clamp(p / 0.97);

  const pathRef = useRef(null);
  const pinRef = useRef(null);
  useEffect(() => {
    const path = pathRef.current;
    const pin = pinRef.current;
    if (!path || !pin || !W) return;
    const pt = path.getPointAtLength(path.getTotalLength() * draw);
    pin.style.left = `${pt.x}px`;
    pin.style.top = `${pt.y}px`;
  }, [draw, W, H, d]);

  return (
    <section className="relative px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>How ordering works</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance">
            Four easy steps from <span className="italic text-brand-blue">idea</span> to installed.
          </h2>
        </div>

        <div ref={boxRef} className="relative mt-16 md:mt-24">
          {/* the drawn road */}
          <svg
            viewBox={`0 0 ${W || 100} ${H || 400}`}
            className="absolute inset-0 hidden h-full w-full md:block"
            aria-hidden="true"
          >
            <path d={d} fill="none" stroke="rgba(16,24,40,0.1)" strokeWidth="1.6" strokeDasharray="2 9" strokeLinecap="round" />
            <path ref={pathRef} d={d} fill="none" stroke="none" />
            <path
              d={d}
              pathLength="1"
              fill="none"
              stroke="#F5A623"
              strokeWidth="4"
              strokeLinecap="round"
             
              strokeDasharray="1"
              strokeDashoffset={1 - draw}
            />
          </svg>

          {/* mobile spine */}
          <div className="absolute bottom-0 left-[1.15rem] top-0 w-[3px] rounded-full bg-ink/10 md:hidden" aria-hidden="true">
            <div className="w-full rounded-full bg-brand-amber" style={{ height: `${draw * 100}%` }} />
          </div>

          <ol className="relative space-y-12 md:space-y-0">
            {steps.map((s, i) => {
              const active = seg(draw, (i + 0.5) / 4 - 0.14, (i + 0.5) / 4 - 0.03);
              const left = i % 2 === 0;
              return (
                <li
                  key={s.n}
                  className={`relative pl-14 md:flex md:min-h-[26rem] md:items-center md:pl-0 ${
                    left ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* node */}
                  <span
                    className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-ivory text-xs font-bold tabular-nums md:hidden"
                    style={{ background: active > 0.5 ? "#F5A623" : "#FBF8F2" }}
                  >
                    {s.n}
                  </span>

                  <div
                    className="max-w-sm rounded-[1.6rem] border border-ink/10 bg-ivory p-7 shadow-[0_24px_60px_-40px_rgba(16,24,40,0.5)] md:max-w-[19rem] md:p-8"
                    style={{
                      opacity: 0.35 + active * 0.65,
                      transform: `translateY(${(1 - active) * 28}px) scale(${0.97 + active * 0.03})`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="grid h-11 w-11 place-items-center rounded-full font-display text-lg font-semibold text-ink transition-colors duration-500"
                        style={{ background: active > 0.5 ? "#F5A623" : "#F4EEE3" }}
                      >
                        {s.n}
                      </span>
                      <h3 className="font-display text-2xl font-medium tracking-tight">{s.title}</h3>
                    </div>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* the travelling pin (desktop) */}
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
            <div
              ref={pinRef}
              className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink ring-4 ring-brand-amber/60"
              style={{ left: "50%", top: "0px" }}
            />
          </div>
        </div>

        <div className="mt-20 text-center md:mt-28">
          <p className="mx-auto max-w-md text-[17px] leading-relaxed text-muted">
            Ready when you are — tell us what you need and we&apos;ll take it from there.
          </p>
          <div className="mt-7">
            <Button
              size="lg"
              variant="primary"
              href={waLink("Hello Sri Ambica Laminates! I'd like to place an order / get a quote.")}
            >
              Place an order on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
