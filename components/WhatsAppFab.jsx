"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { waLink } from "@/lib/site";
import { Whatsapp } from "./Icons";

/** Floating WhatsApp shortcut — appears after the visitor starts scrolling. */
export default function WhatsAppFab() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 480));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          key="fab"
          href={waLink("Hello Sri Ambica Laminates! I have a question about your laminates.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="group fixed bottom-5 right-5 z-[70] md:bottom-7 md:right-7"
        >
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#1E9E52]" />
          <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#1E9E52] text-white shadow-[0_14px_34px_-8px_rgba(30,158,82,0.7)]">
            <Whatsapp className="h-7 w-7" />
          </span>
          <span className="pointer-events-none absolute right-[4.4rem] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs font-semibold text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
            Chat with us
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
