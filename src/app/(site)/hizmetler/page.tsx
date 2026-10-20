import { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/data/servicesData";
import { 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Scale, 
  Briefcase, 
  Users, 
  Home, 
  FileText, 
  Scroll, 
  TreePine, 
  Trophy, 
  Newspaper,
  Phone,
  MessageCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Çalışma Alanlarımız | D&S Hukuk Bürosu Erzurum",
  description: "Erzurum D&S Hukuk Bürosu; Ceza, İş, Gayrimenkul, Aile, Miras ve İdare Hukuku alanlarında uzman avukat kadrosuyla profesyonel dava ve hukuki danışmanlık hizmeti sunar.",
  alternates: {
    canonical: "https://www.dshukukerzurum.com/hizmetler",
  },
  openGraph: {
    title: "Çalışma Alanlarımız | D&S Hukuk Bürosu Erzurum",
    description: "Erzurum D&S Hukuk Bürosu; Ceza, İş, Gayrimenkul, Aile, Miras ve İdare Hukuku alanlarında uzman avukat kadrosuyla profesyonel dava ve hukuki danışmanlık hizmeti sunar.",
    url: "https://www.dshukukerzurum.com/hizmetler",
    siteName: "D&S Hukuk Bürosu",
    locale: "tr_TR",
    type: "website",
  },
};

const getServiceIcon = (iconName: string, className = "w-7 h-7") => {
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

export default function ServicesPage() {
  const services = getAllServices();

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "D&S Hukuk Bürosu Çalışma Alanları",
    "description": "D&S Hukuk Bürosu'nun Erzurum ve Türkiye genelinde yürüttüğü avukatlık ve hukuki danışmanlık faaliyet alanları.",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "LegalService",
        "name": service.title,
        "description": service.shortDescription,
        "url": `https://www.dshukukerzurum.com/hizmetler/${service.slug}`
      }
    }))
  };

  return (
    <>
      {/* Schema.org Yapısal Verisi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Hero Header */}
      <div className="bg-primary pt-36 pb-20 md:pt-44 md:pb-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cfa767_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-6 font-medium">
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3 text-accent" />
            <span className="text-gray-200">Çalışma Alanlarımız</span>
          </nav>

          <span className="text-accent font-semibold tracking-widest text-xs uppercase mb-3 block">
            UZMANLIK & DAVA TAKİBİ
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Çalışma Alanlarımız
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Kurucu avukatlarımız öncülüğünde; Ceza, İş, Gayrimenkul, Aile, İdare ve Vergi Hukuku başta olmak üzere müvekkillerimize sonuç odaklı, şeffaf ve profesyonel avukatlık hizmeti sağlıyoruz.
          </p>
        </div>
      </div>

      {/* Çalışma Alanları Grid Listesi */}
      <div className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-sm border border-gray-100 hover:border-accent/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group p-8"
              >
                <div>
                  {/* İkon Rozeti (Kırpılma olmadan iç yerleşim) */}
                  <div className="w-14 h-14 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-2xs mb-6">
                    {getServiceIcon(service.icon, "w-7 h-7")}
                  </div>

                  {/* Rozet Metni */}
                  <span className="text-[11px] font-semibold tracking-wider text-accent uppercase mb-2 block">
                    {service.badge}
                  </span>

                  {/* Başlık */}
                  <h2 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors mb-3">
                    <Link href={`/hizmetler/${service.slug}`} title={`${service.title} - Dava ve Danışmanlık Bilgileri`}>
                      {service.title}
                    </Link>
                  </h2>

                  {/* Açıklama */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Örnek Dava Konuları (Önizleme) */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-gray-50">
                    {service.cases.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alt Aksiyon Linki */}
                <Link 
                  href={`/hizmetler/${service.slug}`} 
                  title={`${service.title} - Hizmet Detayları ve Dava Konuları`}
                  className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-accent group-hover:text-accent-hover transition-colors"
                >
                  <span>Detaylı İncele & Dava Konuları</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Alt Bilgi & İletişim Çağrısı */}
          <div className="mt-16 bg-white p-8 md:p-12 rounded-sm border border-gray-100 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">HUKUKİ DANIŞMANLIK</span>
              <h3 className="text-2xl font-serif font-bold text-primary">
                Hukuki Uyuşmazlığınız İçin Bize Ulaşın
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed">
                Davanız veya hukuki sorununuzla ilgili dosya incelemesi ve randevu talebi için avukatlarımızla doğrudan iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto shrink-0">
              <a
                href="https://wa.me/905326814345"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp İle Ulaşın</span>
              </a>
              <a
                href="tel:+905326814345"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-secondary text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Hemen Arayın</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
