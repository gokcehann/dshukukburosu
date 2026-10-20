import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';
import { EmailLink } from '@/components/ui/EmailLink';

// Social media SVG components
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-primary text-gray-300 pt-10 pb-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Üst Kısım: Sütunlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">

          {/* 1. Logo & Sosyal Medya */}
          <div className="flex flex-col justify-between lg:col-span-1">
            <div>
              <Link href="/" title="D&S Hukuk Bürosu Ana Sayfa">
                <Image 
                  src="/logo.png" 
                  alt="D&S Hukuk Bürosu Logo" 
                  width={90} 
                  height={90} 
                  className="h-24 w-auto object-contain self-start opacity-90 hover:opacity-100 transition-opacity" 
                />
              </Link>
              <p className="mt-3 text-xs text-gray-400 leading-relaxed font-sans">
                Erzurum Avukatlık ve Hukuki Danışmanlık Bürosu
              </p>
            </div>

            {/* Sosyal Medya Bağlantıları */}
            <div className="mt-6 flex items-center gap-3">
              <a 
                href="https://www.instagram.com/dshukuk" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="D&S Hukuk Instagram Profili"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://www.linkedin.com/company/ds-hukuk-burosu" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="D&S Hukuk LinkedIn Sayfası"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon />
              </a>
              <a 
                href="https://twitter.com/dshukuk" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="D&S Hukuk X (Twitter) Profili"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <XIcon />
              </a>
              <a 
                href="https://www.facebook.com/dshukuk" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="D&S Hukuk Facebook Sayfası"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://www.youtube.com/@dshukuk" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="D&S Hukuk YouTube Kanalı"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* 2. Hızlı Menü */}
          <div className="lg:col-span-1">
            <p className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Sayfalar</p>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/" title="D&S Hukuk Bürosu Ana Sayfa" className="hover:text-white text-gray-400 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" title="D&S Hukuk Bürosu Hakkımızda" className="hover:text-white text-gray-400 transition-colors">Hakkımızda</Link></li>
              <li><Link href="/hizmetler" title="D&S Hukuk Bürosu Çalışma Alanlarımız" className="hover:text-white text-gray-400 transition-colors">Hizmetlerimiz</Link></li>
              <li><Link href="/sikca-sorulan-sorular" title="D&S Hukuk Sıkça Sorulan Sorular (SSS)" className="hover:text-white text-gray-400 transition-colors">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/#avukatlarimiz" title="D&S Hukuk Kurucu Avukatlarımız" className="hover:text-white text-gray-400 transition-colors">Avukatlarımız</Link></li>
              <li><Link href="/#yorumlar" title="Google Müvekkil Yorumları ve Değerlendirmeleri" className="hover:text-white text-gray-400 transition-colors">Google Yorumları</Link></li>
              <li><Link href="/blog" title="Hukuki Makaleler ve Güncel Bilgiler" className="hover:text-white text-gray-400 transition-colors">Makaleler</Link></li>
              <li><Link href="/iletisim" title="D&S Hukuk Bürosu İletişim Bilgileri" className="hover:text-white text-gray-400 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* 3. Çalışma Alanlarımız */}
          <div className="lg:col-span-2">
            <p className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Uzmanlık Alanları</p>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><Link href="/hizmetler/is-hukuku" className="hover:text-white transition-colors">İş ve Sosyal Güvenlik Hukuku</Link></li>
                <li><Link href="/hizmetler/ceza-hukuku" className="hover:text-white transition-colors">Ceza Hukuku & Ağır Ceza</Link></li>
                <li><Link href="/hizmetler/aile-hukuku" className="hover:text-white transition-colors">Aile ve Boşanma Hukuku</Link></li>
                <li><Link href="/hizmetler/idare-ve-vergi-hukuku" className="hover:text-white transition-colors">İdare ve Vergi Hukuku</Link></li>
                <li><Link href="/hizmetler/gayrimenkul-hukuku" className="hover:text-white transition-colors">Gayrimenkul ve Kira Hukuku</Link></li>
              </ul>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><Link href="/hizmetler/miras-hukuku" className="hover:text-white transition-colors">Miras Hukuku</Link></li>
                <li><Link href="/hizmetler/cevre-hukuku" className="hover:text-white transition-colors">Çevre Hukuku</Link></li>
                <li><Link href="/hizmetler/spor-hukuku" className="hover:text-white transition-colors">Spor Hukuku</Link></li>
                <li><Link href="/hizmetler/basin-hukuku" className="hover:text-white transition-colors">Basın Hukuku</Link></li>
                <li><Link href="/hizmetler" className="hover:text-accent transition-colors font-medium">Tüm Hizmetleri Gör &rarr;</Link></li>
              </ul>
            </div>
          </div>

          {/* 4. İletişim Bilgileri */}
          <div className="lg:col-span-1">
            <p className="text-white text-xs font-semibold tracking-widest uppercase mb-4">İletişim</p>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <address 
                  itemProp="address" 
                  itemScope 
                  itemType="https://schema.org/PostalAddress" 
                  className="not-italic text-xs text-gray-400"
                >
                  <a 
                    href="https://maps.app.goo.gl/AdUHwUWpqg55JBdk6?g_st=iw" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Google Haritalar üzerinde ofis konumu" 
                    className="hover:text-white leading-relaxed block"
                  >
                    <span itemProp="streetAddress">Ömer Nasuhi Bilmen Mh. İstanbul Kapı Cd. Gümrük Sk. Necati Kervancı Apt. K:6/13</span>{" "}
                    <span itemProp="postalCode">25100</span> <span itemProp="addressLocality">Yakutiye</span> / <span itemProp="addressRegion">Erzurum</span>
                  </a>
                </address>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+905326814345" title="Av. Onur Demirceylan Telefon: +90 532 681 43 45" className="hover:text-white font-medium">+90 532 681 43 45</a>
                  <a href="tel:+905325631073" title="Av. Muhammed Melih Şahin Telefon: +90 532 563 10 73" className="hover:text-white font-medium">+90 532 563 10 73</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <EmailLink className="hover:text-white transition-colors" />
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Çizgi ve Telif Hakkı */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-[11px] sm:text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} D&S Hukuk - Demirceylan & Şahin Hukuk Bürosu. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-500 text-[11px] sm:text-xs text-center md:text-right">
            Designed by Gökçehan Özdemir
          </p>
        </div>
      </div>
    </footer>
  );
};
