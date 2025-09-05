import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "../lenis/Lenis";
import ScrollProgress from "@/scrollprogress/ScrollProgress";
import Header from "@/header/Header";
import Footer from "@/footer/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Elite B Car – Luxury car service NYC, Events & Corporate Travel",
  description:
    "Elite B Car offers luxury chauffeur services in New York City and accessible destinations for weddings, corporate events, airport transfers & more—comfort and elegance.",
  keywords: [
    "Luxury car service NYC",
    "wedding car hire",
    "Luxury transportation Connecticut",
    "Corporate black car service",
    "Exclusive car service NYC",
    "LGA black car service",
    "Long Island limo service",
    "NYC airport executive ride",
    "Elite luxury vehicle transport",
    "JFK airport luxury transfer",
  ],
  alternates: {
    canonical: "https://www.elitebcar.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://elitebcar.com/#localbusiness",
    name: "Elite B Car",
    url: "https://elitebcar.com",
    logo: "https://elitebcar.com/logo.png",
    image: "https://elitebcar.com/fleet.jpg",
    description:
      "Elite B Car offers premium black car and chauffeur services across New York and nearby cities. Luxury sedans, SUVs, and limousines for airport transfers, corporate travel, city tours, and private events.",
    telephone: "+1-866-835-1313",
    email: "info@elitebcar.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Example Street",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "New York City" },
      { "@type": "City", name: "Philadelphia" },
      { "@type": "City", name: "Boston" },
      { "@type": "City", name: "Washington D.C." },
      { "@type": "City", name: "Baltimore" },
    ],
    sameAs: [
      "https://www.instagram.com/elitebcar13/",
      "https://www.facebook.com/elitebcar",
      "https://x.com/elitebcar/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="M_wYaV_WQaXzDlBStbdhT2zr_kFrQ_wGZOwQekhF_Ck"
        />
        <link rel="icon" type="image/png" href="/images/Logo_main1.svg" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9GWNTSX1LX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9GWNTSX1LX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <ReactLenis root>
        <body className={`${dmSans.variable} antialiased`}>
          <Header />
          <ScrollProgress />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
