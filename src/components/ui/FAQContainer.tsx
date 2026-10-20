"use client";

import React, { useState, useMemo } from 'react';
import { ChevronDown, Search, HelpCircle, MessageSquare, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { allFaqs, faqCategories, FAQItem } from '@/data/faqs';
import Link from 'next/link';

export const FAQContainer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'g1': true,
    'g2': true
  });

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Arama ve Filtreleme Bölümü */}
      <div className="mb-12">
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Hukuki soru veya anahtar kelime arayın (örn. vekaletname, arabuluculuk, tazminat)..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-sm text-primary transition-all"
            aria-label="Sorularda Arama Yapın"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 px-2 py-1 bg-gray-100 rounded"
            >
              Temizle
            </button>
          )}
        </div>

        {/* Kategori Sekmeleri */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {faqCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/80'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Soru Sayacı */}
      <div className="flex justify-between items-center mb-6 px-1">
        <p className="text-xs text-gray-500 font-medium">
          Toplam <strong>{filteredFaqs.length}</strong> soru listeleniyor
        </p>
        {activeCategory !== 'all' && (
          <button
            onClick={() => setActiveCategory('all')}
            className="text-xs text-accent hover:underline font-medium"
          >
            Tüm kategorileri göster
          </button>
        )}
      </div>

      {/* Soru Listesi (Akordeon) */}
      {filteredFaqs.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
          <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-serif font-bold text-primary mb-2">Aradığınız Kriterlere Uygun Soru Bulunamadı</h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
            Arama teriminizi değiştirebilir veya doğrudan kurucu avukatlarımızla iletişime geçerek sorunuzu yöneltebilirsiniz.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="px-6 py-2.5 bg-accent text-white text-xs font-semibold rounded-lg hover:bg-accent-hover transition-colors"
          >
            Filtreleri Sıfırla
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white border border-gray-200/80 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="pr-2">
                    <span className="inline-block text-[11px] font-semibold text-accent uppercase tracking-wider mb-1">
                      {faq.categoryTitle}
                    </span>
                    <h2 className="text-base sm:text-lg font-serif font-bold text-primary leading-snug">
                      {faq.question}
                    </h2>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-accent text-white rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    <p className="text-justify">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Alt Destek Kartı */}
      <div className="mt-16 bg-[#1A1D20] rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-wider uppercase mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Hukuki Destek ve Danışmanlık</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Özel Hukuki Durumunuz İçin Danışmanlık Alın
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Her uyuşmazlığın kendine has somut özellikleri ve sürelere tabi yasal prosedürleri vardır. Hak kaybına uğramamak için dosyanızı kurucu avukatlarımızla değerlendirebilirsiniz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href="https://wa.me/905326814345"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp üzerinden hukuki danışmanlık randevusu alın"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-none transition-colors shadow-md text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Randevusu</span>
            </a>
            <Link
              href="/iletisim"
              title="D&S Hukuk İletişim Sayfası"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-white/30 hover:bg-white/10 text-white text-xs font-semibold rounded-none transition-colors text-center"
            >
              <span>İletişime Geçin</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};
