"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate backend POST request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', phone: '', email: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="bg-primary py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">İletişim</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* İletişim Bilgileri */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Bize Ulaşın</h2>
            <p className="text-text-light mb-8">
              Hukuki sorunlarınızla ilgili profesyonel destek almak veya danışmanlık talep etmek için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">Adres</h3>
                  <p className="text-text-light mt-1">Hukuk Plaza, Kat:4 No:12<br />Şişli, İstanbul</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Phone className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">Telefon</h3>
                  <p className="text-text-light mt-1">
                    <a href="tel:+902125550123" className="hover:text-accent transition-colors">+90 (212) 555 01 23</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  <Mail className="text-accent w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">E-posta</h3>
                  <p className="text-text-light mt-1">
                    <a href="mailto:info@dshukuk.com" className="hover:text-accent transition-colors">info@dshukuk.com</a>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Harita */}
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6454722510255!2d28.98972821564032!3d41.06283997929424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6fd62d96c9f%3A0xc3ba596d66e511bd!2zxZ5pxZ9saS9Jc3RhbmJ1bA!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="D.S. Hukuk Bürosu Konum"
              ></iframe>
            </div>
          </div>
          
          {/* İletişim Formu */}
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">İletişim Formu</h3>
            
            {isSuccess ? (
              <div className="bg-green-50 text-green-700 p-6 rounded-md mb-6 border border-green-200">
                <h4 className="font-semibold text-lg mb-2">Mesajınız Alındı!</h4>
                <p>En kısa sürede sizinle iletişime geçeceğiz. İlginiz için teşekkür ederiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input 
                  id="fullName"
                  label="Adınız Soyadınız" 
                  placeholder="Örn: Ahmet Yılmaz" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    id="phone"
                    label="Telefon Numaranız" 
                    type="tel" 
                    placeholder="05XX XXX XX XX" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                  <Input 
                    id="email"
                    label="E-posta Adresiniz" 
                    type="email" 
                    placeholder="ornek@email.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <Textarea 
                  id="message"
                  label="Mesajınız" 
                  rows={5} 
                  placeholder="Size nasıl yardımcı olabiliriz?" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
                
                <Button type="submit" variant="primary" className="w-full py-4" disabled={isSubmitting}>
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>
                
                <p className="text-xs text-text-light text-center mt-4">
                  Gönder butonuna basarak kişisel verilerinizin işlenmesine ilişkin aydınlatma metnini okuduğunuzu ve kabul ettiğinizi beyan edersiniz.
                </p>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </>
  );
}
