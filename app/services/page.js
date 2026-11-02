import PageHeader from "@/components/PageHeader";
import { Reveal, Eyebrow, SplitText } from "@/components/Reveal";
import { iconMap } from "@/components/Icons";
import { reasons, services, process as steps } from "@/lib/site";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Services",
  description:
    "Same-day delivery in Hyderabad, bulk laminate supply for retailers and call & WhatsApp support — the services behind Sri Ambica Laminates.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Supply that moves *as fast* as your project."
        text="From a single sheet to a full shop order — delivery, stock and support, handled by people who know laminate."
      />

      {/* Core services */}
      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || iconMap.layers;
            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-[2rem] border border-ink/10 bg-ivory p-8 transition-all duration-700 ease-expo hover:-translate-y-2 hover:shadow-[0_40px_80px_-44px_rgba(16,24,40,0.55)] md:p-10">
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-soft opacity-0 transition-all duration-700 ease-expo group-hover:scale-125 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-ink text-ivory transition-colors duration-500 group-hover:bg-brand-blue">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-8 font-display text-3xl font-medium leading-tight tracking-tight">{s.title}</h2>
                    <p className="mt-4 text-[16px] leading-relaxed text-muted">{s.text}</p>
                    <ul className="mt-7 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <li key={t} className="rounded-full bg-paper px-3.5 py-1.5 text-xs font-bold tracking-wide text-ink/70">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-paper px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Why Sri Ambica</Eyebrow>
          <SplitText
            text="The difference you'll *feel* on day one."
            className="mt-6 max-w-3xl font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance"
          />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => {
              const Icon = iconMap[r.icon] || iconMap.sparkle;
              return (
                <Reveal key={r.title} delay={i * 0.08}>
                  <div className="border-t border-ink/15 pt-6">
                    <Icon className="h-7 w-7 text-brand-blue" />
                    <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">{r.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{r.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Simple by design</Eyebrow>
          <SplitText
            text="Order in *four* moves."
            className="mt-6 font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.03em]"
          />
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-[1.6rem] border border-ink/10 p-7">
                  <span className="font-display text-5xl font-medium text-outline">{s.n}</span>
                  <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTABand title="Need laminate delivered today?" />
    </>
  );
}
