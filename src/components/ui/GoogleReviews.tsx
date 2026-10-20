"use client";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, MessageSquareQuote, CheckCircle2, PenLine } from 'lucide-react';
import { mockGoogleReviews, googleReviewsSummary } from '@/data/reviews';
import { IGoogleReview } from '@/types';

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
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: string]: boolean }>({});

  const categories = ['Tümü', 'İş Hukuku', 'Gayrimenkul Hukuku', 'Ceza Hukuku', 'Miras Hukuku', 'Danışmanlık'];

  const filteredReviews = selectedCategory === 'Tümü'
    ? mockGoogleReviews
    : mockGoogleReviews.filter((r) => r.serviceCategory === selectedCategory);

  // Responsive cards per page calculation (3 on desktop)
  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredReviews.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const displayedReviews = filteredReviews.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="yorumlar" className="py-24 bg-gradient-to-b from-white via-cream/40 to-white relative overflow-hidden">
      {/* Arka Plan Dekoratif Işık Efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Başlık ve Google Özet Kartı */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wider uppercase mb-4">
              <GoogleIcon className="w-4 h-4" />
              <span>Google İşletme Değerlendirmeleri</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight leading-tight">
              Müvekkillerimizin Gözünden<br />
              <span className="text-accent">D&S Hukuk Bürosu</span>
            </h2>
            <p className="mt-4 text-text-light max-w-xl text-base">
              Hukuki süreçlerinde güvenle yanlarında yer aldığımız müvekkillerimizin Google Haritalar üzerindeki gerçek ve bağımsız değerlendirmeleri.
            </p>
          </div>

          {/* Google Puan Rozeti */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/80 flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center p-2.5 shadow-inner border border-gray-100">
                <GoogleIcon className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold font-sans text-primary">
                    {googleReviewsSummary.averageRating.toFixed(1)}
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-xs text-text-light font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Google Doğrulanmış Profil</span>
                  <span className="text-gray-300">•</span>
                  <span>{googleReviewsSummary.totalReviews} Değerlendirme</span>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2 w-full sm:w-auto pt-2 sm:pt-0 sm:border-l sm:border-gray-100 sm:pl-6">
              <a
                href={googleReviewsSummary.googleReviewWriteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors shadow-sm"
              >
                <PenLine className="w-3.5 h-3.5" />
                <span>Yorum Yaz</span>
              </a>
              <a
                href={googleReviewsSummary.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-gray-50 text-text-dark hover:bg-gray-100 transition-colors border border-gray-200/60"
              >
                <span>Google'da İncele</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Kategori Filtreleri & Navigasyon Okları */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Filtre Tabları */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-white text-text-light hover:text-primary hover:bg-gray-50 border border-gray-200/70'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Carousel Kontrolleri (Desktop) */}
          {totalPages > 1 && (
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs text-text-light mr-2 font-medium">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Önceki Yorumlar"
                className="w-10 h-10 rounded-full bg-white border border-gray-200/80 flex items-center justify-center text-text-dark hover:bg-accent hover:text-white hover:border-accent transition-colors shadow-sm cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Sonraki Yorumlar"
                className="w-10 h-10 rounded-full bg-white border border-gray-200/80 flex items-center justify-center text-text-dark hover:bg-accent hover:text-white hover:border-accent transition-colors shadow-sm cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Yorum Kartları Izgarası */}
        {displayedReviews.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <MessageSquareQuote className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-text-light text-sm">Bu alanda henüz yorum filtrelenmedi.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedReviews.map((review) => {
              const isExpanded = !!expandedReviews[review.id];
              const isLong = review.text.length > 180;
              const displayText = !isLong || isExpanded ? review.text : `${review.text.slice(0, 180)}...`;

              return (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col justify-between group hover:-translate-y-1 relative"
                >
                  {/* Kart Üst Alanı: Kullanıcı Bilgisi ve Google Simgesi */}
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                          className={`w-12 h-12 rounded-full ${review.avatarBgColor || 'bg-primary'} text-white font-semibold text-sm flex items-center justify-center shadow-inner tracking-wider shrink-0 relative`}
                        >
                          {review.authorInitials}
                          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-100">
                            <GoogleIcon className="w-3.5 h-3.5" />
                          </div>
                        </div>

                        <div>
                          <h4 className="font-bold text-primary text-base leading-snug group-hover:text-accent transition-colors">
                            {review.authorName}
                          </h4>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            {review.authorRole && (
                              <span className="text-[11px] font-medium text-text-light">
                                {review.authorRole}
                              </span>
                            )}
                            <span className="text-gray-300 text-xs">•</span>
                            <span className="text-[11px] text-gray-400">{review.relativeTime}</span>
                          </div>
                        </div>
                      </div>

                      {review.serviceCategory && (
                        <span className="text-[11px] font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                          {review.serviceCategory}
                        </span>
                      )}
                    </div>

                    {/* Yıldızlar */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Yorum Metni */}
                    <p className="text-text-dark/85 text-sm leading-relaxed mb-4">
                      "{displayText}"
                    </p>

                    {isLong && (
                      <button
                        onClick={() => toggleExpand(review.id)}
                        className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors mb-4 inline-block cursor-pointer"
                      >
                        {isExpanded ? 'Daha Az Göster' : 'Devamını Oku'}
                      </button>
                    )}
                  </div>

                  {/* Avukat / Ofis Yanıtı (Varsa) */}
                  {review.reply && (
                    <div className="mt-4 pt-4 border-t border-gray-100 bg-cream/60 rounded-xl p-3.5 text-xs text-text-light">
                      <div className="flex items-center justify-between font-semibold text-primary mb-1">
                        <span className="flex items-center gap-1 text-[11px]">
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          {review.reply.author}
                        </span>
                        <span className="text-[10px] text-gray-400 font-normal">{review.reply.date}</span>
                      </div>
                      <p className="italic text-gray-600 leading-normal">
                        "{review.reply.text}"
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Mobil Carousel Kontrolleri */}
        {totalPages > 1 && (
          <div className="flex sm:hidden items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Önceki Yorumlar"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-dark shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-text-light font-medium">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              aria-label="Sonraki Yorumlar"
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-dark shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Alt Çağrı Kartı: Google'da Değerlendirme Yapmaya Teşvik */}
        <div className="mt-16 bg-[#1A1D20] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl border border-white/10">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-wider uppercase mb-3">
                <GoogleIcon className="w-4 h-4" />
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
                <span>Google'da Yorum Yaz</span>
              </a>
              <a
                href={googleReviewsSummary.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-none border border-white/30 text-white font-medium hover:bg-white/10 transition-colors cursor-pointer"
              >
                <span>Haritada Görüntüle</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
