import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <span className="text-4xl font-serif text-accent">D.S.</span>
              <div className="flex flex-col">
                <span className="text-lg tracking-widest uppercase font-semibold">D.S. Hukuk</span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase mt-0.5 group-hover:text-accent transition-colors">
                  Demirceylan Şahin Hukuk Bürosu
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              ['Ana Sayfa', '/'],
              ['Hakkımızda', '/hakkimizda'],
              ['Hizmetler', '/hizmetler'],
              ['Blog', '/blog'],
              ['İletişim', '/iletisim'],
            ].map(([title, url]) => (
              <Link 
                key={title} 
                href={url}
                className="text-sm font-medium text-gray-300 hover:text-accent transition-colors"
              >
                {title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="primary" href="/iletisim">
              Danışma Talebi
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
