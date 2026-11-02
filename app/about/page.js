import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { Eyebrow, Reveal, SplitText } from "@/components/Reveal";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTABand from "@/components/CTABand";
import { about, team } from "@/lib/site";
import { Heart, Leaf, Shield } from "@/components/Icons";

export const metadata = {
  title: "About",
  description:
    "The story behind Sri Ambica Laminates — our mission, vision and values, and the team supplying premium laminates across Hyderabad.",
  alternates: { canonical: "/about" },
};

const pillars = [
  { icon: Shield, title: "Our mission", text: about.mission },
  { icon: Leaf, title: "Our vision", text: about.vision },
  { icon: Heart, title: "Our values", text: about.values },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A trusted partner in *quality* laminate."
        text="Sri Ambica Laminates supplies decorative laminate sheets to retailers, carpenters and designers across Hyderabad and beyond."
      />

      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-ink/10">
              <Image
                src="/img/scene-office.webp"
                alt="An office finished in warm wood laminate"
                fill
                sizes="(max-width: 1024px) 92vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-2xl font-medium leading-tight text-ivory md:text-3xl">
                Surfaces that make rooms feel finished.
              </p>
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <Eyebrow>Our story</Eyebrow>
            <SplitText
              text="From a single sheet to *bulk orders* — with the same care."
              className="mt-6 font-display text-[clamp(2.2rem,4.4vw,3.8rem)] font-medium leading-[1.04] tracking-[-0.03em] text-balance"
            />
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted">
                Based in Mangalhat, Hyderabad, we built Sri Ambica Laminates around a simple promise: premium
                laminate, honest prices and delivery that actually shows up — often the same day.
              </p>
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted">
                Retailers rely on us for dependable stock. Carpenters and designers rely on us for finishes that look
                as good on the furniture as they do in the catalogue. Whatever the order size, you get the same
                attention.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <article className="h-full rounded-[2rem] bg-ivory p-8 ring-1 ring-ink/10 md:p-10">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand-deep">
                  <Icon className="h-6 w-6" />
                </span>
                <h2 className="mt-8 font-display text-3xl font-medium tracking-tight">{title}</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats />

      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>The people</Eyebrow>
          <SplitText
            text="Meet the *team* on the other end of the phone."
            className="mt-6 max-w-3xl font-display text-[clamp(2.2rem,4.8vw,4rem)] font-medium leading-[1.04] tracking-[-0.03em] text-balance"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="flex items-center gap-6 rounded-[2rem] border border-ink/10 p-6 md:p-8">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[1.4rem] bg-paper md:h-36 md:w-36">
                    <Image src={t.image} alt={t.name} fill sizes="150px" className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">{t.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-brand-blue">{t.role}</p>
                    <a href={`tel:${t.tel}`} className="mt-4 inline-block text-[15px] font-semibold hover:text-brand-blue">
                      {t.phone}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <div className="pt-24">
        <CTABand />
      </div>
    </>
  );
}
