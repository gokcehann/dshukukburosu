import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dshukukerzurum.com"),
  title: {
    template: "%s | D&S Hukuk Bürosu",
    default: "D&S Hukuk Bürosu | Erzurum Avukatlık ve Hukuki Danışmanlık",
  },
  description: "D&S Hukuk Bürosu, uzman avukat kadrosuyla ceza hukuku, şirketler hukuku ve iş hukuku alanlarında güvenilir ve sonuç odaklı hizmet sunar.",
  alternates: {
    canonical: "https://www.dshukukerzurum.com",
  },
  openGraph: {
    title: "D&S Hukuk Bürosu | Erzurum Avukatlık ve Hukuki Danışmanlık",
    description: "D&S Hukuk Bürosu, uzman avukat kadrosuyla ceza hukuku, şirketler hukuku ve iş hukuku alanlarında güvenilir ve sonuç odaklı hizmet sunar.",
    locale: "tr_TR",
    type: "website",
    url: "https://www.dshukukerzurum.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "D&S Hukuk Bürosu",
  "image": "https://www.dshukukerzurum.com/logo.png",
  "url": "https://www.dshukukerzurum.com",
  "telephone": "+905326814345",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ömer Nasuhi Bilmen Mh. İstanbul Kapı Cd. Gümrük Sk. Necati Kervancı Apt. K:6/13",
    "addressLocality": "Yakutiye",
    "addressRegion": "Erzurum",
    "postalCode": "25100",
    "addressCountry": "TR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "24",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text-dark)]`}>
      <JsonLd data={localBusinessSchema} />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
