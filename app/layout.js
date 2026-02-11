import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./nopage/components/navbar";
import Footer from "./nopage/components/footer";
import Preloader from "./nopage/components/preloader";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.sriambicalaminates.com/"),
  title: "SRI AMBICA LAMINATES",
  description: "Sri Ambica Laminates offers high-quality laminate solutions for all your needs. Explore our wide range of products today!",
  keywords: [
    "Sri Ambica Laminates",
    "laminates suppliers",
    "high-quality laminates",
    "laminates solutions",
    "laminates for furniture",
    "laminate products",
  ],
  openGraph: {
    title: "SRI AMBICA LAMINATES",
    description: "Discover the finest laminate solutions with Sri Ambica Laminates. Perfect for all your furniture and decor needs.",
    url: "https://www.sriambicalaminates.com/",
    siteName: "Sri Ambica Laminates",
    type: "website",
    images: ["https://www.sriambicalaminates.com/Logo.png"], // Replace with the actual logo URL
  },
  twitter: {
    card: "summary_large_image",
    title: "SRI AMBICA LAMINATES",
    description: "Explore premium laminate solutions with Sri Ambica Laminates. Perfect for enhancing furniture and interiors.",
    images: ["https://www.sriambicalaminates.com/Logo.png"], // Replace with the actual logo URL
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Business",
    "name": "Sri Ambica Laminates",
    "url": "https://www.sriambicalaminates.com",
    "logo": "https://www.sriambicalaminates.com/Logo.png", // Replace with the actual logo URL
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7016079345", // Replace with actual contact details
      "contactType": "Customer Service",
      "email": "sriambicalaminates@gmail.com", // Replace with actual email
      "areaServed": "IN",
      "availableLanguage": ["English"],
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "13-1-492 , Ground floor, Mangalhat Market Road, Near Durga Tent House, Doodh Kahan",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500006",
      "addressCountry": "IN",
    },
   
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      
    },
  };

  return (
    <html lang="en">
      <Head>
        {/* Google Analytics */}
       
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" bg-white">
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
