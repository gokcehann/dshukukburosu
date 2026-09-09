"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    ['Ana Sayfa', '/'],
    ['Avukatlarımız', '/#avukatlarimiz'],
    ['Hakkımızda', '/hakkimizda'],
    ['Makaleler', '/blog'],
    ['İletişim', '/iletisim'],
  ];

  return (
    <>
      {/* Normal Header (At the top) */}
      <header className="absolute top-0 left-0 w-full z-40 bg-transparent text-white pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-center items-center h-24">
            {/* Logo Left */}
            <div className="absolute left-0 flex items-center">
              <Link href="/" className="flex items-center gap-4 group">
                <img 
                  src="/logo.png" 
                  alt="D&S Hukuk Bürosu Logo" 
                  className="h-16 sm:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="flex flex-col justify-center items-start mt-1">
                  <span className="text-xl sm:text-[1.3rem] leading-none font-bold tracking-widest text-white uppercase font-['Times_New_Roman',_Times,_serif] drop-shadow-sm mb-1">D&S HUKUK</span>
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] text-gray-200 uppercase leading-snug">DEMİRCEYLAN & ŞAHİN<br/>HUKUK BÜROSU</span>
                </div>
              </Link>
            </div>

            {/* Navigation Centered (Hidden on scroll or mobile) */}
            <nav className={`hidden lg:flex space-x-10 items-center transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              {navLinks.map(([title, url]) => {
                // Ana sayfa için tam eşleşme, diğer sayfalar için normal eşleşme (çapa linkleri hariç)
                const isActive = url === '/' ? pathname === '/' : pathname === url;
                
                return (
                  <Link 
                    key={title} 
                    href={url}
                    className={`text-[14px] font-medium transition-all duration-300 relative pb-1 ${isActive ? 'text-white border-b border-[#cfa767]' : 'text-gray-300 hover:text-white'}`}
                  >
                    {title}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Floating Menu Button (Appears on scroll on desktop, always on mobile) */}
      <button 
        onClick={() => setIsMenuOpen(true)}
        className={`fixed top-6 right-6 sm:top-8 sm:right-8 z-50 p-3 bg-[#cfa767]/95 hover:bg-[#b38f56] backdrop-blur-sm rounded-full text-white shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-500 ${!isScrolled ? 'lg:opacity-0 lg:pointer-events-none lg:translate-x-20' : 'opacity-100 translate-x-0'}`}
        aria-label="Menüyü Aç"
      >
        <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#0e161c]/95 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 p-3 text-white hover:text-[#cfa767] transition-colors rounded-full hover:bg-white/5"
          aria-label="Menüyü Kapat"
        >
          <X className="w-8 h-8 sm:w-10 sm:h-10" />
        </button>
        
        <nav className="flex flex-col items-center w-full max-h-screen overflow-y-auto py-12 px-4">
          <div className="flex flex-col items-center mb-8 sm:mb-10">
            <img 
              src="/logo.png" 
              alt="D&S Hukuk Bürosu Logo" 
              className="h-16 sm:h-20 w-auto object-contain opacity-80" 
            />
          </div>
          
          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            {navLinks.map(([title, url]) => (
              <Link 
                key={title} 
                href={url}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl sm:text-2xl lg:text-3xl font-['Times_New_Roman',_Times,_serif] tracking-widest text-gray-300 hover:text-white transition-all duration-300 uppercase hover:scale-105"
              >
                {title}
              </Link>
            ))}
          </div>
          
          <div className="mt-10 sm:mt-12 flex flex-col items-center space-y-3 pt-8 border-t border-white/10 w-full max-w-xs">
            <span className="text-[#cfa767] text-[11px] sm:text-xs tracking-widest font-semibold uppercase mb-1">BİZE ULAŞIN</span>
            <a href="tel:+905326814345" className="text-gray-400 hover:text-white transition-colors text-sm">+90 532 681 43 45</a>
            <a href="mailto:dshukukburosu@outlook.com" className="text-gray-400 hover:text-white transition-colors text-sm">dshukukburosu@outlook.com</a>
          </div>
        </nav>
      </div>
    </>
  );
};
