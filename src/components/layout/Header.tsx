import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-4 group">
              <img 
                src="/logo.png" 
                alt="D&S Hukuk Bürosu Logo" 
                className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="flex flex-col justify-center items-center sm:items-start mt-1">
                <span className="text-xl sm:text-[1.4rem] leading-none font-bold tracking-widest text-white uppercase font-['Times_New_Roman',_Times,_serif] drop-shadow-sm mb-1">D&S HUKUK</span>
                <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] text-gray-200 uppercase leading-snug text-center sm:text-left">DEMİRCEYLAN ŞAHİN<br/>HUKUK BÜROSU</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center flex-1 justify-center">
            {[
              ['Ana Sayfa', '/'],
              ['Avukatlarımız', '/#avukatlarimiz'],
              ['Hakkımızda', '/hakkimizda'],
              ['İletişim', '/#iletisim'],
            ].map(([title, url], idx) => (
              <Link 
                key={title} 
                href={url}
                className={`text-[13px] font-medium transition-all duration-300 relative pb-1 ${idx === 0 ? 'text-white border-b border-[#cfa767]' : 'text-gray-300 hover:text-white'}`}
              >
                {title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-end">
            <Button variant="primary" href="/#iletisim" className="bg-[#cfa767] hover:bg-[#b38f56] text-white font-medium px-6 py-2.5 text-[13px] tracking-wide transition-all duration-300 rounded-sm border-none shadow-none">
              Danışma Talebi
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
