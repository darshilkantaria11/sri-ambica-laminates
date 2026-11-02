"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { nav, site, waLink, directionsUrl } from "@/lib/site";
import { Close, Menu, Whatsapp, Phone, Pin, ArrowUpRight } from "./Icons";

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const { scrollY } = useScroll();

  // Hide on scroll down, reveal on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    if (y > prev && y > 260 && !open) setHidden(true);
    else if (y < prev) setHidden(false);
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const highlight = hovered ?? nav.find((l) => isActive(l.href))?.href;

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open ? "-130%" : "0%" }}
        transition={{ duration: 0.55, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:px-6 md:pt-5"
      >
        <nav
          aria-label="Primary"
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border py-2 pl-3 pr-2 transition-all duration-500 md:pl-4 ${
            scrolled || open
              ? "border-ink/10 bg-ivory/85 shadow-[0_12px_40px_-18px_rgba(16,24,40,0.4)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Sri Ambica Laminates — home">
            <Image src="/logo.png" alt="" width={44} height={28} priority className="h-8 w-auto md:h-9" />
            <span className="leading-none">
              <span className="block whitespace-nowrap font-display text-[1.15rem] font-semibold tracking-tight md:text-xl">
                Sri Ambica
              </span>
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.42em] text-ink/55">
                Laminates
              </span>
            </span>
          </Link>

          <ul className="hidden items-center md:flex" onMouseLeave={() => setHovered(null)}>
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onMouseEnter={() => setHovered(l.href)}
                  className="relative block px-3 py-2 text-sm font-semibold text-ink/80 transition-colors hover:text-ink lg:px-4"
                >
                  {highlight === l.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-ink/[0.07]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={waLink("Hello Sri Ambica Laminates! I'd like to request laminate samples.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Request samples on WhatsApp"
              className="group hidden items-center gap-2 rounded-full bg-ink px-3 py-3 text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-brand-blue md:inline-flex lg:px-5 lg:py-2.5"
            >
              <Whatsapp className="h-4 w-4" />
              <span className="hidden whitespace-nowrap lg:inline">Request samples</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-11 w-11 place-items-center rounded-full bg-ink text-ivory md:hidden"
            >
              {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-ivory px-6 pb-8 pt-28 md:hidden"
            initial={{ clipPath: "circle(0% at 92% 5%)" }}
            animate={{ clipPath: "circle(150% at 92% 5%)" }}
            exit={{ clipPath: "circle(0% at 92% 5%)" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="flex flex-1 flex-col justify-center gap-1">
              {nav.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: EASE }}
                >
                  <Link
                    href={l.href}
                    className="flex items-baseline gap-4 border-b border-ink/10 py-4"
                  >
                    <span className="text-xs font-bold tabular-nums text-brand-amber">0{i + 1}</span>
                    <span
                      className={`font-display text-[2.6rem] font-medium leading-none tracking-tight ${
                        isActive(l.href) ? "italic text-brand-blue" : ""
                      }`}
                    >
                      {l.name}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: EASE }}
              className="space-y-3"
            >
              <a
                href={waLink("Hello Sri Ambica Laminates! I'd like to know more about your laminates.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl bg-[#1E9E52] px-5 py-4 font-semibold text-white"
              >
                <span className="flex items-center gap-3">
                  <Whatsapp className="h-5 w-5" /> Chat on WhatsApp
                </span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
                <a
                  href={`tel:${site.whatsapp ? "+" + site.whatsapp : ""}`}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-ink/15 py-3.5"
                >
                  <Phone className="h-4 w-4" /> Call us
                </a>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-ink/15 py-3.5"
                >
                  <Pin className="h-4 w-4" /> Directions
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
