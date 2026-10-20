import { Metadata } from "next";
import Link from "next/link";
import { FAQContainer } from "@/components/ui/FAQContainer";
import { allFaqs } from "@/data/faqs";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular (SSS) | D&S Hukuk Bürosu Erzurum",
  description: "Erzurum D&S Hukuk Bürosu; avukatlık vekalet ücreti, dava açma, boşanma, ceza ve iş davalarına dair sıkça sorulan soruları yanıtlıyor.",
  alternates: {
    canonical: "https://www.dshukukerzurum.com/sikca-sorulan-sorular",
  },
  openGraph: {
    title: "Sıkça Sorulan Sorular (SSS) | D&S Hukuk Bürosu Erzurum",
    description: "Erzurum D&S Hukuk Bürosu; avukatlık vekalet ücreti, dava açma, boşanma, ceza ve iş davalarına dair sıkça sorulan soruları yanıtlıyor.",
    url: "https://www.dshukukerzurum.com/sikca-sorulan-sorular",
    locale: "tr_TR",
    type: "website",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      {/* SSS Schema.org Yapısal Verisi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <div className="bg-primary pt-36 pb-20 md:pt-44 md:pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cfa767_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent">Sıkça Sorulan Sorular</span>
          </nav>

          <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/40 text-accent text-xs font-semibold tracking-widest uppercase mb-4 rounded-sm">
            HUKUKİ REHBER & MERAK EDİLENLER
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
            Sıkça Sorulan Sorular
          </h1>

          <div className="w-20 h-0.5 bg-accent mx-auto mb-6" />

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            D&S Hukuk Bürosu'nun avukatlık hizmetleri, vekaletname çıkarma prosedürleri, adli yargılama aşamaları ve hukuki danışmanlık süreçlerine dair merak edilen soruların detaylı yanıtları.
          </p>
        </div>
      </div>

      {/* İnteraktif SSS İçerik Alanı */}
      <div className="bg-[#FAF8F5] min-h-[600px]">
        <FAQContainer />
      </div>
    </>
  );
}
