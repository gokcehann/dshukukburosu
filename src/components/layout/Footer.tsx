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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg xmlns="http://www.lucide.dev/icons" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg xmlns="http://www.lucide.dev/icons" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
  );

  return (
    <footer id="iletisim">
      {/* İletişim Bölümü (Beyaz) */}
      <div className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Sol: İletişim Bilgileri */}
            <div>
              <h3 className="text-sm font-bold tracking-widest text-primary mb-6 uppercase">İLETİŞİM BİLGİLERİ</h3>
              <ul className="space-y-6 text-sm text-text-dark font-medium">
                <li className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>Yenişehir Mah. Cumhuriyet Cad.<br/>No:45 Kat:3 Daire:7<br/>Yakutiye / ERZURUM</span>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a href="tel:04422341000" className="hover:text-accent">0 (442) 234 10 00</a>
                </li>
                <li className="flex gap-4 items-center">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a href="tel:05321234525" className="hover:text-accent">0 (532) 123 45 25</a>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <a href="mailto:info@dshukuk.com" className="hover:text-accent">info@dshukuk.com</a>
                </li>
                <li className="flex gap-4 items-center">
                  <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span>Pzt - Cum: 09:00 - 18:00</span>
                </li>
              </ul>
            </div>

            {/* Orta: Harita */}
            <div className="h-[300px] bg-gray-100 rounded overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7663246738914!2d41.268715!3d39.907994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU0JzI4LjgiTiA0McKwMTYnMDcuNCJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="D.S. Hukuk Bürosu Erzurum"
              />
            </div>

            {/* Sağ: Bize Ulaşın Formu */}
            <div>
              <h3 className="text-sm font-bold tracking-widest text-primary mb-6 uppercase">BİZE ULAŞIN</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    id="fullName" 
                    placeholder="Adınız Soyadınız" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    className="bg-gray-50/50 border-gray-200 text-sm py-2 rounded-sm"
                  />
                  <Input 
                    id="phone" 
                    placeholder="Telefon Numaranız" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="bg-gray-50/50 border-gray-200 text-sm py-2 rounded-sm"
                  />
                </div>
                <Input 
                  id="email" 
                  placeholder="E-posta Adresiniz" 
                  type="email"
                  value={formData.email} 
                  onChange={handleChange} 
                  className="bg-gray-50/50 border-gray-200 text-sm py-2 rounded-sm"
                />
                <Textarea 
                  id="message" 
                  placeholder="Mesajınız" 
                  rows={4}
                  value={formData.message} 
                  onChange={handleChange} 
                  className="bg-gray-50/50 border-gray-200 text-sm py-2 rounded-sm"
                />
                <Button type="submit" className="w-full bg-primary hover:bg-black text-white text-sm py-3 rounded-sm font-semibold">
                  Gönder
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Alt Bilgi (Footer) - Koyu */}
      <div className="bg-primary py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="D&S Logo" className="h-10 w-auto opacity-80" />
          </div>
          
          <p className="text-gray-400 text-xs text-center">
            &copy; {new Date().getFullYear()} D&S Hukuk - Demirceylan Şahin Hukuk Bürosu. Tüm hakları saklıdır.
          </p>

          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
              <InstagramIcon />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
              <LinkedinIcon />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
