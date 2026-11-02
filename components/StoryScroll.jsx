"use client";

import { useRef } from "react";
import Image from "next/image";
import { clamp, easeInOut, easeOut, lerp, seg, useElementSize, useSectionProgress } from "@/lib/scroll";

/**
 * THE STORY — one laminate sheet, followed from choice to doorstep.
 *   01 Choose  : a stack of sheets unfolds; one is picked
 *   02 Bond    : it lifts, lowers onto a plain wooden board and a roller presses it down
 *   03 Shape   : the board becomes a wardrobe (doors, handles, cornice, legs)
 *   04 Deliver : the wardrobe is loaded onto a delivery truck
 * Everything is driven by scroll position, so scrolling back rewinds the story.
 */

const CHAPTERS = [
  {
    n: "01",
    label: "Choose",
    title: "Start with the finish.",
    text: "Wood grain, marble, colour or pattern — six collections, hundreds of surfaces. Pick the one your furniture deserves.",
  },
  {
    n: "02",
    label: "Bond",
    title: "Press it on.",
    text: "A decorative sheet is bonded to a plain wooden board. One pass of the roller and raw timber becomes a statement.",
  },
  {
    n: "03",
    label: "Shape",
    title: "It becomes the furniture.",
    text: "Your carpenter cuts, edges and builds — a wardrobe, a kitchen, a console. The surface carries the design from there.",
  },
  {
    n: "04",
    label: "Deliver",
    title: "At your door, same day.",
    text: "Same-day delivery across Hyderabad and next-day to nearby areas — even when it is a single sheet.",
  },
];

const SHEETS = {
  left: "/img/finish-marble.webp",
  center: "/img/finish-noirwood.webp",
  right: "/img/finish-terracotta.webp",
};

function Tag({ children, style, className = "" }) {
  return (
    <div
      style={style}
      className={`pointer-events-none absolute left-1/2 top-1/2 z-20 whitespace-nowrap rounded-full bg-ivory px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink shadow-[0_8px_24px_-10px_rgba(16,24,40,0.45)] ring-1 ring-ink/10 ${className}`}
    >
      {children}
    </div>
  );
}

function Truck({ w, wheelAngle }) {
  const h = (w * 160) / 300;
  return (
    <svg width={w} height={h} viewBox="0 0 300 160" fill="none" aria-hidden="true">
      {/* flatbed deck */}
      <rect x="6" y="100" width="206" height="14" rx="3" fill="#1B3F7E" />
      <rect x="6" y="112" width="206" height="6" rx="2" fill="#10294f" />
      {/* side rails */}
      <rect x="6" y="88" width="5" height="14" rx="2" fill="#1B3F7E" />
      <rect x="207" y="88" width="5" height="14" rx="2" fill="#1B3F7E" />
      {/* cab */}
      <path d="M216 118V70c0-5 3-9 8-9h34c5 0 9 2 12 6l17 24c2 3 3 6 3 10v17H216z" fill="#F5A623" />
      <path d="M229 72h28c3 0 5 1 6.5 3.4L276 94h-47V72z" fill="#FBF8F2" opacity=".92" />
      <rect x="219" y="104" width="76" height="4" fill="#d98a0c" />
      <rect x="289" y="100" width="9" height="9" rx="2" fill="#FDE9BD" />
      {/* chassis */}
      <rect x="6" y="116" width="292" height="8" rx="3" fill="#0f1a30" />
      {/* wheels */}
      {[52, 108, 252].map((cx) => (
        <g key={cx} transform={`translate(${cx} 134)`}>
          <circle r="19" fill="#101828" />
          <g transform={`rotate(${wheelAngle})`}>
            <circle r="10" fill="#FBF8F2" />
            <path d="M0-10V10M-10 0H10M-7-7L7 7M-7 7L7-7" stroke="#101828" strokeWidth="2" strokeLinecap="round" />
          </g>
          <circle r="3.4" fill="#F5A623" />
        </g>
      ))}
    </svg>
  );
}

export default function StoryScroll() {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);
  const p = useSectionProgress(sectionRef);
  const { w: W, h: H } = useElementSize(sceneRef);

  const idx = Math.min(CHAPTERS.length - 1, Math.floor(p * CHAPTERS.length));
  const ready = W > 0 && H > 0;

  // ───────── geometry (px) ─────────
  const oh = Math.min(H * 0.64, W * 0.82); // sheet / wardrobe body height
  const ow = oh * 0.8;
  const tw = Math.min(W * 0.98, H * 0.9);
  const th = (tw * 160) / 300;
  const truckTop = H - H * 0.07 - th;
  const deckY = truckTop + th * (100 / 160);
  const sFinal = Math.max(
    0.2,
    Math.min(0.56, (deckY - H * 0.1) / (oh * 1.12), (tw * 0.36) / ow)
  );

  // ───────── scene timeline ─────────
  const unfold = easeInOut(seg(p, 0.0, 0.1));
  const pick = easeInOut(seg(p, 0.13, 0.23));

  const boardIn = easeOut(seg(p, 0.25, 0.31));
  const lift = easeInOut(seg(p, 0.28, 0.35)) - easeInOut(seg(p, 0.36, 0.42));
  const roller = seg(p, 0.4, 0.5);
  const bonded = seg(p, 0.5, 0.52);

  const gap = easeOut(seg(p, 0.5, 0.58));
  const bevel = easeOut(seg(p, 0.54, 0.62));
  const handles = easeOut(seg(p, 0.6, 0.66));
  const cornice = easeOut(seg(p, 0.58, 0.65));
  const legs = easeOut(seg(p, 0.64, 0.72));
  const swing = Math.sin(Math.PI * seg(p, 0.52, 0.76));

  const truckIn = easeInOut(seg(p, 0.74, 0.84));
  const load = easeInOut(seg(p, 0.83, 0.93));
  const stamp = easeOut(seg(p, 0.93, 0.98));
  const drive = p; // continuous: wheels + road keep turning

  // sheet positions
  const spread = ow * 0.62;
  const sideX = unfold * spread + pick * ow * 0.5;
  const sideRot = unfold * 11 + pick * 8;
  const sideOpacity = 1 - pick;

  // wardrobe (the hero object) transform
  const objScale = lerp(1 + pick * 0.04 + (1 - lift) * 0 + seg(p, 0.5, 0.72) * 0.05, sFinal, load);
  const objCenterY = lerp(0, deckY - (sFinal * oh * 1.12) / 2 + sFinal * oh * 0.05 - H / 2, load);
  const objY = objCenterY - H * 0.02 * (1 - load);

  const liftPx = lift * oh * 0.16;
  const lamRot = lift * -4;
  const lamShadowY = 10 + liftPx * 0.9;
  const lamShadowBlur = 26 + liftPx * 1.2;

  const truckX = lerp(-(W / 2 + tw), 0, truckIn);
  const wheelAngle = (drive * 1400) % 360;
  const roadShift = (-(drive * 2200)) % 48;

  const tagX = Math.min(ow * 0.78, W / 2 - 46);

  // chapter text
  const chapter = CHAPTERS[idx];

  return (
    <section
      ref={sectionRef}
      aria-label="How a laminate sheet becomes furniture"
      className="relative bg-paper"
      style={{ height: "640svh" }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden px-5 pb-5 pt-[4.75rem] sm:pt-24 md:px-10 lg:flex-row lg:items-center lg:gap-10 lg:pb-10 min-[1500px]:px-[calc((100vw-90rem)/2)]">
        {/* ambience */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(55% 60% at 72% 48%, rgba(245,166,35,0.22), transparent 70%), radial-gradient(40% 50% at 8% 90%, rgba(43,91,168,0.14), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-4 bottom-0 select-none font-display text-[38vw] font-semibold leading-[0.8] tracking-[-0.06em] text-outline-soft opacity-30 sm:opacity-50 lg:text-[24vw] lg:opacity-60"
        >
          {chapter.n}
        </div>

        {/* ── text column ── */}
        <div className="relative z-10 order-2 mt-2 lg:order-1 lg:mt-0 lg:w-[42%]">
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-ink/60">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
            The journey of a sheet
          </div>

          <div className="relative mt-3 grid sm:mt-4 lg:mt-8">
            {CHAPTERS.map((c, i) => {
              const active = i === idx;
              return (
                <div
                  key={c.n}
                  aria-hidden={!active}
                  className="col-start-1 row-start-1 transition-all duration-700 ease-expo"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: `translateY(${active ? 0 : i < idx ? -26 : 26}px)`,
                    pointerEvents: active ? "auto" : "none",
                  }}
                >
                  <p className="text-sm font-bold tabular-nums text-brand-blue">
                    {c.n} <span className="mx-1 text-ink/25">/</span> {c.label}
                  </p>
                  <h2 className="mt-2 font-display text-[clamp(2.1rem,4.6vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.03em]">
                    {c.title}
                  </h2>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted lg:mt-5 lg:text-[17px]">
                    {c.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* progress rail */}
          <div className="mt-4 flex items-center gap-3 lg:mt-8">
            {CHAPTERS.map((c, i) => {
              const fill = clamp(p * CHAPTERS.length - i);
              return (
                <div key={c.n} className="flex-1">
                  <div className="h-[3px] overflow-hidden rounded-full bg-ink/10">
                    <div className="h-full rounded-full bg-ink" style={{ width: `${fill * 100}%` }} />
                  </div>
                  <p
                    className={`mt-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                      i === idx ? "text-ink" : "text-ink/35"
                    }`}
                  >
                    {c.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── scene ── */}
        <div className="relative z-10 order-1 min-h-[13rem] flex-1 lg:order-2 lg:h-[min(78svh,46rem)] lg:min-h-0">
          <div
            ref={sceneRef}
            className="absolute inset-y-0 left-1/2 w-full max-w-[38rem] -translate-x-1/2 min-[1500px]:max-w-[46rem]"
            style={{ perspective: 1300 }}
          >
            {ready && (
              <>
                {/* floor line + soft disc */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 rounded-full bg-brand-soft/70"
                  style={{
                    width: Math.min(W, H) * 0.96,
                    height: Math.min(W, H) * 0.96,
                    transform: `translate(-50%,-50%) scale(${0.85 + 0.15 * easeOut(seg(p, 0, 0.1))})`,
                  }}
                />

                {/* ROAD (appears with the truck) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 overflow-hidden"
                  style={{
                    top: H - H * 0.07 - th * 0.07,
                    height: th * 0.2,
                    opacity: truckIn,
                  }}
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] rounded-full bg-ink/80" />
                  <div
                    className="absolute left-0 top-[46%] h-[3px] w-[200%]"
                    style={{
                      transform: `translateX(${roadShift}px)`,
                      backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(16,24,40,.55) 0 24px, transparent 24px 48px)",
                    }}
                  />
                </div>

                {/* TRUCK */}
                <div
                  className="absolute"
                  style={{
                    left: (W - tw) / 2,
                    top: truckTop,
                    transform: `translateX(${truckX}px) translateY(${Math.sin(drive * 160) * 1.2 * truckIn}px)`,
                    opacity: truckIn > 0 ? 1 : 0,
                  }}
                >
                  <Truck w={tw} wheelAngle={wheelAngle} />
                </div>

                {/* SIDE SHEETS (fan) */}
                {[
                  { key: "l", src: SHEETS.left, dir: -1, tag: "Marble" },
                  { key: "r", src: SHEETS.right, dir: 1, tag: "Texture" },
                ].map((s) => (
                  <div
                    key={s.key}
                    className="absolute left-1/2 top-1/2 overflow-hidden rounded-[6px] shadow-[0_24px_50px_-26px_rgba(16,24,40,0.6)] ring-1 ring-ink/10"
                    style={{
                      width: ow,
                      height: oh,
                      opacity: sideOpacity,
                      zIndex: 1,
                      transform: `translate(-50%,-50%) translate(${s.dir * sideX}px, ${-H * 0.02 + Math.abs(s.dir) * unfold * 8}px) rotate(${s.dir * sideRot}deg)`,
                    }}
                  >
                    <Image src={s.src} alt="" fill sizes="320px" className="object-cover" />
                  </div>
                ))}

                {/* floor shadow under the object */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 rounded-[50%] bg-ink/25 blur-md"
                  style={{
                    width: ow * 0.9,
                    height: oh * 0.07,
                    opacity: seg(p, 0.5, 0.7) * (1 - load),
                    transform: `translate(-50%,-50%) translateY(${oh * 0.58 + objY}px) scale(${0.7 + legs * 0.3})`,
                  }}
                />

                {/* THE OBJECT: sheet → board+sheet → wardrobe → on the truck */}
                <div
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: ow,
                    height: oh,
                    zIndex: 5,
                    transform: `translate(-50%,-50%) translate(0px, ${objY}px) scale(${objScale}) rotateY(${swing * -16}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* plain wooden board */}
                  <div
                    className="absolute rounded-[7px]"
                    style={{
                      inset: `-${ow * 0.035}px`,
                      opacity: boardIn,
                      transform: `translateY(${(1 - boardIn) * 24}px) scale(${0.96 + boardIn * 0.04})`,
                      background:
                        "repeating-linear-gradient(92deg, rgba(120,80,40,.10) 0 2px, transparent 2px 9px), linear-gradient(135deg, #D8B98C, #C49A66)",
                      boxShadow: "inset 0 0 0 1px rgba(90,55,20,.35), 0 18px 34px -22px rgba(16,24,40,.6)",
                    }}
                  />

                  {/* cornice */}
                  <div
                    className="absolute left-[-5%] right-[-5%] rounded-[3px] bg-ink"
                    style={{
                      height: oh * 0.035,
                      top: -oh * 0.045,
                      opacity: cornice,
                      transform: `translateY(${(1 - cornice) * -30}px)`,
                    }}
                  />

                  {/* legs */}
                  {[0.1, 0.84].map((x) => (
                    <div
                      key={x}
                      className="absolute rounded-b-[3px] bg-ink"
                      style={{
                        left: `${x * 100}%`,
                        width: ow * 0.06,
                        height: oh * 0.07 * legs,
                        top: "100%",
                        marginTop: ow * 0.035,
                        opacity: legs,
                      }}
                    />
                  ))}

                  {/* the chosen laminate sheet */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-[5px] ring-1 ring-ink/15"
                    style={{
                      transform: `translateY(${-liftPx}px) rotate(${lamRot}deg) scale(${1 + lift * 0.03})`,
                      boxShadow: `0 ${lamShadowY}px ${lamShadowBlur}px -14px rgba(16,24,40,${0.32 + lift * 0.1})`,
                    }}
                  >
                    <Image
                      src={SHEETS.center}
                      alt="Classico Noirwood laminate sheet"
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                    {/* "not yet pressed" sheen below the roller */}
                    <div
                      className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-white/35 to-white/10"
                      style={{
                        height: `${(1 - roller) * 100}%`,
                        opacity: seg(p, 0.38, 0.4) * (1 - bonded),
                      }}
                    />
                    {/* door bevels */}
                    <div
                      className="absolute inset-[5%] right-[52.5%] rounded-[2px] border border-white/35"
                      style={{ opacity: bevel }}
                    />
                    <div
                      className="absolute inset-[5%] left-[52.5%] rounded-[2px] border border-white/35"
                      style={{ opacity: bevel }}
                    />
                    {/* centre gap between the doors */}
                    <div
                      className="absolute left-1/2 top-0 w-[2.5px] -translate-x-1/2 bg-ink/85"
                      style={{ height: `${gap * 100}%` }}
                    />
                    {/* handles */}
                    {[-1, 1].map((d) => (
                      <div
                        key={d}
                        className="absolute top-[47%] rounded-full bg-brand-amber shadow-[0_2px_6px_rgba(16,24,40,.45)]"
                        style={{
                          width: ow * 0.028,
                          height: oh * 0.13,
                          left: `calc(50% + ${d * ow * 0.055}px)`,
                          transform: `translateX(-50%) scaleY(${handles}) scaleX(${0.4 + handles * 0.6})`,
                          opacity: handles,
                        }}
                      />
                    ))}
                  </div>

                  {/* roller travelling top → bottom */}
                  <div
                    aria-hidden="true"
                    className="absolute left-[-7%] right-[-7%]"
                    style={{
                      top: `${roller * 100}%`,
                      height: oh * 0.075,
                      marginTop: -oh * 0.0375,
                      opacity: roller > 0 && roller < 1 ? 1 : 0,
                      transform: `translateY(${0}px)`,
                    }}
                  >
                    <div className="h-full w-full rounded-full bg-gradient-to-b from-ink via-[#2a3550] to-ink shadow-[0_10px_20px_-6px_rgba(16,24,40,.6)]" />
                    <div className="absolute inset-x-[6%] top-[18%] h-[22%] rounded-full bg-white/35" />
                    <div className="absolute -right-3 top-1/2 h-1.5 w-8 -translate-y-1/2 rounded-full bg-brand-amber" />
                  </div>
                </div>

                {/* chapter tags */}
                <Tag
                  style={{
                    opacity: seg(p, 0.02, 0.07) * (1 - pick),
                    transform: `translate(-50%,-50%) translate(${-tagX}px, ${oh * 0.58}px)`,
                  }}
                >
                  Marble
                </Tag>
                <Tag
                  style={{
                    opacity: seg(p, 0.02, 0.07) * (1 - pick),
                    transform: `translate(-50%,-50%) translate(${tagX}px, ${oh * 0.58}px)`,
                  }}
                >
                  Texture
                </Tag>
                <Tag
                  style={{
                    opacity: seg(p, 0.1, 0.15) * (1 - seg(p, 0.27, 0.32)),
                    transform: `translate(-50%,-50%) translate(0px, ${oh * 0.58}px)`,
                  }}
                  className="!bg-ink !text-ivory"
                >
                  ✓ Wood grain · picked
                </Tag>
                <Tag
                  style={{
                    opacity: seg(p, 0.5, 0.54) * (1 - seg(p, 0.6, 0.64)),
                    transform: `translate(-50%,-50%) translate(0px, ${-oh * 0.68}px) scale(${0.9 + 0.1 * bonded})`,
                  }}
                >
                  Bonded ✓
                </Tag>
                <Tag
                  style={{
                    opacity: seg(p, 0.64, 0.7) * (1 - seg(p, 0.76, 0.8)),
                    transform: `translate(-50%,-50%) translate(0px, ${-oh * 0.7}px)`,
                  }}
                >
                  Wardrobe
                </Tag>
                <Tag
                  style={{
                    opacity: stamp,
                    transform: `translate(-50%,-50%) translate(0px, ${-H * 0.4 + (1 - stamp) * -12}px) rotate(${-3 * stamp}deg)`,
                  }}
                  className="!bg-brand-amber"
                >
                  Same-day · Hyderabad
                </Tag>
              </>
            )}
          </div>
        </div>

        {/* scroll hint */}
        <div
          className="pointer-events-none absolute bottom-3 right-5 hidden text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 transition-opacity duration-500 lg:block"
          style={{ opacity: p < 0.03 ? 1 : 0 }}
        >
          Keep scrolling ↓
        </div>
      </div>
    </section>
  );
}
