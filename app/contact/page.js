import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp, email or visit Sri Ambica Laminates in Mangalhat, Hyderabad. Open Monday to Saturday, 11 AM to 9 PM.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk *laminate.*"
        text="Questions, samples, a quote or a same-day delivery — pick whichever way is easiest for you."
      />
      <ContactSection />
    </>
  );
}
