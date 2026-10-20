"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { allFaqs } from '@/data/faqs';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Ana sayfada en çok sorulan ilk 6 soruyu göster
  const featuredFaqs = allFaqs.slice(0, 6);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-24 bg-[#F9F8F6] border-t border-gray-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-widest uppercase mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary tracking-tight">
            Sıkça Sorulan Sorular
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            D&S Hukuk Bürosu'nun avukatlık hizmetleri, vekaletname çıkarma, dava aşamaları ve hukuki danışmanlık süreçlerine dair sıkça karşılaşılan soruların yanıtları.
          </p>
        </div>

        {/* Akordeon Listesi */}
        <div className="space-y-4">
          {featuredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={faq.id} 
                className="bg-white border border-gray-200/80 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg font-serif font-semibold text-primary pr-2">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tüm Sorular Sayfasına Yönlendiren Buton */}
        <div className="mt-12 text-center">
          <Link
            href="/sikca-sorulan-sorular"
            title="D&S Hukuk Bürosu Sıkça Sorulan Sorular Sayfasını Açın"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-xs font-semibold tracking-wider uppercase hover:bg-secondary transition-all shadow-sm"
          >
            <span>Tüm Soru & Cevapları İnceleyin (Kapsamlı SSS Rehberi)</span>
            <ArrowRight className="w-4 h-4 text-accent" />
          </Link>
        </div>

      </div>
    </section>
  );
};
