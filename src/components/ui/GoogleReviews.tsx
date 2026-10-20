"use client";

import React, { useEffect, useRef } from 'react';
import { ExternalLink, PenLine, CheckCircle2, Star } from 'lucide-react';
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    // Reset container to avoid duplication on client navigation / fast refresh
    currentContainer.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?6c4b96e844a9037b0e06a69c435';
    script.async = true;
    script.defer = true;

    currentContainer.appendChild(script);

    // If Trustindex library was already loaded globally in this window session, trigger widget initialization
    if (typeof window !== 'undefined' && (window as any).Trustindex) {
      try {
        (window as any).Trustindex.loadWidgetsFromDom?.();
      } catch (err) {
        // silent fallback
      }
    }

    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <section id="yorumlar" className="py-24 bg-gradient-to-b from-white via-cream/40 to-white relative overflow-hidden">
      {/* Arka Plan Dekoratif Işık Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Üst Başlık ve Google Özet Çubuğu */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight leading-tight">
              Müvekkillerimizin Gözünden<br />
              <span className="text-accent">D&S Hukuk Bürosu</span>
            </h2>
          </div>

          {/* Hızlı Erişim ve Yorum Butonları */}
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

        {/* Trustindex Canlı Google Yorumları Widget Kapsayıcısı */}
        <div className="min-h-[220px] bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100/80">
          <div ref={containerRef} className="trustindex-widget-container" />
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
