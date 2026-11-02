import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import Statement from "@/components/Statement";
import StoryScroll from "@/components/StoryScroll";
import CollectionsShowcase from "@/components/CollectionsShowcase";
import FinishRail from "@/components/FinishRail";
import InSpaces from "@/components/InSpaces";
import Stats from "@/components/Stats";
import ProcessPath from "@/components/ProcessPath";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Statement />
      <StoryScroll />
      <CollectionsShowcase />
      <FinishRail />
      <InSpaces />
      <Stats />
      <ProcessPath />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  );
}
