"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi.');
    setFormData({ fullName: '', phone: '', email: '', message: '' });
  };

  // SVGs for social icons
  const InstagramIcon = () => (
    <svg xmlns="http://www.lucide.dev/icons" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  const LinkedinIcon = () => (
    <svg xmlns="http://www.lucide.dev/icons" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.lucide.dev/icons" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );

  return (
    <footer id="footer" className="bg-primary text-gray-300 pt-8 pb-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Üst Kısım: Sütunlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">

          {/* 1. Logo */}
          <div className="flex flex-col justify-center lg:col-span-1">
            <img src="/logo.png" alt="D&S Logo" className="h-35 w-auto object-contain self-start opacity-90" />
          </div>

          {/* 2. Hızlı Menü */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-[11px] font-semibold tracking-widest uppercase mb-3">Sayfalar</h4>
            <ul className="space-y-2.5 text-[11px] md:text-xs">
              <li><a href="/" className="hover:text-white text-gray-400 transition-colors">Ana Sayfa</a></li>
              <li><a href="/hakkimizda" className="hover:text-white text-gray-400 transition-colors">Hakkımızda</a></li>
              <li><a href="/#avukatlarimiz" className="hover:text-white text-gray-400 transition-colors">Avukatlarımız</a></li>
              <li><a href="/blog" className="hover:text-white text-gray-400 transition-colors">Makaleler</a></li>
              <li><a href="/iletisim" className="hover:text-white text-gray-400 transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* 3. Çalışma Alanlarımız */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-[11px] font-semibold tracking-widest uppercase mb-3">Uzmanlık Alanları</h4>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2.5 text-[11px] md:text-xs text-gray-400">
                <li>İş Hukuku</li>
                <li>Ceza Hukuku</li>
                <li>Aile Hukuku</li>
                <li>İdare ve Vergi Hukuku</li>
                <li>Gayrimenkul Hukuku</li>
              </ul>
              <ul className="space-y-2.5 text-[11px] md:text-xs text-gray-400">
                <li>Miras Hukuku</li>
                <li>Çevre Hukuku</li>
                <li>Spor Hukuku</li>
                <li>Basın Hukuku</li>
              </ul>
            </div>
          </div>

          {/* 4. İletişim Bilgileri */}
          <div className="lg:col-span-1">
            <h4 className="text-white text-[11px] font-semibold tracking-widest uppercase mb-3">İletişim</h4>
            <ul className="space-y-2.5 text-[11px] md:text-xs text-gray-400">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Ömer Nasuhi Bilmen Mh. İstanbul Kapı Cd. Gümrük Sk. Necati Kervancı Apt. K:6/13 Yakutiye/Erzurum</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+905326814345" className="hover:text-white">+90 532 681 43 45</a>
                  <a href="tel:+905325631073" className="hover:text-white">+90 532 563 10 73</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:dshukukburosu@outlook.com" className="hover:text-white">dshukukburosu@outlook.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Alt Çizgi ve Telif Hakkı */}
        <div className="pt-4 border-t border-white/10 flex justify-center items-center">
          <p className="text-gray-500 text-[10px] sm:text-xs text-center">
            &copy; {new Date().getFullYear()} D&S Hukuk - Demirceylan & Şahin Hukuk Bürosu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
