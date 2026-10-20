"use client";

import React, { useState } from 'react';
import { MapPinAreaIcon as MapPin, PhoneCallIcon as Phone, EnvelopeIcon as Mail, ClockIcon as Clock } from "@/components/ui/CustomIcons";
import { EmailLink } from "@/components/ui/EmailLink";
import { ExternalLink, Map, Navigation, Star } from "lucide-react";

export const MapSection: React.FC = () => {
  const [showLiveMap, setShowLiveMap] = useState(false);

  return (
    <section id="iletisim-homepage" className="bg-background py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* İletişim Bilgileri (7 Sütun) */}
          <div className="lg:col-span-6">
            <span className="block text-accent font-semibold tracking-widest text-xs uppercase mb-3">
              OFİSİMİZ VE ULAŞIM
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
              D&S Hukuk Bürosu İletişim Bilgileri
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Erzurum Yakutiye merkezindeki ofisimizde müvekkillerimizi ağırlamaktan memnuniyet duyarız. Randevu talepleriniz, ön danışmanlık ve dava süreçleriniz için kurucu avukatlarımızla doğrudan iletişime geçebilirsiniz.
            </p>

            <ul className="space-y-6 text-sm text-text-dark font-medium">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500 mb-0.5 font-sans font-semibold">Ofis Adresi:</span>
                  <address 
                    itemProp="address" 
                    itemScope 
                    itemType="https://schema.org/PostalAddress"
                    className="not-italic"
                  >
                    <a 
                      href="https://maps.app.goo.gl/AdUHwUWpqg55JBdk6?g_st=iw" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      title="Google Haritalar üzerinde D&S Hukuk Bürosu konumu" 
                      className="hover:text-accent leading-relaxed text-gray-800 block"
                    >
                      <span itemProp="streetAddress">Ömer Nasuhi Bilmen Mh. İstanbul Kapı Cd. Gümrük Sk. (Cubpa arkası) Necati Kervancı Apt. K:6/13</span><br />
                      <span itemProp="postalCode">25100</span> <span itemProp="addressLocality">Yakutiye</span> / <span itemProp="addressRegion">ERZURUM</span>
                    </a>
                  </address>
                </div>
              </li>

              <li className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div className="flex flex-col sm:flex-row gap-6">
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">Av. Onur Demirceylan</span>
                    <a href="tel:+905326814345" title="Av. Onur Demirceylan Telefon: +90 532 681 43 45" className="hover:text-accent text-primary font-semibold">
                      +90 532 681 43 45
                    </a>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 mb-0.5">Av. Muhammed Melih Şahin</span>
                    <a href="tel:+905325631073" title="Av. Muhammed Melih Şahin Telefon: +90 532 563 10 73" className="hover:text-accent text-primary font-semibold">
                      +90 532 563 10 73
                    </a>
                  </div>
                </div>
              </li>

              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <span className="block text-xs text-gray-500 mb-0.5">E-posta</span>
                  <EmailLink className="hover:text-accent text-primary font-semibold" />
                </div>
              </li>

              <li className="flex gap-4 items-center">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <span className="block text-xs text-gray-500 mb-0.5">Mesai Saatleri</span>
                  <span className="text-gray-800">Pazartesi - Cuma: 09:00 - 18:00</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Harita & Lokasyon Kartı (6 Sütun) */}
          <div className="lg:col-span-6">
            <div className="bg-[#1A1D20] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-accent/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold tracking-wider uppercase">
                    <Map className="w-4 h-4" />
                    <span>Google Haritalar Konumu</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="font-semibold text-white">5.0</span>
                    <span className="text-gray-300">(24 Yorum)</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                  D&S Hukuk Bürosu Erzurum
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Yakutiye merkezinde yer alan ofisimize Erzurum Adliyesi'nden, Havalimanı ve Terminal hatlarından kolaylıkla ulaşım sağlayabilirsiniz.
                </p>

                {/* Canlı Harita veya Hızlı Yönlendirme */}
                {showLiveMap ? (
                  <div className="w-full h-64 rounded-xl overflow-hidden border border-white/20 mb-4">
                    <iframe
                      src="https://maps.google.com/maps?q=39.9119290908742,41.263239175025014&hl=tr&z=17&output=embed"
                      width="100%"
                      height="100%"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="D&S Hukuk Bürosu Erzurum Konum Haritası"
                      className="border-0 w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">GPS Koordinatları</p>
                      <p className="text-sm font-mono text-accent">39.9119° K, 41.2632° D</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowLiveMap(true)}
                      className="text-xs bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      Canlı Haritayı Yükle
                    </button>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://maps.app.goo.gl/AdUHwUWpqg55JBdk6?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google Haritalar'da D&S Hukuk Bürosu Yol Tarifi Alın"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold rounded-none transition-colors shadow-md text-center"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Google Haritalar'da Yol Tarifi Al</span>
                  </a>
                  <a
                    href="https://www.google.com/maps/place/?q=place_id:ChIJkRQBSoRfbkARH9KqmY2jKBU"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Google Haritalar İşletme Profilini Görüntüleyin"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-transparent border border-white/20 hover:bg-white/10 text-white text-xs font-semibold rounded-none transition-colors text-center"
                  >
                    <span>Profili İncele</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
