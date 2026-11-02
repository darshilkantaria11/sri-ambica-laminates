"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { collections, directionsUrl, nav, site, team, waLink } from "@/lib/site";
import { ArrowUpRight, Mail, Phone, Pin, Clock } from "./Icons";
import { Reveal } from "./Reveal";
import Magnetic from "./Magnetic";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-10 overflow-hidden bg-paper pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Big call-out */}
        <div className="flex flex-col gap-10 border-b border-ink/10 pb-14 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="max-w-xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-6xl">
              Have a project in mind? <span className="italic text-brand-blue">Let&apos;s dress it well.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Magnetic>
              <a
                href={waLink("Hello Sri Ambica Laminates! I'd like to discuss a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-5 text-base font-semibold text-ivory transition-colors duration-300 hover:bg-brand-blue"
              >
                Start on WhatsApp
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Magnetic>
          </Reveal>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/logo.png" alt="" width={56} height={36} className="h-10 w-auto" />
              <span>
                <span className="block font-display text-2xl font-semibold leading-none">Sri Ambica</span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.45em] text-ink/55">
                  Laminates
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-muted">
              Premium decorative laminates for furniture and interiors — delivered the same day across Hyderabad.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-1.5 font-semibold">
                    <span className="bg-gradient-to-r from-ink to-ink bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ease-expo group-hover:bg-[length:100%_1.5px]">
                      {l.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">Collections</h3>
            <ul className="mt-5 space-y-3">
              {collections.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/catalogue#${c.id}`}
                    className="inline-flex items-center gap-2.5 text-[15px] font-medium text-ink/80 transition-colors hover:text-ink"
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink/50">Reach us</h3>
            <ul className="mt-5 space-y-4 text-[15px]">
              {team.map((t) => (
                <li key={t.tel} className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />
                  <a href={`tel:${t.tel}`} className="font-semibold hover:text-brand-blue">
                    {t.phone}
                    <span className="block text-xs font-medium text-muted">{t.name} · {t.role}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />
                <a href={`mailto:${site.email}`} className="break-all font-semibold hover:text-brand-blue">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Pin className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />
                <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-brand-blue">
                  {site.address.line1}, {site.address.line2}, {site.address.city}, {site.address.state} {site.address.pin}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />
                <span className="font-semibold">{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="pointer-events-none select-none px-2 pb-2 text-center" aria-hidden="true">
        <motion.div
          initial={{ y: "40%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[17.5vw] font-semibold leading-[0.82] tracking-[-0.04em] text-ink/[0.07] md:text-[15.5vw]"
        >
          Ambica<span className="italic text-brand-amber/40">.</span>
        </motion.div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs font-medium text-muted md:flex-row md:px-10">
          <p>© {year} Sri Ambica Laminates. All rights reserved.</p>
          <p>Hyderabad, Telangana · Crafted with care</p>
        </div>
      </div>
    </footer>
  );
}
