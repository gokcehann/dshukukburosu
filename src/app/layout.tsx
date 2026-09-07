import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

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
  title: {
    template: "%s | D.S. Hukuk Bürosu",
    default: "D.S. Hukuk Bürosu | Profesyonel Hukuki Danışmanlık",
  },
  description: "D.S. Hukuk Bürosu, uzman avukat kadrosuyla ceza hukuku, şirketler hukuku ve iş hukuku alanlarında güvenilir ve sonuç odaklı hizmet sunar.",
  openGraph: {
    title: "D.S. Hukuk Bürosu | Profesyonel Hukuki Danışmanlık",
    description: "D.S. Hukuk Bürosu, uzman avukat kadrosuyla ceza hukuku, şirketler hukuku ve iş hukuku alanlarında güvenilir ve sonuç odaklı hizmet sunar.",
    locale: "tr_TR",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "D.S. Hukuk Bürosu",
  "image": "https://dshukuk.com/logo.png",
  "url": "https://dshukuk.com",
  "telephone": "+902125550123",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hukuk Plaza, Kat:4 No:12",
    "addressLocality": "Şişli",
    "addressRegion": "İstanbul",
    "postalCode": "34000",
    "addressCountry": "TR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased flex flex-col min-h-screen bg-[var(--color-background)] text-[var(--color-text-dark)]`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
