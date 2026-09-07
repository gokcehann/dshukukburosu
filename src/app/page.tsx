import { Button } from "@/components/ui/Button";
import { mockServices, mockLawyers } from "@/lib/mock-data";
import { Scale, Briefcase, Users, ArrowRight, MousePointer2, FileText, Home, PenTool, ShieldCheck, Target, UserCheck } from "lucide-react";

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
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src="/hero-bg.png" 
            alt="D&S Hukuk Bürosu" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl drop-shadow-md">
            <h2 className="text-gray-400 text-sm md:text-base tracking-widest font-bold mb-4 uppercase drop-shadow">
              GÜVEN. ŞEFFAFLIK. ETKİN ÇÖZÜM.
            </h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-2 drop-shadow-lg">
              D&S HUKUK
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-serif tracking-widest uppercase mb-6 drop-shadow">
              DEMİRCEYLAN ŞAHİN HUKUK BÜROSU
            </p>
            <p className="text-gray-100 mb-10 max-w-xl text-lg drop-shadow">
              Hukuki sorunlarınıza profesyonel, hızlı ve etkili çözümler sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/#avukatlarimiz" variant="primary" className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-none">
                Avukatlarımız
              </Button>
              <Button href="/#iletisim" variant="outline" className="px-8 py-4 border-white text-white hover:bg-white hover:text-primary rounded-none">
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
                Sizi Anlayan<br/>Deneyimli Hukukçular
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
                    <p className="text-accent text-sm mb-4">{lawyer.title}</p>
                    <div className="w-8 h-px bg-accent mb-4"></div>
                    <ul className="space-y-2 text-sm text-text-light">
                      {lawyer.practiceAreas.map((area, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Briefcase className="w-3 h-3 text-accent" /> {area}
                        </li>
                      ))}
                    </ul>
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
          <h3 className="text-accent font-semibold tracking-widest text-sm uppercase mb-2">ÇALIŞMA ALANLARIMIZ</h3>
          <h2 className="text-4xl font-serif font-bold text-primary mb-16">Uzmanlık Alanlarımız</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {mockServices.map((service) => (
              <div key={service.id} className="bg-white p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:shadow-xl transition-shadow border border-gray-50 h-56">
                <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  {getIcon(service.icon)}
                </div>
                <h3 className="font-semibold text-primary mb-4">{service.title}</h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellikler Barı */}
      <section className="bg-primary py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
            
            <div className="flex gap-4 items-start lg:px-6 first:px-0 pt-8 lg:pt-0 first:pt-0">
              <ShieldCheck className="w-10 h-10 text-accent flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-semibold mb-2">Güven</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Müvekkillerimizle kurduğumuz güven ilişkisi en önemli değerimizdir.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start lg:px-6 pt-8 lg:pt-0">
              <Target className="w-10 h-10 text-accent flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-semibold mb-2">Şeffaflık</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Süreç boyunca şeffaf ve açık iletişim ile müvekkillerimizi bilgilendiririz.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start lg:px-6 pt-8 lg:pt-0">
              <MousePointer2 className="w-10 h-10 text-accent flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-semibold mb-2">Etkin Çözüm</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Hukuki sorunlarınıza en doğru ve etkili çözümü üretmek için çalışırız.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start lg:px-6 pt-8 lg:pt-0">
              <UserCheck className="w-10 h-10 text-accent flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-white font-semibold mb-2">Kişiye Özel Yaklaşım</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Her müvekkilin ihtiyacı farklıdır. Size özel stratejiler geliştiririz.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
