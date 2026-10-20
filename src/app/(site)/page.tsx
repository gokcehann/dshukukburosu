import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GoogleReviews } from "@/components/ui/GoogleReviews";
import { FAQSection } from "@/components/ui/FAQSection";
import { MapSection } from "@/components/ui/MapSection";
import { mockServices, mockLawyers } from "@/lib/mock-data";
import { 
  Scale, 
  Briefcase, 
  Users, 
  ArrowRight, 
  MousePointer2, 
  FileText, 
  Home, 
  PenTool, 
  ShieldCheck, 
  Target, 
  UserCheck, 
  Gavel, 
  CheckCircle2, 
  Building2, 
  BookOpen 
} from "lucide-react";

export const metadata: Metadata = {
  title: "D&S Hukuk Bürosu | Erzurum Avukatlık ve Hukuki Danışmanlık",
  description: "Erzurum D&S Hukuk Bürosu; Av. Onur Demirceylan ve Av. Muhammed Melih Şahin ile ceza, iş, aile ve idare hukukunda profesyonel avukatlık hizmeti sunar.",
  alternates: {
    canonical: "https://www.dshukukerzurum.com",
  },
};

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
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="/hero-bg.jpg"
            alt="D&S Hukuk Bürosu Erzurum Avukatlık ve Danışmanlık"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl drop-shadow-md">
            <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/40 text-accent text-xs font-semibold tracking-widest uppercase mb-4 rounded-sm">
              Erzurum Avukatlık ve Hukuki Danışmanlık Bürosu
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-[#F6F5F4] leading-tight mb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              D&S HUKUK BÜROSU
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#F6F5F4] font-sans tracking-widest uppercase mb-4 drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]">
              DEMİRCEYLAN & ŞAHİN HUKUK BÜROSU
            </p>
            <p className="text-gray-200 text-sm sm:text-base font-normal mb-8 max-w-2xl leading-relaxed drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
              Kurucu avukatlar <strong>Av. Onur Demirceylan</strong> ve <strong>Av. Muhammed Melih Şahin</strong> öncülüğünde; Ceza Hukuku, İş Hukuku, Aile Hukuku, İdare ve Vergi Hukuku uyuşmazlıklarında sonuç odaklı, şeffaf ve profesyonel avukatlık hizmeti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="https://wa.me/905326814345" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="WhatsApp Üzerinden D&S Hukuk ile İletişime Geçin" 
                variant="outline" 
                className="px-8 py-4 border-white text-white hover:bg-accent hover:border-accent hover:text-white rounded-none transition-all duration-300 font-medium"
              >
                Hızlı WhatsApp Randevusu
              </Button>
              <Button 
                href="/iletisim" 
                title="D&S Hukuk İletişim ve Adres Bilgileri" 
                variant="primary" 
                className="px-8 py-4 rounded-none transition-all duration-300 font-medium"
              >
                Ofisimizle İletişime Geçin
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none">
          <div className="w-5 h-9 border-2 border-white/60 rounded-full flex justify-center p-1 mb-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
          <ArrowRight className="text-white/60 w-3.5 h-3.5 rotate-90" />
        </div>
      </section>

      {/* Avukatlarımız */}
      <section id="avukatlarimiz" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Sol Metin */}
            <div className="w-full lg:w-1/3">
              <span className="block text-accent font-semibold tracking-widest text-xs uppercase mb-3">
                ERZURUM BAROSU AVUKATLARI
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6 leading-snug">
                D&S Hukuk Bürosu Kurucu Avukatlarımız
              </h2>
              <p className="text-text-light mb-6 leading-relaxed text-sm sm:text-base">
                Müvekkillerimizin hak ve menfaatlerini en üst düzeyde korumak, yargı mercileri önünde etkin savunma gerçekleştirmek ve hukuki riskleri önceden belirlemek temel misyonumuzdur.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mb-8 leading-relaxed">
                Avukatlık meslek ilkelerine, müvekkil sırrı saklama yükümlülüğüne ve şeffaf bilgilendirme anlayışına bağlı kalarak çalışmalarımızı sürdürmekteyiz.
              </p>
              <Button href="/hakkimizda" title="D&S Hukuk Bürosu ve Avukat Kadromuz Hakkında Tüm Bilgiler" variant="outline" className="rounded-none px-8 py-3 border-accent text-accent hover:bg-accent hover:text-white">
                Kurumsal Bilgilerimiz
              </Button>
            </div>

            {/* Sağ Kartlar */}
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {mockLawyers.map((lawyer) => (
                <div key={lawyer.id} className="bg-white group">
                  <div className="w-full h-80 overflow-hidden relative bg-gray-100 rounded-sm">
                    <Image 
                      src={lawyer.image} 
                      alt={`${lawyer.name} - Erzurum D&S Hukuk Bürosu Kurucu Avukatı`} 
                      width={500} 
                      height={400} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-serif font-bold text-primary">{lawyer.name}</h3>
                    <p className="text-xs text-accent font-semibold tracking-wider uppercase mt-1">
                      {lawyer.title} • {lawyer.barNumber ? `Erzurum Barosu Sicil No: ${lawyer.barNumber}` : "Erzurum Barosu"}
                    </p>
                    <div className="w-8 h-px bg-accent mb-3 mt-3"></div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      {lawyer.education?.[0]} mezunu olup; ceza davaları, işçi-işveren uyuşmazlıkları ve gayrimenkul ihtilaflarında müvekkillerine Erzurum ve Türkiye genelinde hukuki destek sağlamaktadır.
                    </p>
                    <a href={`tel:${lawyer.phone?.replace(/\s+/g, '')}`} className="text-xs font-semibold text-primary hover:text-accent transition-colors">
                      Telefon: {lawyer.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Çalışma Alanlarımız */}
      <section id="calisma-alanlari" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="block text-accent font-semibold tracking-widest text-xs uppercase mb-3">
              HUKUKİ UZMANLIKLARIMIZ
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-4">
              D&S Hukuk Bürosu Çalışma Alanları
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Bireysel ve kurumsal müvekkillerimizin karşılaştığı tüm adli ve idari süreçlerde, alanında tecrübeli avukat kadromuzla yanınızdayız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white p-6 flex flex-col justify-between group hover:shadow-lg transition-all border border-gray-100 rounded-sm"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shrink-0">
                      {getIcon(service.icon)}
                    </div>
                    <h3 className="font-serif font-bold text-lg text-primary group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <Link 
                  href={`/hizmetler/${service.slug}`} 
                  title={`${service.title} Dava ve Danışmanlık Bilgileri`}
                  className="text-xs font-semibold text-accent hover:text-accent-hover inline-flex items-center gap-1.5 transition-colors pt-2 border-t border-gray-50"
                >
                  <span>Detaylı Bilgi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/hizmetler" 
              title="D&S Hukuk Tüm Çalışma Alanlarını İnceleyin"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-xs font-semibold tracking-wider uppercase hover:bg-secondary transition-colors"
            >
              <span>Tüm Faaliyet Alanlarımızı İnceleyin</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
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
                <p className="text-white font-semibold mb-2">Güven & Meslek Etiği</p>
                <p className="text-white/80 text-sm leading-relaxed">Müvekkillerimizle kurduğumuz karşılıklı güven ve sır saklama yükümlülüğü en temel ilkemizdir.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start lg:px-6 pt-8 lg:pt-0">
              <Target className="w-10 h-10 text-white flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-white font-semibold mb-2">Şeffaf Dava Takibi</p>
                <p className="text-white/80 text-sm leading-relaxed">Dava dilekçeleri, duruşma tutanakları ve kararlar anında müvekkillerimizle paylaşılır.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start lg:px-6 pt-8 lg:pt-0">
              <MousePointer2 className="w-10 h-10 text-white flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-white font-semibold mb-2">Etkin Hukuki Strateji</p>
                <p className="text-white/80 text-sm leading-relaxed">Güncel mevzuat ve Yargıtay içtihatları analiz edilerek en doğru savunma stratejisi kurgulanır.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start lg:px-6 pt-8 lg:pt-0">
              <UserCheck className="w-10 h-10 text-white flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-white font-semibold mb-2">Kişiye Özel Çözüm</p>
                <p className="text-white/80 text-sm leading-relaxed">Her hukuki uyuşmazlığın kendine has dinamikleri vardır; dosyanıza özel çözümler üretiriz.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Kurumsal Bilgilendirme & Kapsamlı İçerik (Erzurum Avukatlık ve Hukuki Danışmanlık) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-7">
              <span className="block text-accent font-semibold tracking-widest text-xs uppercase mb-3">
                ERZURUM AVUKATLIK BÜROSU
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                D&S Hukuk Bürosu ile Güvenilir ve Sonuç Odaklı Hukuki Temsil
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
                <p>
                  <strong>D&S Hukuk Bürosu</strong> (Demirceylan & Şahin Hukuk Bürosu), Erzurum Barosu'na kayıtlı kurucu ortaklar <strong>Av. Onur Demirceylan</strong> ve <strong>Av. Muhammed Melih Şahin</strong> tarafından kurulmuş bağımsız bir avukatlık ortaklığıdır. Büromuz, Erzurum başta olmak üzere Doğu Anadolu Bölgesi ve Türkiye genelindeki müvekkillerine kapsamlı avukatlık ve hukuki danışmanlık hizmeti sunmaktadır.
                </p>
                <p>
                  Hukuk büromuz; <strong>Ceza Hukuku</strong> (ağır ceza mahkemesi, asliye ceza, sulh ceza sorgu ve istinaf süreçleri), <strong>İş ve Sosyal Güvenlik Hukuku</strong> (kıdem tazminatı, ihbar tazminatı, işe iade davaları ve arabuluculuk süreçleri), <strong>Aile Hukuku</strong> (anlaşmalı boşanma, çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesi), <strong>Gayrimenkul ve Kira Hukuku</strong> (tahliye davaları, kira bedeli tespiti, tapu iptal ve tescil davaları), <strong>İdare ve Vergi Hukuku</strong>, <strong>Miras Hukuku</strong> ile <strong>İcra ve İflas Hukuku</strong> alanlarında uzmanlaşmıştır.
                </p>
                <p>
                  Hukuki uyuşmazlıkların çözümünde yalnızca adli dava takibiyle sınırlı kalmayıp; ihtilafların henüz doğmadan engellenmesini sağlayan <em>önleyici hukuki danışmanlık</em> mekanizmalarını işletiyoruz. Müvekkillerimizin karşılaştığı riskleri önceden tespit ederek sözleşme hazırlığı, uzlaşma müzakereleri ve arabuluculuk süreçlerinde etkin taraf vekilliği sunuyoruz.
                </p>
                <p>
                  Türkiye Barolar Birliği meslek kurallarına ve avukat-müvekkil arasındaki sır saklama yükümlülüğüne titizlikle riayet eden ekibimiz; UYAP Avukat Portalı üzerinden tüm adli tebligatları, duruşma zaptlarını ve bilirkişi raporlarını anlık takip ederek müvekkillerini düzenli ve şeffaf biçimde bilgilendirmektedir.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/iletisim" title="D&S Hukuk Bürosu İletişim ve Randevu Sayfası" variant="primary" className="rounded-none px-7 py-3.5">
                  Hukuki Danışmanlık Alın
                </Button>
                <Button href="/hakkimizda" title="D&S Hukuk Kurumsal Bilgileri İnceleyin" variant="outline" className="rounded-none px-7 py-3.5 border-primary text-primary hover:bg-primary hover:text-white">
                  Kurumsal Vizyonumuz
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F9F8F6] p-8 sm:p-10 rounded-2xl border border-gray-200/70 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
                Hukuki Çalışma ve Dava Metodolojimiz
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Ön Değerlendirme & Hukuki Risk Analizi</p>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Uyuşmazlığa dair tüm delil, tanık beyanları ve resmi evraklar detaylı incelenerek başarı olasılığı ve hukuki riskler objektif şekilde ortaya konur.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Mevzuat Araştırması & Dava Dilekçesi Hazırlığı</p>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Güncel mevzuat, Yargıtay Hukuk Genel Kurulu kararları ve Bölge Adliye Mahkemesi içtihatları doğrultusunda eksiksiz dava dilekçesi hazırlanır.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Duruşma, Keşif ve Bilirkişi Süreci Takibi</p>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Adli makamlar nezdindeki tüm duruşmalar, keşif incelemeleri ve bilirkişi raporuna itiraz süreçleri avukatlarımız tarafından bizzat takip edilir.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm flex items-center justify-center shrink-0">4</span>
                  <div>
                    <p className="font-semibold text-primary text-sm mb-1">Şeffaf Bilgilendirme & İnfaz / İcra Takibi</p>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Karar kesinleşme sürecine kadar müvekkil her aşamada şeffaf biçimde bilgilendirilir; ilamın icra takibi ve alacağın tahsili hızla gerçekleştirilir.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Erzurum ve Çevre İllerde Dava Hizmetleri Bilgilendirme Kutuları */}
          <div className="mt-16 pt-16 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gray-200/60">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Gavel className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-primary text-lg mb-2">Erzurum Adliyesi & Mahkemeler</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Erzurum Ağır Ceza Mahkemeleri, Asliye Hukuk ve Ceza Mahkemeleri, İş Mahkemesi, Aile Mahkemesi ve İcra Dairelerinde duruşma ve dosya takibi bizzat yürütülmektedir.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gray-200/60">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-primary text-lg mb-2">Bölgesel ve Ulusal Dava Takibi</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Erzurum Bölge Adliye Mahkemesi (İstinaf) ve Yargıtay kanun yolu süreçlerinin yanı sıra Erzincan, Kars, Ağrı ve çevre illerdeki davalarda da hukuki temsil sağlanmaktadır.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-gray-200/60">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-primary text-lg mb-2">Önleyici Danışmanlık & Sözleşmeler</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Şirketler ve şahıslar için ticari sözleşmeler, iş sözleşmeleri, kira kontratları ve arabuluculuk müzakerelerinde profesyonel hukuki koruma ve danışmanlık.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Google Yorumları & Değerlendirmeler */}
      <GoogleReviews />

      {/* Sıkça Sorulan Sorular Bölümü */}
      <FAQSection />

      {/* SSS İçin FAQPage JSON-LD Şeması */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "D&S Hukuk Bürosu'ndan nasıl hukuki danışmanlık veya dava randevusu alabilirim?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Web sitemizdeki iletişim formunu doldurabilir, +90 532 681 43 45 veya +90 532 563 10 73 numaralı telefonlarımızdan doğrudan arayabilir ya da WhatsApp üzerinden kurucu avukatlarımızla hızlıca irtibat kurarak randevunuzu planlayabilirsiniz."
                }
              },
              {
                "@type": "Question",
                "name": "D&S Hukuk Bürosu hangi alanlarda avukatlık ve hukuki danışmanlık hizmeti sunmaktadır?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Büromuz; Ceza Hukuku, İş ve Sosyal Güvenlik Hukuku, Aile ve Boşanma Hukuku, Gayrimenkul ve Kira Hukuku, İdare ve Vergi Hukuku, Miras Hukuku, Ticaret Hukuku ve İcra-İflas Hukuku başta olmak üzere geniş bir yelpazede avukatlık hizmeti sağlamaktadır."
                }
              },
              {
                "@type": "Question",
                "name": "Erzurum dışındaki çevre illerde ve Türkiye genelinde dava takibi yapıyor musunuz?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet. D&S Hukuk Bürosu merkez olarak Erzurum'da bulunmakla birlikte Doğu Anadolu Bölgesi'ndeki çevre iller başta olmak üzere Türkiye genelinde yetkili adliyelerde dava, duruşma ve icra takiplerini yürütmektedir."
                }
              },
              {
                "@type": "Question",
                "name": "Dava açmadan önce arabuluculuk veya uzlaşma süreci nasıl işlemektedir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "İş Hukuku alacakları, ticari davalar ve kira uyuşmazlıklarında dava şartı zorunlu arabuluculuk bulunmaktadır. D&S Hukuk Bürosu, arabuluculuk müzakerelerinde müvekkillerine profesyonel hukuki temsil desteği sağlar."
                }
              },
              {
                "@type": "Question",
                "name": "Avukatlık ve hukuki danışmanlık vekalet ücreti nasıl belirlenir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Avukatlık ücretleri; davanın niteliği, hukuki mesaisi dikkate alınarak Türkiye Barolar Birliği ve Erzurum Barosu Avukatlık Asgari Ücret Tarifesi esas alınarak belirlenir."
                }
              },
              {
                "@type": "Question",
                "name": "Dava dosyamın ve hukuki sürecimin aşamalarını nasıl takip edebilirim?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Müvekkillerimiz, e-Devlet ve UYAP Vatandaş Portalı üzerinden dosyalarındaki tüm tensip, duruşma zaptı ve kararları anlık inceleyebildikleri gibi; büromuz avukatları her duruşma ve tebligat sonrasında müvekkillerine şeffaf ve düzenli bilgi aktarımı yapmaktadır."
                }
              },
              {
                "@type": "Question",
                "name": "Avukata vekaletname nasıl ve nereden çıkarılır?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vekaletname, Türkiye'deki herhangi bir noterlikten veya yurt dışında bulunuyorsanız Türkiye Cumhuriyeti Konsolosluklarından çıkarılabilmektedir. Kurucu avukatlarımız Av. Onur Demirceylan (Erzurum Barosu Sicil No: 903) ve Av. Muhammed Melih Şahin (Erzurum Barosu Sicil No: 911) bilgilerini notere ileterek vekaletnamenizi düzenletebilirsiniz."
                }
              },
              {
                "@type": "Question",
                "name": "Online veya uzaktan hukuki danışmanlık hizmetiniz var mı?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet. Erzurum dışında veya yurt dışında ikamet eden müvekkillerimiz için Zoom, Google Meet, telefon ve WhatsApp üzerinden randevulu online hukuki danışmanlık hizmeti sunmaktayız."
                }
              }
            ]
          })
        }}
      />

      {/* İletişim Bilgileri ve Harita Bölümü */}
      <MapSection />
    </>
  );
}
