import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  servicesData, 
  getServiceBySlug, 
  getAllServices 
} from "@/data/servicesData";
import { mockLawyers } from "@/lib/mock-data";
import { 
  ChevronRight, 
  CheckCircle2, 
  Phone, 
  Clock, 
  MapPin, 
  MessageCircle, 
  ArrowRight, 
  ShieldCheck,
  Scale,
  Briefcase,
  Users,
  Home,
  FileText,
  Scroll,
  TreePine,
  Trophy,
  Newspaper,
  HelpCircle
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);
  if (!service) return {};

  const pageTitle = `${service.title} | D&S Hukuk Bürosu Erzurum`;
  const pageDescription = `Erzurum D&S Hukuk Bürosu; ${service.title} alanında dava takibi, hukuki danışmanlık ve arabuluculuk süreçlerinde etkin ve sonuç odaklı temsil sunar.`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `https://www.dshukukerzurum.com/hizmetler/${service.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://www.dshukukerzurum.com/hizmetler/${service.slug}`,
      siteName: "D&S Hukuk Bürosu",
      locale: "tr_TR",
      type: "article",
    },
  };
}

export function generateStaticParams() {
  return getAllServices().map((service) => ({
    slug: service.slug,
  }));
}

const getServiceIcon = (iconName: string, className = "w-6 h-6") => {
  switch (iconName) {
    case 'Home': return <Home className={className} />;
    case 'Scale': return <Scale className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Users': return <Users className={className} />;
    case 'FileText': return <FileText className={className} />;
    case 'Scroll': return <Scroll className={className} />;
    case 'TreePine': return <TreePine className={className} />;
    case 'Trophy': return <Trophy className={className} />;
    case 'Newspaper': return <Newspaper className={className} />;
    default: return <Scale className={className} />;
  }
};

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();

  // Schema.org Structured Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `${service.title} - D&S Hukuk Bürosu`,
    "description": service.shortDescription,
    "url": `https://www.dshukukerzurum.com/hizmetler/${service.slug}`,
    "provider": {
      "@type": "LegalService",
      "name": "D&S Hukuk Bürosu (Demirceylan & Şahin)",
      "telephone": "+90 532 681 43 45",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Muratpaşa Mah. Haşıl Efendi Cad. No:24/10",
        "addressLocality": "Yakutiye",
        "addressRegion": "Erzurum",
        "addressCountry": "TR"
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Erzurum, Türkiye"
    }
  };

  const faqSchema = service.faqs && service.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      {/* Schema.org Yapısal Verileri */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Header (Dark Primary Background to prevent collision with fixed header) */}
      <div className="bg-primary pt-36 pb-20 md:pt-44 md:pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cfa767_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6 font-medium">
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3 text-accent" />
            <Link href="/hizmetler" className="hover:text-accent transition-colors">Çalışma Alanlarımız</Link>
            <ChevronRight className="w-3 h-3 text-accent" />
            <span className="text-gray-200">{service.title}</span>
          </nav>

          <span className="text-accent font-semibold tracking-widest text-xs uppercase mb-3 block">
            {service.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            {service.title}
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      {/* Ana İçerik ve Sağ Kenar Çubuğu */}
      <div className="bg-[#FCFCFC] py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Sol Kolon: Kapsamlı Hukuki İçerik */}
            <div className="lg:col-span-8 space-y-12">

              {/* Genel Bakış & Giriş */}
              <div className="bg-white p-8 md:p-10 rounded-sm border border-gray-100 shadow-xs">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    {getServiceIcon(service.icon, "w-7 h-7")}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">HUKUKİ ÇERÇEVE & YAKLAŞIM</span>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      {service.title} Kapsamında Hukuki Hizmetlerimiz
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base text-justify">
                  {service.overview.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Dava ve Uyuşmazlık Konuları (Cases List) */}
              <div className="bg-white p-8 md:p-10 rounded-sm border border-gray-100 shadow-xs">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">FAALİYET KAPSAMI</span>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      Başlıca Dava ve Danışmanlık Konuları
                    </h2>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-accent/50 hidden sm:block" />
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  D&S Hukuk Bürosu olarak bu alanda mahkemeler, icra daireleri ve arabuluculuk nezdinde takip ettiğimiz başlıca hukuki süreçler aşağıdadır:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.cases.map((caseItem, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 p-3.5 bg-gray-50/80 rounded border border-gray-100 hover:border-accent/30 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-800 font-medium leading-snug">
                        {caseItem}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hukuki Yaklaşım ve Çalışma Prensipleri (Features) */}
              {service.features && service.features.length > 0 && (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">ÇALIŞMA DİSİPLİNİ</span>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      D&S Hukuk Yaklaşımı ve Prensipleri
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {service.features.map((feat, idx) => (
                      <div 
                        key={idx}
                        className="bg-white p-6 rounded-sm border border-gray-100 shadow-xs hover:border-accent/40 transition-all"
                      >
                        <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center text-xs font-bold font-serif mb-4">
                          0{idx + 1}
                        </div>
                        <h3 className="font-serif font-bold text-base text-primary mb-2">
                          {feat.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sıkça Sorulan Sorular (Eğer varsa) */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="bg-white p-8 md:p-10 rounded-sm border border-gray-100 shadow-xs">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                    <HelpCircle className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">MERAK EDİLENLER</span>
                      <h2 className="text-2xl font-serif font-bold text-primary">
                        {service.title} Hakkında Sıkça Sorulan Sorular
                      </h2>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {service.faqs.map((faq, idx) => (
                      <details 
                        key={idx} 
                        className="group bg-gray-50/70 border border-gray-200/80 rounded-sm p-4 open:bg-white open:border-accent/40 transition-all"
                      >
                        <summary className="font-serif font-bold text-sm sm:text-base text-primary cursor-pointer list-none flex justify-between items-center select-none">
                          <span className="pr-4">{faq.question}</span>
                          <span className="text-accent text-lg font-bold transition-transform group-open:rotate-45 shrink-0">+</span>
                        </summary>
                        <div className="mt-3 pt-3 border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Doğrudan İletişim / CTA Kartı */}
              <div className="bg-primary text-white p-8 md:p-10 rounded-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                  <span className="text-accent text-xs uppercase tracking-widest font-semibold block">HUKUKİ YARDIM ALIN</span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                    {service.title} ile İlgili Sorunuz mu Var?
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
                    Uyuşmazlığınızın kapsamını değerlendirmek ve dava açma sürelerini kaçırmamak için avukatlarımızla hemen görüşebilirsiniz.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                  <a
                    href="https://wa.me/905326814345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Randevu</span>
                  </a>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <span>İletişime Geçin</span>
                  </Link>
                </div>
              </div>

            </div>

            {/* Sağ Kolon: Yan Panel (Sticky Sidebar) */}
            <div className="lg:col-span-4 sticky top-28 space-y-8">

              {/* Diğer Çalışma Alanlarımız Menüsü */}
              <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-xs">
                <h3 className="text-lg font-serif font-bold text-primary mb-4 pb-3 border-b border-gray-100 flex items-center justify-between">
                  <span>Tüm Çalışma Alanlarımız</span>
                  <Scale className="w-5 h-5 text-accent" />
                </h3>
                <nav className="space-y-1.5">
                  {allServices.map((item) => {
                    const isCurrent = item.slug === service.slug;
                    return (
                      <Link
                        key={item.slug}
                        href={`/hizmetler/${item.slug}`}
                        title={`${item.title} - Hizmet Detayları`}
                        className={`flex items-center justify-between px-3 py-2.5 rounded text-xs sm:text-sm transition-all ${
                          isCurrent
                            ? "bg-primary text-white font-semibold shadow-xs"
                            : "text-gray-700 hover:bg-gray-50 hover:text-accent font-medium"
                        }`}
                      >
                        <span className="truncate pr-2">{item.title}</span>
                        <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? "text-accent" : "text-gray-400"}`} />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Kurucu Avukatlar Kartı */}
              <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-xs">
                <h3 className="text-lg font-serif font-bold text-primary mb-4 pb-3 border-b border-gray-100">
                  Kurucu Avukatlarımız
                </h3>
                <div className="space-y-4">
                  {mockLawyers.map((lawyer) => (
                    <div key={lawyer.id} className="flex items-center gap-3.5 p-2 rounded hover:bg-gray-50 transition-colors">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-100 shrink-0 border border-gray-200">
                        <Image
                          src={lawyer.image}
                          alt={lawyer.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-serif font-bold text-primary truncate">{lawyer.name}</h4>
                        <p className="text-xs text-accent font-medium">{lawyer.title}</p>
                        <p className="text-[11px] text-gray-500">Baro Sicil: {lawyer.barNumber}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hızlı İletişim & Ofis Bilgileri */}
              <div className="bg-primary text-white p-6 rounded-sm shadow-xs relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-accent text-[11px] font-semibold tracking-wider uppercase block mb-1">
                  ERZURUM HUKUK BÜROSU
                </span>
                <h3 className="text-lg font-serif font-bold text-white mb-4 pb-3 border-b border-white/10">
                  Hukuki Danışmanlık ve İletişim
                </h3>

                <ul className="space-y-3.5 text-xs text-gray-300">
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white block font-medium">Telefon / Randevu:</span>
                      <a href="tel:+905326814345" className="hover:text-accent transition-colors block">
                        +90 532 681 43 45
                      </a>
                      <a href="tel:+905325631073" className="hover:text-accent transition-colors block">
                        +90 532 563 10 73
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white block font-medium">Ofis Adresi:</span>
                      <p className="text-gray-300 leading-snug">
                        Muratpaşa Mah. Haşıl Efendi Cad. No:24/10 Yakutiye / Erzurum
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white block font-medium">Çalışma Saatleri:</span>
                      <p className="text-gray-300">
                        Hafta İçi: 08:30 - 18:00
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href="https://wa.me/905326814345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp İle İletişim</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
