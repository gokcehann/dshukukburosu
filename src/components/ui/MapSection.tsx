import React from 'react';
import { MapPinAreaIcon as MapPin, PhoneCallIcon as Phone, EnvelopeIcon as Mail, ClockIcon as Clock } from "@/components/ui/CustomIcons";
import { EmailLink } from "@/components/ui/EmailLink";

export const MapSection: React.FC = () => {
  return (
    <section id="iletisim-homepage" className="bg-background py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* İletişim Bilgileri (6 Sütun) */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">
              D&S Hukuk Bürosu İletişim Bilgileri
            </h2>
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

          {/* Google Haritalar (6 Sütun) */}
          <div className="lg:col-span-6 w-full h-[400px] sm:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6120.6138195155345!2d41.25727227731758!3d39.91214747063207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406e5f844a011491%3A0x1528a38d99aad21f!2sD%26S%20Hukuk%20Av.%20Onur%20DEM%C4%B0RCEYLAN%20-%20Av.%20Muhammed%20Melih%20%C5%9EAH%C4%B0N!5e0!3m2!1str!2str!4v1792535100085!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="D&S Hukuk Av. Onur DEMİRCEYLAN - Av. Muhammed Melih ŞAHİN Google Haritalar Konumu"
              className="w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
