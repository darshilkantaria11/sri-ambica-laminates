"use client";

import { useState } from "react";
import Image from "next/image";
import { directionsUrl, site, team, waLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Clock, Mail, Phone, Pin, Whatsapp, ArrowUpRight, Check } from "./Icons";

const needs = ["Wood grain", "Marble / stone", "Plain colours", "Textures", "Patterns", "Not sure yet"];

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-ink/55">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-2xl border border-ink/12 bg-ivory px-5 py-4 text-[16px] outline-none transition-all duration-300 placeholder:text-ink/30 focus:border-ink focus:ring-4 focus:ring-brand-amber/25";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [picked, setPicked] = useState([]);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const toggle = (n) => setPicked((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      "Hello Sri Ambica Laminates!",
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      picked.length ? `Interested in: ${picked.join(", ")}` : "",
      msg && `Message: ${msg}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const cards = [
    {
      icon: Whatsapp,
      title: "WhatsApp",
      value: site.phone,
      href: waLink("Hello Sri Ambica Laminates!"),
      note: "Fastest replies",
      tone: "bg-[#1E9E52] text-white",
    },
    { icon: Phone, title: "Call", value: site.phone, href: `tel:+${site.whatsapp}`, note: "Mon–Sat, 11–9", tone: "bg-ink text-ivory" },
    { icon: Mail, title: "Email", value: site.email, href: `mailto:${site.email}`, note: "Detailed enquiries", tone: "bg-brand-blue text-white" },
    { icon: Pin, title: "Visit", value: "Mangalhat, Hyderabad", href: directionsUrl, note: "See samples in person", tone: "bg-brand-amber text-ink" },
  ];

  return (
    <>
      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, value, href, note, tone }, i) => (
            <Reveal key={title} delay={i * 0.08} className="min-w-0">
              <a
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.8rem] border border-ink/10 bg-ivory p-7 transition-all duration-700 ease-expo hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-40px_rgba(16,24,40,0.5)]"
              >
                <div className="flex items-start justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tone}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink/30 transition-all duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </div>
                <div className="mt-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink/50">{title}</p>
                  <p className="mt-2 font-display text-xl font-medium leading-snug tracking-tight [overflow-wrap:anywhere]">{value}</p>
                  <p className="mt-1.5 text-sm text-muted">{note}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-paper px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          {/* form */}
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.03em]">
              Tell us what you&apos;re <span className="italic text-brand-blue">building.</span>
            </h2>
            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-muted">
              Fill this in and we&apos;ll open WhatsApp with your details ready to send — no waiting for an email reply.
            </p>

            <form onSubmit={submit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Your name">
                  <input className={inputCls} value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Ravi Kumar" autoComplete="name" />
                </Field>
                <Field label="Phone">
                  <input className={inputCls} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 …" inputMode="tel" autoComplete="tel" />
                </Field>
              </div>

              <div>
                <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-ink/55">What are you after?</span>
                <div className="flex flex-wrap gap-2.5">
                  {needs.map((n) => {
                    const on = picked.includes(n);
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => toggle(n)}
                        aria-pressed={on}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ease-expo ${
                          on ? "border-ink bg-ink text-ivory" : "border-ink/15 bg-ivory hover:border-ink"
                        }`}
                      >
                        {on && <Check className="h-3.5 w-3.5" />} {n}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Field label="Message (optional)">
                <textarea
                  className={`${inputCls} min-h-[8rem] resize-y`}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Quantity, finish codes, delivery area…"
                />
              </Field>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-[#1E9E52] px-8 py-5 text-base font-semibold text-white transition-all duration-300 hover:bg-ink"
              >
                <Whatsapp className="h-5 w-5" />
                {sent ? "Opening WhatsApp…" : "Send on WhatsApp"}
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>

          {/* details */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-[2rem] bg-ivory p-7 ring-1 ring-ink/10 md:p-9">
              <h3 className="font-display text-2xl font-medium tracking-tight">Talk to a person</h3>
              <ul className="mt-6 space-y-5">
                {team.map((t) => (
                  <li key={t.tel}>
                    <a
                      href={`https://wa.me/${t.whatsapp}?text=${encodeURIComponent(`Hello ${t.name.split(" ")[0]}! I'd like to know more about your laminates.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4"
                    >
                      <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-paper">
                        <Image src={t.image} alt={t.name} fill sizes="64px" className="object-cover" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-semibold">{t.name}</span>
                        <span className="block text-sm text-brand-blue">{t.role}</span>
                        <span className="block text-sm text-muted">{t.phone}</span>
                      </span>
                      <Whatsapp className="h-6 w-6 text-[#1E9E52] transition-transform duration-500 ease-expo group-hover:scale-125" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-4 border-t border-ink/10 pt-7 text-[15px]">
                <p className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <span className="font-semibold">{site.hours}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Pin className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                  <span className="leading-relaxed">
                    {site.address.line1}, {site.address.line2}, {site.address.city}, {site.address.state} {site.address.pin}
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-ink/10">
              <iframe
                src={site.mapEmbed}
                title="Sri Ambica Laminates on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-[26rem] w-full grayscale transition-all duration-700 hover:grayscale-0 md:h-[32rem]"
              />
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ivory shadow-lg transition-colors hover:bg-brand-blue"
              >
                <Pin className="h-4 w-4" /> Get directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
