import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "../lenis/Lenis";
import ScrollProgress from "@/scrollprogress/ScrollProgress";
import Header from "@/header/Header";
import Footer from "@/footer/Footer";
import { useState, useEffect } from "react";
import ApiDataContext from "../context/ApiDataContext";
import { ApiDataProvider } from "@/context/provider";
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
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <ReactLenis root>
        <body className={`${dmSans.variable} antialiased`}>
          <Header />
           <ApiDataProvider>
          <ScrollProgress />
          {children}
          </ApiDataProvider>
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
