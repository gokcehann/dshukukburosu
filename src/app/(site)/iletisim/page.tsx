"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle2, Send, ArrowRight, AlertCircle, Loader2 } from "lucide-react";
import { MapPinAreaIcon as MapPin, PhoneCallIcon as Phone, EnvelopeIcon as Mail, ClockIcon as Clock } from "@/components/ui/CustomIcons";
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    area: '',
    message: '',
    kvkk: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Sayfa yüklendiğinde hafif fade animasyonu için
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkk) {
      alert("Lütfen KVKK aydınlatma metnini onaylayınız.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "acae9f96-804f-42e7-a9d6-40fba007fb15",
          subject: formData.subject ? `İletişim Formu: ${formData.subject}` : "Web Sitesi İletişim Formu",
          from_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          area: formData.area,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ fullName: '', phone: '', email: '', subject: '', area: '', message: '', kvkk: false });
        // Başarı mesajını 5 saniye sonra gizle
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [id]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  return (
    <div className="bg-[#0a0f13] min-h-screen text-gray-200 font-sans selection:bg-[#cfa767] selection:text-[#0a0f13] pb-0">

      {/* ANA İÇERİK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-48 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* SOL SÜTUN: İLETİŞİM BİLGİLERİ */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-['Times_New_Roman',_Times,_serif] font-bold text-white mb-6">
              Size Nasıl Yardımcı Olabiliriz?
            </h2>
            <p className="text-gray-400 font-light mb-10 leading-relaxed text-sm md:text-base">
              Hukuki danışmanlık talepleriniz, devam eden dava süreçleriniz ve randevu talepleriniz için aşağıdaki iletişim kanallarından ekibimize ulaşabilirsiniz.
            </p>

            <div className="mb-16 divide-y divide-white/5 bg-[#11181c] rounded-sm border border-white/5 shadow-sm">
              {/* Adres Kartı */}
              <a href="https://maps.app.goo.gl/AdUHwUWpqg55JBdk6?g_st=iw" target="_blank" rel="noopener noreferrer" className="group flex items-start p-6 sm:p-8">
                <div className="w-12 h-12 rounded-full bg-[#0a0f13] border border-[#cfa767]/20 flex items-center justify-center flex-shrink-0 mr-5 group-hover:bg-[#cfa767]/10 transition-colors">
                  <MapPin className="text-[#cfa767] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-[11px] md:text-xs tracking-[0.15em] uppercase font-semibold mb-2">Açık Adres</h3>
                  <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    Ömer Nasuhi Bilmen Mh. İstanbul Kapı Cd. Gümrük Sk. (Cubpa arkası) Necati Kervancı Apt. K:6/13 25100 Yakutiye/ERZURUM
                  </p>
                </div>
              </a>

              {/* Telefon Kartı */}
              <div className="flex items-start p-6 sm:p-8">
                <div className="w-12 h-12 rounded-full bg-[#0a0f13] border border-[#cfa767]/20 flex items-center justify-center flex-shrink-0 mr-5">
                  <Phone className="text-[#cfa767] w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-white text-[11px] md:text-xs tracking-[0.15em] uppercase font-semibold mb-4">Telefon Numaraları</h3>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center group">
                      <span className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-0">Av. Onur Demirceylan</span>
                      <a href="tel:+905326814345" className="text-gray-300 text-[13px] md:text-sm hover:text-[#cfa767] transition-colors font-medium">+90 532 681 43 45</a>
                    </div>
                    <div className="w-full h-px bg-white/5"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center group">
                      <span className="text-gray-500 text-xs sm:text-sm mb-1 sm:mb-0">Av. M. Melih Şahin</span>
                      <a href="tel:+905325631073" className="text-gray-300 text-[13px] md:text-sm hover:text-[#cfa767] transition-colors font-medium">+90 532 563 10 73</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* E-posta Kartı */}
              <a href="mailto:dshukukburosu@outlook.com" className="group flex items-center p-6 sm:p-8">
                <div className="w-12 h-12 rounded-full bg-[#0a0f13] border border-[#cfa767]/20 flex items-center justify-center flex-shrink-0 mr-5 group-hover:bg-[#cfa767]/10 transition-colors">
                  <Mail className="text-[#cfa767] w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white text-[11px] md:text-xs tracking-[0.15em] uppercase font-semibold mb-1">E-posta Adresi</h3>
                  <p className="text-gray-400 text-[13px] md:text-sm group-hover:text-gray-300 transition-colors">dshukukburosu@outlook.com</p>
                </div>
              </a>

              {/* Çalışma Saatleri Kartı */}
              <div className="flex items-start p-6 sm:p-8">
                <div className="w-12 h-12 rounded-full bg-[#0a0f13] border border-[#cfa767]/20 flex items-center justify-center flex-shrink-0 mr-5">
                  <Clock className="text-[#cfa767] w-5 h-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-white text-[11px] md:text-xs tracking-[0.15em] uppercase font-semibold mb-3">Çalışma Saatleri</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-[13px] md:text-sm">Pazartesi – Cuma</span>
                    <span className="text-white text-[13px] md:text-sm font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-[13px] md:text-sm">Cumartesi – Pazar</span>
                    <span className="text-gray-500 text-[13px] md:text-sm font-medium">Kapalı</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Avukatlar */}
            <div className="pt-8 border-t border-white/5">
              <h3 className="text-[#cfa767] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase mb-6">Kurucu Avukatlar</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="group">
                  <h4 className="text-lg md:text-xl font-['Times_New_Roman',_Times,_serif] text-white group-hover:text-[#cfa767] transition-colors mb-1">Av. Onur Demirceylan</h4>
                  <div className="w-8 h-px bg-white/20 mb-3 group-hover:bg-[#cfa767] transition-colors"></div>
                  <a href="tel:+905326814345" className="inline-block text-[13px] text-gray-400 hover:text-white transition-colors">+90 532 681 43 45</a>
                </div>
                <div className="group">
                  <h4 className="text-lg md:text-xl font-['Times_New_Roman',_Times,_serif] text-white group-hover:text-[#cfa767] transition-colors mb-1">Av. Muhammed Melih Şahin</h4>
                  <div className="w-8 h-px bg-white/20 mb-3 group-hover:bg-[#cfa767] transition-colors"></div>
                  <a href="tel:+905325631073" className="inline-block text-[13px] text-gray-400 hover:text-white transition-colors">+90 532 563 10 73</a>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ SÜTUN: İLETİŞİM FORMU */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-[#11181c] p-6 sm:p-8 md:p-12 rounded-sm border border-white/5 relative overflow-hidden shadow-2xl">
              {/* Form dekoratif üst çizgi */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cfa767]/60 to-transparent"></div>

              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-['Times_New_Roman',_Times,_serif] font-bold text-white mb-3">
                  Mesajınızı Bırakın
                </h2>
                <p className="text-gray-400 font-light text-[13px] md:text-sm leading-relaxed">
                  Aşağıdaki formu doldurarak bize ulaşabilirsiniz. Ekibimiz talebinizi inceleyip en kısa sürede tarafınıza dönüş yapacaktır. <span className="text-[#cfa767]">Lütfen gizli veya özel hukuki belgelerinizi bu ilk aşamada form üzerinden paylaşmayınız.</span>
                </p>
              </div>

              {submitStatus === 'success' ? (
                <div className="bg-[#0a0f13] border border-[#cfa767]/30 rounded-sm p-10 text-center animate-fade-in relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#cfa767]"></div>
                  <div className="w-16 h-16 bg-[#cfa767]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#cfa767]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-['Times_New_Roman',_Times,_serif] text-white mb-3">Mesajınız İletildi</h3>
                  <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed">İletişim talebiniz başarıyla alınmıştır. En kısa sürede belirttiğiniz iletişim kanalları üzerinden tarafınıza dönüş yapılacaktır. Teşekkür ederiz.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Ad Soyad */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="block text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Ad Soyad</label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full bg-[#0a0f13] border border-white/5 rounded-sm px-4 py-3.5 text-white text-[13px] md:text-sm focus:outline-none focus:border-[#cfa767]/60 focus:bg-[#0a0f13] transition-all placeholder:text-gray-600 shadow-inner"
                      />
                    </div>
                    {/* Telefon */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Telefon Numarası</label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="05XX XXX XX XX"
                        className="w-full bg-[#0a0f13] border border-white/5 rounded-sm px-4 py-3.5 text-white text-[13px] md:text-sm focus:outline-none focus:border-[#cfa767]/60 focus:bg-[#0a0f13] transition-all placeholder:text-gray-600 shadow-inner"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* E-posta */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-[11px] font-semibold tracking-widest text-gray-400 uppercase">E-posta Adresi</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="ornek@email.com"
                        className="w-full bg-[#0a0f13] border border-white/5 rounded-sm px-4 py-3.5 text-white text-[13px] md:text-sm focus:outline-none focus:border-[#cfa767]/60 focus:bg-[#0a0f13] transition-all placeholder:text-gray-600 shadow-inner"
                      />
                    </div>
                    {/* Hukuk Alanı */}
                    <div className="space-y-2 relative">
                      <label htmlFor="area" className="block text-[11px] font-semibold tracking-widest text-gray-400 uppercase">İlgilendiğiniz Alan</label>
                      <div className="relative">
                        <select
                          id="area"
                          value={formData.area}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#0a0f13] border border-white/5 rounded-sm px-4 py-3.5 text-white text-[13px] md:text-sm focus:outline-none focus:border-[#cfa767]/60 focus:bg-[#0a0f13] transition-all appearance-none cursor-pointer shadow-inner"
                        >
                          <option value="" disabled className="text-gray-500">Lütfen Seçiniz</option>
                          <option value="Ceza Hukuku">Ceza Hukuku</option>
                          <option value="Aile Hukuku">Aile Hukuku</option>
                          <option value="İş Hukuku">İş Hukuku</option>
                          <option value="Ticaret Hukuku">Ticaret Hukuku</option>
                          <option value="Gayrimenkul Hukuku">Gayrimenkul Hukuku</option>
                          <option value="İcra ve İflas Hukuku">İcra ve İflas Hukuku</option>
                          <option value="Diğer">Diğer</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Konu */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Konu</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="İletişim sebebinizi kısaca belirtin"
                      className="w-full bg-[#0a0f13] border border-white/5 rounded-sm px-4 py-3.5 text-white text-[13px] md:text-sm focus:outline-none focus:border-[#cfa767]/60 focus:bg-[#0a0f13] transition-all placeholder:text-gray-600 shadow-inner"
                    />
                  </div>

                  {/* Mesaj */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-[11px] font-semibold tracking-widest text-gray-400 uppercase">Mesajınız</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Size nasıl yardımcı olabileceğimizi detaylandırın..."
                      className="w-full bg-[#0a0f13] border border-white/5 rounded-sm px-4 py-3.5 text-white text-[13px] md:text-sm focus:outline-none focus:border-[#cfa767]/60 focus:bg-[#0a0f13] transition-all placeholder:text-gray-600 resize-none shadow-inner"
                    ></textarea>
                  </div>

                  {/* KVKK */}
                  <div className="flex items-start gap-3 mt-4 bg-[#0a0f13]/50 p-4 rounded-sm border border-white/5">
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        id="kvkk"
                        type="checkbox"
                        checked={formData.kvkk}
                        onChange={handleChange}
                        className="w-4 h-4 rounded-sm border-white/20 bg-[#0a0f13] text-[#cfa767] focus:ring-[#cfa767] focus:ring-offset-[#11181c] cursor-pointer"
                      />
                    </div>
                    <label htmlFor="kvkk" className="text-[11px] sm:text-xs text-gray-400 leading-relaxed cursor-pointer select-none">
                      Kişisel verilerimin, iletişim talebimin değerlendirilmesi amacıyla işlenmesini kabul ediyorum.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 bg-[#cfa767] hover:bg-[#b38f56] text-[#0a0f13] font-bold tracking-widest uppercase text-[13px] py-4 rounded-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group shadow-[0_4px_14px_rgba(207,167,103,0.15)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          Mesajı Gönder
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="flex items-start gap-3 text-red-400 text-sm mt-4 p-4 bg-red-950/30 border border-red-500/20 rounded-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[13px]">Gönderim sırasında sistemsel bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyin veya alternatif iletişim kanallarımızı kullanın.</span>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* HARİTA BÖLÜMÜ */}
      <section className="relative w-full border-y border-white/5 bg-[#0a0f13]">
        {/* CSS Filter ile Karanlık Temalı Harita */}
        <div className="h-[450px] md:h-[600px] w-full relative z-0 opacity-80 mix-blend-luminosity">
          <iframe
            src="https://maps.google.com/maps?q=39.9119290908742,41.263239175025014&hl=tr&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="D&S Hukuk Bürosu Konum"
            className="w-full h-full"
          ></iframe>
        </div>

        {/* Harita Üzeri Bilgi Kartı */}
        <div className="absolute bottom-6 left-4 right-4 md:left-auto md:right-12 md:bottom-12 z-10">
          <div className="bg-[#11181c]/90 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl max-w-sm ml-auto relative overflow-hidden group">
            <h3 className="text-xl font-['Times_New_Roman',_Times,_serif] font-bold text-white mb-3">D&S Hukuk Bürosu</h3>
            <p className="text-[13px] text-gray-400 leading-relaxed mb-6">
              Ömer Nasuhi Bilmen Mh. İstanbul Kapı Cd. Gümrük Sk. (Cubpa arkası) Necati Kervancı Apt. K:6/13 Yakutiye / ERZURUM
            </p>
            <a
              href="https://maps.app.goo.gl/AdUHwUWpqg55JBdk6?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#cfa767] hover:text-white text-[11px] md:text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Yol Tarifi Al
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>



    </div>
  );
}
