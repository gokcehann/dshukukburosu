"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "D&S Hukuk Bürosu'ndan nasıl hukuki danışmanlık veya dava randevusu alabilirim?",
    answer: "Hukuki uyuşmazlığınız veya danışmanlık talepleriniz için web sitemizdeki iletişim formunu doldurabilir, +90 532 681 43 45 veya +90 532 563 10 73 numaralı telefonlarımızdan doğrudan arayabilir ya da WhatsApp üzerinden kurucu avukatlarımızla hızlıca irtibat kurarak randevunuzu planlayabilirsiniz."
  },
  {
    question: "D&S Hukuk Bürosu hangi alanlarda avukatlık ve hukuki danışmanlık hizmeti sunmaktadır?",
    answer: "Büromuz; Ceza Hukuku, İş ve Sosyal Güvenlik Hukuku, Aile ve Boşanma Hukuku, Gayrimenkul ve Kira Hukuku, İdare ve Vergi Hukuku, Miras Hukuku, Ticaret Hukuku ve İcra-İflas Hukuku başta olmak üzere geniş bir yelpazede bireysel ve kurumsal müvekkillerine profesyonel dava ve danışmanlık hizmeti sağlamaktadır."
  },
  {
    question: "Erzurum dışındaki çevre illerde ve Türkiye genelinde dava takibi yapıyor musunuz?",
    answer: "Evet. D&S Hukuk Bürosu merkez olarak Erzurum'da bulunmakla birlikte; Doğu Anadolu Bölgesi'ndeki çevre iller başta olmak üzere Türkiye genelinde yetkili adliyelerde dava, duruşma ve icra takiplerini müvekkilleri adına yürütmektedir."
  },
  {
    question: "Dava açmadan önce arabuluculuk veya uzlaşma süreci nasıl işlemektedir?",
    answer: "Türk Hukuku mevzuatına göre İş Hukuku tazminat ve alacak davaları, ticari uyuşmazlıklar ve kira tespit/tahliye davalarında dava açmadan önce zorunlu arabuluculuk süreci şarttır. D&S Hukuk Bürosu, müvekkillerinin hak kaybına uğramaması adına arabuluculuk müzakerelerinde profesyonel hukuki temsil sağlamaktadır."
  },
  {
    question: "Avukatlık ve hukuki danışmanlık vekalet ücreti nasıl belirlenir?",
    answer: "Avukatlık ücretleri; davanın niteliği, kapsamı, uyuşmazlığın konusu ve sarf edilecek hukuki mesai dikkate alınarak Türkiye Barolar Birliği (TBB) ve Erzurum Barosu tarafından her yıl yayımlanan Avukatlık Asgari Ücret Tarifesi esas alınarak taraflarca serbestçe kararlaştırılır."
  },
  {
    question: "Dava dosyamın ve hukuki sürecimin aşamalarını nasıl takip edebilirim?",
    answer: "Müvekkillerimiz, e-Devlet ve UYAP Vatandaş Portalı üzerinden dosyalarındaki tüm tensip, duruşma zaptı ve kararları anlık inceleyebildikleri gibi; büromuz avukatları her duruşma ve tebligat sonrasında müvekkillerine şeffaf ve düzenli bilgi aktarımı yapmaktadır."
  },
  {
    question: "Avukata vekaletname nasıl ve nereden çıkarılır?",
    answer: "Vekaletname, Türkiye'deki herhangi bir noterlikten; yurt dışında bulunuyorsanız Türkiye Cumhuriyeti Konsolosluklarından çıkarılabilmektedir. Kurucu avukatlarımız Av. Onur Demirceylan (Erzurum Barosu Sicil No: 903) ve Av. Muhammed Melih Şahin (Erzurum Barosu Sicil No: 911) adına genel dava vekaletnamesi düzenletebilirsiniz. Boşanma ve taşınmaz davaları için fotoğraflı ve özel yetkili vekaletname gerekmektedir."
  },
  {
    question: "Online veya uzaktan hukuki danışmanlık hizmetiniz var mı?",
    answer: "Evet. Erzurum dışında veya yurt dışında ikamet eden müvekkillerimiz için Zoom, Google Meet, telefon ve WhatsApp üzerinden randevulu online hukuki danışmanlık hizmeti sunmaktayız. Belgeleriniz güvenli dijital kanallardan incelenerek hukuki yol haritanız şeffaf biçimde sunulur."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
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

      </div>
    </section>
  );
};
