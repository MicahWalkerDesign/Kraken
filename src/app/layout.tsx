import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kraken Air & Electrical | Perth Northern Suburbs HVAC & Electrician",
  description:
    "Professional air conditioning and electrical services in Perth's Northern Suburbs. Licensed HVAC and electrical technician serving Joondalup, Wanneroo, and surrounding areas.",
  keywords: [
    "Air conditioning Joondalup",
    "Electrician Wanneroo",
    "Perth HVAC",
    "Perth Northern Suburbs electrician",
    "Split system installation Perth",
    "Refrigerant fluids specialist",
  ],
  authors: [{ name: "Kraken Air & Electrical" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Kraken Air & Electrical | Perth Northern Suburbs",
    description:
      "Professional air conditioning and electrical services in Perth's Northern Suburbs.",
    locale: "en_AU",
    type: "website",
    siteName: "Kraken Air & Electrical",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraken Air & Electrical | Perth Northern Suburbs",
    description: "Professional air conditioning and electrical services.",
  },
  metadataBase: new URL("https://krakenairelectrical.com.au"),
  alternates: {
    canonical: "/",
  },
  other: {
    "theme-color": "#121212",
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
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <JsonLd />
      </head>
      <body
        className={`${montserrat.variable} ${roboto.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
