"use client";

import { useEffect, useState } from "react";

// ── tiny math helpers used by scroll-driven scenes ──
export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const seg = (p, a, b) => clamp((p - a) / (b - a));
export const lerp = (a, b, t) => a + (b - a) * t;
export const easeOut = (t) => 1 - Math.pow(1 - t, 3);
export const easeInOut = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * 0 → 1 progress through a tall "pinned" section
 * (0 when its top reaches the viewport top, 1 when its bottom reaches the viewport bottom).
 */
export function useSectionProgress(ref) {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const calc = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const v = total > 0 ? clamp(-r.top / total) : 0;
      setP((prev) => (Math.abs(prev - v) < 0.0004 ? prev : v));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);

  return p;
}

/** Pixel size of an element (kept in sync with a ResizeObserver). */
export function useElementSize(ref) {
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const read = () => {
      const r = el.getBoundingClientRect();
      setSize((s) =>
        Math.abs(s.w - r.width) < 0.5 && Math.abs(s.h - r.height) < 0.5
          ? s
          : { w: r.width, h: r.height }
      );
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);

  return size;
}

/**
 * 0 → 1 as an element's top→bottom passes a reading line (default 60% down the viewport).
 * Good for "draw as you read" effects on normal (non-pinned) sections.
 */
export function useLineProgress(ref, anchor = 0.6) {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const calc = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const v = clamp((window.innerHeight * anchor - r.top) / Math.max(1, r.height));
      setP((prev) => (Math.abs(prev - v) < 0.0004 ? prev : v));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, anchor]);

  return p;
}
