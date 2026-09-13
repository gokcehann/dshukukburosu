import { Button } from "@/components/ui/Button";
import { mockServices, mockLawyers } from "@/lib/mock-data";
import { Scale, Briefcase, Users, ArrowRight, MousePointer2, FileText, Home, PenTool, ShieldCheck, Target, UserCheck } from "lucide-react";
import { MapPinAreaIcon as MapPin, PhoneCallIcon as Phone, EnvelopeIcon as Mail, ClockIcon as Clock } from "@/components/ui/CustomIcons";

export default function HomePage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale': return <Scale className="w-8 h-8 text-accent" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-accent" />;
      case 'Users': return <Users className="w-8 h-8 text-accent" />;
      case 'FileText': return <FileText className="w-8 h-8 text-accent" />;
      case 'Home': return <Home className="w-8 h-8 text-accent" />;
      case 'PenTool': return <PenTool className="w-8 h-8 text-accent" />;
      default: return <Scale className="w-8 h-8 text-accent" />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <img
            src="/hero-bg.png"
            alt="D&S Hukuk Bürosu"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl drop-shadow-md">
            <h1
              className="text-5xl md:text-7xl font-bold text-[#F6F5F4] leading-tight mb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              D&S HUKUK
            </h1>
            <p className="text-xl md:text-2xl text-[#F6F5F4] font-sans tracking-widest uppercase mb-6 drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
              DEMİRCEYLAN & ŞAHİN HUKUK BÜROSU
            </p>
            <p className="text-[#F6F5F4] mb-8 max-w-xl text-base font-normal drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] tracking-wide">
              Hukuki sorunlarınıza profesyonel, hızlı ve etkili çözümler sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/#iletisim" variant="outline" className="px-8 py-4 border-white text-white hover:bg-accent hover:border-accent hover:text-white rounded-none transition-all duration-300">
                İletişime Geçin
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1 mb-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
          <ArrowRight className="text-white w-4 h-4 rotate-90" />
        </div>
      </section>

      {/* Avukatlarımız */}
      <section id="avukatlarimiz" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Sol Metin */}
            <div className="w-full lg:w-1/3">
              <h3 className="text-accent font-semibold tracking-widest text-sm uppercase mb-4">AVUKATLARIMIZ</h3>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6 leading-snug">
                Sizi Anlayan<br />Deneyimli Hukukçular
              </h2>
              <p className="text-text-light mb-8">
                Müvekkillerimizin haklarını korumak ve menfaatlerini en iyi şekilde savunmak önceliğimizdir.
              </p>
              <Button href="/hakkimizda" variant="outline" className="rounded-none px-8 py-3 border-accent text-accent hover:bg-accent hover:text-white">
                Tüm Bilgiler
              </Button>
            </div>

            {/* Sağ Kartlar */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {mockLawyers.map((lawyer) => (
                <div key={lawyer.id} className="bg-white group cursor-pointer">
                  <div className="w-full h-80 overflow-hidden relative">
                    <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-serif font-bold text-primary">{lawyer.name}</h3>
                    <div className="w-8 h-px bg-accent mb-4 mt-4"></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Çalışma Alanlarımız */}
      <section id="calisma-alanlari" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-primary mb-16">Uzmanlık Alanlarımız</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockServices.map((service) => (
              <div key={service.id} className="bg-white p-6 flex items-center gap-4 group cursor-pointer hover:shadow-lg transition-all border border-gray-50 rounded-sm">
                <div className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shrink-0">
                  {getIcon(service.icon)}
                </div>
                <h3 className="font-semibold text-primary flex-1 text-left">{service.title}</h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellikler Barı */}
      <section className="bg-[#736A62] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/20">

            <div className="flex gap-4 items-start lg:px-6 first:px-0 pt-8 lg:pt-0 first:pt-0">
              <ShieldCheck className="w-10 h-10 text-white flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-semibold mb-2">Güven</h4>
                <p className="text-white/80 text-sm leading-relaxed">Müvekkillerimizle kurduğumuz güven ilişkisi en önemli değerimizdir.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start lg:px-6 pt-8 lg:pt-0">
              <Target className="w-10 h-10 text-white flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-semibold mb-2">Şeffaflık</h4>
                <p className="text-white/80 text-sm leading-relaxed">Süreç boyunca şeffaf ve açık iletişim ile müvekkillerimizi bilgilendiririz.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start lg:px-6 pt-8 lg:pt-0">
              <MousePointer2 className="w-10 h-10 text-white flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-semibold mb-2">Etkin Çözüm</h4>
                <p className="text-white/80 text-sm leading-relaxed">Hukuki sorunlarınıza en doğru ve etkili çözümü üretmek için çalışırız.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start lg:px-6 pt-8 lg:pt-0">
              <UserCheck className="w-10 h-10 text-white flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-semibold mb-2">Kişiye Özel Yaklaşım</h4>
                <p className="text-white/80 text-sm leading-relaxed">Her müvekkilin ihtiyacı farklıdır. Size özel stratejiler geliştiririz.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* İletişim Bilgileri ve Harita */}
      <section id="iletisim-homepage" className="bg-background py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* İletişim Bilgileri */}
            <div>
              <h3 className="text-sm font-bold tracking-widest text-primary mb-6 uppercase">İLETİŞİM BİLGİLERİ</h3>
              <ul className="space-y-6 text-sm text-text-dark font-medium">
                <li className="flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-[#9c714c]/80 flex-shrink-0 mt-0.5" />
                  <a href="https://maps.app.goo.gl/AdUHwUWpqg55JBdk6?g_st=iw" target="_blank" rel="noopener noreferrer" className="hover:text-accent leading-relaxed">
                    Ömer Nasuhi Bilmen Mh. İstanbul Kapı Cd.<br />Gümrük Sk. (Cubpa arkası) Necati Kervancı Apt.<br />K:6/13 25100 Yakutiye / ERZURUM
                  </a>
                </li>
                <li className="flex gap-4 items-start">
                  <Phone className="w-5 h-5 text-[#9c714c]/80 flex-shrink-0 mt-1" />
                  <div className="flex flex-col gap-3">
                    <div>
                      <span className="block text-xs text-gray-500 mb-0.5">Av. Onur Demirceylan</span>
                      <a href="tel:+905326814345" className="hover:text-accent">+90 532 681 43 45</a>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 mb-0.5">Av. Muhammed Melih Şahin</span>
                      <a href="tel:+905325631073" className="hover:text-accent">+90 532 563 10 73</a>
                    </div>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="w-5 h-5 text-[#9c714c]/80 flex-shrink-0" />
                  <a href="mailto:dshukukburosu@outlook.com" className="hover:text-accent">dshukukburosu@outlook.com</a>
                </li>
                <li className="flex gap-4 items-center">
                  <Clock className="w-5 h-5 text-[#9c714c]/80 flex-shrink-0" />
                  <span>Pzt - Cuma: 09:00 - 18:00</span>
                </li>
              </ul>
            </div>

            {/* Harita */}
            <div className="h-[350px] bg-gray-100 rounded overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all shadow-lg border border-white/5">
              <iframe
                src="https://maps.google.com/maps?q=39.9119290908742,41.263239175025014&hl=tr&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="D&S Hukuk Bürosu Erzurum"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
