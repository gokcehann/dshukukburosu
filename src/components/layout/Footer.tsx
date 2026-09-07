import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <span className="text-4xl font-serif text-accent">D.S.</span>
              <div className="flex flex-col">
                <span className="text-lg tracking-widest uppercase font-semibold">D.S. Hukuk</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Profesyonel, şeffaf ve sonuç odaklı hukuki danışmanlık hizmeti sunuyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-serif text-accent mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {[
                ['Ana Sayfa', '/'],
                ['Hakkımızda', '/hakkimizda'],
                ['Hizmetler', '/hizmetler'],
                ['Blog', '/blog'],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link href={url} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif text-accent mb-4">Uzmanlık Alanlarımız</h3>
            <ul className="space-y-3">
              {[
                ['Ceza Hukuku', '/hizmetler/ceza-hukuku'],
                ['Şirketler Hukuku', '/hizmetler/sirketler-hukuku'],
                ['İş Hukuku', '/hizmetler/is-hukuku'],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link href={url} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif text-accent mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Adres: Hukuk Plaza, Kat:4 No:12, Şişli/İstanbul</li>
              <li>Telefon: +90 (212) 555 01 23</li>
              <li>E-posta: info@dshukuk.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} D.S. Hukuk Bürosu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
