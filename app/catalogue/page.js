import PageHeader from "@/components/PageHeader";
import CatalogueGrid from "@/components/CatalogueGrid";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Catalogue",
  description:
    "Browse the six Sri Ambica Laminates collections — PRIONEX, PAXORA, PLAINX, RANGREZ, PLEXA and WOODMA — as PDFs on Google Drive.",
  alternates: { canonical: "/catalogue" },
};

export default function CataloguePage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Six collections. *Every* finish you'll need."
        text="Open each catalogue as a PDF to browse online, download, or share with your client, carpenter or designer."
      />
      <CatalogueGrid />
      <div className="pt-16">
        <CTABand
          title="Found a finish you love?"
          text="Send us the code or a screenshot on WhatsApp — we'll confirm availability and arrange same-day delivery."
        />
      </div>
    </>
  );
}
