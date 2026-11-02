import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Preloader from "@/components/Preloader";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { site } from "@/lib/site";

// Display serif with optical sizing — sharp at poster sizes, sturdy at text sizes.
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sri Ambica Laminates — Premium laminate sheets in Hyderabad",
    template: "%s | Sri Ambica Laminates",
  },
  description:
    "Premium decorative laminate sheets for furniture and interiors. Six curated collections, same-day delivery in Hyderabad, from a single sheet to bulk orders.",
  keywords: [
    "Sri Ambica Laminates",
    "laminate sheets Hyderabad",
    "decorative laminates",
    "furniture laminates",
    "laminate suppliers Telangana",
    "Prionex",
    "Paxora",
    "Plainx",
    "Rangrez",
    "Plexa",
    "Woodma",
  ],
  openGraph: {
    title: "Sri Ambica Laminates — Where surfaces tell stories",
    description:
      "Premium decorative laminates for furniture and interiors. Same-day delivery in Hyderabad.",
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Sri Ambica Laminates" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Ambica Laminates",
    description: "Premium decorative laminates for furniture and interiors.",
    images: ["/og.jpg"],
  },
};

export const viewport = {
  themeColor: "#FBF8F2",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/og.jpg`,
  telephone: "+917016079345",
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.pin,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "11:00",
    closes: "21:00",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Providers>
          <Preloader />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFab />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
