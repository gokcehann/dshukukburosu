"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import { ExternalLink, PenLine, CheckCircle2 } from 'lucide-react';
import { googleReviewsSummary } from '@/data/reviews';

// Google Official "G" Icon
const GoogleIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      fill="#4285F4"
    />
    <path
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"
      fill="#34A853"
    />
    <path
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.97 0 12s.45 3.84 1.24 5.42l4.04-3.15z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      fill="#EA4335"
    />
  </svg>
);

export const GoogleReviews: React.FC = () => {
  useEffect(() => {
    // If Elfsight platform script is already loaded on client navigation, trigger re-initialization
    if (typeof window !== 'undefined' && (window as any).eapps) {
      try {
        (window as any).eapps.init?.();
      } catch (err) {
        // silent fail
      }
    }
  }, []);

  return (
    <section id="yorumlar" className="py-24 bg-gradient-to-b from-white via-cream/40 to-white relative overflow-hidden">
      {/* Elfsight Platform Script */}
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).eapps) {
            try {
              (window as any).eapps.init?.();
            } catch (err) {
              // silent fail
            }
          }
        }}
      />

      {/* Arka Plan Dekoratif Işık Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Üst Başlık ve Doğrudan Google İşlemleri */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
              <GoogleIcon className="w-4 h-4" />
              <span>Google İşletme Değerlendirmeleri</span>
              <span className="inline-flex items-center gap-1 ml-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                CANLI YORUMLAR
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight leading-tight">
              Müvekkillerimizin Gözünden<br />
              <span className="text-accent">D&S Hukuk Bürosu</span>
            </h2>
            <p className="mt-4 text-text-light max-w-xl text-base leading-relaxed">
              Hukuki süreçlerinde güvenle yanlarında yer aldığımız müvekkillerimizin Google Haritalar üzerindeki gerçek, bağımsız ve canlı değerlendirmeleri.
            </p>
          </div>

          {/* Hızlı Erişim Butonları */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
            <a
              href={googleReviewsSummary.googleReviewWriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors shadow-sm"
            >
              <PenLine className="w-4 h-4" />
              <span>Google'da Yorum Yaz</span>
            </a>
            <a
              href={googleReviewsSummary.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold rounded-lg bg-white text-text-dark hover:bg-gray-50 transition-colors border border-gray-200/80 shadow-sm"
            >
              <GoogleIcon className="w-4 h-4" />
              <span>Haritada İncele</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Elfsight Canlı Google Yorumları Widget'ı */}
        <div className="min-h-[220px] bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
          <div className="elfsight-app-1a423fe3-567f-4991-b194-d89602bb99dc" data-elfsight-app-lazy />
        </div>

        {/* Alt Çağrı Kartı: Google'da Yorum Yapmaya Teşvik */}
        <div className="mt-14 bg-[#1A1D20] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl border border-white/10">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-wider uppercase mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Deneyiminiz Bizim İçin Değerli</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                Daha Önce D&S Hukuk ile Çalıştınız mı?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Hukuki danışmanlık veya dava takibi hizmeti aldıysanız, Google Haritalar profilimizde görüşlerinizi paylaşarak hem ekibimize destek olabilir hem de hukuki yardıma ihtiyaç duyan diğer müvekkillere yol gösterebilirsiniz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href={googleReviewsSummary.googleReviewWriteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-none bg-accent text-white font-medium hover:bg-accent-hover transition-colors shadow-lg cursor-pointer"
              >
                <PenLine className="w-4 h-4" />
                <span>Google'da Yorum Bırakın</span>
              </a>
              <a
                href={googleReviewsSummary.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-none border border-white/30 text-white font-medium hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>Google Haritalar Profili</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
